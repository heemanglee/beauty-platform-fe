import { PageSection } from '@/components/common/PageSection';
import { Card } from '@/components/ui/card';

export function PurchaseCompletePage() {
  return (
    <PageSection
      title="주문 완료"
      description="FM5 주문 성공 후 결과 페이지의 초기 베이스입니다."
    >
      <Card className="space-y-2">
        <p className="text-sm text-slate-500">주문번호, 상품명, 수량, 금액, 배송 정보 요약이 이 영역에 표시됩니다.</p>
      </Card>
    </PageSection>
  );
}
