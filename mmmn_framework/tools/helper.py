import cv2
import numpy as np

def show_image(img, title="Debugger", wait=True, target_size=(400, 600)):
 
    cv2.namedWindow(title, cv2.WINDOW_NORMAL)
    cv2.resizeWindow(title, *target_size)

   
    h, w = img.shape[:2]
    target_w, target_h = target_size


    scale = min(target_w / w, target_h / h)
    new_w, new_h = int(w * scale), int(h * scale)

    resized = cv2.resize(img, (new_w, new_h))
    top = (target_h - new_h) // 2
    bottom = target_h - new_h - top
    left = (target_w - new_w) // 2
    right = target_w - new_w - left

    padded = cv2.copyMakeBorder(resized, top, bottom, left, right, cv2.BORDER_CONSTANT, value=(0, 0, 0))

    cv2.imshow(title, padded)

    if wait:
        cv2.waitKey(0)
        cv2.destroyAllWindows()
