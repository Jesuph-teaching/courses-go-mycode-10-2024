
### **Operations You Can Perform on This Data**

#### **1. Basic CRUD Operations**
- Query students older than 22:
  ```javascript
  db.students.find({ age: { $gt: 22 } });
  ```
- Insert a new book:
  ```javascript
  db.books.insertOne({ title: "1984", author: "George Orwell", genre: "Dystopian", price: 11.99, stock: 6 });
  ```
- Update an order's total:
  ```javascript
  db.orders.updateOne({ orderId: 1 }, { $set: { total: 40.99 } });
  ```

#### **2. Aggregation**
- Group students by their status and count them:
  ```javascript
  db.students.aggregate([
      { $group: { _id: "$status", count: { $sum: 1 } } }
  ]);
  ```
- Calculate total revenue from all orders:
  ```javascript
  db.orders.aggregate([
      { $group: { _id: null, totalRevenue: { $sum: "$total" } } }
  ]);
  ```

#### **3. Indexing**
- Create an index on `name` in the `students` collection:
  ```javascript
  db.students.createIndex({ name: 1 });
  ```
- Query books by author using the index:
  ```javascript
  db.books.find({ author: "Harper Lee" });
  ```

#### **4. Transactions**
- Perform a money transfer between accounts:
  ```javascript
  session = db.getMongo().startSession();
  session.startTransaction();
  try {
      session.getDatabase("test").transactions.insertOne({ transactionId: "T4", fromAccount: "Alice", toAccount: "Eve", amount: 50 });
      session.getDatabase("test").transactions.insertOne({ transactionId: "T5", fromAccount: "Eve", toAccount: "Charlie", amount: 30 });
      session.commitTransaction();
  } catch (e) {
      session.abortTransaction();
  } finally {
      session.endSession();
  }
  ```

