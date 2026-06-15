// Task 1: Traffic Signal Management
{
    console.log("--- Task 1: Traffic Signal ---");
    let signalColor = "Red";

    switch (signalColor.toLowerCase()) {
        case "red":
            console.log("Action: STOP");
            break;
        case "yellow":
            console.log("Action: READY / SLOW DOWN");
            break;
        case "green":
            console.log("Action: GO");
            break;
        default:
            console.log("Invalid Signal Color");
    }
}

// Task 2: Employee Attendance Report
{
    console.log("\n--- Task 2: Attendance Report ---");
    for (let i = 1; i <= 30; i++) {
        console.log(`Employee ${i} Present`);
    }
}

// Task 3: ATM Cash Withdrawal
{
    console.log("\n--- Task 3: ATM Withdrawal ---");
    let balance = 10000;
    
    while (balance > 0) {
        balance -= 500;
        console.log(`₹500 Withdrawn. Remaining Balance: ₹${balance}`);
    }
}

// Task 4: College Admission Eligibility
{
    console.log("\n--- Task 4: College Admission ---");
    let age = 17;
    let percentage = 75;
    let entrancePassed = true;

    if (age >= 18) {
        if (percentage >= 70) {
            if (entrancePassed) {
                console.log("Status: Admission Approved!");
            } else {
                console.log("Status: Rejected. Reason: Entrance Exam Failed.");
            }
        } else {
            console.log("Status: Rejected. Reason: Percentage below 70.");
        }
    } else {
        console.log("Status: Rejected. Reason: Age is under 18.");
    }
}

// Task 5: Food Delivery Status
{
    console.log("\n--- Task 5: Delivery Status ---");
    
    function confirmDelivery(customerName, foodItem, deliveryAddress) {
        console.log(`Order Confirmed! ${foodItem} is on its way to ${customerName} at ${deliveryAddress}.`);
    }

    confirmDelivery("Naveen", "Chicken Biryani", "123 Tech Park, Bangalore");
}

// Task 6: Salary Processing System
{
    console.log("\n--- Task 6: Salary Processing ---");
    
    function calculateSalary(basic, hra, allowances) {
        return basic + hra + allowances;
    }

    function calculateBonus(finalSalary) {
        let bonus = finalSalary * 0.10;
        console.log(`Calculated Bonus on salary ₹${finalSalary}: ₹${bonus}`);
        return bonus;
    }

    let mySalary = calculateSalary(20000, 5000, 2000);
    calculateBonus(mySalary);
}

// Task 7: E-commerce Discount Engine
{
    console.log("\n--- Task 7: Discount & Invoice (Callback) ---");
    
    function applyDiscount(price, discountPercent, callback) {
        let discountAmount = (price * discountPercent) / 100;
        let finalPrice = price - discountAmount;
        console.log(`Original: ₹${price} | Discount Applied: ${discountPercent}%`);
        callback(finalPrice); // Trigger the invoice generation
    }

    function generateInvoice(amount) {
        console.log(`Invoice Generated. Total to pay: ₹${amount}`);
    }

    applyDiscount(5000, 20, generateInvoice);
}

// Task 8: Promotional Offers
{
    console.log("\n--- Task 8: Promo Offers (Generator) ---");
    
    function* offerGenerator() {
        yield "10% OFF";
        yield "20% OFF";
        yield "Free Delivery";
        yield "Buy 1 Get 1";
    }

    const getOffer = offerGenerator();

    console.log(getOffer.next().value);
    console.log(getOffer.next().value);
    console.log(getOffer.next().value);
    console.log(getOffer.next().value); 
}

// Task 9: Student Database Merge
{
    console.log("\n--- Task 9: Merge DB (Spread) ---");
    let scienceStudents = ["Rahul", "Priya"];
    let commerceStudents = ["Amit", "Sneha"];
    
    let allStudents = [...scienceStudents, ...commerceStudents];
    console.log("Merged Database:", allStudents);
}

// Task 10: Online Exam System
{
    console.log("\n--- Task 10: Exam System (Rest) ---");
    
    function calculateTotalMarks(studentName, ...marks) {
        let total = 0;
        for (let mark of marks) {
            total += mark;
        }
        console.log(`${studentName} scored a total of ${total} marks.`);
    }

    calculateTotalMarks("Harini", 85, 90, 78, 92, 88); 
}

