import { PageSection } from '@/components/common/PageSection';

const orders = [
  { id: 'ORD-1001', productName: 'Glow Fit Cushion', orderedAt: '2026-03-20', totalPrice: '₩29,000' },
];

export function OrdersPage() {
  return (
    <PageSection
      title="주문 내역"
      description="Buyer 전용 주문 목록 화면입니다. FM6에서 API와 Pagination을 연결합니다."
    >
      <div className="overflow-hidden rounded-2xl border">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3 font-medium">주문번호</th>
              <th className="px-4 py-3 font-medium">주문일시</th>
              <th className="px-4 py-3 font-medium">상품명</th>
              <th className="px-4 py-3 font-medium">금액</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-4 py-3">{order.id}</td>
                <td className="px-4 py-3">{order.orderedAt}</td>
                <td className="px-4 py-3">{order.productName}</td>
                <td className="px-4 py-3">{order.totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageSection>
  );
}
