import { z } from 'zod';
import { apiClient } from '@/lib/api/client';
import type { AuthSession, UserRole } from '@/types/domain';

const loginSchema = z.object({
  accessToken: z.string(),
  user: z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    role: z.enum(['ADMIN', 'SELLER', 'BUYER']),
  }),
});

type LoginInput = {
  email: string;
  password: string;
};

type SignupInput = {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  postalCode: string;
};

function getMockRole(email: string): UserRole {
  if (email.startsWith('admin')) return 'ADMIN';
  if (email.startsWith('seller')) return 'SELLER';
  return 'BUYER';
}

const isMockAuthEnabled = import.meta.env.VITE_ENABLE_MOCK_AUTH === 'true';

export const authService = {
  async login(input: LoginInput): Promise<AuthSession> {
    if (isMockAuthEnabled) {
      const role = getMockRole(input.email);
      return {
        accessToken: `mock-token-${role.toLowerCase()}`,
        user: {
          id: `mock-${role.toLowerCase()}`,
          name: `${role} User`,
          email: input.email,
          role,
        },
      };
    }

    const response = await apiClient.post('/auth/login', input);
    return loginSchema.parse(response);
  },

  async signup(input: SignupInput): Promise<void> {
    if (isMockAuthEnabled) {
      return;
    }

    await apiClient.post('/buyers/signup', input);
  },
};
