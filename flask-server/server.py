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
    except Exception as e:
        print(e)
        return jsonify({'message': 'error'})
    return redirect('http://localhost:3000/checkoutsuccess')


@app.route("/search" , methods=['GET'])
def search():
    # ambil parameter dari request
    search_term = request.args.get('name')
    # ambil data dari service 6 (dataserver)
    data = r.get(f'http://localhost:5003/search?name={search_term}').json()

    return jsonify(data)

@app.route("/rec" , methods=['GET'])
def rec():
    data = r.get('http://localhost:5002/recommendation').json()

    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)