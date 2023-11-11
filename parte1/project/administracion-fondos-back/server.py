from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/traer-fondos', methods=['GET'])
def get_fondos():

    fondos = {
    "products":[
        {
            "id":1001,
            "title":"FVP BTG Pactual Recaudadora",
            "category":"FVP",
            "opening":75000
        },
        {
            "id":1002,
            "title":"FVP BTG Pactual Ecopetrol",
            "category":"FVP",
            "opening":125000
        },
        {
            "id":1003,
            "title":"Deudaprivada",
            "category":"FIC",
            "opening":50000
        },
        {
            "id":1004,
            "title":"Fondo Acciones",
            "category":"FIC",
            "opening":250000
        },
        {
            "id":1005,
            "title":"FVP BTG Pactual Dinamica",
            "category":"FVP",
            "opening":100000
        }       
        ]
    }

    return jsonify(fondos)

###############################################################################3

transactions = []
@app.route('/transactions', methods=['GET'])
def get_transactions():
    return jsonify(transactions)

@app.route('/transactions', methods=['PUT'])
def modify_transactions():
    data = request.get_json()

    if request.method == 'PUT':
        transactions.insert(0, data)

    return jsonify({"message": "Transaction modified successfully"})

###############################################################################3

portfolio = []
@app.route('/portfolio', methods=['GET'])
def get_portfolio():
    return jsonify(portfolio)

@app.route('/portfolio', methods=['PUT', 'DELETE'])
def modify_portfolio():
    data = request.get_json()

    if request.method == 'PUT':
        print(data)
        portfolio.insert(0, data)
    elif request.method == 'DELETE':
        print(data)
        portfolio.remove(data)
        

    

    return jsonify({"message": "Portfolio modified successfully"})

###############################################################################3

if __name__ == '__main__':
    app.run(debug=True)