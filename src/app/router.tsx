import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AppLayout } from '@/app/layout/AppLayout';
import { ProtectedRoute } from '@/app/routes/ProtectedRoute';
import { RoleGuard } from '@/app/routes/RoleGuard';
import { AdminCategoriesPage } from '@/features/admin/pages/AdminCategoriesPage';
import { AdminProductsPage } from '@/features/admin/pages/AdminProductsPage';
import { AdminSellersPage } from '@/features/admin/pages/AdminSellersPage';
import { LoginPage } from '@/features/auth/pages/LoginPage';
import { SignupPage } from '@/features/auth/pages/SignupPage';
import { UnauthorizedPage } from '@/features/auth/pages/UnauthorizedPage';
import { ProductDetailPage } from '@/features/catalog/pages/ProductDetailPage';
import { ProductsPage } from '@/features/catalog/pages/ProductsPage';
import { OrderDetailPage } from '@/features/orders/pages/OrderDetailPage';
import { OrdersPage } from '@/features/orders/pages/OrdersPage';
import { PurchaseCompletePage } from '@/features/orders/pages/PurchaseCompletePage';
import { SellerProductCreatePage } from '@/features/seller/pages/SellerProductCreatePage';
import { SellerProductEditPage } from '@/features/seller/pages/SellerProductEditPage';
import { SellerProductsPage } from '@/features/seller/pages/SellerProductsPage';

function NotFoundPage() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-xl flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-3xl font-semibold text-slate-900">페이지를 찾을 수 없습니다.</h1>
      <p className="text-slate-600">경로가 잘못되었거나 접근할 수 없는 상품/리소스입니다.</p>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/products" replace />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <SignupPage />,
      },
      {
        path: 'unauthorized',
        element: <UnauthorizedPage />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'products/:productId',
        element: <ProductDetailPage />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: 'orders',
            element: <RoleGuard allowedRoles={['BUYER']} />,
            children: [
              {
                index: true,
                element: <OrdersPage />,
              },
              {
                path: ':orderId',
                element: <OrderDetailPage />,
              },
              {
                path: ':orderId/complete',
                element: <PurchaseCompletePage />,
              },
            ],
          },
          {
            path: 'seller',
            element: <RoleGuard allowedRoles={['SELLER']} />,
            children: [
              {
                path: 'products',
                element: <SellerProductsPage />,
              },
              {
                path: 'products/new',
                element: <SellerProductCreatePage />,
              },
              {
                path: 'products/:productId/edit',
                element: <SellerProductEditPage />,
              },
            ],
          },
          {
            path: 'admin',
            element: <RoleGuard allowedRoles={['ADMIN']} />,
            children: [
              {
                path: 'sellers',
                element: <AdminSellersPage />,
              },
              {
                path: 'categories',
                element: <AdminCategoriesPage />,
              },
              {
                path: 'products',
                element: <AdminProductsPage />,
              },
            ],
          },
        ],
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
