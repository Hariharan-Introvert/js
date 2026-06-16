// Task 1: Employee Salary Management
{
    console.log("--- Task 1: Stackly Salary Management ---");
    let employees = [
        { id: 1, name: "Rahul", salary: 25000 },
        { id: 2, name: "Kavin", salary: 50000 },
        { id: 3, name: "John", salary: 75000 }
    ];

    let above40k = employees.filter(emp => emp.salary > 40000);
    console.log("Salary above ₹40,000:", above40k);

    let firstAbove60k = employees.find(emp => emp.salary > 60000);
    console.log("First employee above ₹60,000:", firstAbove60k.name);

    let totalExpense = employees.reduce((total, emp) => total + emp.salary, 0);
    console.log("Total Company Salary Expense: ₹" + totalExpense);

    let employeeNames = employees.map(emp => emp.name);
    console.log("Employee Names Array:", employeeNames);
}

// Task 2: College Admission Form
{
    console.log("\n--- Task 2: College Admission Form ---");
    function checkEligibility(student) {
        if (student.age >= 18 && student.percentage >= 60) {
            return "Admission Approved";
        } else {
            return "Admission Rejected";
        }
    }

    let applicant = { name: "Arun", age: 19, percentage: 75 };
    console.log(`${applicant.name}'s Status:`, checkEligibility(applicant));
}

// Task 3: E-Commerce Cart
{
    console.log("\n--- Task 3: E-Commerce Cart ---");
    let cart = [
        { product: "Shoes", price: 2000, qty: 2 },
        { product: "Watch", price: 1500, qty: 1 },
        { product: "Bag", price: 1000, qty: 3 }
    ];

    let totalBill = cart.reduce((total, item) => total + (item.price * item.qty), 0);
    console.log("Total Bill: ₹" + totalBill);

    let mostExpensive = cart.reduce((max, item) => item.price > max.price ? item : max, cart[0]);
    console.log("Most Expensive Product:", mostExpensive.product);

    let productNames = cart.map(item => item.product);
    console.log("All Products in Cart:", productNames.join(", "));
}

// Task 4: Traffic Fine System
{
    console.log("\n--- Task 4: Traffic Fine System ---");
    let signal = "red";

    switch (signal.toLowerCase()) {
        case "red":
            console.log("Action: STOP. Violation Fine: ₹1000");
            break;
        case "yellow":
            console.log("Action: READY. Violation Fine: ₹500");
            break;
        case "green":
            console.log("Action: GO. No fine.");
            break;
        default:
            console.log("Invalid Signal");
    }
}

// Task 5: Student Result Processing
{
    console.log("\n--- Task 5: Student Result Processing ---");
    let students = [
        { name: "A", mark: 95 },
        { name: "B", mark: 45 },
        { name: "C", mark: 80 },
        { name: "D", mark: 30 }
    ];

    let passed = students.filter(s => s.mark >= 50);
    console.log("Passed Students:", passed.map(s => s.name));

    let failed = students.filter(s => s.mark < 50);
    console.log("Failed Students:", failed.map(s => s.name));

    let gradeList = students.map(s => {
        let grade = s.mark >= 90 ? 'A' : s.mark >= 75 ? 'B' : s.mark >= 50 ? 'C' : 'Fail';
        return { name: s.name, grade: grade };
    });
    console.log("Grade List:", gradeList);
}

// Task 6: Online Food Delivery
{
    console.log("\n--- Task 6: Food Delivery ---");
    function placeOrder(customerName, ...items) {
        console.log(`Customer: ${customerName}`);
        console.log(`Ordered Items: ${items.join(", ")}`);
        console.log(`Total Item Count: ${items.length}`);
    }

    placeOrder("HariHaran", "Pizza", "Burger", "Coke", "Fries");
}

// Task 7: Bank Account System
{
    console.log("\n--- Task 7: Bank Account ---");
    let balance = 5000;

    function deposit(amount) {
        balance += amount;
        return balance;
    }

    function withdraw(amount) {
        if (amount <= balance) {
            balance -= amount;
        } else {
            console.log("Insufficient funds!");
        }
        return balance;
    }

    function checkBalance() {
        return balance;
    }

    console.log("Deposited 2000. New Balance: ₹" + deposit(2000));
    console.log("Withdrew 1500. New Balance: ₹" + withdraw(1500));
    console.log("Current Balance: ₹" + checkBalance());
}

