import cv2
from tools.helper import *

class Main_analyzer:

    def __init__(self, img):
        self.img = img 
        self.gray = None
        self.data_records = {}

    def preprocess(self):
        self.gray = cv2.cvtColor(self.img, cv2.COLOR_BGR2GRAY)
        show_image(self.gray)
        
        return self.gray
    
    
    def run_analyer(self):

        # input -> prep -> process -> result -> decission -> final result
        prep = self.preprocess()