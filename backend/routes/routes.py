# flask-next-chat-login/backend/routes.py

from flask import Flask, jsonify, request
from models.usuario import Usuario, db
from flask_cors import CORS


from routes.routeCadastro import cadastrar_dados_route
from routes.routeLogin import login_dados_route
from routes.routeLogout import logout_dados_route
from routes.routeVerificaUser import verifica_user
from routes.routeAuthenticated import rota_authenticated
from routes.routeChat import chat_autenticado
#from routes.routeVerificaLogado import verifica_logado

class Routes:
    def __init__(self, app):
        self.app = app
        CORS(app)

        # Chame a função para definir a rota de cadastro de dados
        cadastrar_dados_route(app)
        
        # Chame a função para definir a rota de login de dados
        login_dados_route(app)
        
        # Chame a função para definir a rota de logout de dados
        logout_dados_route(app)

        verifica_user(app)

        rota_authenticated(app)

        chat_autenticado(app)

        #verifica_logado(app)