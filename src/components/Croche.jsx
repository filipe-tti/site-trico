
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

function Croche() {


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
                   <article className="bg-[#654321] text-white rounded-2xl shadow-md p-6 space-y-4 h-full flex flex-col items-center text-center">
  <div className="flex flex-col items-center space-y-4">
    
    <p className="font-bold">{item.author}</p>

    <div className="overflow-hidden rounded-xl shadow-md w-full max-w-xs">
      <img
        src={item.image}
        alt=""
        className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>

    <div className="mt-4">
      <a
        href="#"
        className="inline-block px-5 py-2 rounded-lg bg-[#a76d44] hover:bg-[#794e2f] shadow-md hover:shadow-lg transition"
      >
        VER RECEITA
      </a>
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

export default Croche;