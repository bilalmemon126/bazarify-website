function ProductDetailsSkeleton() {
    return (
      <div className='grid grid-cols-12 my-5'>
        <div className='col-span-10 col-start-2 grid grid-cols-12 gap-y-10 items-center md:gap-10'>
  
          {/* Left — CardImages skeleton */}
          <div className='col-span-12 md:col-span-7 flex flex-col gap-2.5'>
            {/* Main image */}
            <div className='w-full h-[380px] bg-gray-200 animate-pulse rounded-lg' />
            {/* Thumbnail strip */}
            <div className='flex gap-5 overflow-hidden'>
              {Array(4).fill(0).map((_, i) => (
                <div key={i} className='w-[80px] h-[80px] flex-shrink-0 bg-gray-200 animate-pulse rounded' />
              ))}
            </div>
          </div>
  
          {/* Right — info skeleton */}
          <div className='col-span-12 md:col-span-5 grid grid-cols-1 gap-10'>
  
            {/* ProfileImageCard skeleton */}
            <div className='flex items-center gap-3 p-3 border border-gray-100 rounded-xl'>
              <div className='w-11 h-11 rounded-full bg-gray-200 animate-pulse flex-shrink-0' />
              <div className='flex flex-col gap-2 flex-1'>
                <div className='h-3.5 w-1/2 bg-gray-200 animate-pulse rounded' />
                <div className='h-3 w-1/3 bg-gray-200 animate-pulse rounded' />
              </div>
            </div>
  
            {/* Title + price */}
            <div className='grid gap-2.5'>
              <div className='h-6 w-4/5 bg-gray-200 animate-pulse rounded' />
              <div className='h-8 w-2/5 bg-gray-200 animate-pulse rounded' />
            </div>
  
            {/* Buttons */}
            <div className='grid grid-cols-1 gap-2.5'>
              <div className='h-10 w-full bg-gray-200 animate-pulse rounded-lg' />
              <div className='h-10 w-full bg-gray-200 animate-pulse rounded-lg' />
            </div>
          </div>
  
          {/* Description skeleton */}
          <div className='col-span-12'>
            <div className='h-8 w-44 bg-gray-200 animate-pulse rounded mb-5 border-b border-gray-100 pb-5' />
            <div className='flex flex-col gap-2'>
              <div className='h-4 w-full bg-gray-200 animate-pulse rounded' />
              <div className='h-4 w-11/12 bg-gray-200 animate-pulse rounded' />
              <div className='h-4 w-4/5 bg-gray-200 animate-pulse rounded' />
              <div className='h-4 w-3/5 bg-gray-200 animate-pulse rounded' />
            </div>
          </div>
  
        </div>
      </div>
    )
  }
  
  export default ProductDetailsSkeleton