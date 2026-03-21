import type { ReactNode } from 'react';
import { Card } from '@/components/ui/card';

type PageSectionProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function PageSection({ title, description, children }: PageSectionProps) {
  return (
    <section className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
        <p className="mt-1 text-sm text-slate-600">{description}</p>
      </div>
      <Card>{children}</Card>
    </section>
  );
}
