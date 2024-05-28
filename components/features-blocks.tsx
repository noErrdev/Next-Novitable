import Image from "next/image"
import TestimonialImage1 from '@/public/images/testominals-user-1.jpg'
import TestimonialImage2 from '@/public/images/testominals-user-2.jpg'
import TestimonialImage3 from '@/public/images/testominals-user-3.jpg'
export default function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

         {/* Items */}
          <div className="max-w-sm mx-auto grid gap-24 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">


            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl border-yellow-900 border-t-2">
            <Image className="relative rounded-full" src={TestimonialImage1} width={96} height={96} alt="Testimonial 01" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">CEO</h4>
              <p className="text-gray-600 text-center">Derrick Hudson</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl  border-yellow-900 border-b-2">
            <Image className="relative rounded-full" src={TestimonialImage2} width={96} height={96} alt="Testimonial 02" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">CTO</h4>
              <p className="text-gray-600 text-center">Sofiia Angelina</p>
            </div>
            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl  border-yellow-900 border-t-2">
            <Image className="relative rounded-full" src={TestimonialImage3} width={96} height={96} alt="Testimonial 03" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">CFO</h4>
              <p className="text-gray-600 text-center">Hans Jepkin</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}