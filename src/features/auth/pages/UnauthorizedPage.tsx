import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function UnauthorizedPage() {
  return (
    <div className="mx-auto max-w-xl">
      <Card className="space-y-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Unauthorized</p>
        <h1 className="text-2xl font-semibold text-slate-900">접근 권한이 없습니다.</h1>
        <p className="text-sm text-slate-600">현재 로그인한 역할로는 이 화면에 접근할 수 없습니다.</p>
        <div className="flex justify-center gap-2">
          <Button asChild variant="secondary">
            <Link to="/products">상품 목록으로</Link>
          </Button>
          <Button asChild>
            <Link to="/login">다시 로그인</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}
