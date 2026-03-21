import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { AlertMessage } from '@/components/common/AlertMessage';
import { FormFieldError } from '@/components/common/FormFieldError';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { authService } from '@/features/auth/api/auth-service';
import { getDefaultPathForRole } from '@/features/auth/lib/access-control';
import { useAuthStore } from '@/store/auth-store';

const loginSchema = z.object({
  email: z.string().email('올바른 이메일 형식을 입력하세요.'),
  password: z.string().min(1, '비밀번호를 입력하세요.'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const setSession = useAuthStore((state) => state.setSession);
  const [errorMessage, setErrorMessage] = useState<string>();

  const redirectTo = new URLSearchParams(location.search).get('redirectTo');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setErrorMessage(undefined);

    try {
      const session = await authService.login(values);
      setSession(session);
      navigate(redirectTo || getDefaultPathForRole(session.user.role), { replace: true });
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : '로그인에 실패했습니다.');
    }
  });

  return (
    <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <Card className="bg-gradient-to-br from-brand-600 via-brand-500 to-fuchsia-500 text-white">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/80">MVP Frontend</p>
          <h1 className="text-4xl font-semibold">역할 기반 운영과 상품 검증을 위한 Beauty Platform</h1>
          <p className="max-w-xl text-sm leading-6 text-white/85">
            Admin, Seller, Buyer 흐름을 분리한 SPA 기반 구조입니다. 목업 인증 모드에서는
            <strong> admin@</strong>, <strong>seller@</strong>, 그 외 이메일 prefix로 역할을 바로 테스트할 수 있습니다.
          </p>
        </div>
      </Card>

      <Card className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">로그인</h2>
          <p className="mt-1 text-sm text-slate-600">공용 로그인 페이지입니다. 역할에 따라 기본 화면으로 이동합니다.</p>
        </div>

        {errorMessage ? <AlertMessage variant="error">{errorMessage}</AlertMessage> : null}

        <form className="space-y-4" onSubmit={onSubmit}>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
              이메일
            </label>
            <Input id="email" type="email" placeholder="buyer@example.com" {...register('email')} />
            <FormFieldError message={errors.email?.message} />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
              비밀번호
            </label>
            <Input id="password" type="password" placeholder="비밀번호" {...register('password')} />
            <FormFieldError message={errors.password?.message} />
          </div>

          <Button className="w-full" type="submit" disabled={isSubmitting}>
            {isSubmitting ? '로그인 중...' : '로그인'}
          </Button>
        </form>

        <div className="text-sm text-slate-600">
          Buyer 계정이 없나요?{' '}
          <Link to="/signup" className="font-semibold text-brand-700">
            회원가입
          </Link>
        </div>
      </Card>
    </div>
  );
}
