from flask import Flask, jsonify
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

if __name__ == '__main__':
    app.run(debug=True)