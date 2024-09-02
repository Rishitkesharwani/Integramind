student={
    "name":"john",
    "age":25,
    "listStudent":True,
    "hobbies":["reading","coding","gamin"],
    "sampleTuple":(1,2,3),
    "sampleSet":{1,2,3},
    "sampleDict":{"name":"Rishit","age":23},
}

print("students: ",student)

print("student name: ",student["name"])

#student's age
print("students age: ", student["age"])

keys={"name","age","isStudent","hobbies","sampleTuple","sampleSet","sampleDict","randomKey"}

for key in keys:
    if key in student:
        print(key,student[key])
    else:
        print(f"{key} is not present in students")

for index, hobby in enumerate(student["hobbies"]):
     print(index,hobby)

# Sample tuple access
    
for index,item in enumerate(student["sampleTuple"]):
         print(index,item)

# SampleSet and iterate and list with index

for index, item in enumerate(student["sampleSet"]):
       print(index,item)




