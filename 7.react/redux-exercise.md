Here's a structured **Redux Toolkit (RTK) Todo App with Authentication** assignment for your students. The focus is on **persisting state using `localStorage`**, handling **user authentication**, and managing a **Todo list**.  

---

# **📌 Redux Toolkit & Local Storage: Todo App Assignment**  
### **⏳ Duration: ~2 Hours**  

## **🎯 Objectives:**  
By the end of this exercise, you will:  
✅ Implement **user authentication** (login/logout) and store user data in **localStorage**.  
✅ Create a **Todo list** with **Add, Remove, Toggle Completion**, and persist it in **localStorage**.  
✅ Use **Redux Toolkit (RTK)** for state management.  

---

## **📂 Project Structure:**  
```
/app
  ├── store.js
  ├── authSlice.js
  ├── todoSlice.js
/components
  ├── Navbar.jsx
  ├── TodoForm.jsx
  ├── TodoList.jsx
  ├── TodoItem.jsx
/hooks
  ├── useUser.jsx
  ├── useTodo.jsx
App.jsx
main.jsx
```

---

## **📌 Step 1: Install Dependencies**  
```bash
npm install @reduxjs/toolkit react-redux
```

---

## **📌 Step 2: Set Up Redux Store**  
📂 **`app/store.js`**  
- Combine `authSlice` and `todoSlice`  
- Configure Redux store  
```js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import todoReducer from "./todoSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todoReducer,
  },
});
```

---

## **📌 Step 3: Implement Authentication Slice**  
📂 **`app/authSlice.js`**  
- User can **Login** (set user data)  
- User can **Logout**  
- **Persist state** in `localStorage`  


---

## **📌 Step 4: Implement Todo Slice**  
📂 **`app/todoSlice.js`**  
- **Load todos** from `localStorage`  
- **Save todos** on every change  
- **Add, Remove, Toggle Completion**  

---

## **📌 Step 5: Build UI Components**  

### 📂 **`components/Navbar.jsx`**  
- Show **Login/Logout** buttons  
- Display **username**  


---

### 📂 **`components/TodoForm.jsx`**  
- Add new Todo  

---

### 📂 **`components/TodoList.js`**  
- Render **Todo Items**  

---

### 📂 **`components/TodoItem.js`**  
- **Mark as Completed**  
- **Delete Todo**  


---

## **📌 Step 6: Build the Main App**  
📂 **`App.js`**  

```js
import React from "react";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Provider } from "react-redux";
import { store } from "./app/store";

const App = () => (
 <Provider store={store}>
    <Navbar />
    <TodoForm />
    <TodoList />
  </Provider>
);

export default App;
```

---

## **✅ Final Step: Run the App**
```bash
npm run dev
```

Now, your students will:  
🔹 Implement **Redux Toolkit** for state management  
🔹 Persist **User Authentication & Todo List** in **localStorage**  
🔹 Handle **Add, Remove, Toggle Completion** for Todos  

This is a **practical exercise** that reinforces **Redux, localStorage, and user authentication**. 🚀