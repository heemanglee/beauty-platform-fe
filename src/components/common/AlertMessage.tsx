import type { ReactNode } from 'react';
import { AlertCircle, CheckCircle2, TriangleAlert } from 'lucide-react';
import { cn } from '@/lib/utils';

type AlertVariant = 'success' | 'error' | 'warning';

type AlertMessageProps = {
  variant: AlertVariant;
  children: ReactNode;
};

const variantClassMap: Record<AlertVariant, string> = {
  success: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  error: 'border-red-200 bg-red-50 text-red-700',
  warning: 'border-amber-200 bg-amber-50 text-amber-700',
};

const variantIconMap = {
  success: CheckCircle2,
  error: AlertCircle,
  warning: TriangleAlert,
} satisfies Record<AlertVariant, typeof AlertCircle>;

export function AlertMessage({ variant, children }: AlertMessageProps) {
  const Icon = variantIconMap[variant];

  return (
    <div className={cn('flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm', variantClassMap[variant])}>
      <Icon className="mt-0.5 size-4 shrink-0" />
      <div>{children}</div>
    </div>
  );
}
