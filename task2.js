// Task 1: Student Result Checker
let marks = 75;

let result = marks >= 35 ? "Pass" : "Fail";
console.log("Result:", result);

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else {
    console.log("No Grade");
}

// Task 2: Employee Bonus Calculator
let salary = 25000;

let bonus = salary * 10 / 100;
let finalSalary = salary + bonus;

console.log("Original Salary :", salary);
console.log("Bonus :", bonus);
console.log("Final Salary :", finalSalary);

// Task 3: User Login Validation
let email = "hariharan@gmail.com";
let password = "password123";

if (email === "hariharan@gmail.com" && password === "password123") {
    console.log("Login Success");
} else {
    console.log("Login Failed");
}

// Task 4: Product Discount Calculator
let price = 2000;

let finalAmount = price > 1000 ? price - (price * 20 / 100) : price;

console.log("Original Price :", price);
console.log("Final Amount :", finalAmount);

// Task 5: Array Product Management
let products = ["Laptop", "Mobile", "Mouse", "Keyboard"];

console.log("First Product :", products[0]);
console.log("Last Product :", products[products.length - 1]);
console.log("Total Products :", products.length);

// Task 6: Employee Object
let employee = {
    name: "HariHaran Esakkimuthu",
    department: "Software Developer",
    salary: 30000
};

console.log("Employee Details :", employee);
console.log("Employee Name :", employee.name);
console.log("Salary :", employee.salary);

// Task 7: E-Commerce Cart Total
let shirt = 500;
let pant = 1000;
let shoe = 1500;

let totalBill = shirt + pant + shoe;
let Discount = totalBill * 10 / 100;
let finalBill = totalBill - Discount;

console.log("Total Bill :", totalBill);
console.log("Discount :", Discount);
console.log("Final Amount :", finalBill);

// Task 8: Age Eligibility Checker
let age = 19;

if (age >= 18) {
    console.log("Eligible for Voting");
} else {
    console.log("Not Eligible");
}

// Task 9: Increment Decrement Practice
let a = 10;

console.log("Initial Value :", a);

a++;
console.log("After a++ :", a);

++a;
console.log("After ++a :", a);

a--;
console.log("After a-- :", a);

--a;
console.log("After --a :", a);

// Task 10: Mini Employee Attendance System
let isPresent = true;
let completedTask = true;

if (isPresent && completedTask) {
    console.log("Eligible for Salary");
} else {
    console.log("Not Eligible");
}

// Bonus Company-Level Task: Employee Management Console App
let employeeData = {
    id: 101,
    name: "HariHaran Esakkimuthu",
    department: "Data Analyst",
    salary: 35000,
    experience: 2
};

console.log("Employee ID :", employeeData.id);
console.log("Employee Name :", employeeData.name);
console.log("Department :", employeeData.department);
console.log("Salary :", employeeData.salary);
console.log("Experience :", employeeData.experience, "Years");

let empBonus = employeeData.salary * 10 / 100;
let empFinalSalary = employeeData.salary + empBonus;

console.log("\nBonus :", empBonus);
console.log("Final Salary :", empFinalSalary);

let performanceStatus = employeeData.experience >= 2 ? "Good" : "Average";

console.log("Performance Status :", performanceStatus);