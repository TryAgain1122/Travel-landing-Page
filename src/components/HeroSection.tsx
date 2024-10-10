import boracay from '../assets/boracay.jpg';

const HeroSection = () => {
  return (
    <div className="relative h-[80vh]">
        <img 
            src={boracay}
            alt='Image'
            className="absolute inset-0 object-cover w-full h-full"
        />

        {/* Overlay  */}
        <div className='absolute bg-black inset-0 bg-opacity-50'></div>

        {/* Content */}
        <div className='relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4'>
            <h1 className='text-4xl lg:text-6xl font-bold mb-4'>Explore boracay in Philippines now</h1>
            <button className='mt-4 px-6 py-3 bg-white text-black font-semibold rounded-full'>
                Get Started
            </button>
        </div>
    </div>
  )
}

export default HeroSection