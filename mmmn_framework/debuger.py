import cv2
from main_frame import *
import os


img = cv2.imread("tools/test_subject/test.jpg")



test =  Main_analyzer(img)
test.run_analyer()

