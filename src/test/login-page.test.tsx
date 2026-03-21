import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { LoginPage } from '@/features/auth/pages/LoginPage';
import { useAuthStore } from '@/store/auth-store';

const { mockLogin } = vi.hoisted(() => ({
  mockLogin: vi.fn(),
}));

vi.mock('@/features/auth/api/auth-service', () => ({
  authService: {
    login: mockLogin,
  },
}));

function renderLoginPage() {
  return render(
    <MemoryRouter initialEntries={['/login']}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/sellers" element={<div>admin page</div>} />
        <Route path="/seller/products" element={<div>seller page</div>} />
        <Route path="/products" element={<div>products page</div>} />
      </Routes>
    </MemoryRouter>
  );
}

describe('LoginPage', () => {
  beforeEach(() => {
    useAuthStore.getState().clearSession();
    vi.clearAllMocks();
  });

  it('blocks submission when input is invalid', async () => {
    const user = userEvent.setup();
    renderLoginPage();

    await user.type(screen.getByLabelText('이메일'), 'not-an-email');
    await user.type(screen.getByLabelText('비밀번호'), 'pw');
    await user.click(screen.getByRole('button', { name: '로그인' }));

    await waitFor(() => {
      expect(mockLogin).not.toHaveBeenCalled();
    });
  });

  it('redirects Admin to /admin/sellers on success', async () => {
    mockLogin.mockResolvedValue({
      accessToken: 'token',
      user: { id: 'a1', name: 'Admin', email: 'admin@test.com', role: 'ADMIN' },
    });

    const user = userEvent.setup();
    renderLoginPage();

    await user.type(screen.getByLabelText('이메일'), 'admin@test.com');
    await user.type(screen.getByLabelText('비밀번호'), 'password123');
    await user.click(screen.getByRole('button', { name: '로그인' }));

    await waitFor(() => {
      expect(screen.getByText('admin page')).toBeInTheDocument();
    });
  });

  it('redirects Buyer to /products on success', async () => {
    mockLogin.mockResolvedValue({
      accessToken: 'token',
      user: { id: 'b1', name: 'Buyer', email: 'buyer@test.com', role: 'BUYER' },
    });

    const user = userEvent.setup();
    renderLoginPage();

    await user.type(screen.getByLabelText('이메일'), 'buyer@test.com');
    await user.type(screen.getByLabelText('비밀번호'), 'password123');
    await user.click(screen.getByRole('button', { name: '로그인' }));

    await waitFor(() => {
      expect(screen.getByText('products page')).toBeInTheDocument();
    });
  });

  it('shows error message on login failure', async () => {
    mockLogin.mockRejectedValue(new Error('이메일 또는 비밀번호가 일치하지 않습니다.'));

    const user = userEvent.setup();
    renderLoginPage();

    await user.type(screen.getByLabelText('이메일'), 'wrong@test.com');
    await user.type(screen.getByLabelText('비밀번호'), 'wrongpass');
    await user.click(screen.getByRole('button', { name: '로그인' }));

    await waitFor(() => {
      expect(screen.getByText('이메일 또는 비밀번호가 일치하지 않습니다.')).toBeInTheDocument();
    });
  });
});
