const prompt = require('prompt-sync')();

// //program-- Balance

// let balanceString=prompt("Enter Current Balance ");
// let balance=parseFloat(balanceString);

// // let amount=parseFloat(prompt("Enter amount to deposit"));

// // if(amount>=10000){
// //     console.log("Funds may be hold for 3 days");
// // } 
// // balance=balance+amount;
// // console.log("Balance is now $"+balance);


// //program --withdraw

//  let amounts=parseFloat(prompt("Enter amount to withdraw "));
//  if(amounts <= balance){
//     balance=balance-amounts;
//     console.log("your balance is now "+balance);

//  }
//  else
//  {
//     console.log("cannot withdraw "+amounts);
//     console.log("You have only "+balance+"sorry");

//  }
//  console.log("Thank you for banking with us");


//program -- discount

// let price=parseFloat(prompt("Enter price "));
// let age=parseFloat(prompt("Enter age "));
// let discount;
// if(age<=21 || age>=65)
// {
//     discount=0.10;
// }
// else{
//     discount=0.05;

// }
// console.log("you get "+(discount*100)+"% ofter");
// let discount_price=price*(1.0-discount);
// console.log("Your price is "+discount_price);

//program -- quadratic equation

// let a=parseFloat(prompt("Enter a "));
// let b=parseFloat(prompt("Enter b "));
// let c=parseFloat(prompt("Enter c "));
// let root,root1,root2;
// console.log(a+"x^2+"+b+"x+"+c+"=0");
// let discriminant=b*b-4*a*c;

// if(discriminant<0)
// {
//     console.log("No solution...");

// }
// else if(discriminant==0){
//      root=-b/(2*a);
//     console.log("The solution is "+root);
// }
// else{
//     root1=(-b+Math.sqrt(discriminant))/(2*a);
//     root2=(-b-Math.sqrt(discriminant))/(2*a);
//     console.log("The solution is "+root1+" and "+root2);
// }

//program - Withdraw and deposit

// let balance=parseFloat(prompt("Enter balance amount "));
// let transaction =prompt("Enter D for deposit and W for withdraw ");
// if(transaction=="D" || transaction=="d"){
//     let amount=parseFloat(prompt("Enter amount to deposit "));
//     if(amount<=0)
//     {
//         console.log("Enter Correct amount");

//     }
//     else{
//         if(amount>=10000){
//             console.log("Funds may be hold for 3 days");
//         }
//         else{
//             balance=balance+amount;
//             console.log("Balance is now "+balance);
//         }
// }
// }
// else if(transaction=="w" || transaction=="W"){
//     let amount=parseFloat(prompt("Enter amount "));
//     if(amount>balance){
//         console.log("Insufficient balance...."+"your balance is "+ balance);

//     }
//     else if(amount<=0){
//         console.log("Can't Withdraw");
//     }
//     else{
//         balance=balance-amount;
//         console.log("Your Current balance is "+balance);
//     }

// }
// else{
//     console.log("Enter D for deposit and W for withdraw");
// }

//program - Year

// let month=parseInt(prompt("Enter month(1-12) "));
// let year =parseInt(prompt("Enter Year in 4 digits "));
// let days=0;
// switch(month){
//     case 9:
//     case 4:
//     case 6:
//     case 11:
//         days=30;
//         break;
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         days=31;
//         break;
//     case 2:
//         if(((year %4==0)&&(year%100!=0))||(year%400==0)){
//             days=29;
//         }
//         else{
//             days=28;

//         }
//         break;
//     default:
//         days=-1;
//         break;
// }
// if(days>0){
//     console.log("Month number "+month+" in "+year+" has "+days+" days");

// }
// else{
//     console.log("Month is not range in 1-12")
// }


//Program - 

// let number=parseInt(prompt("Enter an integer greater than zero "));
// console.log("Number starts at "+number);
// let steps = 0;
// while(number!=1){
//     if(number%2==0){
//         number=number/2;
//     }
//     else{
//         number=number*3+1;

//     }
//     console.log("Number is now "+number);
//     steps=steps+1;
// }
// console.log("Number of steps "+steps);



//program - -

