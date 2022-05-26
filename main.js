// var admin = {
//   firstName: "eldad",
//   lastName: "brhano",
//   age:23,
//   salary:8000
// }


// var worker ={
//   fullName:"yonatan yitzhak",
//   yearOfBirth:29/9/1997,
//   email:"yon@gmail.com",
//   addres:{
//     city:"rishon le-tsion",
//   }
// }



// var fruit ={
//   name:"apple",
//   color:"red",
//   type:"solo"
// }
// document.write(fruit.name)
// document.write(fruit.color)
// document.write(fruit.type)





// var kita={
//   kitaMispar:4,
//   numOfStudants:25,
//   nameOfStudents:["eldad","yoni","sara","shlomo","lior"]
// }
// for(var i = 0;i<kita.nameOfStudents.length;i++){
//   document.write(kita.nameOfStudents[i]+"<br>")
// }



// var kittensGardens={
//   nameOfGardien:"anat",
//   numOfChildren:25,
//   nameOfChildren:["eldad","yoni","sara","shlomo","lior","roei","yuval","rei","rey","rami"]
// }
// for(var i=0; i< kittensGardens["nameOfChildren"].length;i++){
//   document.write(kittensGardens["nameOfChildren"][i]+"<br>")
// }
// var myKey= prompt("enter key")
// document.write(kittensGardens[myKey]);




// var kita={}
// kita.classMembers=prompt("enter a class");
// kita.classAge=+prompt("enter your age");
// kita.classNum=prompt("how much students?");
// console.log(kita);




// var admin ={}
// var valueOfName=prompt("what is the key")
// var firstName=prompt("what your name")
// admin[valueOfName]=firstName;
// console.log(admin);




// var adminstor ={}
// for (var i=0;i<4;i++) {
//   var keyOf=prompt("enter key?")
//   var valueOf=prompt("what is your value?")
// adminstor[keyOf]=valueOf
// }
// console.log(adminstor);






// var user={}
// for(var i=0;i<4;i++){
//   var keyOf=prompt("what is your key?");
//   var valueOf=prompt("what is your value?");
//   user[keyOf]=valueOf;
//   document.write("<div>" + user[keyOf]+ "</div>")             
// } 


// for(var i=0;i<4;i++){
//   var car1={
//   typeOfCar:prompt("enter what type of car you have"),
//   color:prompt("enter your color"),
//   cubicCentimeter:prompt("enter your cubic"),
//   yearCar:prompt("your car year")
// }
// document.write("<div>"+car1.typeOfCar+" "+car1.color+" "+car1.cubicCentimeter+" "+car1.yearCar+"</div>")
// }




// function makingThreeCatsObjct() {
//  for(var i=0 ; i < 3 ;i++){
//    var cat={}
//    cat.name=prompt("whats your cats name?");
//    cat.yearOfDate=+prompt("what your cat year of birth?");
//    cat.type=prompt("what kind of cat you have?");
//    cat.weight=+prompt("what your cat weight?")
//  }
//  document.write("<h1>"+" "+cat.name+" "+cat.yearOfDate+" "+cat.type+cat.weight+"</h1>")
// }
// makingThreeCatsObjct()



// function getNumFromUser(userNum) {
//   for(var i=0; i < userNum;i++){
//     var dog={
//       name:prompt("what the dog name?"),
//       age:prompt("what the dog age?"),
//       type:prompt("what type of dog?"),
//       ownerName:prompt("owner name please")
//     }
//   }
//   document.write("<p>"+" "+dog.name+" "+dog.age+" "+dog.type+" "+dog.ownerName+"</p>")
// }
// getNumFromUser(prompt("enter some num"))



// function getBugName(userNum) {
//   for(var i=0; i < userNum; i++){
//     var bug={
//     bugName:prompt("the bug name"),
//     bugType:prompt("what type of bug is this?"),
//     numOfFeet:+prompt("how many legs he have?"),
//     wings:confirm("does he have wings?yes or no?")
//    }
//    if(bug.wings){
//      document.write("<h3>"+" "+bug.bugName+" "+bug.bugType+" "+bug.numOfFeet+" "+bug.wings+"</h3>")
//    }
//  }
// }
// getBugName(prompt("enter num of bug"))





