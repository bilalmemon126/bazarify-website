function MyAdsCardSkeleton() {
    return (
      <div className='w-full h-auto md:max-h-[200px] grid grid-cols-12 gap-5'>
  
        {/* Image */}
        <div className='h-[180px] col-span-12 md:col-span-4 bg-gray-200 animate-pulse rounded-lg' />
  
        {/* Right side */}
        <div className='grid gap-5 col-span-12 md:col-span-8 py-1.5'>
  
          {/* Table skeleton */}
          <div className='rounded overflow-hidden border border-gray-100'>
            {/* Header */}
            <div className='h-9 w-full bg-gray-200 animate-pulse' />
            {/* Row */}
            <div className='grid grid-cols-4 gap-2 px-2 py-3'>
              <div className='h-3.5 bg-gray-200 animate-pulse rounded' />
              <div className='h-3.5 bg-gray-200 animate-pulse rounded' />
              <div className='h-3.5 bg-gray-200 animate-pulse rounded' />
              <div className='h-3.5 bg-gray-200 animate-pulse rounded' />
            </div>
          </div>
  
          {/* Buttons */}
          <div className='w-full grid grid-cols-2 gap-2.5'>
            <div className='h-10 bg-gray-200 animate-pulse rounded-lg' />
            <div className='h-10 bg-gray-200 animate-pulse rounded-lg' />
          </div>
        </div>
  
      </div>
    )
  }
  
  export default MyAdsCardSkeleton