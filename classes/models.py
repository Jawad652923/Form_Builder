from flask import Flask,request
from pymongo import MongoClient
from bson.objectid import ObjectId
from bson.json_util import dumps, loads
app=Flask(__name__)
client = MongoClient("mongodb+srv://dbjawad:db652923@cluster0.wagjjnz.mongodb.net/?retryWrites=true&w=majority")
db = client.task
formsdb = db['task']
db=client.fields
fieldsdb=db['fields']
# fieldsdb.insert_one({'data':'sfsadf'})

class Data:
   
    def __init__(self, data):
        self.data = data
    @staticmethod
    def saveData():
        data=request.get_json()
        formsdb.insert_one(data)
    @staticmethod
    def findData():
        data = formsdb.find({})
        return data
    
    @staticmethod
    def updateData(id):
        data=request.json
        # print(data)
        updated=formsdb.update_one({'_id': ObjectId(id)}, {'$set': {'data': data['data']}})
        
        return updated
        
class originalData:
    def __init__(self,data):
        self.data=data
    @staticmethod
    def perm_Data():
        data=request.get_json()
        object_id=ObjectId(data['_id'])
        # print(object_id)
        # print(data)
        labels=[]
        for fields in data['data']:
            print(fields['label'])
            labels.append(fields['label'])
        # print(labels)
        fieldsdb.insert_one({'formId':object_id,'labels':labels})
        
    


    @staticmethod
    def check_Data(id):
        forms_ObjectId=formsdb.find_one({'_id':ObjectId(id)})
        fields_ObjectId=fieldsdb.find_one({'formId':ObjectId(id)})
        # print(fields_ObjectId)
        data=forms_ObjectId["data"]
        array=[]
        for fields in data:
            # print(fields['label'])
            array.append(fields['label'])

        # print(array)
        array1=fields_ObjectId["labels"]
        # print(array1)
        mergeList = array1+array
        uniqueList=list(set(mergeList))
        print(uniqueList)
        
        fieldsdb.update_one({'formId':ObjectId(id)},{'$set':{'labels':uniqueList}})

