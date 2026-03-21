import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';
import { ProtectedRoute } from '@/app/routes/ProtectedRoute';
import { useAuthStore } from '@/store/auth-store';

describe('ProtectedRoute', () => {
  beforeEach(() => {
    useAuthStore.getState().clearSession();
  });

  it('redirects guests to login', () => {
    render(
      <MemoryRouter initialEntries={['/orders']}>
        <Routes>
          <Route path="/login" element={<div>login page</div>} />
          <Route element={<ProtectedRoute />}>
            <Route path="/orders" element={<div>orders</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('login page')).toBeInTheDocument();
  });

  it('renders protected content for authenticated users', () => {
    useAuthStore.getState().setSession({
      accessToken: 'token',
      user: {
        id: 'buyer-1',
        name: 'Buyer',
        email: 'buyer@example.com',
        role: 'BUYER',
      },
    });

    render(
      <MemoryRouter initialEntries={['/orders']}>
        <Routes>
          <Route path="/login" element={<div>login page</div>} />
          <Route element={<ProtectedRoute />}>
            <Route path="/orders" element={<div>orders</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('orders')).toBeInTheDocument();
  });
});
