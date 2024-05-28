import Image from "next/image";
export default function Photos () {
      return (
            <section className="relative">
            <div className="relative max-w-6xl mx-auto px-4 pt-8 sm:px-6">
                  <div className="max-w-3xl mx-auto text-center pb-4 md:pb-4">
                        <h2 className="h2 mb-4">New Supplies</h2>
                  </div>
          {/* Items */}
            <div className="max-w-sm mx-auto grid gap-24 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
                  {/* 3rd item */}
                  <div className="relative flex flex-col items-center p-3 bg-white rounded shadow-xl h-full">
                  <Image src={'/images/11.jpg'} width={500} height={500} alt="Image"></Image>
                  <h3 className="text-xl font-bold leading-snug tracking-tight mt-1">Classic Desk</h3>
                  <h5 className="text-xl leading-snug tracking-tight mt-1">170$</h5>
                  <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>

                  {/* 4th item */}
                  <div className="relative flex flex-col items-center p-3 bg-white rounded shadow-xl h-full">
                  <Image src={'/images/12.jpg'} width={500} height={500} alt="Image"></Image>
                  <h3 className="text-xl font-bold leading-snug tracking-tight mt-1">Sweet Tender</h3>
                  <h5 className="text-xl leading-snug tracking-tight mt-1">120$</h5>
                  <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  {/* 6th item */}
                  <div className="relative flex flex-col items-center p-3 bg-white rounded shadow-xl h-full">
                  <Image src={'/images/18.jpg'} width={500} height={500} alt="Image"></Image>
                  <h3 className="text-2xl font-bold leading-snug tracking-tight mt-1">Functional Table</h3>
                  <h5 className="text-xl leading-snug tracking-tight mt-1">200$</h5>
                  <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>

            </div>
            </div>
            </section>
      );
}