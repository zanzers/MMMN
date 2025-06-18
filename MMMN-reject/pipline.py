import cv2
from tools.helper import show_img

class MMMN_analyzer:
    def __init__(self, img):

        self.img = img
        self.gray = None
        self.data_points = {}

        
        if not self.img:
            raise ValueError("No image data Found!")
        

    def preprocess(self):
        
        self.gray = cv2.cvtColor(self.img, cv2.COLOR_BGR2GRAY)
        show_img(self.gray)
        return self.gray

    def run_img_forensics(self):
        pass
            
    def classifity(self):
        pass
            
    def run(self):
        
        self.preprocess()

            
