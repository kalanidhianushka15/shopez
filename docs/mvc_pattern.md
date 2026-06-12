 MVC Pattern

ShopEZ follows the Model-View-Controller pattern across the MERN stack.

 Model (MongoDB + Mongoose)

The data layer. All database schemas are defined in `server/models/`.

- User.js - stores user details and role
- Product.js - stores product info, price, category, stock
- Cart.js - stores user cart with product references
- Order.js - stores order details and status

 View (React Frontend)

The UI layer. All pages are in `client/src/pages/`.

- Login.js - login form
- Register.js - registration form
- Home.js - product catalog with filters and search
- Cart.js - cart items and checkout
- Orders.js - order history
- Admin.js - admin dashboard for managing products and orders

 Controller (Express Routes)

The logic layer. All API routes are in `server/routes/`.

- auth.js - handles register and login logic
- products.js - handles get, add, edit, delete product
- cart.js - handles add, remove, clear cart
- orders.js - handles place order and get orders

 How They Connect

1. React (View) sends HTTP requests using Axios
2. Express routes (Controller) receive and process the request
3. Mongoose models (Model) interact with MongoDB
4. Response is sent back to React and displayed to the user