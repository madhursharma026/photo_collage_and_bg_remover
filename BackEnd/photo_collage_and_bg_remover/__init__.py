from os import path
import os
from flask_cors import CORS
from flask import Flask
from flask_login import LoginManager
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

UPLOAD_FOLDER_PRODUCT_IMAGE = os.path.join(os.getcwd(), 'D:/Project Files/photo_collage_and_bg_remover/static')
ALLOWED_EXTENSIONS_IMAGE = {'png', 'jpg', 'jpeg'}

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'secretkey'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    
    CORS(app)
    db.init_app(app)

    from .views import views

    app.register_blueprint(views, url_prefix='/')

    login_manager = LoginManager()
    login_manager.login_view = 'views.home'
    login_manager.init_app(app)

    return app

