## Tech Stack

* Next.js (App Router) + TypeScript
* PostgreSQL + Prisma
* NextAuth/Auth.js
* Tailwind CSS + shadcn/ui
* Stripe (payments)

---

# Phase 1 - Project Setup

```
app/
components/
lib/
prisma/
actions/
types/
hooks/
```

Configure:

* Prisma
* Database
* Authentication
* Tailwind
* shadcn/ui

---

# Phase 2 - Database

### User

```
id
name
email
password
role
createdAt
```

### Book

```
id
title
author
description
price
stock
coverImage
categoryId
publishedAt
createdAt
```

### Category

```
id
name
slug
```

### Cart

```
id
userId
```

### CartItem

```
id
cartId
bookId
quantity
```

### Order

```
id
userId
status
total
createdAt
```

### OrderItem

```
id
orderId
bookId
price
quantity
```

---

# Phase 3 - Authentication

* Register
* Login
* Logout
* Protected routes
* Admin role

---

# Phase 4 - Home Page

Sections:

* Hero
* Featured Books
* Best Sellers
* New Arrivals
* Categories
* Footer

---

# Phase 5 - Books

### Books Page

* Search
* Pagination
* Category filter
* Price filter
* Sort

### Book Details

* Images
* Description
* Stock
* Author
* Add to Cart

---

# Phase 6 - Cart

Features

* Add
* Remove
* Increase quantity
* Decrease quantity
* Clear cart
* Cart total

---

# Phase 7 - Checkout

* Shipping details
* Order summary
* Payment
* Order creation
* Success page

---

# Phase 8 - Orders

User can

* View orders
* View order details
* Track status

---

# Phase 9 - Admin Dashboard

Books

* Create
* Edit
* Delete

Categories

* CRUD

Orders

* Update status

Users

* List users

Dashboard

* Revenue
* Orders
* Books sold
* Low stock

---

# Phase 10 - API / Server Actions

```
auth/
books/
categories/
cart/
orders/
admin/
payments/
```

---

# Phase 11 - UI Components

```
Navbar
Footer
BookCard
BookGrid
BookList
SearchBar
Filters
Pagination
CartItem
OrderCard
Rating
Breadcrumb
Loading
Skeleton
Modal
Toast
```

---

# Phase 12 - Validation

Use Zod for:

* Login
* Register
* Book creation
* Checkout
* Category
* Profile

---

# Phase 13 - Optimization

* Image optimization
* Server Components
* Route Handlers
* Caching
* Pagination
* Suspense
* Lazy loading

---

# Phase 14 - Nice-to-have Features

* Wishlist
* Book reviews
* Ratings
* Related books
* Recently viewed
* Coupon codes
* Inventory alerts
* Email receipts
* Dark mode

---

## Recommended Build Order

1. Project setup
2. Prisma schema
3. Authentication
4. Home page
5. Books listing
6. Book details
7. Search & filters
8. Cart
9. Checkout
10. Orders
11. Admin dashboard
12. Optimization
13. Extra features

This order lets you ship a usable MVP early, then add management and advanced features incrementally.
