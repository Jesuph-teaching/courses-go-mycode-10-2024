## **🚀 Exercise: Advanced Student Information System**
### **Objective**  
Students will:  
1. Use **union types** for handling multiple values.  
2. Use **an interface inside another interface** for structured data.  
3. Modify a function to handle these new types.  

---

### **Step 1: Define the `Address` Interface**  
- Add a `StudentAddress` interface with:  
  - `city` (string)  
  - `postalCode` (number)  

### **Step 2: Modify the `Student` Interface**  
- Add a `contact` field, which can be either:  
  - A `string` (for email), or  
  - A `number` (for phone).  
- Add an `address` field of type `StudentAddress`.  

### **Step 3: Update `printStudentDetails()`**  
- Display the student’s **contact** (email or phone).  
- Show their **city** and **postal code** from the address.  


---

### **Expected Output:**
```
Student: Alice, Age: 20
Average Grade: 84.33
Contact: alice@example.com
Address: Algiers, Postal Code: 16000
------------------------------------------------
Student: Bob, Age: 22
Average Grade: 84.00
Contact: 1234567890
Address: Oran, Postal Code: 31000
------------------------------------------------
```

---

### **🔹 Additional Challenges**
1. Add a **`level`** property (union type: `"beginner" | "intermediate" | "advanced"`).  
2. Create a function that returns students **from a specific city**.  
