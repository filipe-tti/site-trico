import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

const brands = [
  { title: "PANTUFA ADULTO" },

  { title: "PANTUFA ADULTO" },

  { title: "PANTUFA ADULTO" },
];

function Footer() {
  return (
    <section className="bg-[#382b2a] py-12 text-white">
      <div className="container mx-auto px-4">
        <section class="bg-[#f5d5c6] py-16 px-6 md:px-20 rounded-2xl shadow-xl mt-10">
          <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div class="text-center md:text-left">
              <h2 class="text-4xl font-extrabold text-pink-800 mb-4 leading-snug">
                Transforme fios em amor: <br />
                descubra nossas receitas exclusivas de tricô <br />e crie peças
                cheias de carinho
              </h2>
              <p class="text-lg text-pink-700 mb-6">
                Sua próxima criação começa aqui! Explore nossa loja de receitas
                de tricô e mãos à obra.
              </p>
              <a
                href="/loja"
                class="inline-block bg-pink-600 text-white font-semibold py-3 px-8 rounded-xl shadow hover:bg-pink-700 transition"
              >
                Explorar agora
              </a>
            </div>

            <div class="flex justify-center md:justify-end">
              <img
                src="/site-trico/images/footer/foto-loja-receitas.png"
                alt="Receitas de tricô"
                class="w-full max-w-md rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        <footer className="flex flex-col md:flex-row items-center text-center justify-center gap-6 md:gap-20 py-4 mt-14">
          <div>
           <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2">
  Contatos
</h3>
            <p className="text-sm sm:text-base md:text-lg">
              Email: contato.neiaoliverartes@gmail.com{" "}
            </p>
            <p className="text-sm sm:text-base md:text-lg">
              Telefone: (47) 9.8908-6759
            </p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2">
              Redes Sociais
            </h3>

          <div className="justify-center flex items-center gap-2 mt-4">
  <a
    href="#"
    className="flex items-center justify-center text-xl sm:text-2xl md:text-3xl w-10 h-10 sm:w-12 sm:h-12 hover:text-[#a7848b]"
    target="_blank"
  >
    <FacebookLogo />
  </a>
  <a
    href="https://www.instagram.com/neia.oliveira.atelie/"
    className="flex items-center justify-center text-xl sm:text-2xl md:text-3xl w-10 h-10 sm:w-12 sm:h-12 hover:text-[#a7848b]"
    target="_blank"
  >
    <InstagramLogo />
  </a>
  <a
    href="https://www.youtube.com/@neiaoliveiratrico"
    className="flex items-center justify-center text-xl sm:text-2xl md:text-3xl w-10 h-10 sm:w-12 sm:h-12 hover:text-[#a7848b]"
    target="_blank"
  >
    <YoutubeLogo />
  </a>
</div>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Footer;
