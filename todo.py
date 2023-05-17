from flask import Flask, jsonify , request ,render_template , redirect,url_for
import pymongo
from flask_cors import CORS
from bson import ObjectId
from bson.json_util import dumps
client  = pymongo.MongoClient("mongodb+srv://dbjawad:db652923@cluster0.wagjjnz.mongodb.net/?retryWrites=true&w=majority")
db = client.task
user=db['task']
app = Flask(__name__)
cors = CORS(app)


@app.route('/form', methods=['POST', 'GET'])
def add_data():
    if request.method=='POST':
        user.insert_one(request.get_json('data'))

    return render_template('form.html')

@app.route('/user', methods=['POST','GET'])
def show_data():
    data= user.find({})
    # print(data)
    return render_template('user.html',data=(data))
    
@app.route('/edit', methods=["GET","POST"])
def edit_data():
    if request.method=="GET":
       
        return render_template('edit.html')

@app.route("/view" , methods=["GET"])
def view_data():
    data= user.find({})
    resp = dumps(data)
    # print(resp)
    return resp





@app.route("/object")
def object():
    return render_template('object.html')

# @app.route('/todo' , methods=['POST','GET','DELETE','PUT'])
# def todo_list():
#     if request.method=='POST':
#         create_task= request.form.get('task')
#         user.insert_one({'task':create_task})
#         return redirect(url_for('todo_list'))
#     if request.method=='GET':
#         task=user.find({})
#         return render_template('todo.html',task=list(task))
#     # if request.method=='DELETE':
#     #     task = user.delete_one({"_id":ObjectId('6419ebd3f68f9753bef8e563')})
#     #     return render_template('todo.html',task=task)
#     # elif request.method=='PUT':
#     #     task = user.update_one({})
#     #     return render_template('todo.html', task= list(task))
#     # return render_template('todo.html')

# @app.route('/delete_todo/<id_>')
# def delete_task(id_):
#     user.delete_one({"_id":ObjectId(id_)})
#     return redirect(url_for('todo_list'))


# @app.route('/update_todo/<id__>')
# def update_task(id__):
#     user.update_one({"_id":ObjectId(id__)},
#                         {"$set":{"task":request.form.get('task')} })
#     return redirect(url_for('todo_list'))


if __name__ == '__main__':
    
    app.run(debug=True)

