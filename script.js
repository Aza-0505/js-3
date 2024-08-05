
//1
let fruits = [“apple”, “mango”, “avocado”,”kiwi”] 
// At position 2, remove add "strawberry" 
fruits.splice(2,1, "strawberry");
console.log(fruits);

//2.
let text = "good day";
const myArray = text.split(",");
document.getElementById("demo").innerHTML = myArray[0];
console.log(myArray); //[good,day]
 let myArry(good, day);
 myArray.splice(1,1, newVar "day");
 console.log(newVar);

 //3. დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს სტრინგს, და დააბრუნებს ჩაწერილი სტრინგის სიგრძეს.

 let stringValue = "hello",
 console.log(stringValue. length);

 //4.
 let array1 = [5, 25, 89, 120, 36];
 array1.splice(5,2, "javascript", "python");
 console.log(array1); // [5, 25, 89, 120, 36,"javascript", "python"]

 let newArray = (5, 25, 89, 120, 36,"javascript", "python");
 newArray.unshift("html", "css");
 console.log(newArray); //["html", "css",5, 25, 89, 120, 36,"javascript", "python"]
 let array2 = ("html", "css",5, 25, 89, 120, 36,"javascript", "python");
 console.log(array2.length); / 9

array2.splice (0,1, da 10,1,);
console.log(deletedElements);

//5.
let array1 = ['ფორთოხალი', 'ბანანი', 'კივი'];
console.log(array1.length);  //3
array1.unshift('საზამთრო');
array1.splice(4,2,'ვაშლი', 'ანანასი' );
console.log(array1.length); //6
array1.splice(3,1, 'მანგო');
console.log(array1); // ['საზამთრო','ფორთოხალი', 'ბანანი', 'მანგო', 'კივი', 'ვაშლი', 'ანანასი' ]

let array2 = ['საზამთრო','ფორთოხალი', 'ბანანი', 'მანგო', 'კივი', 'ვაშლი', 'ანანასი'];

array1.splice(0,1,  6,1);
console.log(array2.length); //5

//6. მოცემულია მასივი let array3 =[1, 2, 3, 4, 5]. splice მეთოდის საშუალებით მიიღეთ: [1, 2, 3, 'a', 'b', 'c', 4, 5].

let array3 = [1, 2, 3, 4, 5];
array3.splice(3,3, a,b,c,);
console.log(array3);

//7.

let array7 =  [15, 100, 25, 10, 36]
array7.splice(3,1,);
console.log(array7);

//8.
let array8 = [ 1, 2 , 3 , 4, 5];
array8.splice(3,1, add "three");

//9

let array4 = [1, 2, 3, 4, 5];
array.forEach(element => { 
    sum+=Number
    
}); 
console.log(sum);

//10.

let array2 = [14, 150, 'css', null, 'javascript', 25];
function getNewArr(array); {
    return array.map(element) => {
        if typeof element === "number"{
            return Math.pow(element);
        } 
    else if typeof element === "string" {
        return element.toUpperCase()
    }
else{ return element;

}} console.log(newArray2);
}

//11.
let capitalGeorgia === 'Tbilisi';
function myFunction(capitalname) {
    let userAnswer = prompt("what is a name of Capitalcity of Georgia"). to lowercase)) {
        return answer == "capitalGeorgia"; it iscoreect : incorrect
     };
    
    }
  }
  //12.
  let  array5 = [12, 25, 3, 6, 8, 14, 7, 23];
  let newArrDividBy3 = array5 (element => (element/3). toFixed();{
    console.log(newArray);
  }

  //13.
  let array1 =[“hello1”, 14,24, “hello2”];
  function.getElementNumbers(arr) 
  const result = number.filter(checkelement);

function checkelement(anumber) {
  return number >= array2;}
  
//14. 
let languages = ['html', 'css', 'javascript', ‘python’, 'php'];
const result = elementLength.filter(checkElementLength =>3);

function checkElementLength(3) {
  return element >= 3;}

  //15.
  let words = ['Madrid', 'rome', 'Milan', 'berlin'];
  const result = wordIncluded.filter(wordIncluded);

function checkwords('M', 'N') {
  return word >= 18;

  //16.
  let link = “https://google.com”;
  function.checkLink(link) {
    if link includes (https://)) {
        console.log('includes');}
        else {console.log('does not includes');} 
  }

  //17.
  let array6 = [-1, -2, -3, 4];
  function.checkvalueNumb(array6)) {
    if valueNumb>=0; 
    console.log(valueNumb);
  }

//19.
let arrayNum = [12, 25, 3, 6, 8, 14, 7, 23];
document.getElementById("demo").innerHTML = numbers.reduce(getSum, 0);

function getSum(total, num) {
  return total + Math.round(num);

  //20.
  let arr1 = [1, 2];
  let arr2 = [3, 4];
  let arr3 = [5, 6];
  Let newArr = arr1.concat(arr2,arr3);
  console.log(newArr);

