// Task 1: Student Management System
{
    console.log("--- Task 1: Student Management System ---");
    
    let students = [
        { id: 1, name: "Arun", department: "CS", mark: 85 },
        { id: 2, name: "Bala", department: "IT", mark: 92 },
        { id: 3, name: "Chitra", department: "ECE", mark: 76 },
        { id: 4, name: "Dev", department: "MECH", mark: 45 },
        { id: 5, name: "Ezhil", department: "CS", mark: 60 }
    ];

    function printStudentDetails(student) {
        let grade = "";
        if (student.mark >= 90) grade = "A";
        else if (student.mark >= 75) grade = "B";
        else if (student.mark >= 50) grade = "C";
        else grade = "Fail";
        
        console.log(`ID: ${student.id} | Name: ${student.name} | Grade: ${grade}`);
    }

    let totalMarks = 0;
    
    console.log("All Students:");
    for (let student of students) {
        console.log(student.name);
        totalMarks += student.mark;
    }

    console.log("Total Marks : " + totalMarks);
    
    console.log("Students above 80:");
    for (let student of students) {
        if (student.mark > 80) {
            console.log(student.name + " (" + student.mark + ")");
        }
        printStudentDetails(student);
    }
}

// Task 2: Employee Payroll System
{
    console.log("\n--- Task 2: Employee Payroll System ---");

    let employees = [
        { id: 101, name: "Gita", salary: 25000, department: "HR" },
        { id: 102, name: "Hari", salary: 45000, department: "DEV" },
        { id: 103, name: "Indu", salary: 35000, department: "QA" }
    ];

    function getDepartmentDescription(dept) {
        switch (dept) {
            case "HR": return "Human Resources";
            case "DEV": return "Development & Engineering";
            case "QA": return "Quality Assurance";
            default: return "General Staff";
        }
    }

    function generateReport(employee) {
        console.log(`Payroll Report: ${employee.name} | Dept: ${getDepartmentDescription(employee.department)} | Paid: ₹${employee.salary}`);
    }

    function processPayroll(empArray, callback) {
        let totalExpense = 0;
        console.log("Employee Names:");
        
        for (let i = 0; i < empArray.length; i++) {
            console.log(empArray[i].name);
            totalExpense += empArray[i].salary;
        }
        
        console.log("Total Salary Expense: ₹" + totalExpense);
        
        console.log("Earning Above ₹30,000:");
        for (let i = 0; i < empArray.length; i++) {
            if (empArray[i].salary > 30000) {
                console.log(empArray[i].name);
            }
            callback(empArray[i]);
        }
    }

    processPayroll(employees, generateReport);
}

// Task 3: Online Food Order System
{
    console.log("\n--- Task 3: Online Food Order System ---");

    let foods = [
        { id: 1, foodName: "Biryani", price: 250, category: "Main Course" },
        { id: 2, foodName: "Paneer Tikka", price: 180, category: "Starter" },
        { id: 3, foodName: "Brownie", price: 150, category: "Dessert" },
        { id: 4, foodName: "Pizza", price: 300, category: "Main Course" }
    ];

    function getCategoryDesc(category) {
        switch (category) {
            case "Main Course": return "Heavy Meal";
            case "Starter": return "Appetizers before meal";
            case "Dessert": return "Sweet treat";
            default: return "Misc Item";
        }
    }

    function confirmOrder(food) {
        return `Order Confirmed: ${food.foodName} [${getCategoryDesc(food.category)}]`;
    }

    let totalMenuValue = 0;
    console.log("Menu Items:");
    for (let food of foods) {
        console.log(food.foodName);
        totalMenuValue += food.price;
    }

    console.log("Total Menu Value: ₹" + totalMenuValue);
    
    console.log("Items above ₹200:");
    for (let food of foods) {
        if (food.price > 200) {
            console.log(food.foodName + " - ₹" + food.price);
            console.log(confirmOrder(food));
        }
    }
}

