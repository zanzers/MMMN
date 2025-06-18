# use this is coduct test without the proper result 
from MMMN.pipline import MMMN_analyzer
import cv2


def show_img(title,img,wait=True):

    cv2.imshow(title, img)
    if wait:
        cv2.waitKey(0)
        cv2.destroyAllWindows()



def temp_input():
    img = cv2.imread("tools/test_image/test1")

    if img is None:
        print("Image failed to load")
        return
    
    analyzer = MMMN_analyzer(img)
    result   = analyzer.run()




temp_input()