
### **Dataset 1: Students Collection**
```javascript
db.students.insertMany([
    { name: "Mhamed", age: 23, courses: ["Math", "Physics"], status: "active", credits: 4000 },
    { name: "Lyes", age: 25, courses: ["Chemistry", "Biology"], status: "inactive", credits: 4000 },
    { name: "Raid", age: 22, courses: ["Math", "English"], status: "active", credits: 4000 },
    { name: "Farouk", age: 20, courses: ["History", "Math"], status: "active", credits: 4000 },
    { name: "Nabil", age: 27, courses: ["Physics", "Biology"], status: "inactive", credits: 4000 }
]);
```

---

### **Dataset 2: Books Collection**
```javascript
db.books.insertMany([
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", price: 10.99, stock: 5 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", price: 12.49, stock: 3 },
    { title: "A Brief History of Time", author: "Stephen Hawking", genre: "Science", price: 15.99, stock: 7 },
    { title: "Sapiens", author: "Yuval Noah Harari", genre: "History", price: 14.50, stock: 10 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction", price: 9.99, stock: 4 }
]);
```

---

### **Dataset 3: Orders Collection**
```javascript
db.orders.insertMany([
    { 
        orderId: 1, 
        customer: { name: "Mhamed", address: "123 Main St" }, 
        items: [
            { product: "The Great Gatsby", quantity: 1, price: 10.99 },
            { product: "Sapiens", quantity: 2, price: 14.50 }
        ],
        total: 39.99
    },
    { 
        orderId: 2, 
        customer: { name: "Lyes", address: "456 Elm St" }, 
        items: [
            { product: "To Kill a Mockingbird", quantity: 1, price: 12.49 },
            { product: "A Brief History of Time", quantity: 1, price: 15.99 }
        ],
        total: 28.48
    },
    { 
        orderId: 3, 
        customer: { name: "Nabil", address: "789 Maple St" }, 
        items: [
            { product: "The Catcher in the Rye", quantity: 3, price: 9.99 }
        ],
        total: 29.97
    }
]);
```

---

### **Dataset 4: Transactions Collection**
```javascript
db.transactions.insertMany([
    { transactionId: "T1", fromAccount: "Mhamed", toAccount: "Lyes", amount: 100, date: new Date("2025-01-10") },
    { transactionId: "T2", fromAccount: "Raid", toAccount: "Mhamed", amount: 200, date: new Date("2025-01-12") },
    { transactionId: "T3", fromAccount: "Nabil", toAccount: "Farouk", amount: 150, date: new Date("2025-01-15") }
]);
```

