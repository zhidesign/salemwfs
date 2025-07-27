'use client';
import Image from "next/image";

export default function TestimonialsSlideshow() {
  const testimonials = [
    {
      id: 1,
      image: "/success/success1.jpg",
    },
    {
      id: 2,
      image: "/success/success2.jpg",
    },
    {
      id: 3,
      image: "/success/success3.jpg",
    },
    {
      id: 4,
      image: "/success/success4.jpg",
    },
    {
      id: 5,
      image: "/success/success5.jpg",
    },
    {
      id: 6,
      image: "/success/success6.jpg",
    }
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className='w-full overflow-hidden'>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent font-bold text-4xl">
            Our Success and More
          </span>
          <span className='pl-2 text-4xl'> 🚀 </span>
        </div>

        {/* Continuous Slideshow Container */}
        <div className="relative w-full  py-8">
          {/* Sliding Track */}
          <div 
            className="flex gap-6 py-6 overflow-hidden"
            style={{
              width: `${duplicatedTestimonials.length * 320}px`,
              animation: `scroll ${testimonials.length * 5}s linear infinite`
            }}>
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="relative flex-shrink-0 w-48 h-66 md:w-80 md:h-96 bg-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:scale-105 overflow-hidden">
                <Image 
                  src={testimonial.image}
                  alt='success'
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-400 text-sm">
            ✨ Join thousands of successful entrepreneurs making real profits
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${testimonials.length * 320}px);
          }
        }
        
        .flex:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}