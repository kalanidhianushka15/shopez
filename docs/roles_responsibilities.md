 Roles and Responsibilities

 Role Types

ShopEZ has two roles: user and admin. The role is stored in the User model and checked on both frontend and backend.

---

 User Role

Assigned to anyone who registers through the signup page.

Permissions:
- Login and register
- Browse all products
- Filter products by category
- Search products by name
- Add products to cart
- View and manage their cart
- Place orders
- View their own order history

Restrictions:
- Cannot access the admin dashboard
- Cannot add, edit or delete products
- Cannot view other users orders

---

 Admin Role

Assigned manually in the database or via the seed script.

Permissions:
- Everything a regular user can do
- Access the admin dashboard at /admin
- Add new products
- Edit existing product details
- Delete products
- View all orders from all users

Restrictions:
- Admin account is not created through the public register page
- Must be created directly in the database

---

How Role Based Access Works

1. When a user logs in, the server sends back their role in the JWT response
2. The frontend checks the role and redirects accordingly
3. Admin goes to /admin, regular user goes to /
4. The admin dashboard is protected and only accessible if role is admin