// Task 8: Movie Ticket Booking
{
    console.log("\n--- Task 8: Movie Ticket Booking ---");
    let bookedSeats = ["A1", "A2", "B5", "C3"];

    function checkAvailability(seat) {
        return bookedSeats.includes(seat) ? "Booked" : "Available";
    }

    console.log("Is B5 available?", checkAvailability("B5"));
    console.log("Is B6 available?", checkAvailability("B6"));
    
    console.log("All Booked Seats:");
    for (let i = 0; i < bookedSeats.length; i++) {
        console.log(`- Seat ${bookedSeats[i]}`);
    }
}

// Task 9: User Login Validation
{
    console.log("\n--- Task 9: User Login Validation ---");
    let username = "user_name123";
    let password = "SecurePassword1!";
    let email = "user@example.com";

    let isUsernameValid = !username.includes(" ");
    let isPasswordValid = password.length >= 8;
    let isEmailValid = email.includes("@");

    if (isUsernameValid && isPasswordValid && isEmailValid) {
        console.log("Login Validation Passed!");
    } else {
        console.log("Validation Failed. Check spaces, length, or email format.");
    }
}

// Task 10: Product API Dashboard
{
    console.log("\n--- Task 10: Product API (Async) ---");
    
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(products => {
            console.log("--- API Data Loaded ---");
            console.log("Total Products:", products.length);
            
            console.log("\nProduct Titles:");
            products.slice(0, 5).forEach(p => console.log(`- ${p.title}`)); 
            
            let premiumProducts = products.filter(p => p.price > 100);
            console.log(`\nProducts above $100: ${premiumProducts.length} items`);
        })
        .catch(err => console.log("API Fetch Error:", err));
}

// Task 11: Birthday Day Finder
{
    console.log("\n--- Task 11: Birthday Finder ---");
    let dob = new Date("2000-08-15");
    
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    console.log("Day:", dob.getDate());
    console.log("Month:", months[dob.getMonth()]);
    console.log("Year:", dob.getFullYear());
    console.log("Weekday:", days[dob.getDay()]);
}

// Task 12: Netflix Subscription System
{
    console.log("\n--- Task 12: Netflix Subscription ---");
    let plan = "Standard";

    let benefits = plan === "Mobile" ? "480p, 1 Mobile/Tablet" 
                 : plan === "Basic" ? "720p, 1 Screen" 
                 : plan === "Standard" ? "1080p, 2 Screens" 
                 : plan === "Premium" ? "4K+HDR, 4 Screens" 
                 : "Invalid Plan";

    console.log(`Plan: ${plan} | Benefits: ${benefits}`);
}

// Task 13: Hospital Patient Management
{
    console.log("\n--- Task 13: Patient Management ---");
    let patients = [
        { id: 101, name: "Kiran", status: "Stable" },
        { id: 102, name: "Ravi", status: "Critical" },
        { id: 103, name: "Sita", status: "Critical" }
    ];

    let criticalPatients = patients.filter(p => p.status === "Critical");
    console.log("Critical Patients:", criticalPatients.map(p => p.name));

    let patient102 = patients.find(p => p.id === 102);
    console.log("Patient ID 102 details:", patient102);

    console.log("Total admitted patients:", patients.length);
}

// Task 14: Inventory Management System
{
    console.log("\n--- Task 14: Inventory Destructuring & Spread ---");
    let electronics = [{ id: 1, name: "Laptop" }, { id: 2, name: "Mouse" }];
    let furniture = [{ id: 3, name: "Chair" }];

    let mergedInventory = [...electronics, ...furniture, { id: 4, name: "Desk" }];
    console.log("Merged Inventory:", mergedInventory);

    let { id, name } = mergedInventory[0];
    console.log(`Extracted via destructuring -> ID: ${id}, Name: ${name}`);
}

// Task 15: WhatsApp Group Management
{
    console.log("\n--- Task 15: Group Management ---");
    let group = ["Admin", "User1", "User2"];

    group.push("User3"); 
    console.log("After push:", group);

    group.pop(); 
    console.log("After pop:", group);

    group.unshift("SuperAdmin"); 
    console.log("After unshift:", group);

    group.shift(); 
    console.log("After shift:", group);

    group.splice(1, 0, "Guest"); 
    console.log("Final Group List after splice:", group);
}