// Task 4: Movie Ticket Booking System
{
    console.log("\n--- Task 4: Movie Ticket Booking System ---");

    let movies = [
        { movieName: "Leo", ticketPrice: 150, availableSeats: 50, language: "Tamil" },
        { movieName: "Salaar", ticketPrice: 200, availableSeats: 0, language: "Telugu" },
        { movieName: "Dune", ticketPrice: 300, availableSeats: 20, language: "English" }
    ];

    function getLanguageDesc(lang) {
        switch (lang) {
            case "Tamil": return "Kollywood";
            case "Telugu": return "Tollywood";
            case "English": return "Hollywood";
            default: return "Unknown Industry";
        }
    }

    function confirmBooking(movie) {
        console.log(`Booking confirmed for ${movie.movieName} (${getLanguageDesc(movie.language)}).`);
    }

    let totalSeats = 0;
    console.log("Movies Available:");
    
    for (let i = 0; i < movies.length; i++) {
        console.log(movies[i].movieName);
        totalSeats += movies[i].availableSeats;
        
        if (movies[i].availableSeats > 0) {
            console.log(`Booking Possible for ${movies[i].movieName}`);
            confirmBooking(movies[i]);
        } else {
            console.log(`Housefull for ${movies[i].movieName}`);
        }
    }
    console.log("Total Available Seats across screens: " + totalSeats);
}

// Task 5: Hospital Patient Records
{
    console.log("\n--- Task 5: Hospital Patient Records ---");

    let patients = [
        { patientId: 1, patientName: "Kumar", age: 65, disease: "Cardiac" },
        { patientId: 2, patientName: "Sita", age: 40, disease: "Ortho" },
        { patientId: 3, patientName: "Ravi", age: 70, disease: "Neuro" }
    ];

    function getDepartment(disease) {
        switch (disease) {
            case "Cardiac": return "Cardiology Department";
            case "Ortho": return "Orthopedics Department";
            case "Neuro": return "Neurology Department";
            default: return "General Ward";
        }
    }

    function confirmAppointment(patient) {
        console.log(`Appointment fixed for ${patient.patientName} at ${getDepartment(patient.disease)}`);
    }

    console.log("Patient Names:");
    for (let patient of patients) {
        console.log(patient.patientName);
    }
    
    console.log("Total Patients: " + patients.length);
    
    console.log("Patients above Age 60:");
    for (let patient of patients) {
        if (patient.age > 60) {
            console.log(patient.patientName + " (Age: " + patient.age + ")");
            confirmAppointment(patient);
        }
    }
}

// Task 6: Library Management System
{
    console.log("\n--- Task 6: Library Management System ---");

    let books = [
        { bookId: 101, bookName: "JavaScript Guide", author: "John Doe", price: 600, category: "Tech" },
        { bookId: 102, bookName: "History of Time", author: "Stephen Hawking", price: 400, category: "Science" },
        { bookId: 103, bookName: "Rich Dad Poor Dad", author: "Robert Kiyosaki", price: 550, category: "Finance" }
    ];

    function getCategory(category) {
        switch (category) {
            case "Tech": return "Technology Section";
            case "Science": return "Science Section";
            case "Finance": return "Financial Section";
            default: return "General Section";
        }
    }

    function issueBook(book) {
        return `Issued: ${book.bookName} from ${getCategory(book.category)}`;
    }

    let totalBookValue = 0;
    console.log("Books Available:");
    
    for (let book of books) {
        console.log(book.bookName);
        totalBookValue += book.price;
        
        if (book.price > 500) {
            console.log(`Premium Book: ${book.bookName} (₹${book.price})`);
        }
        console.log(issueBook(book));
    }
    
    console.log("Total Book Value: ₹" + totalBookValue);
}

// Task 7: E-Commerce Product Dashboard
{
    console.log("\n--- Task 7: E-Commerce Product Dashboard ---");

    let products = [
        { productId: 1, productName: "Laptop", price: 50000, stock: 5 },
        { productId: 2, productName: "Mouse", price: 500, stock: 50 },
        { productId: 3, productName: "Keyboard", price: 1000, stock: 8 }
    ];

    function generateProductReport(product) {
        let status = product.stock < 10 ? "Low Stock" : "In Stock";
        console.log(`Report: ${product.productName} is ${status}.`);
    }

    let inventoryValue = 0;
    console.log("All Products:");
    
    for (let i = 0; i < products.length; i++) {
        console.log(products[i].productName);
        inventoryValue += (products[i].price * products[i].stock);
        
        if (products[i].stock < 10) {
            console.log(`Alert: ${products[i].productName} has stock less than 10 (${products[i].stock} left)`);
        }
        generateProductReport(products[i]);
    }
    console.log("Total Inventory Value: ₹" + inventoryValue);
}

