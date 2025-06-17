

def analyze(image_file):
   
    print("Hello by the analyzer")
    filename = image_file.filename

    # For now, mock result based on filename
    if "tamper" in filename.lower():
        return "Tampered"
    elif "ai" in filename.lower():
        return "AI Generated"
    else:
        return "Original"
