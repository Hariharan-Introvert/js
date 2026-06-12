// Task 1: Employee Bonus Calculator
{
    console.log("--- Task 1: Employee Bonus ---");
    let empName = "Rahul";
    let salary = 40000;
    let experience = 3;
    let bonusPct = 0;

    if (experience >= 5) {
        bonusPct = 20;
    } else if (experience >= 2) {
        bonusPct = 10;
    } else {
        bonusPct = 5;
    }

    let bonusAmount = (salary * bonusPct) / 100;
    let finalSalary = salary + bonusAmount;

    console.log(`Employee: ${empName}`);
    console.log(`Bonus Awarded: ${bonusPct}% (₹${bonusAmount})`);
    console.log(`Final Salary: ₹${finalSalary}`);
}

// Task 2: College Admission System
{
    console.log("\n--- Task 2: College Admission ---");
    let studentName = "Kiran";
    let age = 18;
    let percentage = 75;

    if (age >= 17) {
        if (percentage >= 60) {
            console.log(`${studentName}: Admission Approved.`);
        } else {
            console.log(`${studentName}: Admission Rejected (Percentage too low).`);
        }
    } else {
        console.log(`${studentName}: Admission Rejected (Underage).`);
    }
}

// Task 3: Food Delivery Menu
{
    console.log("\n--- Task 3: Food Menu ---");
    let selection = 3;

    switch (selection) {
        case 1:
            console.log("Order Confirmed : Pizza");
            break;
        case 2:
            console.log("Order Confirmed : Burger");
            break;
        case 3:
            console.log("Order Confirmed : Shawarma");
            break;
        case 4:
            console.log("Order Confirmed : Fried Rice");
            break;
        default:
            console.log("Invalid Selection");
    }
}

// Task 4: Attendance Tracker
{
    console.log("\n--- Task 4: Attendance Tracker ---");
    let students = ["Amit", "Bala", "Chand", "Dev", "Ezhil", "Farhan", "Gita", "Hari", "Indu", "Jai"];
    
    console.log("Students Present:");
    for (let student of students) {
        console.log(student);
    }
    console.log(`Total students: ${students.length}`);
}

// Task 5: E-Commerce Cart
{
    console.log("\n--- Task 5: E-Commerce Cart ---");
    let cart = [
        { product: "Mobile", price: 15000 },
        { product: "Headset", price: 2000 },
        { product: "Charger", price: 1000 }
    ];

    let totalValue = 0;
    let expensiveProduct = cart[0];

    console.log("Items in Cart:");
    for (let item of cart) {
        console.log(`- ${item.product}: ₹${item.price}`);
        totalValue += item.price;
        
        if (item.price > expensiveProduct.price) {
            expensiveProduct = item;
        }
    }

    console.log(`Total Cart Value: ₹${totalValue}`);
    console.log(`Most Expensive Item: ${expensiveProduct.product} (₹${expensiveProduct.price})`);
}

// Task 6: Bank Account Management
{
    console.log("\n--- Task 6: Bank Account ---");
    let balance = 10000;

    function deposit(amount) {
        balance += amount;
        console.log(`Deposited: ₹${amount}`);
    }

    function withdraw(amount) {
        if (amount <= balance) {
            balance -= amount;
            console.log(`Withdrew: ₹${amount}`);
        } else {
            console.log("Insufficient balance!");
        }
    }

    function checkBalance() {
        console.log(`Remaining Balance: ₹${balance}`);
    }

    deposit(5000);
    withdraw(3000);
    checkBalance();
}

// Task 7: Movie Ticket Booking
{
    console.log("\n--- Task 7: Movie Tickets ---");
    let age = 25;
    let ticketPrice = 0;

    if (age < 5) {
        ticketPrice = 0;
        console.log("Free Ticket");
    } else if (age >= 5 && age <= 18) {
        ticketPrice = 100;
    } else if (age > 18 && age <= 60) {
        ticketPrice = 200;
    } else if (age > 60) {
        ticketPrice = 120;
    }

    if (ticketPrice > 0) {
        console.log(`Ticket Price: ₹${ticketPrice}`);
    }
}

