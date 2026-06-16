 ShopEZ : E-commerce Application

Welcome to the ShopEZ repository! This project is a full-stack MERN e-commerce application with secure admin login, dynamic product catalog, cart functionality, and order logs.

 Tech Stack

- **Frontend:** React.js, Tailwind CSS, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Auth:** JWT, bcryptjs

---

 Project Architecture & Design Docs

- [Technical Architecture](./docs/technical_architecture.md)
- [Entity Relationship Diagram](./docs/er_diagram.md)
- [Features](./docs/features.md)
- [Roles & Responsibilities](./docs/roles_responsibilities.md)
- [User Flow](./docs/user_flow.md)
- [MVC Pattern](./docs/mvc_pattern.md)

---

Test Accounts & Credentials

**Administrator Account (Full CRUD & Orders Access):**
- Email: `admin@shopez.com`
- Password: `admin123`

**Customer Account (Add to Cart & Checkout):**
- Register any new account on the Sign Up page

---

 Project Subtasks Implementation Matrix

 1. Project Architecture
- **ER Diagram** → Documented with Mongoose schema structures in [er_diagram.md](./docs/er_diagram.md)
- **Features** → Full specification of guest, customer, and admin capabilities in [features.md](./docs/features.md)
- **Roles & Responsibilities** → RBAC permissions outlined in [roles_responsibilities.md](./docs/roles_responsibilities.md)
- **User Flow** → Checkout and payment sequence mapped in [user_flow.md](./docs/user_flow.md)
- **MVC Pattern** → Model-View-Controller structure in [mvc_pattern.md](./docs/mvc_pattern.md)

 2. Project Setup & Configuration
- **Creating Project Folder** → Initialized decoupled `client/` and `server/` workspaces
- **Client Setup** → Scaffolded React app, installed Axios, React Router, Tailwind CSS
- **Server Setup** → Initialized Express server with Nodemon, dotenv, cors

 3. Backend Development
- **Backend Structure** → Created routes (`routes/`), schemas/models (`models/`)
- **Development and Execution** → Built REST endpoints for user auth, product listings, cart, and orders

 4. Database Development
- **Configure MongoDB** → Connected via Mongoose to local MongoDB instance
- **Create Database Collections** → Collections created for `users`, `products`, `orders`, and `carts`
- **Create Schema and Models** → Implemented in `models/` using Mongoose schemas

 5. Frontend Development
- **Frontend Structure** → Pages for Login, Register, Home, Cart, Orders, Admin
- **Development and Execution** → Designed product catalog with category filters, search, and admin dashboard

 6. Project Execution
- **Steps For Execution** → Detailed run guide outlined below
- **Demo Screenshots** → Captured in `screenshots/` directory

---

 How to Run Locally

### Backend
```bash
cd server
npm install
node index.js
```

### Frontend
```bash
cd client
npm install
npm start
```

Open `http://localhost:3000` in your browser!

---

 Project Structure

```
shopez/
├── client/          # React frontend
│   └── src/
│       ├── pages/   # Login, Register, Home, Cart, Orders, Admin
│       └── App.js
├── server/          # Express backend
│   ├── models/      # Mongoose schemas
│   ├── routes/      # API routes
│   └── index.js
├── docs/            # Architecture documentation
└── screenshots/     # App screenshots
```
