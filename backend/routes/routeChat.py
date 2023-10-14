# flask-next-chat-login/backend/routes/routeChat.py

from flask import Flask, request, jsonify, session
from utils.auth import is_logged_in, logout_user  # Importe sua função de verificação de autenticação.
from models.usuario import Usuario

# Decorador personalizado para verificar a autenticação.
def authenticated_route(route_function):
    def wrapper(*args, **kwargs):
        if is_logged_in():
            return route_function(*args, **kwargs)
        else:
            return jsonify({'message': 'Acesso não autorizado'}), 401  # Responda com um código de status não autorizado.
    return wrapper

def chat_autenticado(app):
    @app.route('/chat/<int:user_id>', methods=['GET'])
    @authenticated_route
    def rota_chat(user_id):

        user = Usuario.query.get(user_id)
        if user:
            return jsonify({'id': user.id, 'name': user.nome}), 200
        else:
            return jsonify({'message': 'Usuário não encontrado'}), 404
        

        # A partir deste ponto, você pode ter certeza de que o usuário está autenticado.
        return jsonify({'message': 'Você está autenticado e pode acessar esta rota.'})