// Task 11: Employee Profile
{
    console.log("\n--- Task 11: Employee Destructuring ---");
    let employee = {
        name: "Vikram",
        department: "Development",
        salary: 60000,
        experience: "4 Years"
    };

    const { name, department, salary, experience } = employee;
    
    console.log(`Name: ${name}`);
    console.log(`Dept: ${department}`);
    console.log(`Salary: ₹${salary}`);
    console.log(`Experience: ${experience}`);
}

// Task 12: Product Inventory Filter
{
    console.log("\n--- Task 12: Filter Products ---");
    let products = [
        { name: "Mouse", price: 800, category: "Accessories" },
        { name: "Smartphone", price: 15000, category: "Electronics" },
        { name: "Keyboard", price: 1200, category: "Accessories" },
        { name: "Monitor", price: 8000, category: "Electronics" }
    ];

    let premiumProducts = products.filter(product => product.price > 5000);
    console.log("Products above ₹5000:", premiumProducts);
}

// Task 13: Find First Premium Customer
{
    console.log("\n--- Task 13: Find Premium Customer ---");
    let customers = [
        { name: "John", purchaseAmount: 12000 },
        { name: "Sarah", purchaseAmount: 55000 },
        { name: "Mike", purchaseAmount: 60000 }
    ];

    let premiumCustomer = customers.find(customer => customer.purchaseAmount > 50000);
    console.log("First Premium Customer found:", premiumCustomer);
}

// Task 14: Company Expense Tracker
{
    console.log("\n--- Task 14: Reduce Expenses ---");
    let expenses = [5000, 12000, 3000, 8000, 2000];

    let totalExpense = expenses.reduce((total, currentExpense) => total + currentExpense, 0);
    console.log(`Total Company Expense: ₹${totalExpense}`);
}

// Task 15: Gaming Tournament Verification
{
    console.log("\n--- Task 15: Verify Age (Every) ---");
    let players = [
        { name: "Player1", age: 21 },
        { name: "Player2", age: 19 },
        { name: "Player3", age: 22 }
    ];

    let allAdults = players.every(player => player.age >= 18);
    console.log(`Are all players 18 or older? ${allAdults ? "Yes" : "No"}`);
}

// Task 16: Job Portal Search
{
    console.log("\n--- Task 16: Check Skills (Some) ---");
    let candidates = [
        { name: "A", skills: ["HTML", "CSS"] },
        { name: "B", skills: ["Java", "Spring"] },
        { name: "C", skills: ["React", "Node"] }
    ];

    let hasReactDev = candidates.some(candidate => candidate.skills.includes("React"));
    console.log(`Is there at least one React developer? ${hasReactDev ? "Yes" : "No"}`);
}

// Task 17: Mobile Number Validator
{
    console.log("\n--- Task 17: Validate Mobile ---");
    let mobile = "9876543210";

    if (mobile.length === 10 && (mobile.startsWith("6") || mobile.startsWith("7") || mobile.startsWith("8") || mobile.startsWith("9"))) {
        console.log(`Mobile number ${mobile} is VALID.`);
    } else {
        console.log(`Mobile number ${mobile} is INVALID.`);
    }
}

// Task 18: URL Slug Generator
{
    console.log("\n--- Task 18: URL Slug (Split + Join) ---");
    let courseTitle = "Learn JavaScript Complete Course";
    let urlSlug = courseTitle.toLowerCase().split(" ").join("-");
    console.log(`Original: ${courseTitle}`);
    console.log(`Slug: ${urlSlug}`);
}

// Task 19: Employee Sorting Dashboard
{
    console.log("\n--- Task 19: Sort Employees ---");
    let employees = [
        { name: "Arun", salary: 25000 },
        { name: "Bala", salary: 50000 },
        { name: "Chitra", salary: 35000 }
    ];

    let highestToLowest = [...employees].sort((a, b) => b.salary - a.salary);
    console.log("Highest to Lowest Salary:", highestToLowest);

    let lowestToHighest = [...employees].sort((a, b) => a.salary - b.salary);
    console.log("Lowest to Highest Salary:", lowestToHighest);
}

// Task 20: Movie Booking System
{
    console.log("\n--- Task 20: Map Movie IDs ---");
    let movies = ["Leo", "Salaar", "Dune"];

    let bookings = movies.map((movieName, index) => {
        return {
            bookingID: `BOK-${100 + index}`,
            movie: movieName
        };
    });

    console.log("Generated Bookings:", bookings);
}