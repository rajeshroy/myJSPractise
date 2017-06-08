/**
 * constructor function to create object.
 */
// function fruit(color, sweetness, fruitName, nativeToLand){
// 	this.color = color;
// 	this.sweetness = sweetness;
// 	this.fruitName = fruitName;
// 	this.nativeToLand = nativeToLand;
// 	this.showName = function(){
// 		console.log('The Name of fruit is:' + this.fruitName);
// 	}

// 	this.nativeTo = function(){
// 		this.nativeToLand.forEach(function(sLand){
// 			console.log('This frrit grows in following country:' + sLand);
// 		})
// 	}
// };
// // create object using constructor function.
// var mango = new fruit("Yellow", 8, "Mango", ["India", "Nepal", "US", "China"]);
// mango.showName();
// mango.nativeTo();

// var sMango = JSON.stringify(mango, null, 5); // Contains parameters ==> call back function, space specifier i.e. number.
// console.log(sMango);
// var oMango = JSON.parse(sMango); // contains parameters ==> call back function to retrive the data as it was before stringigy. 
// console.log(oMango);

// function Plant(){
// 	this.country = "India";
// 	this.organic = true;
// }

// Plant.prototype.countryBelong = function(){
// 	console.log("This plant found in " + this.country);
// }
// Plant.prototype.isOrganic = function(){
// 	if(this.organic){
// 		console.log("this Plant is Organic");
// 	}
// }

// function fruit(name, color){
// 	this.name = name;
// 	this.color = color;
// }
// fruit.protot ype = new Plant();

// fruit.prototype.fruitDesc = function(){
// 	console.log(this.name + "is" + this.color);
// }

// var banana = newfruit("Banana", "Yellow");
// banana.countryBelong();
// banana.fruitDesc();

// Closure test in javascript

// function Person(){
// 	var nameIntro = "My name is";
// 	return{
// 		getName: function(){
// 		return nameIntro; 
// 		},
// 		setName: function(lastName){
// 			nameIntro = nameIntro + lastName;
// 		}

// 	}

// 	return fullName;
// }
// var person1 = Person();

// console.log(person1.setName("Rajesh"));
// console.log(person1.getName());
/*var input = prompt("Enter No");
for(var i = 0; i <= input; i++){
	var space = "";
	for(var j = 0; j <= i; j++){
		space += " ";
       	}
	for(var k = 0; k <= input - i; k++){
		space += "* ";
	}
	console.log(space);
}*/

/*function feb(n){
	var a = 0; b = 1; c = 1;
	for(var i = 0; i <= n; i++){
		c = a+b;
		a = b;
		b = c;
		console.log(c);
	}
	  
}

feb(8);*/

/*function isPrime(n){
	for(var i = 2; i <= Math.sqrt(n); i++){
		if(n%i === 0){
			return false;
		}
	}
	return true;
}

function primeList(n){
	var list = []; 
	for(var i = 2; i != n; i++){
		if(isPrime(i)){
			list.push(i);
		}
	}
	return list;
}
console.log(primeList(25));*/

/*function factorial(n){
	var f = 1;
	for(var i = 1; i <=n; i++){
		f *= i;
	}
			return f;

}
console.log(factorial(12));*/

/*function feb(n){
	if(n <= 1) return 1;
	
		return feb(n-1) + feb(n-2)
	
}
console.log(feb(12));*/
/*var f1 = function(){
	console.log("Rajesh");
}
function f1(){
console.log("hello");
}

function f1(){
	console.log('hi');
}

	

f1();*/

