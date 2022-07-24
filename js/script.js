// Equality of three values
function equal (a,b,c) {
    if (a == b && b == c) {
        return true;
    }else
    return false

}
console.log(equal(1,2,3));
console.log(equal("test" , "test" , "test"))

//convert minute to seconds
function convert(minutes) {
	return minutes * 60;

}
console.log(convert(1))
console.log(convert(3))

//return the area of a rectangle
function area(length,width) {
    return length*width;
}
console.log(area(2,2))
console.log(area(10,5))

//the next number
function addition(num) {
    return ++num;
}
console.log(addition(1))


//add up the numbers from a signle number
function addUp(num) {
	let sum =0;
	for (let i = 0; i <= num; i++){
		sum += i;
	}
	return sum
}
console.log(addUp(6))

//Check if one array can be nested in another
function canNest(arr1, arr2) {
	return (Math.min(...arr1) > Math.min(...arr2) &&
		     Math.max(...arr1) < Math.max(...arr2));
}
console.log(canNest([1,2,3],[0,5]))

        
//Filter out strings from an array
function filterArray(arr) {
	return arr.filter((element) => typeof element !=="string");
}
console.log(filterArray([1, 2, "a", 4]))

//How much is True ?
function arrayCount(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            result.push(arr[i]);
        }
    }
    return result.length;
   }
   
   console.log(arrayCount([false,false,true,false,true]))

// Convert Object to Array
function objectToArray(obj){
    var obj = {
        a: "hello",
        b: "this is",
        c: "javascript!",
    };
    var array = Object.keys(obj)
    .map(function(key) {
        return obj[key];
    });
}
console.log("hello","this is","javascript!"); 

//find the second biggest array
function nextBiggest(arr) {
    let max = -Infinity, result = -Infinity;
  
    for (const value of arr) {
      const nr = Number(value)
  
      if (nr > max) {
        [result, max] = [max, nr] 
      } else if (nr < max && nr > result) {
        result = nr; 
      }
    }
  
    return result;
  }

  const arr = ['20','120','111','215','54','78'];
  console.log(nextBiggest(arr));
