# An  Approach to Fake Media Detection: Integrating Deepfake Analysis, Image Forensics, and Contextual Verification

This project is a thesis-based initiative to develop a **unified framework** combining:
- Image Forensics
- Frequency Domain Analysis
- Deepfake Detection

The goal is to create a system that improves over time, learning from user-submitted data to enhance detection of **tampered** and **AI-generated images**.

---

## 🧠 Framework: `MMMN`

- Built as a modular Python package
- Provides functions for image analysis using:
  - Metadata extraction
  - Frequency (FFT, DCT) features
  - Deep learning detection
- Can be reused in CLI apps, Flask, or notebooks

---

## 🌐 WebApp Interface (Flask)

- Frontend for uploading and analyzing images
- Stores results and feedback into a MySQL database
- Supports long-term retraining by collecting labeled image samples

---

## 📁 Folder Structure

```plaintext
thesis_project/
├── MMMN/            # Core detection framework
├── webapp/          # Flask-based web interface
├── requirements.txt
└── README.md
