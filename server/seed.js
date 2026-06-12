const mongoose = require('mongoose');
const Product = require('./models/Product');

mongoose.connect('mongodb://localhost:27017/shopez')
  .then(() => console.log('Connected'));

const products = [
  // Electronics
  { name: 'iPhone 15', description: 'Latest Apple smartphone with A16 chip', price: 79999, category: 'Electronics', stock: 10, rating: 4.5, image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=300' },
  { name: 'Samsung Galaxy S24', description: 'Flagship Android with 200MP camera', price: 74999, category: 'Electronics', stock: 12, rating: 4.4, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300' },
  { name: 'Boat Headphones', description: 'Wireless noise cancelling headphones', price: 3499, category: 'Electronics', stock: 30, rating: 4.1, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300' },
  { name: 'Samsung 4K TV', description: '55 inch Smart TV with HDR display', price: 54999, category: 'Electronics', stock: 8, rating: 4.4, image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f4834a?w=300' },
  { name: 'iPad Air', description: 'Powerful tablet with M2 chip', price: 59999, category: 'Electronics', stock: 15, rating: 4.6, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300' },
  { name: 'Sony PlayStation 5', description: 'Next gen gaming console', price: 49999, category: 'Electronics', stock: 5, rating: 4.8, image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=300' },
  { name: 'Apple Watch Series 9', description: 'Smartwatch with health tracking', price: 41999, category: 'Electronics', stock: 20, rating: 4.7, image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300' },
  { name: 'Dell Laptop', description: 'Intel i7 16GB RAM 512GB SSD', price: 89999, category: 'Electronics', stock: 7, rating: 4.5, image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=300' },
  { name: 'Canon DSLR Camera', description: 'Professional 24MP DSLR camera', price: 54999, category: 'Electronics', stock: 6, rating: 4.6, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300' },

  // Clothing
  { name: "Levi's Jeans", description: 'Classic slim fit denim jeans', price: 2999, category: 'Clothing', stock: 50, rating: 4.2, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300' },
  { name: 'Allen Solly Shirt', description: 'Formal cotton shirt for office wear', price: 1499, category: 'Clothing', stock: 40, rating: 4.0, image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300' },
  { name: 'Zara Dress', description: 'Elegant evening dress for women', price: 3499, category: 'Clothing', stock: 25, rating: 4.3, image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300' },
  { name: 'H&M Hoodie', description: 'Comfortable cotton blend hoodie', price: 1999, category: 'Clothing', stock: 35, rating: 4.1, image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=300' },
  { name: 'UCB Jacket', description: 'Stylish winter jacket for men', price: 4999, category: 'Clothing', stock: 20, rating: 4.2, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300' },
  { name: 'Polo T-Shirt', description: 'Classic cotton polo t-shirt', price: 999, category: 'Clothing', stock: 60, rating: 4.0, image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=300' },
  { name: 'Ethnic Kurta', description: 'Traditional cotton kurta for men', price: 1299, category: 'Clothing', stock: 45, rating: 4.3, image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=300' },

  // Footwear
  { name: 'Nike Air Max', description: 'Comfortable running shoes for everyday use', price: 8999, category: 'Footwear', stock: 25, rating: 4.3, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300' },
  { name: 'Adidas Ultraboost', description: 'Premium running shoes with Boost sole', price: 12999, category: 'Footwear', stock: 18, rating: 4.5, image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=300' },
  { name: 'Puma Sneakers', description: 'Casual sneakers for daily wear', price: 4999, category: 'Footwear', stock: 30, rating: 4.0, image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=300' },
  { name: 'Bata Formal Shoes', description: 'Classic leather formal shoes', price: 2499, category: 'Footwear', stock: 40, rating: 3.9, image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=300' },
  { name: 'Woodland Boots', description: 'Rugged outdoor boots for trekking', price: 5999, category: 'Footwear', stock: 22, rating: 4.4, image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=300' },
  { name: 'Skechers Slip-ons', description: 'Comfortable memory foam slip-on shoes', price: 3499, category: 'Footwear', stock: 35, rating: 4.2, image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=300' },

  // Furniture
  { name: 'Dining Table', description: 'Wooden 6-seater dining table', price: 15999, category: 'Furniture', stock: 5, rating: 4.6, image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=300' },
  { name: 'Office Chair', description: 'Ergonomic chair with lumbar support', price: 8999, category: 'Furniture', stock: 15, rating: 4.4, image: 'https://images.unsplash.com/photo-1589384267710-7a170981ca78?w=300' },
  { name: 'Bookshelf', description: '5-tier wooden bookshelf', price: 4999, category: 'Furniture', stock: 10, rating: 4.2, image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=300' },
  { name: 'Sofa Set', description: '3+1+1 fabric sofa set for living room', price: 34999, category: 'Furniture', stock: 4, rating: 4.5, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300' },
  { name: 'King Size Bed', description: 'Wooden king size bed with storage', price: 24999, category: 'Furniture', stock: 6, rating: 4.5, image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300' },
  { name: 'Study Desk', description: 'Compact wooden study desk', price: 6999, category: 'Furniture', stock: 12, rating: 4.3, image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=300' },

  // Beauty
  { name: 'Lakme Foundation', description: 'Long lasting matte foundation', price: 599, category: 'Beauty', stock: 60, rating: 4.1, image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300' },
  { name: 'Maybelline Lipstick', description: 'Creamy long stay lipstick', price: 399, category: 'Beauty', stock: 80, rating: 4.3, image: 'https://images.unsplash.com/photo-1586495777744-4e6232bf2263?w=300' },
  { name: 'Nivea Moisturizer', description: 'Daily moisturizing cream for all skin types', price: 299, category: 'Beauty', stock: 100, rating: 4.2, image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=300' },
  { name: "L'Oreal Shampoo", description: 'Nourishing shampoo for dry hair', price: 449, category: 'Beauty', stock: 75, rating: 4.0, image: 'https://images.unsplash.com/photo-1585751119414-ef2636f8aede?w=300' },
  { name: 'Himalaya Face Wash', description: 'Neem purifying face wash', price: 199, category: 'Beauty', stock: 90, rating: 4.2, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300' },
  { name: 'Sunscreen SPF 50', description: 'UVA UVB protection sunscreen lotion', price: 349, category: 'Beauty', stock: 70, rating: 4.4, image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=300' },

  // Books
  { name: 'Atomic Habits', description: 'Tiny changes remarkable results by James Clear', price: 499, category: 'Books', stock: 50, rating: 4.8, image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300' },
  { name: 'Rich Dad Poor Dad', description: 'Personal finance classic by Robert Kiyosaki', price: 399, category: 'Books', stock: 45, rating: 4.7, image: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=300' },
  { name: 'The Alchemist', description: 'Magical novel by Paulo Coelho', price: 299, category: 'Books', stock: 60, rating: 4.6, image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300' },
  { name: 'Wings of Fire', description: 'Autobiography of Dr APJ Abdul Kalam', price: 249, category: 'Books', stock: 55, rating: 4.8, image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=300' },
  { name: 'The Psychology of Money', description: 'Timeless lessons on wealth by Morgan Housel', price: 449, category: 'Books', stock: 40, rating: 4.7, image: 'https://images.unsplash.com/photo-1621944190310-e3cca1564bd7?w=300' },
  { name: 'Zero to One', description: 'Notes on startups by Peter Thiel', price: 399, category: 'Books', stock: 35, rating: 4.6, image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300' },
];

Product.deleteMany({})
  .then(() => Product.insertMany(products))
  .then(() => { console.log('✅ All products added!'); mongoose.connection.close(); })
  .catch(err => console.log(err));