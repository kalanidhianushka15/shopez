# 📊 Entity Relationship (ER) Diagram

## Collections Overview

ShopEZ uses MongoDB with the following collections:

---

### 👤 User
```
User {
  _id: ObjectId
  name: String (required)
  email: String (required, unique)
  password: String (required, hashed)
  role: String (default: 'user', enum: ['user', 'admin'])
  createdAt: Date
  updatedAt: Date
}
```

---

### 📦 Product
```
Product {
  _id: ObjectId
  name: String (required)
  description: String
  price: Number (required)
  category: String
  stock: Number (default: 0)
  rating: Number (default: 0)
  image: String (URL)
  createdAt: Date
  updatedAt: Date
}
```

---

### 🛒 Cart
```
Cart {
  _id: ObjectId
  user: ObjectId → ref: User
  items: [
    {
      product: ObjectId → ref: Product
      quantity: Number (default: 1)
    }
  ]
  createdAt: Date
  updatedAt: Date
}
```

---

### 📋 Order
```
Order {
  _id: ObjectId
  user: ObjectId → ref: User
  items: [
    {
      product: ObjectId → ref: Product
      quantity: Number
      price: Number
    }
  ]
  totalAmount: Number
  status: String (default: 'pending')
  createdAt: Date
  updatedAt: Date
}
```

---

## Relationships

- One **User** can have one **Cart**
- One **Cart** can have many **Products**
- One **User** can have many **Orders**
- One **Order** can have many **Products**