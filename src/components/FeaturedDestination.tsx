import img1 from '../assets/Island Hopping in Thailand.jpg'
import img2 from '../assets/The top 10 places to visit in the world - Wonderslist.jpg'
import img3 from '../assets/crystal kayak philippines.jpg'
import img4 from '../assets/girlstrip.jpg'

const destinations = [
    { title: "Thailand", location: 'Boracay', img: img1},
    { title: "Wonderlist", location: 'Philippines', img: img2},
    { title: "Crystal Kayak", location: 'Philippines', img: img3},
    { title: "Girls Trip", location: "Philippies", img: img4}
]
const FeaturedDestination = () => {
  return (
    <div className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4'>
            <h2 className='text-3xl font-bold text-center mb-8'>Popular Destination</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {destinations.map((destination, index) => (
                    <div key={index} className='relative group cursor-pointer'>
                        <img src={destination.img} alt={destination.title} className='w-full h-64 object-cover rounded-lg shadow-lg'/>
                        <div className='absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg shadow-lg'>
                            <div className='text-white text-center'>
                                <h3 className='text-xl font-semibold'>{destination.title}</h3>
                                <p>{destination.location}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default FeaturedDestination