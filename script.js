// Write a function that takes a name and says hello to the name. 

function hello(name) {
    console.log(`Hi ${name}`)
} 
hello("Marcelly Belly")

// Modify your hello program such that if no name is given: hello(), 
// it will print "Hello, world!", otherwise it behaves the same as previously.

function hello(name) {
    if (name == null) {
        console.log("Hello, world!")
    } else {
        console.log(`Hi ${name}`)
    }
} 
hello()

// Write a madlib function, which is given a name and a subject. 
// It will return (not print) a new string: (name)'s favorite subject in school is (subject).

function madlib(name, subject) {
    console.log(`${name}'s favorite subject in school is ${subject}!`)
}
madlib("Marcel", "english")

// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair, and poor) 
// and returns the dollar amount for the tip. Based on:

function tipAmount1(bill,los) {
    if (los == "good") {
        finalAmount = bill*.2
    } else if (los == "fair") {
        finalAmount = bill*.15
    } else if (los == "poor") {
        finalAmount = bill*0
    }

    console.log(finalAmount)

}
tipAmount1(10,"poor")

// Write a function totalAmount that takes the same arguments as 
// tipAmount except it returns the total as the tip amount plus the bill amount. 
// This function may make use of tipAmount as a sub-task.

function tipAmount2(bill,los,ppl) {
    if (los == "good") {
        finalAmount = bill*1.2
    } else if (los == "fair") {
        finalAmount = bill*1.15
    } else if (los == "poor") {
        finalAmount = bill
    }

    console.log(finalAmount)

}
tipAmount2(300,"good")

// Write a function splitAmount that takes the bill amount, the level of service, and the number of people to split the bill between. 
// It will return the final amount for each person.

function tipAmount3(bill,los,ppl) {
    if (los == "good") {
        finalAmount = bill*1.2
    } else if (los == "fair") {
        finalAmount = bill*1.15
    } else if (los == "poor") {
        finalAmount = bill
    }

    let splitAmount = finalAmount/ppl

    console.log(splitAmount)

}
tipAmount3(345.62,"good",6)