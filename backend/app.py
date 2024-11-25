import uuid

from flask import Flask, request, jsonify, send_file
from modelscope.outputs import OutputKeys
from werkzeug.utils import secure_filename
from io import BytesIO
import os
import cv2
import numpy as np
from flask_cors import CORS
from modelscope.pipelines import pipeline
from modelscope.utils.constant import Tasks
from modelscope.utils.cv.image_utils import draw_face_detection_no_lm_result
from modelscope.preprocessors.image import LoadImage

app = Flask(__name__)
CORS(app)

# 上传文件的保存路径
UPLOAD_FOLDER = "./upload_images"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

# 初始化人脸检测模型
mog_face_detection_func = pipeline(
    Tasks.face_detection, "damo/cv_resnet101_face-detection_cvpr22papermogface"
)

# 初始化人像修复模型
portrait_enhancement = pipeline(
    Tasks.image_portrait_enhancement,
    model="damo/cv_gpen_image-portrait-enhancement-hires",
)

# 初始化人体美肤模型
skin_retouching = pipeline(Tasks.skin_retouching, model="damo/cv_unet_skin-retouching")

# 初始化人脸表情识别模型
fer = pipeline(
    Tasks.facial_expression_recognition,
    "damo/cv_vgg19_facial-expression-recognition_fer",
)

# 初始化人脸活体检测模型
face_liveness_rgb = pipeline(Tasks.face_liveness, "damo/cv_manual_face-liveness_flrgb")


@app.route("/face-detection", methods=["POST"])
def face_detection():
    try:
        if "file" not in request.files:
            return jsonify({"message": "未检测到文件"}), 400

        file = request.files["file"]
        if file.filename == "":
            return jsonify({"message": "文件名为空"}), 400

        # 保存上传文件
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config["UPLOAD_FOLDER"], filename)
        file.save(file_path)
        print(f"File saved to: {file_path}")

        # 检查文件是否保存成功
        if not os.path.exists(file_path):
            return jsonify({"message": "文件保存失败，请重试"}), 500

        # 调用人脸检测模型
        raw_result = mog_face_detection_func(file_path)
        print("Face detection output:", raw_result)

        # 使用 OpenCV 加载图像
        src_img = LoadImage.convert_to_ndarray(file_path)
        src_img = cv2.cvtColor(np.asarray(src_img), cv2.COLOR_RGB2BGR)
        cv2.imwrite(
            r"C:\WJMCNN\FaceDetectionInHighExposure\upload_images\src_img.jpg", src_img
        )
        # 绘制人脸检测结果
        dst_img = draw_face_detection_no_lm_result(
            r"C:\WJMCNN\FaceDetectionInHighExposure\upload_images\src_img.jpg",
            raw_result,
        )
        # 转换为字节流
        _, buffer = cv2.imencode(".jpg", dst_img)
        result_img_bytes = BytesIO(buffer)

        # 删除临时文件
        os.remove(file_path)

        # 返回处理后的图像
        return send_file(result_img_bytes, mimetype="image/jpeg")

    except Exception as e:
        print(f"Error occurred: {e}")
        return jsonify({"message": "检测过程中发生错误"}), 500


@app.route("/face-repair", methods=["POST"])
def face_repair():
    try:
        if "file" not in request.files:
            return jsonify({"message": "未检测到文件"}), 400

        file = request.files["file"]
        if file.filename == "":
            return jsonify({"message": "文件名为空"}), 400

        # 保存上传文件
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config["UPLOAD_FOLDER"], filename)
        file.save(file_path)

        # 调用人像修复模型
        result = portrait_enhancement(file_path)

        # 检查模型输出
        output_img = result.get(OutputKeys.OUTPUT_IMG)
        if output_img is None or output_img.size == 0:
            return jsonify({"message": "模型处理失败，未生成有效图像"}), 500

        print("here")
        # 保存处理后的图像
        output_filename = f"result_{filename}.png"
        output_path = os.path.join(app.config["UPLOAD_FOLDER"], output_filename)
        cv2.imwrite(output_path, output_img)

        # 转换为字节流
        _, buffer = cv2.imencode(".png", output_img)
        result_img_bytes = BytesIO(buffer)

        # 清理临时文件
        os.remove(file_path)
        os.remove(output_path)

        # 返回处理后的图像
        return send_file(result_img_bytes, mimetype="image/png")

    except Exception as e:
        print(f"Error occurred: {e}")
        return jsonify({"message": "检测过程中发生错误"}), 500


