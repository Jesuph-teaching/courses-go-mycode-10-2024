### Expense Tracker with Persistent Data in Next.js (Multi-Page)

#### Objective

Create a Next.js application to manage and persistently track expenses across multiple pages. Use JavaScript basics (arrays, objects, functions, loops, conditionals) and `localStorage` for persistence. Each major action (e.g., adding an expense, viewing totals) will reside on its own page, accessible via navigation.

---

### Instructions

#### Step 1: Set Up the Next.js Project

1. Create a new Next.js app:
   - Run `npx create-next-app@latest expense-tracker`.
   - Navigate to the project folder: `cd expense-tracker`.
   - Start the development server: `npm run dev`.
2. Use the `app/` directory (App Router) for routing, creating a page for each feature.
3. Add a basic navigation component (e.g., in `app/layout.tsx`) to link between pages.

#### Step 2: Initialize the Expense Database

1. Create a shared utility file (e.g., `lib/expenseUtils.ts`) to handle persistent data:
   - Define `loadExpenses()`: Loads the expenses array from `localStorage`, returning an empty array if no data exists.
   - Define `saveExpenses(expenses)`: Saves the expenses array to `localStorage`.
2. Each expense object should include:
   - `description`: A string describing the expense.
   - `amount`: A number representing the expense in dollars.
   - `category`: A string (e.g., "Food", "Transport").
   - `date`: A string in "YYYY-MM-DD" format.
3. Import these utilities into each page and use React hooks (`useState`, `useEffect`) to manage state.

#### Step 3: Implement Pages for Core Features

Organize the app into separate pages under the `app/` directory. Each page will handle one specific action.

1. **Add an Expense** (`app/add-expense/page.tsx`)

   - Purpose: Allow users to add a new expense.
   - UI: Create a form with fields for:
     - `description`: Text input.
     - `amount`: Number input (validate it’s a number).
     - `category`: Text input or dropdown.
     - `date`: Date input ("YYYY-MM-DD").
   - Action: On form submission:
     - Load existing expenses with `loadExpenses`.
     - Add the new expense to the array.
     - Save the updated array with `saveExpenses`.
     - Display a success message (e.g., a temporary notification).
   - Navigation: Include a link back to the home page (`/`).

2. **Get Total Expenses** (`app/total-expenses/page.tsx`)

   - Purpose: Display the total amount of all expenses.
   - UI: Show a single value representing the sum of all expense amounts.
   - Action:
     - Load expenses with `loadExpenses`.
     - Calculate the total using a reduce function.
     - Display the result in a readable format (e.g., "Total Expenses: $200.00").
   - Navigation: Link to other pages (e.g., add expense, report).

3. **Get Expenses by Category** (`app/expenses-by-category/page.tsx`)

   - Purpose: Filter and display expenses by category.
   - UI:
     - Add an input field and button for the user to enter a category (case-insensitive).
     - Display matching expenses in a list or table.
   - Action:
     - Load expenses with `loadExpenses`.
     - Filter the array based on the entered category.
     - Show the filtered results with details (description, amount, date).
   - Navigation: Link to related pages.

4. **Get Expenses by Month** (`app/expenses-by-month/page.tsx`)

   - Purpose: Filter and display expenses for a specific month.
   - UI:
     - Add a month input (e.g., `<input type="month">`) for "YYYY-MM" format.
     - Display matching expenses in a list or table.
   - Action:
     - Load expenses with `loadExpenses`.
     - Filter based on the selected month (compare `date` strings).
     - Show the filtered results.
   - Navigation: Link to other pages.

5. **Find the Most Expensive Expense** (`app/most-expensive/page.tsx`)

   - Purpose: Show the highest-cost expense.
   - UI: Display the details of the most expensive expense (description, amount, category, date).
   - Action:
     - Load expenses with `loadExpenses`.
     - Find the expense with the maximum `amount` (e.g., using `Math.max` or a loop).
     - Display its details.
   - Navigation: Link to the home page or report page.

6. **Generate an Expense Report** (`app/expense-report/page.tsx`)
   - Purpose: Provide a detailed summary of expenses.
   - UI: Show:
     - Total amount of all expenses.
     - Breakdown of expenses by category (e.g., "Food: $150, Transport: $75").
   - Action:
     - Load expenses with `loadExpenses`.
     - Calculate the total and group expenses by category (e.g., using an object or `reduce`).
     - Format and display the report (e.g., in a table or list).
   - Navigation: Link to other features.

#### Step 4: Bonus Features (Optional)

Add these as additional pages or enhance existing ones:

1. **Delete an Expense** (`app/delete-expense/page.tsx`)

   - Purpose: Allow users to remove an expense.
   - UI:
     - Show a list of expenses with a "Delete" button next to each.
     - Or use an input to enter the `description` of the expense to delete.
   - Action:
     - Load expenses, filter out the matching expense, and save the updated array.

2. **Filter Expenses by Amount Range** (`app/expenses-by-range/page.tsx`)

   - Purpose: Show expenses within a specified amount range.
   - UI: Add two number inputs for minimum and maximum amounts, plus a submit button.
   - Action:
     - Load expenses, filter based on the range, and display the results.

3. **Home Page with Navigation** (`app/page.tsx`)
   - Purpose: Serve as an interactive menu.
   - UI: Add buttons or links to navigate to each feature page (e.g., "Add Expense", "View Report").
   - Action: No logic beyond navigation; optionally display a summary or welcome message.

#### Step 5: Example Workflow

1. User visits `localhost:3000/` (home page) and sees navigation options.
2. They navigate to `/add-expense` to add an expense via a form.
3. They visit `/total-expenses` to see the total, `/expense-report` for a summary, etc.
4. Data persists across pages and refreshes via `localStorage`.

#### Sample Page Structure

- `app/layout.tsx`: Root layout with navigation (e.g., `<nav>` with links to all pages).
- `app/page.tsx`: Home page with links/buttons.
- `app/add-expense/page.tsx`: Form to add expenses.
- `app/total-expenses/page.tsx`: Total display.
- `app/expenses-by-category/page.tsx`: Category filter.
- `app/expenses-by-month/page.tsx`: Month filter.
- `app/most-expensive/page.tsx`: Most expensive expense.
- `app/expense-report/page.tsx`: Full report.
- `lib/expenseUtils.ts`: Shared `loadExpenses` and `saveExpenses` functions.

#### Requirements

1. Use `localStorage` for persistent storage, accessed via utility functions.
2. Use arrays, objects, loops, and functions for logic.
3. Validate inputs (e.g., `amount` as a number, `date` as "YYYY-MM-DD").
4. Create a user-friendly UI with clear navigation and readable displays.

#### Estimated Time

- Core functionality (multi-page setup): 3-4 hours (includes routing and UI).
- Bonus features: 1-1.5 hours.

---

### Notes

- Use Next.js's `<Link>` component from `next/link` for navigation to avoid full page reloads.
- Style pages with Tailwind CSS (default in Next.js) or custom CSS in `globals.css`.
- Ensure each page uses the shared utility functions to maintain a single source of truth for the expense data.
