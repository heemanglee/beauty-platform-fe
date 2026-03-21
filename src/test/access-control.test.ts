import { describe, expect, it } from 'vitest';
import { canAccessRole, getDefaultPathForRole } from '@/features/auth/lib/access-control';

describe('access control helpers', () => {
  it('returns the correct default path for each role', () => {
    expect(getDefaultPathForRole('ADMIN')).toBe('/admin/sellers');
    expect(getDefaultPathForRole('SELLER')).toBe('/seller/products');
    expect(getDefaultPathForRole('BUYER')).toBe('/products');
  });

  it('checks whether a role is allowed', () => {
    expect(canAccessRole('ADMIN', ['ADMIN'])).toBe(true);
    expect(canAccessRole('BUYER', ['ADMIN', 'SELLER'])).toBe(false);
  });
});
