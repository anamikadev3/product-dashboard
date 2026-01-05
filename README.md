Product Dashboard (React + Redux Toolkit)

A modern product dashboard built with React, Redux Toolkit, and React Router v6.
The application fetches product data from the Fake Store API and allows users to search products by title and manage favorites.

FEATURES
- Fetch products from Fake Store API
- Product listing with cards
- Search products by title
- Product details page
- Add / remove favorites
- Favorites page using Redux state
- Client-side routing with React Router v6

TECH STACK
- React (Functional Components + Hooks)
- Redux Toolkit
- React Router DOM v6
- Vite
- JavaScript (ES6+)
- CSS / Bootstrap

API USED
https://fakestoreapi.com/products

SETUP INSTRUCTIONS

1. Clone the repository
git clone https://github.com/your-username/your-repo-name.git

2. Navigate to project folder
cd your-repo-name

3. Install dependencies
npm install

4. Start development server
npm run dev

5. Open in browser
http://localhost:5173

FOLDER STRUCTURE

src/
components/
Home.jsx
ProductList.jsx
ProductDetails.jsx
Favorites.jsx

redux/
store.js
productSlice.js
favoriteSlice.js

App.jsx
main.jsx

SEARCH FUNCTIONALITY
Search is implemented using Array.filter().
Products are filtered based on matching titles in a case-insensitive manner.

FAVORITES LOGIC
Favorites are stored in Redux state.
Duplicate favorites are prevented.
Favorites page reads data directly from Redux store.

IMPORTANT NOTES
- useNavigate must be used inside BrowserRouter
- Redux Provider must wrap the app
- Correct route paths are required

COMMON ISSUES
useNavigate error occurs if Router is missing
Favorites not showing if Redux state is not used

AUTHOR
Anamika
Frontend Developer (React / Next.js)

