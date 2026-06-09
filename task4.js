// Task 1: Age Category Finder
{
    let age = 25; 

    if (age >= 0 && age <= 12) {
        console.log("Child");
    } else if (age >= 13 && age <= 19) {
        console.log("Teenager");
    } else if (age >= 20 && age <= 59) {
        console.log("Adult");
    } else if (age >= 60) {
        console.log("Senior Citizen");
    }
}

// Task 2: Salary Hike Calculator
{
    let salary = 25000;
    let hikePercent = 0;

    if (salary < 20000) {
        hikePercent = 20;
    } else if (salary >= 20000 && salary <= 50000) {
        hikePercent = 10;
    } else if (salary > 50000) {
        hikePercent = 5;
    }

    let newSalary = salary + (salary * hikePercent / 100);
    console.log("Old Salary : " + salary);
    console.log("New Salary : " + newSalary);
}

// Task 3: Electricity Department
{
    let units = 150;
    let bill = 0;

    if (units <= 100) {
        bill = units * 5;
    } else if (units <= 200) {
        bill = units * 7;
    } else {
        bill = units * 10;
    }

    console.log("Total Electricity Bill : ₹" + bill);
}

// Task 4: Simple ATM
{
    let balance = 10000;
    let withdrawal = 3000;

    if (withdrawal <= balance) {
        balance -= withdrawal;
        console.log("Withdrawal Successful");
        console.log("Remaining Balance : ₹" + balance);
    } else {
        console.log("Insufficient Funds");
    }
}

// Task 5: Login Validation
{
    let username = "admin";
    let password = "12345";

    if (username === "admin" && password === "12345") {
        console.log("Login Successful");
    } else {
        console.log("Invalid Credentials");
    }
}

// Task 6: Mobile Recharge Offer
{
    let rechargeAmount = 350;

    if (rechargeAmount >= 499) {
        console.log("Netflix Offer applied!");
    } else if (rechargeAmount >= 299) {
        console.log("2GB Extra Data applied!");
    } else {
        console.log("No Offer available.");
    }
}

// Task 7: Traffic Signal System
{
    let color = "Yellow";

    switch (color.toLowerCase()) {
        case "red":
            console.log("Stop");
            break;
        case "yellow":
            console.log("Ready");
            break;
        case "green":
            console.log("Go");
            break;
        default:
            console.log("Invalid Signal");
    }
}

// Task 8: Employee Attendance
{
    let totalWorkingDays = 200;
    let presentDays = 160;

    let attendancePercent = (presentDays / totalWorkingDays) * 100;
    console.log("Attendance: " + attendancePercent + "%");

    if (attendancePercent >= 75) {
        console.log("Eligible");
    } else {
        console.log("Not Eligible");
    }
}

// Task 9: Bus Ticket Booking
{
    let ticketPrice = 500;
    let noOfTickets = 3;

    let totalAmount = ticketPrice * noOfTickets;
    let gst = totalAmount * 0.05;
    let finalAmount = totalAmount + gst;

    console.log("Total Amount : ₹" + totalAmount);
    console.log("GST (5%) : ₹" + gst);
    console.log("Final Amount : ₹" + finalAmount);
}

// Task 10: Restaurant Bill
{
    let foodCost = 2500;
    let finalBill = foodCost;

    if (foodCost > 2000) {
        let discount = foodCost * 0.10;
        finalBill = foodCost - discount;
    }

    console.log("Final Restaurant Bill : ₹" + finalBill);
}

// Task 11: Police Recruitment
{
    let age = 22;
    let height = 165;
    let weight = 50;

    if (age >= 18) {
        if (height >= 160) {
            if (weight >= 55) {
                console.log("Selected for Recruitment");
            } else {
                console.log("Rejected: Weight must be 55kg or above.");
            }
        } else {
            console.log("Rejected: Height must be 160cm or above.");
        }
    } else {
        console.log("Rejected: Age must be 18 or above.");
    }
}

// Task 12: Student Result
{
    let m1 = 85, m2 = 90, m3 = 78, m4 = 88, m5 = 92;
    
    let totalMarks = m1 + m2 + m3 + m4 + m5;
    let percentage = totalMarks / 5;
    
    console.log("Total Marks : " + totalMarks);
    console.log("Percentage : " + percentage + "%");

    if (percentage >= 90) {
        console.log("Grade: A+");
    } else if (percentage >= 80) {
        console.log("Grade: A");
    } else if (percentage >= 70) {
        console.log("Grade: B");
    } else if (percentage >= 60) {
        console.log("Grade: C");
    } else {
        console.log("Grade: Fail");
    }
}

// Task 13: Employee Shift Finder
{
    let time = 15; // 24-hour format

    if (time >= 6 && time < 14) {
        console.log("Morning Shift");
    } else if (time >= 14 && time < 22) {
        console.log("Afternoon Shift");
    } else if ((time >= 22 && time <= 24) || (time >= 0 && time < 6)) {
        console.log("Night Shift");
    } else {
        console.log("Invalid Time");
    }
}

// Task 14: Loan Eligibility
{
    let age = 25;
    let salary = 30000;
    let experience = 3;

    if (age >= 21 && salary >= 25000 && experience >= 2) {
        console.log("Eligible for Loan");
    } else {
        console.log("Not Eligible for Loan");
    }
}

// Task 15: Cab Fare Calculator
{
    let distance = 8;
    let fare = 0;

    if (distance <= 5) {
        fare = distance * 20;
    } else {
        fare = (5 * 20) + ((distance - 5) * 15);
    }

    console.log("Total Cab Fare : ₹" + fare);
}

// Task 16: Multiplication Table Generator
{
    let num = 5;

    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}

// Task 17: Password Checker
{
    let password = "mysecretpassword";
    let length = password.length;

    if (length < 6) {
        console.log("Weak Password");
    } else if (length >= 6 && length <= 10) {
        console.log("Medium Password");
    } else {
        console.log("Strong Password");
    }
}

// Task 18: Company Bonus System
{
    let experience = 4;
    let salary = 40000;
    let bonusPercent = 0;

    if (experience >= 0 && experience <= 2) {
        bonusPercent = 5;
    } else if (experience >= 3 && experience <= 5) {
        bonusPercent = 10;
    } else if (experience >= 6) {
        bonusPercent = 20;
    }

    let bonusAmount = salary * bonusPercent / 100;
    console.log("Bonus Awarded : ₹"+ bonusAmount);
}

// Task 19: Countdown Timer
{
    let timer = 10;

    while (timer > 0) {
        console.log(timer);
        timer--;
    }
    console.log("Happy New Year");
}

// Task 20: Interview Selection System
{
    let degree = "Completed";
    let communication = "Good";
    let techScore = 65;

    if (degree === "Completed") {
        if (communication === "Good") {
            if (techScore >= 70) {
                console.log("Selected for the position.");
            } else {
                console.log("Rejected: Technical Score is below 70.");
            }
        } else {
            console.log("Rejected: Communication needs improvement.");
        }
    } else {
        console.log("Rejected: Degree is not completed.");
    }
}