// Task 8: Online Shopping Discount
{
    console.log("\n--- Task 8: Shopping Discount ---");
    let purchase = 4500;
    let discountPct = 0;

    if (purchase > 5000) {
        discountPct = 20;
    } else if (purchase > 3000) {
        discountPct = 10;
    } else if (purchase > 1000) {
        discountPct = 5;
    }

    let discountAmt = (purchase * discountPct) / 100;
    let finalAmount = purchase - discountAmt;

    console.log(`Original Amount : ₹${purchase}`);
    console.log(`Discount : ₹${discountAmt} (${discountPct}%)`);
    console.log(`Final Amount : ₹${finalAmount}`);
}

// Task 9: Food Inventory System
{
    console.log("\n--- Task 9: Food Inventory ---");
    let inventory = ["Rice", "Oil", "Sugar", "Milk", "Egg"];
    
    inventory.push("Bread", "Butter");
    
    inventory.shift();

    inventory.pop();
    
    let hasMilk = inventory.includes("Milk");
    console.log(`Does inventory have Milk? ${hasMilk ? "Yes" : "No"}`);
    
    console.log("Final Inventory:", inventory);
}

// Task 10: Hospital Patient Management
{
    console.log("\n--- Task 10: Patient Management ---");
    let patient = {
        patientName: "Arun",
        age: 45,
        disease: "Fever",
        doctor: "Dr. Smith"
    };

    console.log("Details using for-in loop:");
    for (let key in patient) {
        console.log(`${key}: ${patient[key]}`);
    }

    const { patientName, age, disease, doctor } = patient;
    
    console.log("\nExtracted via Destructuring:");
    console.log(`Name: ${patientName}`);
    console.log(`Age: ${age}`);
    console.log(`Disease: ${disease}`);
    console.log(`Doctor: ${doctor}`);
}

// Task 11: Amazon Order Tracker
{
    console.log("\n--- Task 11: Order Tracker ---");
    
    function sendSMS() {
        console.log("SMS Sent To Customer");
    }

    function placeOrder(callback) {
        console.log("Order Placed Successfully");
        callback();
    }

    placeOrder(sendSMS);
}

// Task 12: Cashback Offer Generator
{
    console.log("\n--- Task 12: Offer Generator ---");
    
    function* offerGenerator() {
        yield "10% Cashback";
        yield "20% Cashback";
        yield "Free Delivery";
        yield "Buy 1 Get 1";
    }

    const offer = offerGenerator();

    console.log(offer.next().value);
    console.log(offer.next().value);
    console.log(offer.next().value);
    console.log(offer.next().value);
}

// Task 13: Employee Database
{
    console.log("\n--- Task 13: Employee Database ---");
    let employees = [
        { id: 1, name: "Rahul", salary: 25000 },
        { id: 2, name: "Kavin", salary: 30000 },
        { id: 3, name: "John", salary: 40000 }
    ];

    let totalExpense = 0;
    let topEarner = employees[0];

    console.log("Employee Names:");
    for (let emp of employees) {
        console.log(emp.name);
        totalExpense += emp.salary;
        
        if (emp.salary > topEarner.salary) {
            topEarner = emp;
        }
    }

    console.log(`Total Salary Expense: ₹${totalExpense}`);
    console.log(`Highest Salary: ${topEarner.name} (₹${topEarner.salary})`);
}

// Task 14: Railway Reservation System
{
    console.log("\n--- Task 14: Railway Reservation ---");
    let totalSeats = 50;

    function bookSeats(seatsRequired) {
        if (seatsRequired <= totalSeats) {
            totalSeats -= seatsRequired;
            console.log(`${seatsRequired} seat(s) successfully booked.`);
            console.log(`Available seats left: ${totalSeats}`);
        } else {
            console.log(`Booking rejected! Only ${totalSeats} seats available.`);
        }
    }

    bookSeats(4);
    bookSeats(50);
}

// Task 15: Mobile Store Billing System
{
    console.log("\n--- Task 15: Store Billing ---");
    
    let storePrices = {
        Mobile: 20000,
        Laptop: 50000,
        Headphone: 2000,
        Smartwatch: 5000
    };

    let selectedProducts = ["Laptop", "Smartwatch"];
    let totalAmount = 0;

    console.log("Selected Products:");
    for (let item of selectedProducts) {
        console.log(`- ${item}: ₹${storePrices[item]}`);
        totalAmount += storePrices[item];
    }

    let gst = (totalAmount * 18) / 100;
    let finalBill = totalAmount + gst;

    console.log(`\nTotal Amount: ₹${totalAmount}`);
    console.log(`GST (18%): ₹${gst}`);
    console.log(`Final Bill: ₹${finalBill}`);
}