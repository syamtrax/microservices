from flask import Flask, render_template
from flask import jsonify
import json

app = Flask(__name__)

with open('./data.json', 'r') as productList:
   data = json.load(productList)

@app.route("/products")
def lists():
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)