// function getNumOfKids(userNum) {
//   for(var i = 0; i < userNum ; i++){
//       var kid={
//       fullName:prompt("what is your full name?"),
//       age:prompt("your kid age please"),
//       kiddengarten:prompt("does the kid have kiddengarten?")
//   }
//   if(kid.age>4){
//     document.write("<p>"+" "+kid.fullName+" "+kid.age+" "+kid.kiddengarten)
//   }
//   }
// }
// getNumOfKids(prompt("how many kids you got?"))


// function getNum(numUser) {
//   for(var i =0; i < numUser; i++){
//     var compo={
//       brand:prompt("what brand the computer is?"),
//       model:prompt("what model is the computer?"),
//       weight:prompt("how much weight?"),
//       availeble:confirm("does the computer exist?")
//     }
//     if(compo.weight>2 && compo.availeble){
//       document.write("<p>"+" "+compo.brand+" "+compo.model+" "+compo.weight+" "+compo.availeble)
//     }
//   }
// }
// getNum(2)


// function teachers(num) {
//   for(var i=0; i < num; i++){
//     var techer={
//       fullName:prompt("enter your full name please"),
//       hourSalary:prompt("does you make more than 100 shekel per hour?"),
//       yearOfBirth:prompt("does you born under the year of 1990?")
//     }
//     if(techer.hourSalary > 100 || techer.yearOfBirth > 1990){
//       document.write("<span>"+" "+techer.fullName+" "+techer.hourSalary+" "+techer.yearOfBirth+"</span>")
//     }
//   }
// }
// teachers(prompt("enter number of teachers please"))




// function makeSome(num) {
//   var stores =[];
//   for(var i =0; i < num ; i++){
//     var furniture={
//       furnitureName:prompt("whts the furniture's name?"),
//       furnitureBrand:prompt("what brand he is?"),
//       price:prompt("whats the price of the furniture?"),
//       furnitureArray:prompt("enter where i can buy?what store?")
//     }
//     stores.push(furniture.furnitureArray)
//     document.write(furniture.furnitureName+"<br>"+stores)
//   }
//   console.log(stores);
// }
// makeSome(3)





// function apartment(num) {
//   for(var i = 0 ; i < num ; i++){
//     var apa={
//       addres:prompt("what addres the apa is?"),
//       priceForLeace:prompt("how much is the rent?"),
//       howMuchAreINtrested:[prompt("who is intrested in the apa?")],
//       middelMan:confirm("does the APA has middel man?")
//     }
//     if(apa.middelMan==false){
//       document.write("<h3>"+apa["addres"]+"</h3>"+"<br>"+apa["howMuchAreINtrested"])
//     }
//   }
// }
// apartment(2)



// function fromUser(numUser) {
//   var pushCity=[]
//   for(var i=0;i < numUser;i++){
//       var state={
//     stataName:prompt("what the country name?"),
//     numOfPplInTheCountry:prompt("how many people does the countru have?"),
//     arrayCities:prompt("what city you have in these towns?"),
//     beitChabad:confirm("does you have beit chabad?")
//   }
//   pushCity.push(state.arrayCities)
//   if(state.beitChabad==true){
//     document.write("<h1>"+state.stataName+"</h1>"+" "+"<br>"+pushCity)
//   }
// }
//  }
//  fromUser(prompt("enter num"))







// function makeVideo(fromUser) {
// for(var i =0; i < fromUser; i++){
//   var movie={
//     movieName:prompt("what's the movie name?"),
//     movieViews:prompt("how many views the movie have?"),
//     movieYear:prompt("what year the movie was realesd?"),
//     pig:document.getElementById(img1)
//   }
// }
// document.write("<h2>"+movie.movieName+" "+movie.movieViews+" "+movie.movieYear+" "+movie.moviePic+"</h2>")
// }
// makeVideo(prompt("enter how many time please."))

