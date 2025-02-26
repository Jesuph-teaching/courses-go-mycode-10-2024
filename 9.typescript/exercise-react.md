### **Exercise: Building a Generic List Manager in React with TypeScript**

**⏳ Estimated Time: 30 minutes**

#### **Objective:**

Create a reusable **generic list manager** in React that can handle different types of items dynamically using TypeScript.

---

## **📝 Instructions:**

### **Step 1: Define the Generic Type for List Management**

1. Create a **TypeScript interface** `ListManager<T>` that:
   - Stores a list of items (`T[]`).
   - Provides functions to **add** and **remove** items from the list.

### **Step 2: Implement the `useListManager` Hook**

1. Create a **custom React hook** called `useListManager<T>`.
2. The hook should:
   - Accept an **initial array of items**.
   - Use **`useState`** to manage the list state.
   - Provide:
     - `addItem(item: T)`: Adds an item to the list.
     - `removeItem(index: number)`: Removes an item by index.

### **Step 3: Create a Generic `GenericList` Component**

1. Define a React component `GenericList<T>`.
2. The component should:
   - Accept an **array of initial items** (`initialItems`).
   - Accept a **`renderItem` function** to define how each item is displayed.
   - Use the `useListManager` hook to manage the list dynamically.
   - Render:
     - A list of items with a **Remove** button for each.
     - An **Add Item** button to insert a new item dynamically.

### **Step 4: Use `GenericList` for Different Data Types**

1. Implement a **User List** where each user has:
   - `id`, `name`, and `age`.
2. Implement a **Product List** where each product has:
   - `id`, `name`, and `price`.
3. Ensure both lists use the **same GenericList component** but handle different data types.

---

## **🎯 Bonus Challenge (Optional):**

1. **Prevent duplicate IDs** when adding a new item.
2. Allow **editing** an item directly.

---

**Deliverable:** A fully functional **generic list manager** that can handle different data types in React while using TypeScript’s powerful generics. 🚀
