// Write a function called countdown that accepts a number as a parameter 
// and every 1000 milliseconds decrements the value and console.logs it.
//  Once the value is 0 it should log "DONE!" and stop.

console.log('question 1')
function cc (number){
    let num = number
    const countdown = setInterval(function(){
        num--
        console.log (num)
        if( num <= 1){
            console.log('done')
            clearTimeout(countdown)
        }
    },1000)
}
console.log(cc (20))


// Write a function called randomGame that selects a random number between 0 and 1 
// every 1000 milliseconds and each time that a random number is picked, 
// add 1 to a counter. If the number is greater than .75, stop the timer and 
// return the number of tries it took before we found a number greater than .75.

console.log('question 2')
function  randomGame(){
    let count = 0
    const random = setInterval(function(){
        count++
        let x = Math.random()
        console.log(x)
        if( x > 0.75){
            console.log(count)
            clearTimeout(random)
            // return count
        } 
    },1000)
}
console.log(randomGame())

// Write a function called isEven which takes in a number and returns true if
//  the number is even and returns false if it is not
        console.log('question 3')
function isEven(number){
    if(number % 2 ===0){
        return true
    }
return false
}
console.log(isEven(8))

// Write a function called isOdd which takes in a number and returns 
// true if the number is odd and returns false if it is not
  console.log('question 4')
function isOdd(number){
    if(number % 2 === 0){
        return false
    }
return true
}
console.log(isOdd(7))

// Write a function called isPrime which takes in a number 
// and returns true if the number is a prime number (is greater than 1 and can only be
//      divided in whole by itself and 1), otherwise returns false
        console.log('question 5')
     function isPrimes (num){
        let numbers = num
        let count = 0
            for (let i = 2; i < num; i++){
                    if (num % i ===0){
                        count++
                    return false
                    }
                    
                }
                return true 
            }
         
console.log(isPrimes(6))

// Write a function called numberFact which takes in a number and a callback
//  and returns the result of the callback with the number passed to it
     console.log('question 6')
function numberFact(number, callback){
        for (let item of number){
            if(callback(item))
            return  'Even' + ' '+ item
            else return 'ODD'  + ' '+ item
        }
}
        let result = numberFact([9], value => value % 2 === 0
)
console.log(result)


// Write a function called find. It should take in an array and a callback and return the first value 
// found in the array that matches the condition.
     console.log('question 7')
function find (array, callback){
        for(let key of array){
            if (callback(key))
            return key
        }
        }
        let answer = find([15,12,8,130,44], element => element > 10
)
console.log(answer)


// Write a function called findIndex. It should take in an array and a callback and return the index of first value found 
// in the array that matches the condition.
   console.log('question 8')
function findIndex( array, callback){
        for(let key in array){
            if(callback(array[key]))
            return key
        }
        }
        let results = findIndex([8,11,4,27], value => value > 13
      )
console.log(results)

// Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, 
// it should return the product of the two. If the function is only passed one parameter - it
//  should return a function which can later be passed another parameter to return the product.
//   You will have to use closure and arguments to solve this.
console.log('question 9')
function specialMultiply(x,y) {
    if (arguments.length === 2) {
        return x * y;
    }
 
    return (z) => x * z
}
 
console.log(specialMultiply(4,3));
console.log(specialMultiply(4)(3));
console.log(specialMultiply(3));