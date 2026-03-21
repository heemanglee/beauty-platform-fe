import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';
import { RoleGuard } from '@/app/routes/RoleGuard';
import { useAuthStore } from '@/store/auth-store';

describe('RoleGuard', () => {
  beforeEach(() => {
    useAuthStore.getState().clearSession();
  });

  it('renders content for allowed role', () => {
    useAuthStore.getState().setSession({
      accessToken: 'token',
      user: { id: 'a1', name: 'Admin', email: 'admin@test.com', role: 'ADMIN' },
    });

    render(
      <MemoryRouter initialEntries={['/admin/sellers']}>
        <Routes>
          <Route element={<RoleGuard allowedRoles={['ADMIN']} />}>
            <Route path="/admin/sellers" element={<div>admin sellers</div>} />
          </Route>
          <Route path="/unauthorized" element={<div>unauthorized</div>} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('admin sellers')).toBeInTheDocument();
  });

  it('redirects to unauthorized for disallowed role', () => {
    useAuthStore.getState().setSession({
      accessToken: 'token',
      user: { id: 'b1', name: 'Buyer', email: 'buyer@test.com', role: 'BUYER' },
    });

    render(
      <MemoryRouter initialEntries={['/admin/sellers']}>
        <Routes>
          <Route element={<RoleGuard allowedRoles={['ADMIN']} />}>
            <Route path="/admin/sellers" element={<div>admin sellers</div>} />
          </Route>
          <Route path="/unauthorized" element={<div>unauthorized</div>} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('unauthorized')).toBeInTheDocument();
  });

  it('redirects to unauthorized when no user is set', () => {
    render(
      <MemoryRouter initialEntries={['/seller/products']}>
        <Routes>
          <Route element={<RoleGuard allowedRoles={['SELLER']} />}>
            <Route path="/seller/products" element={<div>seller products</div>} />
          </Route>
          <Route path="/unauthorized" element={<div>unauthorized</div>} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('unauthorized')).toBeInTheDocument();
  });
});