// Task 8: College Admission System
{
    console.log("\n--- Task 8: College Admission System ---");

    let applicants = [
        { name: "Rahul", age: 19, percentage: 85, department: "CSE" },
        { name: "Vikram", age: 17, percentage: 90, department: "IT" },
        { name: "Sneha", age: 18, percentage: 55, department: "EEE" }
    ];

    function getDeptName(dept) {
        switch (dept) {
            case "CSE": return "Computer Science Eng";
            case "IT": return "Information Technology";
            case "EEE": return "Electrical Eng";
            default: return "Unknown Dept";
        }
    }

    function confirmAdmission(applicant, status) {
        console.log(`Result for ${applicant.name}: ${status} into ${getDeptName(applicant.department)}`);
    }

    let eligibleCount = 0;
    console.log("Applicants:");
    
    for (let applicant of applicants) {
        console.log(applicant.name);
        
        if (applicant.age >= 18 && applicant.percentage >= 60) {
            eligibleCount++;
            confirmAdmission(applicant, "Selected");
        } else {
            confirmAdmission(applicant, "Rejected");
        }
    }
    console.log("Total Eligible Students: " + eligibleCount);
}

// Task 9: Bus Reservation System
{
    console.log("\n--- Task 9: Bus Reservation System ---");

    let passengers = [
        { passengerId: 101, name: "Karthi", seatNumber: 12, ticketPrice: 800, busType: "AC" },
        { passengerId: 102, name: "Vijay", seatNumber: 15, ticketPrice: 500, busType: "Non-AC" },
        { passengerId: 103, name: "Surya", seatNumber: 1, ticketPrice: 1200, busType: "Sleeper" }
    ];

    function getBusTypeInfo(type) {
        switch (type) {
            case "AC": return "Air Conditioned Seater";
            case "Non-AC": return "Standard Seater";
            case "Sleeper": return "AC Sleeper Berth";
            default: return "Standard";
        }
    }

    function printTicket(passenger) {
        console.log(`Ticket Confirmed: ${passenger.name} | Seat: ${passenger.seatNumber} | Bus: ${getBusTypeInfo(passenger.busType)}`);
    }

    let totalCollection = 0;
    console.log("Passengers:");
    
    for (let i = 0; i < passengers.length; i++) {
        console.log(passengers[i].name);
        totalCollection += passengers[i].ticketPrice;
        console.log(`Seat ${passengers[i].seatNumber} is Occupied.`);
        printTicket(passengers[i]);
    }
    
    console.log("Total Collection: ₹" + totalCollection);
}

// Task 10: Mobile Store Management
{
    console.log("\n--- Task 10: Mobile Store Management ---");

    let mobiles = [
        { brand: "Apple", model: "iPhone 13", price: 60000, stock: 10 },
        { brand: "Samsung", model: "Galaxy M53", price: 25000, stock: 15 },
        { brand: "Xiaomi", model: "Redmi Note 12", price: 15000, stock: 30 }
    ];

    function getBrandCategory(brand) {
        switch (brand) {
            case "Apple": return "Premium Tier";
            case "Samsung": return "Mid-to-Premium Tier";
            case "Xiaomi": return "Budget Tier";
            default: return "Standard Tier";
        }
    }

    function generateSalesReport(mobile) {
        console.log(`Sales Report generated for ${mobile.model} (${getBrandCategory(mobile.brand)}).`);
    }

    let totalStockValue = 0;
    console.log("Mobile Models Available:");
    
    for (let mobile of mobiles) {
        console.log(mobile.model);
        totalStockValue += (mobile.price * mobile.stock);
        
        if (mobile.price > 20000) {
            console.log(`High-end Mobile: ${mobile.brand} ${mobile.model} - ₹${mobile.price}`);
        }
        generateSalesReport(mobile);
    }
    
    console.log("Total Stock Value: ₹" + totalStockValue);
}