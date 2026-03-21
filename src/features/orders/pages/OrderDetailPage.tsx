import { useParams } from 'react-router-dom';
import { PageSection } from '@/components/common/PageSection';
import { Card } from '@/components/ui/card';

export function OrderDetailPage() {
  const { orderId } = useParams();

  return (
    <PageSection
      title={`주문 상세 ${orderId}`}
      description="주문 시점 스냅샷 배송 정보 유지 여부를 검증할 FM6 화면입니다."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="space-y-2">
          <h2 className="font-semibold text-slate-900">주문 정보</h2>
          <p className="text-sm text-slate-600">상품명, 수량, 주문 금액, 주문일시가 노출될 영역입니다.</p>
        </Card>
        <Card className="space-y-2">
          <h2 className="font-semibold text-slate-900">배송 정보 스냅샷</h2>
          <p className="text-sm text-slate-600">주문 당시 등록된 이름 / 우편번호 / 연락처를 유지해서 보여줍니다.</p>
        </Card>
      </div>
    </PageSection>
  );
}
