from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import tensorflow as tf
from keras.models import load_model
from PIL import Image
import io
import os

# Initialize FastAPI app
app = FastAPI()

# Allow requests from your React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the trained model once
MODEL_PATH = "Flower_Recog_Model.h5"  # or .keras
model = load_model(MODEL_PATH)

# Flower class names (same order as training dataset)
flower_names = ['daisy', 'dandelion', 'rose', 'sunflower', 'tulip']  # <-- update this list if different

# Base route
@app.get("/")
async def root():
    return {"message": "🌼 Flower Recognition API is running!"}


# Predict endpoint
@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        # Read uploaded image
        contents = await file.read()
        image = Image.open(io.BytesIO(contents)).convert("RGB")

        # Preprocess image (same as training)
        img_size = 180
        image = image.resize((img_size, img_size))
        img_array = tf.keras.utils.img_to_array(image)
        img_array = tf.expand_dims(img_array, 0)  # Add batch dimension

        # Make prediction
        predictions = model.predict(img_array)
        result = tf.nn.softmax(predictions[0])
        class_idx = np.argmax(result)
        confidence = float(np.max(result) * 100)

        return {
            "flower": flower_names[class_idx],
            "confidence": f"{confidence:.2f}%",
        }

    except Exception as e:
        return {"error": str(e)}
