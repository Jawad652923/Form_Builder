from flask import Flask, jsonify, request, render_template
import pymongo
import json
from bson.json_util import dumps
from bson.objectid import ObjectId
from classes.models import Data 
from classes.models import originalData
app=Flask(__name__)

client = pymongo.MongoClient("mongodb+srv://dbjawad:db652923@cluster0.wagjjnz.mongodb.net/?retryWrites=true&w=majority")
db = client.task
formsdb = db['task']
db=client.fields
fieldsdb=db['fields']


@app.route("/create_form",methods=['GET','POST'])
def createForm():
    if request.method == 'POST':
        Data.saveData()
        originalData.perm_Data()
        return jsonify({"success": True})
    return render_template('create_form.html')

@app.route("/view_form",methods=['GET'])
def viewForm():
    data = Data.findData()
    # resp=list(data)
    # print(resp)
    # temp=formsdb.find().sort('_id',pymongo.DESCENDING).limit(1)[0]['_id']
    # print(temp)
    # temp=formsdb.find().
    return render_template('view_form.html',data=(data))

@app.route("/edit_form",methods=['GET'])
def editForm():
    if request.method=='GET':
        query= request.args.get('id')
        # print(query)
        data=Data.findData()
        return render_template('edit_form.html', data=data,query=query)


@app.route('/update_form/<__id>', methods=['PUT'])
def update_form(__id):
    Data(id).updateData(__id)
    originalData(id).check_Data(__id)
    return jsonify({'message': 'Form updated successfully'})

@app.route("/json_Data", methods=["GET"])
def json_data():
    data = Data.findData()
    resp = dumps(data)
    # print(res)
    return resp

if __name__ == '__main__':
    app.run(debug=True)


