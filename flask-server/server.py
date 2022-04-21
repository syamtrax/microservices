from flask import Flask, request,redirect
from flask import jsonify
import requests as r
import json

app = Flask(__name__)

@app.route("/products")
def lists():
    res = r.get('http://localhost:5006/products')
    return jsonify(res.json())

@app.route("/checkout", methods=['POST'])
def checkout():
    cart = request.form.get('cart')
    print(cart)
    try:
        r.post('http://localhost:5004', data={'cart': cart})
    except:
        return jsonify({'message': 'error'})
    return redirect('htttp://localhost:3000/list')

if __name__ == '__main__':
    app.run(debug=True)