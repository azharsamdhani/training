import imp
from flask import Flask,request
import json
# from backend.magic.magicSquare import MagicSquare
from magic.magicSquare import newMagicSquare

app = Flask(__name__)

@app.route('/magicsquare', methods=['GET'])
def method_name():
    try:
        # page = newMagicSquare.mS()
        # print(page)
        # res = {"message":"im from backend"}
        return {"message":["member1","member2"]}
    except Exception as error:
        print("error :", error)
    
