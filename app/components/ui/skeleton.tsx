import { cn } from "@/lib/utils"

export function Skeleton({ className }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-800 ${className}`}>
      <div className='absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent' />
    </div>
  );
}
