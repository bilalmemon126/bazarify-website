function ProductCardSkeleton() {
    return (
      <div className='w-full h-auto sm:max-h-[200px] grid grid-cols-12 gap-5'>
  
        {/* Image */}
        <div className='h-[200px] col-span-12 sm:col-span-4 bg-gray-200 animate-pulse rounded-lg' />
  
        {/* Right side */}
        <div className='col-span-12 sm:col-span-8 grid grid-cols-1 items-center py-1.5'>
  
          {/* Price + title + heart */}
          <div className='h-fit grid grid-cols-6 gap-1.5'>
            <div className='col-span-5 flex flex-col gap-2'>
              <div className='h-7 w-2/5 bg-gray-200 animate-pulse rounded' />
              <div className='h-4 w-full bg-gray-200 animate-pulse rounded' />
              <div className='h-4 w-3/4 bg-gray-200 animate-pulse rounded' />
            </div>
            <div className='col-span-1 flex items-start justify-center py-5'>
              <div className='h-6 w-6 bg-gray-200 animate-pulse rounded-full' />
            </div>
          </div>
  
          {/* Location + buttons */}
          <div className='h-fit grid grid-cols-2 gap-1.5'>
            <div className='col-span-2 h-4 w-1/2 bg-gray-200 animate-pulse rounded' />
            <div className='h-9 bg-gray-200 animate-pulse rounded' />
            <div className='h-9 bg-gray-200 animate-pulse rounded' />
          </div>
  
        </div>
      </div>
    )
  }
  
  export default ProductCardSkeleton