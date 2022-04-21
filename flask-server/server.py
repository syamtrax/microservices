from flask import Flask, render_template
from flask import jsonify
import requests as r
import json

app = Flask(__name__)

@app.route("/products")
def lists():
    res = r.get('http://localhost:5006/products')
    return jsonify(res.json())

if __name__ == '__main__':
    app.run(debug=True)