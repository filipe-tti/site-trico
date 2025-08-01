
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import fotoChaveiro from '../../public/images/croche/foto-chaveiro.jpg'
import fotoCoracao from '../../public/images/croche/foto-coracao.jpg'
import fotoCropped from '../../public/images/croche/foto-cropped-infantil.jpg'
import fotoPortaCopos from '../../public/images/croche/foto-porta-copos.jpg'

const testimonials = [
  {
    author: "TOUCA PARA RECÉM NASCIDO",
    image: fotoChaveiro,
    
  },
  {
    author: "CHAVEIRO BOLA",
    image: fotoCoracao,
    
  },
  {
    author: "Quadrado clássico",
    image: fotoCropped,
   
  },
  {
    author: "Decoração de natal",
    image: fotoPortaCopos,
   
  },
];

function Testimonials() {


    const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
<section className="bg-[#c9bd9d]">
      <div className="container mx-auto px-4 py-16">
        <div>
          <h2 className="text-4xl text-center font-bold mb-12">CROCHÊS</h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="pb-12 flex">
                {testimonials.map((item, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0  px-3">
                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                      <div className="flex flex-col items-center text-center space-y-4">

                        <p className="font-bold">{item.author}</p>
                       
                        <div>
                          <img src={item.image} alt="" className="w-100 h-80" />  
                        </div>

                           <div className='rounded mt-4 bg-gray-500 hover:bg-gray-600 px-5 py-2'>
                                                             <a href="#">VER RECEITA</a>
                                                        </div>
                       

                
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={scrollPrev}
              className=" bg-white  flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            <button
              onClick={scrollNext}
              className=" bg-white  flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;