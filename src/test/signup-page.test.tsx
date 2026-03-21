import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { SignupPage } from '@/features/auth/pages/SignupPage';
import { ApiRequestError } from '@/lib/api/client';
import { useAuthStore } from '@/store/auth-store';

const { mockSignup } = vi.hoisted(() => ({
  mockSignup: vi.fn(),
}));

vi.mock('@/features/auth/api/auth-service', () => ({
  authService: {
    signup: mockSignup,
  },
}));

function renderSignupPage() {
  return render(
    <MemoryRouter initialEntries={['/signup']}>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<div>login page</div>} />
      </Routes>
    </MemoryRouter>
  );
}

describe('SignupPage', () => {
  beforeEach(() => {
    useAuthStore.getState().clearSession();
    vi.clearAllMocks();
  });

  it('blocks submission when input is invalid', async () => {
    const user = userEvent.setup();
    renderSignupPage();

    await user.type(screen.getByLabelText('이메일'), 'not-an-email');
    await user.type(screen.getByLabelText('비밀번호'), 'short');
    await user.click(screen.getByRole('button', { name: '회원가입' }));

    await waitFor(() => {
      expect(mockSignup).not.toHaveBeenCalled();
    });
  });

  it('navigates to login page on successful signup', async () => {
    mockSignup.mockResolvedValue(undefined);

    const user = userEvent.setup();
    renderSignupPage();

    await user.type(screen.getByLabelText('이름'), '홍길동');
    await user.type(screen.getByLabelText('이메일'), 'buyer@test.com');
    await user.type(screen.getByLabelText('비밀번호'), 'password123');
    await user.type(screen.getByLabelText('전화번호'), '010-1234-5678');
    await user.type(screen.getByLabelText('우편번호'), '06236');
    await user.click(screen.getByRole('button', { name: '회원가입' }));

    await waitFor(() => {
      expect(screen.getByText('가입이 완료되었습니다. 로그인 페이지로 이동합니다.')).toBeInTheDocument();
    });
  });

  it('shows server error message on failure', async () => {
    mockSignup.mockRejectedValue(new Error('회원가입에 실패했습니다.'));

    const user = userEvent.setup();
    renderSignupPage();

    await user.type(screen.getByLabelText('이름'), '홍길동');
    await user.type(screen.getByLabelText('이메일'), 'dup@test.com');
    await user.type(screen.getByLabelText('비밀번호'), 'password123');
    await user.type(screen.getByLabelText('전화번호'), '010-1234-5678');
    await user.type(screen.getByLabelText('우편번호'), '06236');
    await user.click(screen.getByRole('button', { name: '회원가입' }));

    await waitFor(() => {
      expect(screen.getByText('회원가입에 실패했습니다.')).toBeInTheDocument();
    });
  });

  it('shows field-level errors for duplicate email', async () => {
    mockSignup.mockRejectedValue(
      new ApiRequestError(409, {
        code: 'DUPLICATE',
        message: '중복된 값이 존재합니다.',
        fieldErrors: { email: ['이미 사용 중인 이메일입니다.'] },
      })
    );

    const user = userEvent.setup();
    renderSignupPage();

    await user.type(screen.getByLabelText('이름'), '홍길동');
    await user.type(screen.getByLabelText('이메일'), 'dup@test.com');
    await user.type(screen.getByLabelText('비밀번호'), 'password123');
    await user.type(screen.getByLabelText('전화번호'), '010-1234-5678');
    await user.type(screen.getByLabelText('우편번호'), '06236');
    await user.click(screen.getByRole('button', { name: '회원가입' }));

    await waitFor(() => {
      expect(screen.getByText('이미 사용 중인 이메일입니다.')).toBeInTheDocument();
    });
  });
});
