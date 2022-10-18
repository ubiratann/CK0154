from ast import Raise
import json

from http import HTTPStatus
from flask import Blueprint, Response, request
from flask_cors import CORS


blueprint = Blueprint("object", __name__)

CORS(blueprint)

@blueprint.get("/")
def get():
    ...

@blueprint.get("/<string:id>")
def getById():
    ...

@blueprint.post("/<string:id>")
def post():
    ...

@blueprint.put("/<string:id>")
def put():
    ...

@blueprint.patch("/reload/<string:id>")
def patch():
    ...

