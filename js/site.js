
// palindrome

function backward(str){
    let newWord = ""
    for(var i = str.length -1; i>=0; i--){
        newWord = newWord + str[i]
    }
    return newWord
}

let word = "racecar"
let result = backward(word)
if(result == word){
    console.log("Palindrome")
} else{
    console.log("Not Palindrome")
}

// remove duplicates

//const names = ["John", "Mary", "Alex", "Steve", "Mary", "John"]
//let unique = [...new Set(names)]

//console.log(unique)

let names = ["John", "Mary", "Alex", "Steve", "Mary", "John"]
let newNames = []

for(let index = 0; index<names.length; index++){
    if(newNames.includes(names[index])){
        continue
    }else{
        newNames.push(names[index])
    }
}
console.log(newNames)

//let names = ["Alex","Mary","John","Mary", "Alex", "Jerry"]

let duplicateFreeArray = [] 

function doesNameExists(name) {
    
  let alreadyExists = false 
  
  for(let index =0; index < duplicateFreeArray.length; index++) {
    if(name == duplicateFreeArray[index]) {
      alreadyExists = true 
      break
    }
  }
  
  return alreadyExists
  
}

for(let index = 0; index < names.length; index++) {
  
    let name = names[index]
    // if the name does not exists in duplicateFreeArray
    if(!doesNameExists(name)) {
       duplicateFreeArray.push(name)
    }
  
}

console.log(duplicateFreeArray)

//console.log(!false)

// true/false if item in array 

let array = [5, 7, 10, 293, 593, 2]
item = 32

function inList(x){
    for(let index = 0; index<array.length; index++){
        if(array[index] == item){
            console.log(true)
            break
        }else{
            console.log(false)
        }
    }
}
result = inList(item)
console.log(result)

// find largest number in array

let myArray = [10, 23, 54, 5893, 393, 222, 9993, 6, 123405]

function largestElement(){
    let maxNumber = myArray[0]
    for(let index = 0; index<myArray.length; index++){
        if(myArray[index] > maxNumber){
            maxNumber = myArray[index]
        }
    }
    return maxNumber
}
answer = largestElement()
console.log(answer)

// find smallest number in array

let numbers = [10, 25, 33, 648, 8, 902, 0, 85, -25]

function smallestElement(){
    let minNumber = numbers[0]
    for(let index = 0; index<numbers.length; index++){
        if(numbers[index] < minNumber){
            minNumber = numbers[index]
        }
    }
    return minNumber
}
smallest = smallestElement()
console.log(smallest)

// Fizz Buzz

let newNumber = 27

function fizzBuzz(){
    if(newNumber % 3 == 0 && newNumber % 5 == 0){
        console.log("Fizz Buzz")
    }else if(newNumber % 3 == 0){
        console.log("Fizz")
    }else if(newNumber % 5 == 0){
        console.log("Buzz")
    }
}

statement = fizzBuzz(newNumber)
console.log(statement)

// Even or Odd 

myNumber = 24

function evenOdd(){
    if(myNumber % 2 == 0){
        console.log("Even")
    }else if(myNumber % 2 != 0){
        console.log("Odd")
    }
}
element = evenOdd(myNumber)
console.log(element)

// Ascending order 

const newNumbers = [3, 4, 5, 6, 7, 8, 1]
let ascending = newNumbers.sort()
console.log(ascending)

// Descending order

const myNewNumbers = [1, 4, 3, 5, 2, 6, 7, 10]
function desNumbers(a,b){
    return b-a
}
console.log(myNewNumbers.sort(desNumbers))

// Bank Account class

class BankAccount{
    constructor(firstName, middleName, lastName, accountType, status, initialBalance){
        this.firstName = firstName
        this.middleName = middleName
        this.lastName = lastName
        this.accountType = accountType
        this.status = status
        this.initialBalance = initialBalance
    }

    createAccount(initialBalance){
        if(initialBalance >= 100){
            console.log("Account Open")
        }else{
            console.log("Sorry, we cannot open an account for you at this time.")
        }
    }
}

// Bank Account creation 

let bankAccount = new BankAccount("Mary", "Jane", "Doe", "Checking", "Open", 290) 
bankAccount.createAccount(290)
