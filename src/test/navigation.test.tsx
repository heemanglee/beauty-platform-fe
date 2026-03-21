import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';
import { Navigation } from '@/app/layout/Navigation';
import { useAuthStore } from '@/store/auth-store';

function renderNavigation() {
  return render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  );
}

describe('Navigation', () => {
  beforeEach(() => {
    useAuthStore.getState().clearSession();
  });

  it('shows only product list for guests', () => {
    renderNavigation();

    expect(screen.getByText('상품 목록')).toBeInTheDocument();
    expect(screen.queryByText('주문 내역')).not.toBeInTheDocument();
    expect(screen.queryByText('상품 관리')).not.toBeInTheDocument();
    expect(screen.queryByText('판매자 관리')).not.toBeInTheDocument();
  });

  it('shows product list and orders for Buyer', () => {
    useAuthStore.getState().setSession({
      accessToken: 'token',
      user: { id: 'b1', name: 'Buyer', email: 'buyer@test.com', role: 'BUYER' },
    });

    renderNavigation();

    expect(screen.getByText('상품 목록')).toBeInTheDocument();
    expect(screen.getByText('주문 내역')).toBeInTheDocument();
    expect(screen.queryByText('상품 관리')).not.toBeInTheDocument();
  });

  it('shows seller menus for Seller', () => {
    useAuthStore.getState().setSession({
      accessToken: 'token',
      user: { id: 's1', name: 'Seller', email: 'seller@test.com', role: 'SELLER' },
    });

    renderNavigation();

    expect(screen.getByText('상품 관리')).toBeInTheDocument();
    expect(screen.getByText('신규 상품')).toBeInTheDocument();
    expect(screen.queryByText('주문 내역')).not.toBeInTheDocument();
    expect(screen.queryByText('판매자 관리')).not.toBeInTheDocument();
  });

  it('shows admin menus for Admin', () => {
    useAuthStore.getState().setSession({
      accessToken: 'token',
      user: { id: 'a1', name: 'Admin', email: 'admin@test.com', role: 'ADMIN' },
    });

    renderNavigation();

    expect(screen.getByText('판매자 관리')).toBeInTheDocument();
    expect(screen.getByText('카테고리 관리')).toBeInTheDocument();
    expect(screen.getByText('상품 운영')).toBeInTheDocument();
    expect(screen.queryByText('주문 내역')).not.toBeInTheDocument();
  });
});
