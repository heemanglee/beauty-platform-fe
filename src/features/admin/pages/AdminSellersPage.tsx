import { PageSection } from '@/components/common/PageSection';

const mockSellers = [
  { name: 'Glow House', email: 'seller1@example.com', phone: '010-1234-5678' },
  { name: 'Skin Ritual', email: 'seller2@example.com', phone: '010-9876-5432' },
];

export function AdminSellersPage() {
  return (
    <PageSection
      title="판매자 관리"
      description="FM2에서 판매자 생성 폼과 목록 API를 연결할 영역입니다."
    >
      <div className="overflow-hidden rounded-2xl border">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3 font-medium">판매자명</th>
              <th className="px-4 py-3 font-medium">이메일</th>
              <th className="px-4 py-3 font-medium">연락처</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {mockSellers.map((seller) => (
              <tr key={seller.email}>
                <td className="px-4 py-3">{seller.name}</td>
                <td className="px-4 py-3">{seller.email}</td>
                <td className="px-4 py-3">{seller.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageSection>
  );
}
