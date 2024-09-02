from flask import Flask
from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")
print("client :",client)

db=client.al

app = Flask(__name__)

@app.route("/")
def home():
    post = {
        "author": "Mike",
        "text": "My first blog post!",
        "tags": ["mongodb", "python", "pymongo"],
        # "date": datetime.datetime.now(tz=datetime.timezone.utc),
    }
    db.posts.insert_one(post)
    return {"status":1,"message":"home!","payload":{}} 

# @app.route("/about")
# def home():
#     return {"status":1,"message":"home!","payload":{}}

# @app.route("/profile/<profileId>")
# def home():
#     return {"status":1,"message":"Profile!","payload":{"profileId":profileId}}

# @app.route("/product/<categoryId>/<productId>")
# def profile(categoryId, productId):
#     return{
#         "status":1,
#         "message":"Profile !",
#         "payload":{"categoryId":categoryId,"productId":productId}
#     }


@app.route("/services")
def services():
    return render_template("services.html", title="services")

