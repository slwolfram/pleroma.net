import os
from flask import Flask as BaseFlask, Config as BaseConfig, send_from_directory
from flask_cors import CORS
import edn_format
from server.api import bp
import collections

def convert_edn_keys(config_dict):
    new_dict = {}
    for k in config_dict.keys():
        if str(k)[0] == ':':
            k2 = str(k)[1:]
            new_dict[k2] = config_dict[k]
            if isinstance(new_dict[k2], collections.Mapping):
                new_dict[k2] = convert_edn_keys(new_dict[k2])
    return new_dict

class Config(BaseConfig):
    def from_edn(self, fp):
        with open(fp, 'r') as cf:
            c = convert_edn_keys(edn_format.loads(cf.read()))
        for k in c.keys():
            self[k] = c[k]
        print(self)

class Flask(BaseFlask):
    def make_config(self, instance_relative=False):
        return Config((self.instance_path
                       if instance_relative else
                       self.root_path),
                      self.default_config)

def create_app(config_fp):
    app = Flask(__name__)
    app.config.from_edn(config_fp)
    CORS(app)
    app.register_blueprint(bp, url_prefix='/api')

    @app.route('/<path:resource>')
    def public_resource(resource):
        return send_from_directory(app.config['WEBROOT'], resource)

    @app.route('/')
    def index():
        print('serving index')
        return public_resource('index.html')

    return app
