import { Check } from "@phosphor-icons/react";

const About = () => {
  return (
     <section className="bg-[#FDF6ec] py-16">
            <div className="container px-4 mx-auto grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="relative">


                <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                    

                </div>

                <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 rounded-lg overflow-hidden border-white">
                    

                </div>

                </div>

                <div className="space-y-6 mt-10">
                        <h2 className="text-4xl font-bold">SOBRE MIM</h2>

                        <p>
                            Ensino com paciência e carinho, transmitindo não só pontos e receitas, mas também amor pelo ofício. Minha paixão é tecer memórias e inspirar novas gerações.
                        </p>

                        <ul className="space-y-4">
                                <li className="flex items-center gap-2">
                                    <Check className="text-red-500"/>
                                    Peças únicas desenvolvidas com muita criatividade.
                                </li>

                                   <li className="flex items-center gap-2">
                                    <Check className="text-red-500"/>
                                    Feito com os melhores materiais, uma peça especial começa pelo fio certo!
                                </li>

                                   <li className="flex items-center gap-2">
                                    <Check className="text-red-500"/>
                                    Transformando os ensinamentos do tricô/crochê em uma belíssima peça feita a mão.
                                </li>

                                <li className="flex items-center gap-2">
                                    <Check className="text-red-500"/>
                                    Mais de 50 mil inscritos no Youtube!
                                </li>
                                
                        </ul>

                       
            
                </div>

                </div>

            

            </div>
        </section>
  )
}

export default About



