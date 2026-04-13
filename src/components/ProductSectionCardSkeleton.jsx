function ProductSectionCardSkeleton() {
    return (
      <div className="h-[350px] grid rounded overflow-hidden border border-brand-light">
        {/* Image area */}
        <div className="w-full min-h-[250px] bg-gray-200 animate-pulse sm:max-h-[250px]" />
  
        {/* Info area */}
        <div className="p-2.5 grid grid-cols-3 items-center gap-2.5">
          {/* Price */}
          <div className="col-span-2 h-6 bg-gray-200 animate-pulse rounded" />
          {/* Heart icon */}
          <div className="col-span-1 flex justify-end">
            <div className="h-[18px] w-[18px] bg-gray-200 animate-pulse rounded-full" />
          </div>
          {/* Title */}
          <div className="col-span-3 h-4 bg-gray-200 animate-pulse rounded" />
        </div>
      </div>
    )
  }
  
  export default ProductSectionCardSkeleton