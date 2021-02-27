import dataset
import datetime
import uuid
import os

# utility functions

def create_filename(file):
    return str(uuid.uuid4())[:14] + file.filename

def save_file(data, filestorage_dir):
    if 'file' in data and data['file']:
        filename = create_filename(data['file'])
        data['file'].save(os.path.join(filestorage_dir, filename))
        data['file'] = filename
    return data

def format_date(dttm):
    return dttm.strftime("%m/%d/%Y, %H:%M:%S")

def format_output(data):
    if data['create_dttm']:
        data['create_dttm'] = format_date(data['create_dttm'])
    if data['update_dttm']:
        data['update_dttm'] = format_date(data['update_dttm'])
    return data

def create(func):
    def wrapper(*args, **kwargs):
        args[1]['create_dttm'] = datetime.datetime.now()
        args[1]['update_dttm'] = datetime.datetime.now()
        return func(*args, **kwargs)
    return wrapper

def update(func):
    def wrapper(*args, **kwargs):
        args[1]['update_dttm'] = datetime.datetime.now()
        return func(*args, **kwargs)
    return wrapper

def read_one(func):
    def wrapper(*args, **kwargs):
        res = func(*args, **kwargs)
        return format_output(res)
    return wrapper

def read_many(func):
    def wrapper(*args, **kwargs):
        res = func(*args, **kwargs)
        return [format_output(x) for x in res]
    return wrapper

def delete(func):
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper


class Admin():
    def __init__(self, connstr, filestorage_dir):
        self.db = dataset.connect(connstr)
        self.filestore = filestorage_dir

    def get_grades_table(self):
        return self.db['grades']

    def get_users_table(self):
        return self.db['users']

    @read_many
    def list_grades(self):
        return self.get_grades_table()

    @create
    def create_grade(self, grade):
        return self.get_grades_table().insert(grade)

    @read_many
    def list_users(self):
        return self.get_users_table()

    @create
    def create_user(self, user):
        return self.get_users_table().insert(user)

    @read_one
    def get_user(self, user_id):
        return self.get_users_table().find_one(id=user_id)

    @delete
    def delete_user(self, user_id):
        return self.get_users_table().delete(id=user_id)

    @update
    def update_user(self, userdata, user_id):
        return self.get_users_table().update(userdata, ['id'])


class Sephira():
    def __init__(self, connstr, filestorage_dir):
        self.db = dataset.connect(connstr)
        self.filestore = filestorage_dir

    def get_topics_table(self):
        return self.db['topics']

    def get_entries_table(self):
        return self.db['entries']

    @read_many
    def list_topics(self):
        return self.get_topics_table()

    @create
    def create_topic(self, topic):
        save_file(topic, self.filestore)
        return self.get_topics_table().insert(topic)

    @read_one
    def get_topic(self, topic_id):
        return self.get_topics_table().find_one(id=topic_id)

    @delete
    def delete_topic(self, topic_id):
        return self.get_topics_table().delete(id=topic_id)

    @update
    def update_topic(self, topicdata, topic_id):
        return self.get_topics_table().update(topicdata, ['id'])

    @read_many
    def list_entries(self, topic_id):
        return self.get_entries_table().find(topic_id=topic_id)

    @create
    def create_entry(self, entry):
        save_file(entry, self.filestore)
        return self.get_entries_table().insert(entry)

    @read_one
    def get_entry(self, entry_id):
        return self.get_entries_table().find_one(id=entry_id)

    @delete
    def delete_entry(self, entry_id):
        return self.get_entries_table().delete(id=entry_id)

    @update
    def update_entry(self, entrydata, entry_id):
        return self.get_entries_table().update(entrydata, ['id'])