@app.route("/skin-enhance", methods=["POST"])
def skin_enhance():
    try:
        if "file" not in request.files:
            return jsonify({"message": "未检测到文件"}), 400

        file = request.files["file"]
        if file.filename == "":
            return jsonify({"message": "文件名为空"}), 400

        # 保存上传文件
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config["UPLOAD_FOLDER"], filename)
        file.save(file_path)

        # 调用人像修复模型
        result = skin_retouching(file_path)

        # 检查模型输出
        output_img = result.get(OutputKeys.OUTPUT_IMG)
        if output_img is None or output_img.size == 0:
            return jsonify({"message": "模型处理失败，未生成有效图像"}), 500

        print("here")
        # 保存处理后的图像
        output_filename = f"result_{filename}.png"
        output_path = os.path.join(app.config["UPLOAD_FOLDER"], output_filename)
        cv2.imwrite(output_path, output_img)

        # 转换为字节流
        _, buffer = cv2.imencode(".png", output_img)
        result_img_bytes = BytesIO(buffer)

        # 清理临时文件
        os.remove(file_path)
        os.remove(output_path)

        # 返回处理后的图像
        return send_file(result_img_bytes, mimetype="image/png")

    except Exception as e:
        print(f"Error occurred: {e}")
        return jsonify({"message": "检测过程中发生错误"}), 500


@app.route("/face-expression", methods=["POST"])
def face_expression():
    try:
        if "file" not in request.files:
            return jsonify({"message": "未检测到文件"}), 400

        file = request.files["file"]
        if file.filename == "":
            return jsonify({"message": "文件名为空"}), 400

        # 保存上传的文件
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config["UPLOAD_FOLDER"], filename)
        file.save(file_path)
        print(f"File saved to: {file_path}")

        # 检查文件是否保存成功
        if not os.path.exists(file_path):
            return jsonify({"message": "文件保存失败，请重试"}), 500

        # 调用表情识别模型
        ret = fer(file_path)
        scores = np.array(ret["scores"])
        label_idx = scores.argmax()
        label = ret["labels"][label_idx]

        # 删除临时文件
        os.remove(file_path)

        return jsonify(
            {"message": "表情识别成功", "expression": label, "scores": ret["scores"]}
        )

    except Exception as e:
        print(f"Error occurred: {e}")
        return jsonify({"message": "表情识别过程中发生错误"}), 500


@app.route("/face-liveness", methods=["POST"])
def face_liveness():
    try:
        if "file" not in request.files:
            return jsonify({"message": "未检测到文件"}), 400

        file = request.files["file"]
        if file.filename == "":
            return jsonify({"message": "文件名为空"}), 400

        # 保存上传的文件
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config["UPLOAD_FOLDER"], filename)
        file.save(file_path)

        # 调用活体检测模型
        result = face_liveness_rgb(file_path)

        # 检查结果
        if not result or "scores" not in result or "boxes" not in result:
            return jsonify({"message": "模型未返回有效结果"}), 500

        # 返回检测结果
        liveness_score = result["scores"][0]
        bounding_box = result["boxes"][0]
        return (
            jsonify(
                {
                    "message": "检测完成",
                    "liveness_score": liveness_score,
                    "bounding_box": bounding_box,
                }
            ),
            200,
        )

    except Exception as e:
        print(f"Error occurred: {e}")
        return jsonify({"message": "检测过程中发生错误"}), 500


@app.route('/feedback', methods=['POST'])
def submit_feedback():
    data = request.get_json()
    feedback = data.get('feedback')
    rating = data.get('rating')

    # 简单验证
    if not feedback or rating is None:
        return jsonify({'message': '反馈和评分都是必需的'}), 400

    # 存储反馈
    feedbacks.append({'feedback': feedback, 'rating': rating})
    print('收到反馈:', {'feedback': feedback, 'rating': rating})

    return jsonify({'message': '反馈提交成功'}), 200


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=6006)
