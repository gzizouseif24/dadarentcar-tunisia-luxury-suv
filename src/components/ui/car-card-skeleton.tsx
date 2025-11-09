export const CarCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 animate-pulse">
      {/* Image Skeleton */}
      <div className="h-56 bg-gray-200" />
      
      {/* Content Skeleton */}
      <div className="p-6">
        <div className="h-4 bg-gray-200 rounded w-20 mb-3" />
        <div className="h-6 bg-gray-200 rounded w-32 mb-1" />
        <div className="h-5 bg-gray-200 rounded w-24 mb-4" />
        
        {/* Specs */}
        <div className="flex gap-4 mb-6 pb-6 border-b border-gray-100">
          <div className="h-4 bg-gray-200 rounded w-20" />
          <div className="h-4 bg-gray-200 rounded w-20" />
          <div className="h-4 bg-gray-200 rounded w-12" />
        </div>
        
        {/* Pricing */}
        <div className="flex justify-between mb-6">
          <div className="h-8 bg-gray-200 rounded w-24" />
          <div className="h-8 bg-gray-200 rounded w-24" />
        </div>
        
        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="h-12 bg-gray-200 rounded-lg" />
          <div className="h-12 bg-gray-200 rounded-lg" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="h-10 bg-gray-200 rounded-lg" />
          <div className="h-10 bg-gray-200 rounded-lg" />
          <div className="h-10 bg-gray-200 rounded-lg" />
        </div>
      </div>
    </div>
  );
};
