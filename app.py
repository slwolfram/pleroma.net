from server import create_app

if __name__ == '__main__':
    app = create_app('config.edn')
    app.run(debug=app.config['ENV'] == 'DEV',
            host=app.config['HOST'],
            port=app.config['PORT'])
