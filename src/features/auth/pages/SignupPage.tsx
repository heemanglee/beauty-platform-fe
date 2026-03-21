import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { AlertMessage } from '@/components/common/AlertMessage';
import { FormFieldError } from '@/components/common/FormFieldError';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { authService } from '@/features/auth/api/auth-service';

const signupSchema = z.object({
  name: z.string().min(1, '이름을 입력하세요.'),
  email: z.string().email('올바른 이메일 형식을 입력하세요.'),
  password: z.string().min(8, '비밀번호는 8자 이상이어야 합니다.'),
  phoneNumber: z.string().min(1, '전화번호를 입력하세요.'),
  postalCode: z.string().min(1, '우편번호를 입력하세요.'),
});

type SignupFormValues = z.infer<typeof signupSchema>;

export function SignupPage() {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<string>();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = handleSubmit(async (values) => {
    setSuccessMessage(undefined);
    setErrorMessage(undefined);

    try {
      await authService.signup(values);
      setSuccessMessage('가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
      window.setTimeout(() => navigate('/login'), 1000);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : '회원가입에 실패했습니다.');
    }
  });

  return (
    <div className="mx-auto max-w-2xl">
      <Card className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Buyer 회원가입</h1>
          <p className="mt-1 text-sm text-slate-600">MVP 요구사항 기준 필수 필드를 모두 포함한 가입 폼입니다.</p>
        </div>

        {successMessage ? <AlertMessage variant="success">{successMessage}</AlertMessage> : null}
        {errorMessage ? <AlertMessage variant="error">{errorMessage}</AlertMessage> : null}

        <form className="grid gap-4 sm:grid-cols-2" onSubmit={onSubmit}>
          <div className="sm:col-span-2">
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
              이름
            </label>
            <Input id="name" placeholder="홍길동" {...register('name')} />
            <FormFieldError message={errors.name?.message} />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
              이메일
            </label>
            <Input id="email" type="email" placeholder="buyer@example.com" {...register('email')} />
            <FormFieldError message={errors.email?.message} />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
              비밀번호
            </label>
            <Input id="password" type="password" placeholder="8자 이상 입력" {...register('password')} />
            <FormFieldError message={errors.password?.message} />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="mb-2 block text-sm font-medium text-slate-700">
              전화번호
            </label>
            <Input id="phoneNumber" placeholder="010-0000-0000" {...register('phoneNumber')} />
            <FormFieldError message={errors.phoneNumber?.message} />
          </div>

          <div>
            <label htmlFor="postalCode" className="mb-2 block text-sm font-medium text-slate-700">
              우편번호
            </label>
            <Input id="postalCode" placeholder="06236" {...register('postalCode')} />
            <FormFieldError message={errors.postalCode?.message} />
          </div>

          <div className="sm:col-span-2 flex items-center justify-between gap-4">
            <p className="text-sm text-slate-500">우편번호는 기본 배송 주소 정보로 사용됩니다.</p>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? '가입 중...' : '회원가입'}
            </Button>
          </div>
        </form>

        <div className="text-sm text-slate-600">
          이미 계정이 있나요?{' '}
          <Link to="/login" className="font-semibold text-brand-700">
            로그인
          </Link>
        </div>
      </Card>
    </div>
  );
}
