import re

text = open("input.txt", "r").read()
s = re.sub('[^0-9a-zA-Z]+', ' ', text)

f = open("text.txt", "a")
f.write(s)
f.close()