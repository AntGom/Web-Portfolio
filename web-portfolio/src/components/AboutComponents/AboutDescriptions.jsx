import FotoPerfil from "/ANTONIO-GOMEZ-DESARROLLO-WEB.webp";

const AboutDescription = () => (
  <div>
    <p className="text-xl text-[#0f406a] dark:text-gray-300 italic mb-2">
      &quot;Como desarrollador web full stack, mi objetivo es crear aplicaciones
      modernas, escalables y fáciles de mantener.&quot;
    </p>
    {/* Foto en medio del texto que se oculta en pantallas grandes */}
    <img
      src={FotoPerfil}
      alt="Foto de Antonio Gómez"
      className="rounded-lg mb-6 lg:hidden"
      width="558" 
      height="494"
    />

    <p className="mb-2">
      ¡Hola Mundo! Soy Antonio, natural de Trigueros y sevillano de adopción.
    </p>
    <p className="mb-2">
      Mi aventura en el desarrollo web comenzó en 2024 y, desde entonces, he
      buscado proyectos que me permitan crecer y aprender de forma constante.
    </p>
    <p className="mb-2">
      Además de mi afición por la tecnología, soy un entusiasta de los deportes
      de equipo y cuento con una dilatada experiencia militar, la cual me ha
      fortalecido y consolidado en principios como la disciplina, el compromiso
      y el trabajo en equipo.
    </p>
    <p className="mb-6">
      Si buscas a un desarrollador apasionado, comprometido y siempre dispuesto
      a aprender, ¡hablemos! Estoy listo para colaborar y contribuir al éxito de
      tu equipo.
    </p>
  </div>
);

export default AboutDescription;
