import useEmblaCarousel from 'embla-carousel-react'
import {ChevronLeft, ChevronRight } from 'lucide-react'

import fotoCalca from '../../public/images/trico/foto-calca.jpg'
import fotoCapinha from '../../public/images/trico/foto-capinha-capuz.jpg'
import fotoSapatinho from '../../public/images/trico/foto-sapatinho.jpg'
import fotoShorts from '../../public/images/trico/foto-shorts.jpg'
import fotoTouca from '../../public/images/trico/foto-touca.jpg'

const servic = [
    {
        title: "PANTUFA ADULTO",
        image: fotoCalca,
        
    },
    {
        title: "CACHECOL",
        image: fotoCapinha,
        
    },
    {
        title: "PANTUFA",
        image: fotoSapatinho,
       
    },
    {
        title: "CASAQUINHO INFANTIL",
        image: fotoShorts,
      
        
    },
    {
            title: "CACHECOL",
            image: fotoTouca,
        
    },
]


function Trico () {

        const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align:"start",
        slidesToScroll:1,
        breakpoints:{
            "(min-width: 768px)": { slidesToScroll:3}
        }
    })

    function scrollPrev(){
        emblaApi?.scrollPrev();
    }

        function scrollNext(){
        emblaApi?.scrollNext();
    }



  return (
    <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div>
                    <h2 className="text-4xl text-center  font-bold mb-12">
                        TRICÔS
                    </h2>

                    <div className="relative">

                        <div className='overflow-hidden' ref={emblaRef}>
                            <div className='flex'>
                                {servic.map((item, index) => (
                                    <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                                        <article className="bg-[#3e3939] text-white rounded-2xl shadow-md p-6 space-y-4 h-full flex flex-col items-center text-center">

  <div className="flex-1 flex flex-col items-center justify-center">
    
    <h3 className="font-bold text-xl my-2">{item.title}</h3>

    {/* Container com overflow hidden para aplicar o zoom corretamente */}
    <div className="overflow-hidden rounded-xl shadow-md w-full max-w-[160px]">
      <img
        src={item.image}
        alt=""
        className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>

    <div className="mt-4">
      <a
        href="#"
        className="inline-block px-5 py-2 rounded-lg bg-[#2c2a29] hover:bg-[#121110] shadow-md hover:shadow-lg transition"
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
                        className=' bg-white  flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'>

                            <ChevronLeft  className='w-6 h-6 text-gray-600'/>
                        </button>

                         <button 
                        onClick={scrollNext}
                        className=' bg-white  flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'>

                            <ChevronRight  className='w-6 h-6 text-gray-600'/>
                        </button>

                    </div>
                </div>
            </div>
        </section>

        
  );
}

export default Trico;
