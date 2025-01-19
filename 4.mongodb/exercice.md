### **Scenario: User Management System**

You manage a database of users. The collection is named `users` and contains the following fields:

- `name` (string): The user's full name.  
- `age` (number): The user's age.  
- `email` (string): The user's email address.  
- `status` (string): Either `"active"` or `"inactive"`.  
- `tags` (array of strings): Tags associated with the user.  
- `lastLogin` (date): The last time the user logged in.

Here’s some sample data:

```json
[
  { "name": "Alice", "age": 25, "email": "alice@example.com", "status": "active", "tags": ["new", "vip"], "lastLogin": ISODate("2024-12-01T10:00:00Z") },
  { "name": "Bob", "age": 32, "email": "bob@example.com", "status": "inactive", "tags": ["vip"], "lastLogin": ISODate("2024-11-25T09:30:00Z") },
  { "name": "Charlie", "age": 28, "email": "charlie@example.com", "status": "active", "tags": ["new"], "lastLogin": ISODate("2024-12-02T11:15:00Z") },
  { "name": "Diana", "age": 30, "email": "diana@example.com", "status": "inactive", "tags": ["priority", "vip"], "lastLogin": ISODate("2024-11-30T08:45:00Z") }
]
```

---

### **Tasks**

#### **1. Find Queries**
Use the following operators to filter the users:

1.1 **Find all users who are `active` and older than 27 years.**  
Expected operators: `$and`, `$gt`.

1.2 **Find all users who have the tag `"vip"` and logged in after `2024-11-30`.**  
Expected operators: `$in`, `$gt`.

1.3 **Find all users whose name starts with the letter `A`.**  
Expected operators: `$regex`.

1.4 **Find all users where the `tags` array contains exactly 2 elements.**  
Expected operators: `$size`.

---

#### **2. Update Queries**
Use the following operators to modify the user documents:

2.1 **Update all `inactive` users by setting their `status` to `"active"` and their `lastLogin` to the current date.**  
Expected operators: `$set`, `$currentDate`.

2.2 **Increment the age of all users who have the `"new"` tag by 1 year.**  
Expected operators: `$inc`, `$elemMatch`.

2.3 **Add the tag `"priority"` to all users who don’t already have it.**  
Expected operators: `$addToSet`.

2.4 **Remove the tag `"new"` from all users who currently have it.**  
Expected operators: `$pull`.

---

#### **Bonus Challenge**
Create a single query that:
- Finds all users who are older than 30 and don’t have the tag `"vip"`.
- Updates their `status` to `"inactive"`.

Expected operators: `$and`, `$not`, `$set`.
