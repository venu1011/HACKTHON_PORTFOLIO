import { Skeleton } from '@/components/ui/skeleton';

interface ProjectSkeletonProps {
  featured?: boolean;
}

export default function ProjectSkeleton({ featured = false }: ProjectSkeletonProps) {
  return (
    <div className={`glass-card rounded-2xl overflow-hidden h-full ${featured ? 'md:col-span-2' : ''}`}>
      {/* Image Skeleton */}
      <div className="relative">
        <Skeleton className="w-full h-48 md:h-56 bg-gradient-to-r from-muted/50 via-muted/30 to-muted/50" />
        
        {/* Action buttons skeleton */}
        <div className="absolute top-4 right-4 space-x-2">
          <Skeleton className="w-8 h-8 rounded-md" />
          <Skeleton className="w-8 h-8 rounded-md" />
        </div>
        
        {/* Featured badge skeleton */}
        {featured && (
          <div className="absolute top-4 left-4">
            <Skeleton className="w-20 h-6 rounded-full" />
          </div>
        )}
      </div>

      {/* Content Skeleton */}
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <Skeleton className="h-6 w-48" />
          <div className="flex items-center gap-3">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-12" />
          </div>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>

        {/* Tech stack skeleton */}
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-6 w-16 rounded-full" />
          ))}
        </div>

        {/* Buttons skeleton */}
        <div className="flex gap-3 pt-2">
          <Skeleton className="h-9 flex-1 rounded-md" />
          <Skeleton className="h-9 w-12 rounded-md" />
        </div>
      </div>
    </div>
  );
}