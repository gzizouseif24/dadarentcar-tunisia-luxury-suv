export const CarCardSkeleton = () => {
  return (
    <div className="border border-gray-200 bg-white rounded-lg overflow-hidden shadow-md relative">
      {/* Shimmer overlay */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent z-10" />

      {/* Image Skeleton */}
      <div className="aspect-[4/3] bg-gray-200 animate-pulse" />

      {/* Content Skeleton */}
      <div className="p-4 space-y-2">
        {/* Category & Title */}
        <div className="space-y-1">
          <div className="h-3 bg-gray-200 rounded w-16 animate-pulse" />
          <div className="h-5 bg-gray-200 rounded w-32 animate-pulse" />
        </div>

        {/* Price & Features */}
        <div className="flex items-center justify-between border-t border-gray-200 pt-2">
          <div className="h-8 bg-gray-200 rounded w-20 animate-pulse" />
          <div className="flex gap-2">
            <div className="h-4 bg-gray-200 rounded w-12 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-8 animate-pulse" />
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-1.5 pt-1">
          <div className="grid grid-cols-2 gap-1.5">
            <div className="h-8 bg-gray-200 rounded animate-pulse" />
            <div className="h-8 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            <div className="h-7 bg-gray-200 rounded animate-pulse" />
            <div className="h-7 bg-gray-200 rounded animate-pulse" />
            <div className="h-7 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};
