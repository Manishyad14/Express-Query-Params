const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

//Question 1: Body Mass Index (BMI) Calculator 
app.get('/bmi' , (req,res)=>{
  let height = parseFloat(req.query.height) ; 
  let weight = parseFloat(req.query.weight) ; 

  let bmi = (weight/(height * height)) ; 
  res.send("Your BMI is " + bmi) ; 

})

//Question 2: Calculate grocery checkout price
app.get('/checkout' , (req,res)=>{
  let product = (req.query.product) ; 
  let units  = parseFloat(req.query.units) ; 
  let price   = parseFloat(req.query.price) ;

  let total_price  = (units * price) ; 
  res.send(" Your total for " + units + " " + product + " is " + total_price) ; 

})

//Question 3: Calculate grade percentage 
app.get('/grade' , (req,res)=>{
  let math = parseInt(req.query.math) ; 
  let science   = parseInt(req.query.science) ; 
  let english    = parseInt(req.query.english) ;

  let gradeInPercentage  = ((math+science+english)/300 * 100) ; 
  res.send("Your grade in percentage is "  + gradeInPercentage+"%") ; 

})

//Question 4: Return bill amount after applying discount
app.get('/discounted-price' , (req,res)=>{
  let cartTotal  = parseFloat(req.query.cartTotal) ; 
  let discount  = parseFloat(req.query.discount) ; 

  let new_price =  cartTotal - ( cartTotal * ( discount / 100 ) ) ; 
  res.send(" Result: Your bill amount is " + new_price) ; 

})

//Question 5: Split bill among friends
app.get('/split-bill' , (req,res)=>{
  let billAmount   = parseFloat(req.query.billAmount) ; 
  let numberOfFriends   = parseFloat(req.query.numberOfFriends) ; 

  let splitAmount = billAmount / numberOfFriends ; 
  res.send("Each friend owes Rs." + splitAmount + " " + "against the bill") ; 

})
//Question 6: Convert Celsius to Fahrenheit 
app.get('/celsius-to-fahrenheit' , (req,res)=>{
  let temperature    = parseFloat(req.query.temperature) ; 
  

  let fahrenheit = temperature * 9/5 + 32  ; 
  res.send("Result: " + fahrenheit  + " Fahrenheit") ; 

})

//Question 7: Calculate monthly salary
app.get('/monthly-salary' , (req,res)=>{
  let totalHours     = parseFloat(req.query.totalHours) ; 
  let hourlyWage      = parseFloat(req.query.hourlyWage) ;

  let monthlySalary = hourlyWage * totalHours ;  
  res.send("Result: Your monthly salary is ₹" + monthlySalary  ) ; 

})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
