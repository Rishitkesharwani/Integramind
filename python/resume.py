import json

# with open("python/resume.json") as file:
#     resume=json.load(file)
#     for key,value in resume.items():
#         print(key,value)


def my_function():
    with open("python/resume.json") as file:
         resume=json.load(file)
         for key,value in resume.items():
             print(key,value)


for _ in range(5):
    my_function()
 


# sampleTuple=(1,2,3,)
# print('sampleTuple: ',sampleTuple)
# sampleTuple[1]=6

