from flask import Blueprint, current_app
from flask_restx import Api, Resource, fields
from server import model
import werkzeug

bp = Blueprint("api", __name__)
api = Api(bp, title="", description="")

grade_parser = api.parser()
grade_parser.add_argument("title", type=str, required=True, location="json")
grade_parser.add_argument("sub_grades",  type=str, required=True, location="json")

user_parser = api.parser()
user_parser.add_argument("username", type=str, required=True, location="json")
user_parser.add_argument("email", type=str, required=True, location="json")
user_parser.add_argument("password", type=str, required=True, location="json")

topic_parser = api.parser()
topic_parser.add_argument("subject", type=str, required=True, location="form")
topic_parser.add_argument("text", type=str, required=True, location="form")
topic_parser.add_argument("file", type=werkzeug.datastructures.FileStorage, location="files")
topic_parser.add_argument("created_by", type=str, required=True, location="form")
# topic_parser.add_argument("file", type=werkzeug.datastructures.FileStorage, location="files")

entry_parser = api.parser()
entry_parser.add_argument("subject", type=str, required=True, location="json")
entry_parser.add_argument("text", type=str, required=True, location="json")
entry_parser.add_argument("file", type=werkzeug.datastructures.FileStorage, location="files")
entry_parser.add_argument("created_by", type=str, required=True, location="json")
entry_parser.add_argument("parent_id", type=str, required=False, location="json")
# entry_parser.add_argument("file", type=werkzeug.datastructures.FileStorage, location="files")

def get_connstr(dbname):
    return (current_app.config["DB"]["CONNSTR"] +
            current_app.config["DB"][dbname])

def init_admin():
    return model.Admin(get_connstr("EINSOPH"), current_app.config["FILESTORAGE"])

def init_sephira(sephira_id):
    return model.Sephira(
        get_connstr("KETHER"    if sephira_id == 1 else
                    "BINAH"     if sephira_id == 2 else
                    "HOKHMAH"   if sephira_id == 3 else
                    "DAAT"      if sephira_id == 4 else
                    "GEBURAH"   if sephira_id == 5 else
                    "HESED"     if sephira_id == 6 else
                    "TIPHERETH" if sephira_id == 7 else
                    "HOD"       if sephira_id == 8 else
                    "NETZACH"   if sephira_id == 9 else
                    "YESOD"     if sephira_id == 10 else
                    "MALKUTH"   if sephira_id == 11 else
                    None),
        current_app.config["FILESTORAGE"])

@api.route("/0/grades/")
class ListGrades(Resource):
    def get(self):
        return init_admin().list_grades(), 200

    @api.doc(parser=grade_parser)
    def post(self):
        return (init_admin()
                .create_grade(grade_parser.parse_args()))

@api.route("/0/users/")
class ListUsers(Resource):
    def get(self):
        return init_admin().list_users()

    @api.doc(parser=user_parser)
    def post(self):
        return (init_admin()
                .create_user(user_parser.parse_args()))

@api.route("/0/users/<string:user_id>")
class Users(Resource):
    def get(self, user_id):
        return init_admin().get_user(user_id)

    def delete(self, user_id):
        return init_admin().delete_user(user_id)

    @api.doc(parser=user_parser)
    def put(self, user_id):
        return (init_admin()
                .update_user(user_parser.parse_args(), user_id))

@api.route("/<int:sephira_id>/")
class ListTopics(Resource):
    def get(self, sephira_id):
        return init_sephira(sephira_id).list_topics()

    @api.doc(parser=topic_parser)
    def post(self, sephira_id):
        return (init_sephira(sephira_id)
                .create_topic(topic_parser.parse_args()))


@api.route("/<int:sephira_id>/<string:topic_id>")
class Topics(Resource):
    def get(self, sephira_id, topic_id):
        return init_sephira(sephira_id).get_topic(topic_id)

    def delete(self, sephira_id, topic_id):
        return init_sephira(sephira_id).delete_topic(topic_id)

    def put(self, sephira_id, topic_id):
        return (init_sephira(sephira_id)
                .update_topic(topic_parser.parse_args(), topic_id))


@api.route("/int:sephira_id>/<string:topic_id>/")
class ListEntries(Resource):
    def get(self, sephira_id, topic_id):
        return init_sephira(sephira_id).list_entries(topic_id)

    def post(self, sephira_id, topic_id):
        entry = entry_parser.parse_args()
        entry["topic_id"] = topic_id
        return (init_sephira(sephira_id).create_entry(entry))

@api.route("/int:sephira_id>/<string:topic_id>/<string:entry_id>")
class Entries(Resource):
    def get(self, sephira_id, entry_id):
        return init_sephira(sephira_id).get_entry(entry_id)

    def delete(self, sephira_id, entry_id):
        return init_sephira(sephira_id).delete_entry(entry_id)

    def put(self, sephira_id, entry_id):
        return (init_sephira(sephira_id)
                .update_entry(entry_parser.parse_args(), entry_id))
