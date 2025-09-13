import banner from '../assets/banner.jpg'

function Hero() {
  return (
    <div className='w-full overflow-hidden p-5'>
        <img src={banner} className='w-full rounded-xl' alt="image" />
    </div>
  )
}

export default Hero