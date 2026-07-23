// types.ts

// ---------- Auth ----------

export interface RegisterUserInput {
  name: string;
  email: string;
  password: string;
}

export interface LoginUserInput {
  email: string;
  password: string;
}

// ---------- Category ----------

export interface CreateCategoryInput {
  name: string;
  slug: string;
}

export interface UpdateCategoryInput {
  name?: string;
  slug?: string;
}

// ---------- Book ----------

export interface CreateBookInput {
  title: string;
  author: string;
  description: string;
  price: number;
  stock: number;
  coverImage: string;
  categoryId: number;
  publishedAt?: Date;
}

export interface UpdateBookInput {
  title?: string;
  author?: string;
  description?: string;
  price?: number;
  stock?: number;
  coverImage?: string;
  categoryId?: number;
  publishedAt?: Date;
}

// ---------- Cart ----------

export interface AddToCartInput {
  bookId: number;
  quantity: number;
}

export interface UpdateCartItemInput {
  cartItemId: number;
  quantity: number;
}

// ---------- Checkout ----------

export interface ShippingDetailsInput {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

// ---------- Orders ----------

export interface CreateOrderInput {
  shipping: ShippingDetailsInput;
}

export interface UpdateOrderStatusInput {
  orderId: number;
  status: "PENDING" | "PAID" | "SHIPPED" | "DELIVERED" | "CANCELLED";
}

// ---------- Search ----------

export interface BookFilters {
  search?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?:
    | "newest"
    | "oldest"
    | "price-asc"
    | "price-desc"
    | "title-asc"
    | "title-desc";
  page?: number;
  limit?: number;
}

export type JwtPayload = {
  id: number;
  name: string;
  email: string;
  role: "USER" | "ADMIN";
};
