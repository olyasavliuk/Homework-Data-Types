// Конвертер валют
let uah = +prompt('How much money do you have (in UAH)?');
let usd , eur , brent , gold;
if (uah && !isNaN(uah) && typeof(uah) !== null && typeof(uah) !== undefined) {
    usd = 0.036 * uah;
    eur = 0.03 * uah;
    brent = 0.000896 * uah;
    gold = 0.000570 * uah;
    alert(`${uah} UAH it is ${usd.toFixed(2)} $, ${eur.toFixed(2)} €, ${brent.toFixed(2)} barrel of oil, ${gold.toFixed(2)} gram of gold.`)
} else {
    alert('You enter 0 or data in not numeric format! Please, restart the page and enter data in numeric format.');
}

// Знижки та акції
let sum = +prompt('What is your order amount?');
let result;
if (sum && !isNaN(sum)) {
    if (sum < 500) {
        result = sum - sum * 0.01;
        alert(`Your order amount including discount is ${result.toFixed(2)} UAH.`);
    } else if (sum == 500 && sum < 1000) {
        result = sum - sum * 0.05;
        alert(`Your order amount including discount is ${result.toFixed(2)} UAH.`);
    } else if (sum >= 1000) {
        result = sum - sum * 0.1;
        alert(`Your order amount including discount is ${result.toFixed(2)} UAH and certificate for 200 UAH as a gift.`);
    }
} else {
    alert('You enter 0 or data in not numeric format! Please, restart the page and enter data in numeric format.');
}

// Квіз
alert('Click ok if you want to pass the quiz on how well you know Ukraine. Answer only: Yes or No. Good luck!');
let firstQuestion = prompt('The 24-th of August is the Independence Day of Ukraine.');
let secondQuestion = prompt('"Ukrainian Sahara" - the largest desert in Europe is located in the Kherson region.');
let thirdQuestion = prompt('Ukrainian language ranks first in the list of the most beautiful languages ​​in the world.');
let fourthQuestion = prompt('Ukraine has won Eurovision three times.');
let fifthQuestion = prompt('5 million people visited Ukraine in two weeks of the Euro-2012 championship.');
let resultQuiz = 0 ;
let a;
a =  firstQuestion.trim().toUpperCase();

if (firstQuestion && firstQuestion.trim().toUpperCase() === 'YES') {
    resultQuiz = resultQuiz + 1 ;
} 
if (secondQuestion && secondQuestion.trim().toUpperCase() === 'YES') {
    resultQuiz = resultQuiz + 1 ;
}
if (thirdQuestion && thirdQuestion.trim().toUpperCase() === 'NO') {
    resultQuiz = resultQuiz + 1 ;
}
if (fourthQuestion && fourthQuestion.trim().toUpperCase() === 'NO') {
    resultQuiz = resultQuiz + 1 ;
}
if (fifthQuestion && fifthQuestion.trim().toUpperCase() === 'NO') {
    resultQuiz = resultQuiz + 1 ;
}
if (resultQuiz && resultQuiz === 5) {
    resultQuiz = resultQuiz + 1 ;
}
alert(`Your result is ${resultQuiz} points of 5.`);

// Перевірка на однакові числа
let num = +prompt('Please, enter a three-digit number.');
let firstDigit, secondDigit, thirdDigit, numtStr;
if (num && !isNaN(num)) {
    numStr = num.toString().split('');
    if (numStr.length == 3) {
        firstDigit = numStr[0];
        secondDigit = numStr[1];
        thirdDigit = numStr[2];
        if (firstDigit == secondDigit || secondDigit ==  thirdDigit ||  thirdDigit == firstDigit) {
        alert('Your three-digit number has the similar digits.');
        } else {
        alert('Your three-digit number hasn`t the similar digits.');
        }
    } else {
        alert('You enter not three-digit number! Please, restart the page and enter again.');
    }
} else {
    alert('You enter 0 or data in not numeric format! Please, restart the page and enter data in numeric format.');
}

