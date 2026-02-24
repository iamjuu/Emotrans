import React from 'react';

const Shimmer = ({ width = 'w-full', height = 'h-64', className = '', rounded = 'rounded-lg' }) => {
  return (
    <div className={`${width} ${height} ${rounded} ${className} bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 animate-pulse overflow-hidden`}>
      <div className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
    </div>
  );
};

// Specific shimmer components for different use cases
export const ShimmerCard = ({ className = '' }) => (
  <div className={`bg-zinc-900 rounded-2xl shadow-lg overflow-hidden max-w-sm w-full border border-zinc-800 ${className}`}>
    <Shimmer height="h-64" rounded="rounded-none" />
    <div className="p-6 space-y-3">
      <Shimmer height="h-6" width="w-3/4" />
      <Shimmer height="h-4" width="w-full" />
      <Shimmer height="h-4" width="w-2/3" />
      <div className="pt-2">
        <Shimmer height="h-4" width="w-1/3" />
      </div>
    </div>
  </div>
);

export const ShimmerText = ({ lines = 3, className = '' }) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, index) => (
      <Shimmer 
        key={index}
        height="h-4" 
        width={index === lines - 1 ? "w-2/3" : "w-full"} 
        className="mb-2"
      />
    ))}
  </div>
);

export const ShimmerImage = ({ width = 'w-full', height = 'h-64', className = '' }) => (
  <Shimmer width={width} height={height} className={className} />
);

export const ShimmerButton = ({ className = '' }) => (
  <Shimmer height="h-12" width="w-32" className={className} />
);

export const ShimmerTitle = ({ className = '' }) => (
  <Shimmer height="h-8" width="w-1/2" className={className} />
);

export const ShimmerGrid = ({ cols = 3, className = '' }) => {
  const gridColsClass = cols === 3 ? 'lg:grid-cols-3' : cols === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-4';
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 ${gridColsClass} gap-8 w-full overflow-hidden ${className}`}>
      {Array.from({ length: cols }).map((_, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  );
};

export default Shimmer;
