## **Exercise: Advanced Student Information System**
### **Objective**  
Students will:  
1. Use **union types** for handling multiple values.  
2. Use **an interface inside another interface** for structured data.  
3. Modify a function to handle these new types.  

---

### **Step 1: Define the `Student` Interface**  
Create a TypeScript file (`student.ts`) and define an interface called `Student` with the following properties:
- `id` (number)
- `name` (string)
- `age` (number)
- `grades` (array of numbers)

---

### **Step 2: Create a Function to Display Student Information**  
Write a function `printStudentDetails(student: Student): void` that:
1. Receives a `Student` object as an argument.
2. Prints the student's name, age, and average grade.

---

### **Step 3: Test the Function**  
- Create a few student objects.
- Call `printStudentDetails()` for each student.

---

### **Step 4: Define the `Address` Interface**  
- Add a `StudentAddress` interface with:  
  - `city` (string)  
  - `postalCode` (number)  

---

### **Step 5: Modify the `Student` Interface**  
- Add a `contact` field, which can be either:  
  - A `string` (for email), or  
  - A `number` (for phone).  
- Add an `address` field of type `StudentAddress`.  

---

### **Step 6: Update `printStudentDetails()`**  
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
