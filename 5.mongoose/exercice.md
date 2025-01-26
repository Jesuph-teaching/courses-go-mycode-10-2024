### Project Description: **Build a Movie Web App**

Welcome, everyone! Today’s project is designed to help you practice everything we’ve learned about Mongoose so far, using a real-life example: a Movie Web App! This is a great way to bring all the concepts together and see how they work in a practical application. Let’s dive into what you’ll build and how you’ll do it.

---

#### **The Goal**
The Movie Web App will allow users to browse movies, view details, leave reviews, and mark movies as favorites. You’ll also create an admin section where movies and reviews can be managed. By the end, you’ll have practiced:

1. Schema modeling.
2. Creating indexes.
3. Virtual attributes.
4. Hooks.
5. Methods and statics.
6. Discriminators.
7. Population.

For styling, you’ll use Tailwind CSS. We won’t cover authentication, as we haven’t discussed it yet. Instead, focus on the database and server-side logic.

---

### **What You’ll Build**

#### **Core Features**
1. **Movies(/movies)**:
   - Display a list of movies.
   - Each movie will have a title, genre, release year, and rating (average of user reviews).
   - Admins can add, edit, and delete movies.

2. **Reviews(/movies/:moviesId)**:
   - Users can leave reviews on movies.
   - Reviews include a rating (1–5 stars) and a review text.
   - Movies will display the average rating based on user reviews.

3. **Favorites(/users/:userId/favorites)**:
   - Users can mark movies as favorites.
   - Display a list of favorite movies on a user profile page.

4. **Admin Section(/admin)**:
   - Admins can manage movies and moderate reviews.

---

### **Steps to Build the App**

#### **1. Setup the Project**
- Initialize a new Node.js project with Express.
- Install the necessary dependencies, including Mongoose, EJS, and Tailwind CSS.
- Configure Tailwind CSS for styling and EJS as your view engine.
- Set up the basic folder structure for models, views, and routes.

#### **2. Define Mongoose Schemas**

- **User and Admin Discrimination**:
  - Create a base schema for users with fields for:
    - `username` (String, required).
    - `favorites` (Array of ObjectIds referencing movies).
  - Add a discriminator for the admin role, with additional fields like:
    - `isAdmin` (Boolean, default: true).
    - `permissions` (Array of Strings, e.g., ["manage_movies", "moderate_reviews"].)

- **Movies Collection**:
  - Create a schema for movies with:
    - `title` (String, required).
    - `genre` (String, required).
    - `releaseYear` (Number, required).
    - `reviews` (Array of ObjectIds referencing reviews).
    - Add an index for `title`.
    - Add a static method to find top-rated movies.

- **Reviews Collection**:
  - Create a schema for reviews with:
    - `movieId` (ObjectId, required, references the movies collection).
    - `userId` (ObjectId, required, references the users collection).
    - `rating` (Number, 1–5, required).
    - `reviewText` (String).
    - Add a post-save hook to update the average rating of a movie whenever a new review is added.

- **Virtual Attributes**:
  - In the `User` schema, add a virtual to count the number of favorite movies.
  - In the `Movie` schema, add a virtual to dynamically calculate the average rating based on its reviews.

#### **3. Page Instructions**

**Home Page**:
- Display a list of all movies, showing:
  - Title, genre, and average rating.
  - Include a search bar to filter by title or genre.

**Movie Details Page**:
- Show detailed information for a single movie:
  - Title, genre, release year, and average rating.
  - List all reviews with usernames and ratings.
  - Add a form to submit a new review.

**User Profile Page**:
- Display:
  - Username.
  - List of favorite movies with links to their details.

**Admin Dashboard**:
- Allow admins to:
  - Add, edit, and delete movies.
  - View all reviews and delete inappropriate ones.

#### **4. Build the Features**

- **Movie Management**:
  - Create routes for adding, editing, and deleting movies (admin only).

- **Review System**:
  - Create routes for submitting, displaying, and moderating reviews.

- **Favorites Functionality**:
  - Add functionality to allow users to mark/unmark movies as favorites.

- **Hooks**:
  - Implement a pre-delete hook for movies to clean up associated reviews.

- **Population**:
  - Use population to display user information (e.g., username) with reviews and favorite movies.

#### **5. Styling with Tailwind CSS**

- Apply Tailwind CSS for:
  - Responsive layouts.
  - Styling movie cards and review sections.
  - Navigation bar and admin dashboard.

#### **6. Bonus Challenges**

1. Add pagination to the movie list.
2. Display the top 5 highest-rated movies on the home page.
3. Implement search and filter functionality.

---

### **Submission Requirements**
- Submit your project on GitHub.
- Include a README file with instructions to run the app.
- Ensure all functionalities are implemented and the app runs locally without errors.

I’m looking forward to seeing your creative work! Remember to ask if you need clarification or run into issues. Good luck!

