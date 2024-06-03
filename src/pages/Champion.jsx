import React from "react";
import { StyledMain, BackgroundContainer } from "../styles/styledChampion";
import logo from "../assets/images/copa_amizade_logo2.png";
import equipe from "../assets/images/equipe_liberdade.jpg";
import equipe1 from "../assets/images/equipe_liberdade1.jpg";
import equipe2 from "../assets/images/equipe_liberdade2.jpg";
import equipe3 from "../assets/images/equipe_liberdade3.jpg";
import equipe4 from "../assets/images/equipe_liberdade4.jpg";
import equipe6 from "../assets/images/equipe_liberdade6.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Champion = () => {
  const data = [
    { id: "1", image: equipe },
    { id: "3", image: equipe6 },
    { id: "4", image: equipe4 },
    { id: "5", image: equipe3 },
    { id: "6", image: equipe2 },
    { id: "7", image: equipe1 },
  ];

  return (
    <>
      <BackgroundContainer />
      <StyledMain>
        <div className="champion_info">
          <a
            href="https://copafacil.com/-k0vu5"
            target="_blank"
            className="championship_logos"
            title="Página oficial da Copa Amizade 2024"
          >
            <img src={logo} alt="logo campeonato" className="logo" />
          </a>
        </div>

        <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation>
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="Slider" className="slider__item" />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="team_info_history">
          <p>
            No dia 26 de maio de 2024, ocorreu a emocionante final da Copa
            Amizade, protagonizada pelas equipes Liberdade e Unidos do Alagoas
            F.C.. Em um duelo de tirar o fôlego, sob muita chuva, o Liberdade
            sagrou-se campeão com uma vitória de 3 x 0, graças aos gols de
            Weverton, Juninho e Thiago. Com este triunfo, o time adicionou a
            primeira estrela reluzente ao seu glorioso escudo. A Copa Amizade
            2024 contou com a participação de 14 equipes e foi marcada por uma
            competição intensa, envolvendo times de renome e promovendo partidas
            memoráveis. Vale destacar o papel do líder do Liberdade, Eliandro da
            Silva, carinhosamente conhecido como Porquinho. Ele está à frente do
            projeto Liberdade, na cidade de Paulínia, dedicado à formação de
            atletas. Eliandro é professor e responsável pelas categorias de
            base, que vão dos 8 aos 20 anos. Além disso, ele também cuida das
            outras categorias, como amador, veterano e master, demonstrando seu
            comprometimento com o desenvolvimento do esporte na região.
          </p>
        </div>
      </StyledMain>
    </>
  );
};
