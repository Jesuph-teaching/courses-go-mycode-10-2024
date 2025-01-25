###  Models for the Library Management System

#### **BorrowHistory Model**
- This model tracks each borrowing transaction.
- Fields:
  - `book` (Object ID, required): References the `Book` being borrowed.
  - `user` (Object ID, required): References the `User` (Member) borrowing the book.
  - `borrowedAt` (Date, default: current date): The date when the book was borrowed.
  - `returnedAt` (Date): The date when the book was returned.

#### **Book Model**
- Fields:
  - `title` (String, required, unique): The title of the book.
  - `author` (Object ID, required): References the `Author` who wrote the book.
  - `isAvailable` (Boolean, default: true): Indicates if the book is available for borrowing.
  - `deskPrice` (Number, required): The price for borrowing the book from the desk.
  - `homeDeliveryPrice` (Number, required): The price for borrowing with home delivery.

- Relationships:
  - A book's borrowing history will be referenced through the `BorrowHistory` model.

- Features:
  - **Static Methods**:
    - `findAvailable`: Retrieves all books that are currently available.
  - **Instance Methods**:
    - `markAsBorrowed`: Updates the book's availability to false.
    - `markAsReturned`: Updates the book's availability to true.
  - **Indexes**:
    - A unique index on `title`.

#### **User Model**
- Fields:
  - `firstName` (String, required): The user's first name.
  - `lastName` (String, required): The user's last name.
  - `email` (String, required, unique): The user's email address.
  - `role` (String, required): The user's role, either `Member` or `Librarian`.

- Features:
  - **Virtuals**:
    - `fullName`: Combines `firstName` and `lastName`.

- Discriminators:
  1. **Member**: 
     - Members will have their borrowing transactions linked through the `BorrowHistory` model.
  2. **Librarian**:
     - Includes an `employeeId` field.

#### **Author Model**
- Fields:
  - `name` (String, required): The author's full name.
  - `bio` (String): A short biography of the author.
  - `birthDate` (Date): The author's date of birth.

---

### Relationships and Population Example
- Populate borrowing details from the `BorrowHistory` model:
  - For a book, you can populate its borrowing transactions.
  - For a member, you can populate the books they've borrowed.