// Шифт + цифра
let digit = +prompt('Please, enter digit from 0 to 9.');
if (digit || digit === 0) {
    if (digit === 0) {
        alert('This digit with SHIFT button is \')\'');
    }
    if (digit === 1) {
        alert('This digit with SHIFT button is \'!\'');
    }
    if (digit === 2) {
        alert('This digit with SHIFT button is \'@\'');
    }
    if (digit === 3) {
        alert('This digit with SHIFT button is \'#\'');
    }
    if (digit === 4) {
        alert('This digit with SHIFT button is \'$\'');
    }
    if (digit === 5) {
        alert('This digit with SHIFT button is \'%\'');
    }
    if (digit === 6) {
        alert('This digit with SHIFT button is \'^\'');
    }
    if (digit === 7) {
        alert('This digit with SHIFT button is \'&\'');
    }
    if (digit === 8) {
        alert('This digit with SHIFT button is \'*\'');
    }
    if (digit === 9) {
        alert('This digit with SHIFT button is \'(!)\'');
    }
} else {
    alert('You enter data in not numeric format! Please, restart the page and enter data in numeric format.');
}

// З класної роботи 
let firstUserAge, firstUserName, firstUserHobby, firstUser, firstUserArray,
    secondUserAge, secondUserName, secondUserHobby, secondUser, secondUserArray, 
    thirdUserAge, thirdUserName, thirdUserHobby, thirdUser, thirdUserArray,
    users, usersArray; 
firstUserAge = +prompt('Please, enter your age.');
if (firstUserAge && !isNaN(firstUserAge)) {
    firstUserName = prompt('Please, enter your name.');
    if (firstUserName && isNaN(firstUserName)) {
        firstUserHobby = prompt('Please, enter your hobby.');
        if (firstUserHobby && isNaN(firstUserHobby)) {
            firstUser = `${firstUserAge} ${firstUserName} ${firstUserHobby}`;
            firstUserArray = firstUser.toString().split(' ').map(String);
            console.log(firstUser, firstUserArray);
        } else {
            alert('You enter your hobby in numeric format! Please, restart the page and write your hobby in string format.');
        }
    } else {
        alert('You enter your name in numeric format! Please, restart the page and write your name in string format.');  
    }
} else {
    alert('You enter your age as 0 or in not numeric format! Please, restart the page and write your age in numeric format.'); 
}

secondUserAge = +prompt('Please, enter your age.');
if (secondUserAge && !isNaN(secondUserAge)) {
    secondUserName = prompt('Please, enter your name.');
    if (secondUserName && isNaN(secondUserName)) {
        secondUserHobby = prompt('Please, enter your hobby.');
        if (secondUserHobby && isNaN(secondUserHobby)) {
            secondUser = `${secondUserAge} ${secondUserName} ${secondUserHobby}`;
            secondUserArray = secondUser.toString().split(' ').map(String);
            console.log(secondUser, secondUserArray);
        } else {
            alert('You enter your hobby in numeric format! Please, restart the page and write your hobby in string format.');
        }
    } else {
        alert('You enter your name in numeric format! Please, restart the page and write your name in string format.');  
    }
} else {
    alert('You enter your age as 0 or in not numeric format! Please, restart the page and write your age in numeric format.'); 
}

thirdUserAge = +prompt('Please, enter your age.');
if (thirdUserAge && !isNaN(thirdUserAge)) {
    thirdUserName = prompt('Please, enter your name.');
    if (thirdUserName && isNaN(thirdUserName)) {
        thirdUserHobby = prompt('Please, enter your hobby.');
        if (thirdUserHobby && isNaN(thirdUserHobby)) {
            thirdUser = `${thirdUserAge} ${thirdUserName} ${thirdUserHobby}`;
            thirdUserArray = thirdUser.toString().split(' ').map(String);
            console.log(thirdUser, thirdUserArray);
        } else {
            alert('You enter your hobby in numeric format! Please, restart the page and write your hobby in string format.');
        }
    } else {
        alert('You enter your name in numeric format! Please, restart the page and write your name in string format.');  
    }
} else {
    alert('You enter your age as 0 or in not numeric format! Please, restart the page and write your age in numeric format.'); 
}

users = `${firstUserArray} ${secondUserArray} ${thirdUserArray}`;
usersArray = users.toString().split(' ').map(String);
console.log(usersArray);

