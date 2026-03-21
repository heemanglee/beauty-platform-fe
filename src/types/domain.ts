export type UserRole = 'ADMIN' | 'SELLER' | 'BUYER';
export type ProductStatus = 'PENDING' | 'ON_SALE' | 'SOLD_OUT' | 'BANNED';
export type ProductImageType = 'THUMBNAIL' | 'MAIN' | 'DESCRIPTION';

export type AuthSession = {
  accessToken: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: UserRole;
  };
};

export type PaginatedResponse<T> = {
  items: T[];
  page: number;
  size: number;
  totalCount: number;
};

export type ApiError = {
  code: string;
  message: string;
  fieldErrors?: Record<string, string[]>;
};
