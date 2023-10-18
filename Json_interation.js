
 
//for-of

const a = { "Employee Details" : {
             "Tom"  : "Full stack developer",
             "Gokul" : "Full stack developer",
             "vinith" : "devops",
            },
             "Employee Role" : {
             "Tom"  : "Senior Software Developer",
             "Gokul" : "Junior Software Developer",
             "vinith" : "Junior Software Developer",
            }
}

for(let i of Object.keys(a)){
   console.log("Key :",i)
   console.log("value :",a[i])
}

const a = { "one" : 1,"two" : 2,"three":3}
for(var i of Object.values(a)){
   console.log(i)
}


//for-in:

const a = { "Employee Details" : {
             "Tom"  : "Full stack developer",
             "Gokul" : "Full stack developer",
             "vinith" : "devops",
            },
             "Employee Role" : {
             "Tom"  : "Senior Software Developer",
             "Gokul" : "Junior Software Developer",
             "vinith" : "Junior Software Developer",
            }
}


for(let val in a){
  console.log(a[val]);
}


//for

const a = { "one" : 1,"two" : 2,"three":3}, b = Object.values(a), c = Object.keys(a)
for(let i = 0; i <c.length;i++)  {
   console.log(c[i],b[i])
}