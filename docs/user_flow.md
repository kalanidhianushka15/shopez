 User Flow

 Registration Flow
1. User visits /register
2. Fills in name, email, password
3. Clicks Register
4. Account is created and user is redirected to /login

 Login Flow
1. User visits /login
2. Enters email and password
3. JWT token is generated and stored in localStorage
4. Regular user is redirected to Home page
5. Admin user is redirected to Admin dashboard

 Shopping Flow
1. User browses products on Home page
2. Filters products by category or uses search bar
3. Clicks "Add to Cart" on a product
4. Product is added to their cart in the database
5. User visits Cart page to review items
6. User places order
7. Order is saved and cart is cleared

 Admin Flow
1. Admin logs in with admin credentials
2. Redirected to /admin dashboard
3. Can add new products with name, price, category, stock
4. Can edit existing product details
5. Can delete products
6. Can view all orders placed by users