// To sort the array of JSON Object with specified property 
/*var aProperty = ['id', 'name', 'companyName'];
var aData = [{'id': 10, 'name': 'Rajesh', 'companyName': 'Tricon Infotech', 'EmployeeAddress': 'Darbhanga'},
			 {'id': 5, 'name': 'Roy', 'companyName': 'Deloite', 'EmployeeAddress': 'Bangalore'},
			 {'id': 1, 'name': 'Vinay', 'companyName': 'Tricon Infotech', 'EmployeeAddress': 'UP'},
			 {'id': 11, 'name': 'Badal', 'companyName': 'SAP', 'EmployeeAddress': 'Gurgaon'}];
function f1(aProp, aData){
	var aEmpty = [];
	for(var i = 0; i < aData.length; i++){
		var  oEmpty = {};
		for(var j = 0; j < aProp.length; j++){
			if(aData[i].hasOwnProperty(aProp[j])){
				oEmpty[aProp[j]] = aData[i][aProp[j]];
			}
		}
		aEmpty.push(oEmpty);
	}

aEmpty.sort(function(a, b){
	return a.id - b.id;
});
return aEmpty;
}

console.log(f1(aProperty, aData));*/
/*function wait(ms){
	var deferred = $.Deferred();
	setTimeout(deferred.resolve, ms);
	return deferred.promise();
}
promise1 = wait(2000);
//promise2 = wait(4000);
promise3 = wait(5000);
var promise1, promise2, promise3;
$.when(promise1).done(function(){
	console.log("Promise1 is done");
})
$.when(promise1, promise2, promise3).done(function(){
	console.log("waiting is over");
}).fail(function(){
	console.log("Waiting is not good, Please be in Q");
});

promise1.then(function(){
	console.log("Promise one is done.");
})
*/

/*function diffArray(arr1, arr2) {
  var newArr = [];
  for(var i = 0; i < arguments.length; i++){
    for(var j = 0; j <= arguments[i].length; j++){
      var aNewArray = arguments[i];
      if(newArr.length === 0){
        newArr.push(aNewArray[j]);
      }else{
        var bTest = false;
        for(var k = 0; k <= newArr.length; k++){
          if(aNewArray[j] === newArr[k]){
            bTest = true;
          }
        }
        if(!bTest){
          newArr.push(aNewArray[j]);
        }
      }
    }
  }
  // Same, same; but different.
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));*/
/*
var person1 = {fName: 'Rajesh', lName: 'Roy'};
var person2 = {fName: 'Vinay', lName: 'Dubey'};
var say = function(greeting){
	console.log(greeting + ' ' + this.fName+ ' ' + this.lName);
}
var sayfn = say.bind(person1, 'Hello'); // bind returns a function.
var sayFn = say.bind(person2);
sayFn();*/
//say.apply(person2, ['Have a good day']);
/* 
	JSON.parse(string, rcv function) // Returns an JSON object.
*/
/*var nameString = '{"name": "Rajesh", "lName":"Roy"}';
var nameObj = JSON.parse(nameString, function(key, value){
		if(typeof value === "string"){
			return value + " " + "is a String"
		}else{
			return value;
		}
	});
console.log(nameObj);*/

/*function myFunction()
	{
		var button = document.getElementById("button1");
		var importantPieceOfState = "I love fish";
		
		// declare the inner event
		button.addEventListener("click", function()
		{
			alert(importantPieceOfState);
		}, false);
	}
var name1 = "Rajesh Roy";
var destroy = function(){
	var name = "Hello Rajesh";
	console.log("called before declaration");
	return name;
};
destroyName(destroy());
function destroyName(name){
	console.log(name);
	console.log(name1);
	name1 = name;
	console.log(name1);

}
console.log(name1)*/
/*function container(param){
	this.member = param;
}
var myContainer = new container('beautiful thoughts');
console.log(myContainer.member);
*/
/*function pet(name, species, hello){
	this.name = name;
	this.species = species;
	this.hello = hello;
};
pet.prototype = {
	sayHello : function(){
		alert(this.hello);
	}};
function cat(name, hello, breed){
	this.name = name;
	this.hello = hello;
	this.breed = breed;
};
cat.prototype = new pet();
var july = new cat("july", "Miaow", "indian");
july.sayHello();
console.log(cat.constructor);
console.log(cat.constructor.prototype.constructor)
*/
/*var v1 = "Rajesh";
function  v1(){
	console.log(v1);
	var v1 = 23;
}
console.log(typeof v1);*/
var arrName = ["Rajesh", "Vinay", "Abhishek"];
arrName.forEach(function(item, index, array){
	console.log(item, index);
})
var arrName1 = arrName.splice(0);
console.log(arrName1);
