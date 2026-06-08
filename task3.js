// Task 1: Employee Salary Calculator
let basicSalary = 25000;

let hra = basicSalary * 0.20;
let bonus = basicSalary * 0.10;
let totalBeforeTax = basicSalary + hra + bonus;
let tax = totalBeforeTax * 0.05;
let finalSalary = totalBeforeTax - tax;

console.log("Basic Salary : " + basicSalary);
console.log("HRA : " + hra);
console.log("Bonus : " + bonus);
console.log("Tax : " + tax);
console.log("Final Salary : " + finalSalary);


// Task 2: Student Grade System
let marks = 85; 

if (marks >= 90 && marks <= 100) {
    console.log("A+");
} else if (marks >= 80 && marks < 90) {
    console.log("A");
} else if (marks >= 70 && marks < 80) {
    console.log("B");
} else if (marks >= 60 && marks < 70) {
    console.log("C");
} else {
    console.log("Fail");
}


// Task 3: Login Authentication System
let username = "admin";
let password = "wrong_password"; 

if (username === "admin") {
    if (password === "12345") {
        console.log("Login Success");
    } else {
        console.log("Invalid Password");
    }
} else {
    console.log("Invalid Username");
}


// Task 4: ATM Withdrawal Machine
let balance = 5000;
let withdrawalAmount = 2000; 

if (withdrawalAmount > balance) {
    console.log("Insufficient Balance");
} else {
    balance -= withdrawalAmount;
    console.log("Withdrawal Success");
    console.log("Remaining Balance : " + balance);
}


// Task 5: E-Commerce Discount System
let purchase = 7500; 
let discountPct = 0;

if (purchase >= 10000) {
    discountPct = 20;
} else if (purchase >= 5000) {
    discountPct = 10;
} else if (purchase >= 2000) {
    discountPct = 5;
}

let discountAmt = (purchase * discountPct) / 100;
let finalAmount = purchase - discountAmt;

console.log("Original Amount : " + purchase);
console.log("Discount : " + discountAmt);
console.log("Final Amount : " + finalAmount);


// Task 6: Traffic Fine Checker
let hasHelmet = false;
let hasLicense = false;

if (!hasHelmet && !hasLicense) {
    console.log("₹3000 Fine");
} else if (!hasHelmet) {
    console.log("₹1000 Fine");
} else if (!hasLicense) {
    console.log("₹2000 Fine");
} else {
    console.log("No Fine");
}


// Task 7: Employee Attendance Tracker
let attendance = ["P", "P", "A", "P", "A", "P", "P"];
let presentDays = 0;
let absentDays = 0;

for (let i = 0; i < attendance.length; i++) {
    if (attendance[i] === "P") {
        presentDays++;
    } else if (attendance[i] === "A") {
        absentDays++;
    }
}

console.log("Present Days : " + presentDays);
console.log("Absent Days : " + absentDays);


// Task 8: Product Inventory Management
let product = {
    productName: "Laptop",
    price: 50000,
    stock: 10
};

for (let key in product) {
    console.log(key + " : " + product[key]);
}


// Task 9: Cab Fare Calculator
let distance = 12;
let fare = 0;

if (distance <= 5) {
    fare = distance * 20;
} else if (distance <= 10) {
    fare = (5 * 20) + ((distance - 5) * 15);
} else {
    fare = (5 * 20) + (5 * 15) + ((distance - 10) * 10); 
}

console.log("Total Fare : ₹" + fare);


// Task 10: Mini Employee Management System
let employees = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kiran", salary: 30000 },
    { id: 3, name: "Navi", salary: 40000 }
];

console.log("--- Stackly Employee Roster ---");

let totalSalary = 0;
let highestSalaryEmp = employees[0];
let lowestSalaryEmp = employees[0];

for (let i = 0; i < employees.length; i++) {
    console.log("ID: " + employees[i].id + " | Name: " + employees[i].name + " | Salary: " + employees[i].salary);
    
    totalSalary += employees[i].salary;

    if (employees[i].salary > highestSalaryEmp.salary) {
        highestSalaryEmp = employees[i];
    }
    
    if (employees[i].salary < lowestSalaryEmp.salary) {
        lowestSalaryEmp = employees[i];
    }
}

console.log("\nTotal Employees : " + employees.length);
console.log("Highest Salary Employee : " + highestSalaryEmp.name + " (" + highestSalaryEmp.salary + ")");
console.log("Lowest Salary Employee : " + lowestSalaryEmp.name + " (" + lowestSalaryEmp.salary + ")");
console.log("Total Salary Expenditure : " + totalSalary);