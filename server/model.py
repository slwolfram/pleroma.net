import dataset

class Admin():
    def __init__(self, connstr):
        self.db = dataset.connect(connstr)

    def get_grades_table(self):
        return self.db['grades']

    def get_users_table(self):
        return self.db['users']

    def list_grades(self):
        return list(self.get_grades_table())

    def create_grade(self, grade):
        return self.get_grades_table().insert(grade)

    def list_users(self):
        return list(self.get_users_table())

    def create_user(self, user):
        return self.get_users_table().insert(user)

    def get_user(self, user_id):
        return self.get_users_table().find_one(id=user_id)

    def delete_user(self, user_id):
        return self.get_users_table().delete(id=user_id)

    def update_user(self, userdata, user_id):
        return self.get_users_table().update(userdata, ['id'])

class Sephira():
    def __init__(self, connstr):
        self.db = dataset.connect(connstr)

    def get_topics_table(self):
        return self.db['topics']

    def get_entries_table(self):
        return self.db['entries']

    def list_topics(self):
        return list(self.get_topics_table())

    def create_topic(self, topic):
        return self.get_topics_table().insert(topic)

    def get_topic(self, topic_id):
        return self.get_topics_table().find_one(id=topic_id)

    def delete_topic(self, topic_id):
        return self.get_topics_table().delete(id=topic_id)

    def update_topic(self, topicdata, topic_id):
        return self.get_topics_table().update(topicdata, ['id'])

    def list_entries(self, topic_id):
        return list(self.get_entries_table().find(topic_id=topic_id))

    def create_entry(self, entry):
        if 'image_file' in entry:
            image_file = entry['image_file']
            del entry['image_file']
        return self.get_entries_table().insert(entry)

    def get_entry(self, entry_id):
        return self.get_entries_table().find_one(id=entry_id)

    def delete_entry(self, entry_id):
        return self.get_entries_table().delete(id=entry_id)

    def update_entry(self, entrydata, entry_id):
        return self.get_entries_table().update(entrydata, ['id'])
