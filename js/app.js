


                            ////////////////////////////------------------\\\\\\\\\\\\\\\\\\\\\\
                            // ------------------------- 1-task savollari ---------------------\\
                            //\\\\\\\\\\\\\\\\\\\\\\\\\\\\------------------/////////////////////




                                    // ------------------- 1-misol ------------------//



// const list = [
//     {
//         name:"Abdulloh",
//         age: 21,
//         status: false
//     },
//     {
//         name:"Botir",
//         age: 18,
//         status: true
//     },
//     {
//         name:"Shokir",
//         age: 12,
//         status: false
//     },
  
// ]
// function statusAdd(array){
//     for(let arr of array){
//         if(arr.status == false){
//             console.log(arr);
//         }
//     }
// }
// statusAdd(list)


                                        // ------------------- 2-misol ------------------\\




// function sumOfNumbers(n) {
//     if (n < 1 || n > 100) {
//         return " 1 dan 100 gacha bo'lgan son kiriting";
//     }
    
//     let totalSum = 0;
//     for (let i = 1; i <= n; i++) {
//         totalSum += i;
//     }
    
//     return totalSum;
// }
// let userInput = prompt("1 dan 100 gacha bo'lgan ixtiyoriy son kiriting:");
// userInput = parseInt(userInput);

// if (!isNaN(userInput)) {
//     console.log("Kiritilgan songacha bo'lgan sonlar yig'indisi:", sumOfNumbers(userInput));
// } else {
//     console.log("Iltimos, to'g'ri son kiriting");
// }



                                        // ------------------- 3-misol ------------------\\


// function commonElementsCount(arr1, arr2) {
   
//     let elementCount = {};

   
//     arr1.forEach(element => {
//         if (elementCount[element]) {
//             elementCount[element]++;
//         } else {
//             elementCount[element] = 1;
//         }
//     });

  
//     let commonCount = 0;

    
//     arr2.forEach(element => {
//         if (elementCount[element] && elementCount[element] > 0) {
//             commonCount++;
//             elementCount[element]--;
//         }
//     });

//     return commonCount;
// }

// let array1 = [1, 2, 3, 4, 5, 3];
// let array2 = [3, 4,2,1, 3, 3, 6];

// console.log("Umumiy elementlar soni:", commonElementsCount(array1, array2));




                                    // ------------------- 4-misol ------------------\\



// function largestCommonElement(arr1, arr2) {
//     let set1 = new Set(arr1);
//     let set2 = new Set(arr2);

//     let commonElements = [...set1].filter(element => set2.has(element));
//     if (commonElements.length > 0) {
//         return Math.max(...commonElements);
//     } else {
//         return "Umumiy elementlar topilmadi";
//     }
// }

// let array1 = [1, 2, 3, 4, 5,6, 3];
// let array2 = [3, 4, 3, 3, 6];

// console.log("Umumiy eng katta element:", largestCommonElement(array1, array2));



                                      // ------------------- 5-misol ------------------\\
  
                                      
// function printNumbersUpTo(n) {
//     if (n < 1) {
//         return "Kiritilgan son 1 dan katta bo'lishi kerak";
//     }
    
//     let result = "";
//     for (let i = 1; i <= n; i++) {
//         result += i + " ";
//     }
    
//     return result.trim(); 
// }


// let userInput = parseInt(prompt("Ixtiyoriy son kiriting:"));

// if (!isNaN(userInput) && userInput > 0) {
//     alert("1 dan " + userInput + " gacha bo'lgan sonlar: " + printNumbersUpTo(userInput));
// } else {
//     alert("Iltimos, to'g'ri musbat son kiriting");
// }                                      





                            ////////////////////////////------------------\\\\\\\\\\\\\\\\\\\\\\
                            // ------------------------- 3-task savollari ---------------------\\
                            //\\\\\\\\\\\\\\\\\\\\\\\\\\\\------------------/////////////////////


                                     // ------------------- 1-misol ------------------\\
// let person = {
//     name: "Abdulloh",
//     age: 19,
//     jop:"Logistic company",
//     interest:"game",
//     hobby:"sleep",
//     number:"+998944683325",
//     username:"AU"
// };

// function myFunc(obj){
//     for (let key in person) {
//         console.log('${key} - ${person[key]}');
//       }
// }
// myFunc()


                                     // ------------------- 2-misol ------------------\\



// const person1 = {
//     name: "Abdulloh",
//     age: 19
// };

// const person2 = {
//     hobby: "Volleybol",
//     interest: "sleep"
// };

// const mergedPerson = Object.assign({}, person1, person2);

// console.log(mergedPerson);

                                     // ------------------- 3-misol ------------------\\


// function addOneToLastElement(arr) {
//     if (arr.length === 0) {
//         return "Massiv bo'sh bo'lishi mumkin emas";
//     }
//     let lastElement = arr[arr.length - 1];
    
//     arr.push(lastElement + 1);
    
//     return arr;
// }
// let numbers = [5, 10, 15, 20];

// console.log("Yangilangan massiv:", addOneToLastElement(numbers));




                                     // ------------------- 4-misol ------------------\\



// function modifyArray(arr) {
   
//     if (arr.length === 0) {
//         return "Massiv bo'sh bo'lishi mumkin emas";
//     }
    
//     const sum = arr.reduce((acc, val) => acc + val, 0);
    
   
//     if (arr[0] % 2 === 0) {
//         arr.unshift(sum);
//     } else {
//         arr.push(sum);
//     }
    
//     return arr;
// }

// let numbers = [5, 10, 15, 20];

// console.log("Yangilangan massiv:", modifyArray(numbers));




                                     // ------------------- 5-misol ------------------\\



//     function swapFirstAndLast(arr) {
//     if (arr.length < 2) {
//         return "Massivda kamida 2 ta element bo'lishi kerak";
//     }

//     let temp = arr[0];
//     arr[0] = arr[arr.length - 1];
//     arr[arr.length - 1] = temp;

//     return arr;
// }

// let numbers = [5, 10, 15, 20];

// console.log("Yangilangan massiv:", swapFirstAndLast(numbers));


                                     // ------------------- 6-misol ------------------\\




// function collectWords(count, words = []) {
//     if (count === 0) {
//         return words;
//     }

//     let word = prompt("Ixtiyoriy so'z kiriting:");
//     words.push(word);

//     return collectWords(count - 1, words);
// }

// let collectedWords = collectWords(6);

// console.log("Kiritilgan so'zlar:", collectedWords);
