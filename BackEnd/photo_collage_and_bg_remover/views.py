from . import db
from flask import Blueprint, request, jsonify
from . import db, ALLOWED_EXTENSIONS_IMAGE, UPLOAD_FOLDER_PRODUCT_IMAGE
from werkzeug.utils import secure_filename
import os

views = Blueprint('views', __name__)


@views.route('/remove_all_files', methods=['GET'])
def home():
    dir = UPLOAD_FOLDER_PRODUCT_IMAGE
    for f in os.listdir(dir):
        os.remove(os.path.join(dir, f))
    return ""


@views.route('/get_image_path_photo_collage', methods=['POST'])
def get_image_path_photo_collage():
    ImageUpload1 = request.files['ImageUpload1']
    ImageUpload2 = request.files['ImageUpload2']
    ImageUpload3 = request.files['ImageUpload3']
    ImageUpload4 = request.files['ImageUpload4']
    if ImageUpload1 and '.' in ImageUpload1.filename and \
            ImageUpload1.filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS_IMAGE:
        product_image_filename = secure_filename(ImageUpload1.filename)
        ImageUpload1.save(os.path.join(
            UPLOAD_FOLDER_PRODUCT_IMAGE, product_image_filename))
    if ImageUpload2 and '.' in ImageUpload2.filename and \
            ImageUpload2.filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS_IMAGE:
        product_image_filename = secure_filename(ImageUpload2.filename)
        ImageUpload2.save(os.path.join(
            UPLOAD_FOLDER_PRODUCT_IMAGE, product_image_filename))
    if ImageUpload3 and '.' in ImageUpload3.filename and \
            ImageUpload3.filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS_IMAGE:
        product_image_filename = secure_filename(ImageUpload3.filename)
        ImageUpload3.save(os.path.join(
            UPLOAD_FOLDER_PRODUCT_IMAGE, product_image_filename))
    if ImageUpload4 and '.' in ImageUpload4.filename and \
            ImageUpload4.filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS_IMAGE:
        product_image_filename = secure_filename(ImageUpload4.filename)
        ImageUpload4.save(os.path.join(
            UPLOAD_FOLDER_PRODUCT_IMAGE, product_image_filename))
    response = jsonify({
        "ImageUpload1": "/static/" + str(request.files['ImageUpload1'].filename),
        "ImageUpload2": "/static/" + str(request.files['ImageUpload2'].filename),
        "ImageUpload3": "/static/" + str(request.files['ImageUpload3'].filename),
        "ImageUpload4": "/static/" + str(request.files['ImageUpload4'].filename)
    })
    return response


@views.route('/get_image_path_remove_bg', methods=['POST'])
def get_image_path_remove_bg():
    ImageBackground = ""
    ImageUpload = request.files['ImageUpload']
    if ImageUpload and '.' in ImageUpload.filename and \
            ImageUpload.filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS_IMAGE:
        product_image_filename = secure_filename(ImageUpload.filename)
        ImageUpload.save(os.path.join(
            UPLOAD_FOLDER_PRODUCT_IMAGE, product_image_filename))
    try:
        if request.files['imgBgimage'] != "":
            ImageBackground = request.files['imgBgimage']
            if ImageBackground and '.' in ImageBackground.filename and \
                    ImageBackground.filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS_IMAGE:
                product_image_filename = secure_filename(ImageBackground.filename)
                ImageBackground.save(os.path.join(
                    UPLOAD_FOLDER_PRODUCT_IMAGE, product_image_filename))
            ImageBackground = "/static/" + str(request.files['imgBgimage'].filename)
    except:
        ""
    response = jsonify({
        "ImageUpload":  "/static/" + str(request.files['ImageUpload'].filename), 
        "ImageBackground": ImageBackground
    })
    return response
