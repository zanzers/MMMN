from flask import Flask, render_template, request, jsonify
from utils.analyzer import analyze

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/api/sentData', methods=['POST'])
def analyzer():


    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    image_file = request.files['image']
    result = analyze(image_file)
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
