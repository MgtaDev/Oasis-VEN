// Basics
import React, { useEffect, useState } from 'react';
import './App.css';


// Imagenes
import Hielo from './assets/Hielo.png'
import banner2 from './assets/Banner2.png';
import banner3 from './assets/Banner3.png';
import bannerMobile1 from './assets/bannerMobile1.png'
import bannerMobile2 from './assets/bannerMobile2.png'
import bannerMobile3 from './assets/bannerMobile3.png'
import bottleImg1l from './assets/Botella1L.png';
import bottleImg330ml from './assets/Botella330ml.png';
import bottleImg5l from './assets/Botella5L.png';
import bottleImg600ml from './assets/Botella600ml.png';
import { default as bannerMobileImg, default as oasisBanner } from './assets/Oasis5.jpeg';
import oasisLogo from './assets/OasisLogo.jpeg';
import banner1 from './assets/banner1.png';
import eventos1 from './assets/eventos1.jpg';
import eventos3 from './assets/eventos3.jpg';
import eventos5 from './assets/eventos5.jpg';
import WhatsappIcon from './assets/social.png';


// Librerias
import { motion } from "framer-motion";
import { stack as Menu } from 'react-burger-menu';
import ReactCardSlider from 'react-card-slider-component';
import { InView, useInView } from 'react-intersection-observer';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from 'react-slick';
import { animated, useSpring } from "react-spring";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from 'styled-components';

const slides = [
  {
    image: eventos1,
    title: "21k Margarita 2024",
    description: "16 de Marzo de 2024",
    className: "image-container",
  },
  {
    image: eventos5,
    title: "360 Margarita Trail",
    description: "2 de Diciembre de 2023",
    className: "image-container",
  },
  {
    image: eventos3,
    title: "Torneo Christmas Cup 2023",
    description: "13 de Diciembre del 2023",
    className: "image-container",
  },

];

// Estilos del carrousel con Styled-Components
const CarouselContainer = styled.div`
  position: relative;
  height: 58px;
  margin-bottom: 40%;
  @media screen and (max-width: 768px) {
  display: none; 
}
`;

const CarouselWrapper = styled(Slider)`
  position: relative;
  width: 100%;
  height: 100%;

  .slick-dots li button:before {
    color: #fff;
    opacity: 0;
    font-size: 1.5rem;
  }
  
  .slick-dots li.slick-active button:before {
    opacity: 0;
  }

  .slick-prev, .slick-next {
    border: none;
    background: none;
    outline: none;
    font-size: 2rem;
    color: #fff;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    opacity:0;

    &:hover {
      color: #ff6b6b;
    }
  }

  .slick-prev {
    left: 2rem;
  }

  .slick-next {
    right: 2rem;
  }

  .slick-slide {
    position: relative;
    overflow: hidden;
    perspective: 200px;
    transition: transform 0.7s;
  }

 

  .slick-slide img {
    width: 100%;
    height: 100%;
    object-fit:contain;
    position: relative;
    top:-19%;
    transition: all 0.5s ease;
    @media screen and (max-width: 1200px) {
      top: -25%;
    }
    @media screen and (max-width: 1000px) {
      top: -28%;
    }
    @media screen and (max-width: 800px) {
      top: -31%;
    }
    @media screen and (max-width: 768px) {
      width: 768px;
      height: 700px;
      display: none;
    }
    @media screen and (max-width: 600px) {
      top: -34%;
    }
    @media screen and (max-width: 430px) {
      top: -40%;
      width: 430px;
      height: 700px;
    }
    @media screen and (max-width: 200px) {
      top: -45%;
    }
  }
`;

const ArrowIcon = styled.i`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  top: 35%;
  left: 50%;
  transform: translateX(-50%);

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 0 0.25rem;
    list-style: none;

    button {
      border: none;
      background: none;
      outline: none;
      cursor: pointer;
      font-size: 1.5rem;
      color: #fff;
      opacity: 0.5;
      transition: all 0.3s;

      &:hover, &.slick-active {
        opacity: 1;
      }
    }
  }
`



const CarouselContainer2 = styled.div`
  position: relative;
  height: 58px;
  margin-bottom: 40%;
  @media screen and (min-width: 768px) {
    display: none; 
  }
`;

const CarouselWrapper2 = styled(Slider)`
  position: relative;
  width: 100%;
  height: 100%;

  .slick-dots li button:before {
    color: #fff;
    opacity: 0;
    font-size: 1.5rem;
  }
  
  .slick-dots li.slick-active button:before {
    opacity: 0;
  }

  .slick-prev, .slick-next {
    border: none;
    background: none;
    outline: none;
    font-size: 2rem;
    color: #fff;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    opacity:0;

    &:hover {
      color: #ff6b6b;
    }
  }

  .slick-prev {
    left: 2rem;
  }

  .slick-next {
    right: 2rem;
  }

  .slick-slide {
    position: relative;
    overflow: hidden;
    perspective: 200px;
    transition: transform 0.7s;
  }

 

  .slick-slide img {
    width: 100%;
    height: 100%;
    object-fit:contain;
    position: relative;
    
    transition: all 0.5s ease;
   
    @media screen and (max-width: 768px) {
      width: 768px;  
    }
   
    @media screen and (max-width: 430px) {
      top: -15%;
      width: 430px;
      height: 700px;
    }
    @media screen and (max-width: 412px) {
      top: -20%;
      width: 430px;
      height: 700px;
    }
    @media screen and (max-width: 380px) {
      top: -24%;
      width: 430px;
      height: 700px;
    }
    @media screen and (max-width: 350px) {
      top: -26%;
    }
    @media screen and (max-width: 320px) {
      top: -30%;
    }
    @media screen and (max-width: 290px) {
      top: -33%;
    }
  
  }
`;




function App() {
  const sendWhatsappMessage = () => {
    window.open("https://wa.me/584122030851", "_blank")
  };
  const [ref, inView ] = useInView();
  console.log(inView);

    const settings = {
      dots: true,
      infinite: true,
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: 'linear',
      prevArrow: <ArrowIcon className="fa fa-chevron-left" />,
      nextArrow: <ArrowIcon className="fa fa-chevron-right" />,
      appendDots: dots => (
        <DotsContainer>
          <ul > {dots} </ul>
        </DotsContainer>
      )
    };


    const styles = {
      bmBurgerButton: {
        position: 'absolute', // Cambiamos a 'absolute' para posicionarlo con respecto a su contenedor
        width: '30px',
        height: '28px',
        top: '25%', // Posiciona en el centro vertical
        transform: 'translateY(-50%)', // Ajusta la posición para que quede en el centro vertical
      },
      
      bmBurgerBars: {
        background: '#005c99',
        margin: '1rem'
      },
      bmCrossButton: {
        height: '24px',
        width: '24px'
      },
      bmCross: {
        background: 'white'
      },
      bmMenuWrap: {
        position: 'fixed',
        marginTop: '-4%',
        height: '105%',
        width: '50%',
      },
      bmMenu: {
        background: '#005c99',
        padding: '1em 0 0',
        fontSize: '1.15em'
      },
      bmItemList: {
        color: '#b8b7ad',
      },
      bmItem: {
        marginTop: '20%',
        textAlign: 'center'
      },
      
  
    }
    

    const animatedStyle1= useSpring({
      from: { opacity: 0, },
      to: { opacity: 1, },
      delay: 500,
    });

   


    
  return (
    
<div class="page-wrap snipcss0-1-1-2 snipcss-ULNDm" id="oasis">

  <header class="site-header snipcss0-2-2-4">
    <div class="container container-wide snipcss0-3-4-5 snipcss0-0-0-1 tether-element-attached-top tether-element-attached-center tether-target-attached-top tether-target-attached-center">
     
     {/* NAV mobile */}    
      <div class="menu-mobile snipcss0-4-5-6 snipcss0-1-1-2">
        <div class="row !mx-3 snipcss0-5-6-7 snipcss0-2-2-3">
          <a class="-ml-[5px] logo-site-linksnipcss0-6-7-8 -mx-2 snipcss0-3-3-4">
            <img src={oasisLogo} width="50" alt="Oasis Logo" class="snipcss0-7-8-9 snipcss0-4-4-5 style-vvzm4 ml-1" id="style-vvzm4"></img>
          </a>
         
          <div class="menu !mx-14 max-[905px]:-mt-[3%] max-[672px]:-mt-[3%] max-[440px]:-mt-[10%] max-[640px]:-mt-[4%] max-[376px]:-mt-[14%] max-[550px]:-mt-[8%]   snipcss0-6-7-10 snipcss0-3-3-6">
          
          <Menu styles={styles} width={ '300px' } right>
            <a id="1" className="menu-item underline" href="#Home">Home</a>
            <a id="2" className="menu-item underline" href="#Productos">Productos</a>
            <a id="3" className="menu-item underline" href="#About">Sobre Nosotros</a>
            <a id="4" className="menu-item underline" href="#Eventos">Eventos</a>
            <a id="5" className="menu-item underline" href="#Contact">Contacto</a>
            <a id="5" className="menu-item underline" href="#Social">Social</a>
          </Menu>
          </div>

        </div>
      </div>

      {/* NAV desktop */}
      <div class="menu-desktop snipcss0-4-5-92 snipcss0-1-1-88">
        <div class="row snipcss0-5-92-93 snipcss0-2-88-89">
          <a href='#Home' class="logo-site-link snipcss0-6-93-94 snipcss0-3-89-90">
            <img src={oasisLogo} width="50" alt="Oasis Logo" class="!mx-4 snipcss0-7-94-95 snipcss0-4-90-91 style-oXbFi" id="style-oXbFi"></img>
          </a>

          {/* Menu */}
          <div class="menu !mx-4 snipcss0-6-93-96 snipcss0-3-89-92">
            <ul class="snipcss0-7-96-97 snipcss0-4-92-93">

              {/* Home */}
              <li class="snipcss0-8-97-98 snipcss0-5-93-94">
                <a href="#Home" class="!text-gray-950 hover:!text-[#005c99] transition-3s ease-in-out snipcss0-9-98-99 snipcss0-6-94-95">
                  Home
                </a>
              </li>

              {/*Productos */}
              <li class="snipcss0-8-97-98 snipcss0-5-93-94">
                <a href="#Productos" class="!text-gray-950 hover:!text-[#005c99] transition-3s ease-in-out snipcss0-9-98-99 snipcss0-6-94-95">
                 Productos
                </a>
            
              </li>

              {/* Sobre Nosotros */}
              <li class="snipcss0-8-97-98 snipcss0-5-93-94">
                <a href="#About" class="!text-gray-950 hover:!text-[#005c99] transition-3s ease-in-out snipcss0-9-98-99 snipcss0-6-94-95">
                  Nosotros
                </a>
              </li>

               {/* Eventos */}
              <li class="snipcss0-8-97-114 snipcss0-5-93-110">
                <a href='#Eventos' class="!text-gray-950  hover:!text-[#005c99] transition-3s ease-in-out  snipcss0-9-114-115 snipcss0-6-110-111">
               Eventos
                </a>
            
              </li>

              {/* Contacto */}
              <li class="snipcss0-8-97-138 snipcss0-5-93-134">
                <a href='#Contact' class="!text-gray-950  hover:!text-[#005c99] transition-3s ease-in-out ] snipcss0-9-138-139 snipcss0-6-134-135">
                  Contacto
                </a>
             
              </li>
              <li class="snipcss0-8-97-138 snipcss0-5-93-134">
                <a href='#Social' class="!text-gray-950  hover:!text-[#005c99] transition-3s ease-in-out ] snipcss0-9-138-139 snipcss0-6-134-135">
                  Social
                </a>
             
              </li>
              
            </ul>
          </div>

        </div>
      </div>

    </div>
  </header>

  <div class="page-content snipcss0-2-2-217">

    {/* BANNER DESKTOP */}
    <animated.div id='Home' className='scroll-mt-[8rem]' style={animatedStyle1}>
    <CarouselContainer>
      <CarouselWrapper {...settings}>
        <div className='h-[530px]' >
        <img src={banner1} alt="banner-img-1" />
        </div>

        <div className='h-[530px]' >
        <img src={banner2} alt="banner-img-2" />
        </div>

        <div className='h-[530px]' >
        <img  src={banner3} alt="banner-img-3" />
        </div>
      </CarouselWrapper>
    </CarouselContainer>
    </animated.div>

    {/* BANNER MOBILE */}
    <animated.div id='Home' className='scroll-mt-[8rem]' style={animatedStyle1}>
    <CarouselContainer2>
      <CarouselWrapper2 {...settings}>
        <div className='h-[530px] ' >
        <img src={bannerMobile1} alt="banner-img-1" />
        </div>

        <div className='h-[530px]' >
        <img src={bannerMobile2} alt="banner-img-2" />
        </div>

        <div className='h-[530px]' >
        <img  src={bannerMobile3} alt="banner-img-3" />
        </div>
      </CarouselWrapper2>
    </CarouselContainer2>
    </animated.div>

    {/* NUESTROS PRODUCTOS */}

    <div id="Productos" class="frame scroll-mt-[8rem] lg:scroll-mt-[16rem] frame-default frame-type-list frame-layout-0 frame-space-after-large in-view snipcss0-3-217-337">
      <section class="product-overview-slider snipcss0-4-337-338">
        <div class="container snipcss0-5-338-339">
          <div class="row snipcss0-6-339-340">
            <div class="col-12 col-xl-9 snipcss0-7-340-341">
              <div class="headline-wrapper in-view snipcss0-8-341-342">
              </div>
              
        {/* Contenido del div */}
        
        <section class="text in-view snipcss0-3-217-491">
      <div class="container snipcss0-4-491-492">
        <div class="row snipcss0-5-492-493">
          <div class="col-12 col-sm-10 col-xxl-12 snipcss0-6-493-494">
           
           
            <h2 class="text-center w-[110%] -ml-[5%] min-[1300px]:mt-[-50%] min-[1600px]:mt-[-70%] text-[#005c99] mt-56 lg:-mt-[40%] md:-mt-[30%] min-[1500px]:-mt-[40%]  headline snipcss0-7-494-495 mb-10 text-5xl">
            LLENARTE DE VIDA ES SIMPLE! HIDRÁTATE CON OASIS

            </h2>
           <Carousel
           showArrows={false}
           className='max-[420px]:h-[500px] text-center max-[420px]:mb-[60%] mb-[25%]'>
                <div>
                    <img src={bottleImg1l}  />
                    <p className="legend">Agua purificada 1l</p>
                </div>
                <div>
                    <img src={bottleImg5l} />
                    <p className="legend">Agua purificada 5l</p>
                </div>
                <div>
                    <img src={bottleImg600ml} />
                    <p className="legend">Agua purificada 600ml</p>
                </div>
                <div>
                    <img src={bottleImg330ml} />
                    <p className="legend">Agua purificada 330ml</p>
                </div>
                <div>
                    <img src={Hielo} />
                    <p className="legend">Bolsa de Hielo 7Kg</p>
                </div>
            </Carousel>
            <InView threshold={0.25}>
            {({ref, inView})=>(
            <motion.div 
            ref={ref}
            initial={{ y: 0, opacity: 0 }}
            animate={ inView ? { y: -100, opacity: 1} : {y: 0}}
            transition={{duration: 0.8}}
            viewport={{
              once: true,
            }}
            id=''
            >
            <div className='text-center px-4 py-8 rounded-sm'>
            <h3 class="text-5xl snipcss0-15-349-352">
               OASIS AGUA & HIELO
            </h3>
           <a class="button primary snipcss0-14-348-355" tabindex="0">
                <span onClick={()=>sendWhatsappMessage()} class="button-text snipcss0-15-355-356">
                  Compra ya!
                </span>
            </a>
            </div>
            </motion.div>
            )}
            </InView>             
        
            
          </div>
        </div>
      </div>
        </section>
        
              

    </div>
    </div>
    </div>
    </section>
    </div>

  
    {/*POR QUE ESCOJERNOS */}
   
    <section id='About' class="image-text -mt-[50%] md:-mt-[15%] min-[1300px]:mt-0 min-[1600px]:mt-0 scroll-mt-[4rem] lg:scroll-mt-[10rem]  snipcss0-3-217-357">
      <div class="container snipcss0-4-357-358">
        <div class="row snipcss0-5-358-359">
          <div class="col-12 col-sm-10 col-xxl-12 snipcss0-6-359-360">
            <div class="image-text-element in-view img-right snipcss0-7-360-361">
              <div class="row snipcss0-8-361-362">
                <div class="col-12 col-md-6  image no-header snipcss0-9-362-363">
                  <img src={oasisBanner} width="880" className='h-[80%]' height="880" alt="" class="snipcss0-10-363-364"></img>
                </div>
                <div class="col-12 col-md-6 text order-md-1 snipcss0-9-362-365">
                <InView threshold={0.25}>
                {({ref, inView})=>(
                <motion.div 
                ref={ref}
                initial={{ x: -100, opacity: 0 }}
                animate={ inView ? { x: 0, opacity: 1} : {x:-100}}
                transition={{duration: 0.8}}
                viewport={{
                  once: true,
                }}
                id=''
                >
                  <h2 class="text-5xl min-[1300px]: min-[1600px]: text-[#005c99] max-[480px]:-mt-[8%] max-[430px]:mt-[2%] max-[420px]:text-center headline snipcss0-8-380-381">
                  DESAFÍA TUS LIMITES CUIDANDO AL MÁXIMO TU CUERPO
                  </h2>  
              </motion.div>  
                )}
              </InView>
                 
              <InView threshold={0.25}>
                {({ref, inView})=>(
                <motion.div 
                ref={ref}
                initial={{ y: 0, opacity: 0 }}
                animate={ inView ? { y: -100, opacity: 1} : {y:0}}
                transition={{duration: 0.8}}
                viewport={{
                  once: true,
                }}
                id=''
                >
                  <div className='mt-[30%] min-[1300px]:mt-[20%] min-[1600px]:mt-[20%]  max-[430px]:mt-[33%]  max-[1024px]:mt-[40%]'>
                  <p class="snipcss0-10-365-367 text-2xl text-gray-600">
                  ¡La prioridad es tu bienestar! En Oasis abrazamos la posibilidad de acompañarte a sacar tu máximo potencial, inspirándote a vivir nuevas experiencias y cultivar un estilo de vida cada vez más saludable, siempre cuidando tu cuerpo con la hidratación perfecta.

                  </p>
                  <p class="snipcss0-10-365-368 text-2xl text-gray-600">
                  ¡Atrévete a vivir eso que tanto sueñas! Nosotros soñamos con extraer, purificar, y producir agua desde la Isla de Margarita para toda Venezuela, y hoy es una gran realidad la presencia de Oasis agua & hielo en las rutinas y entrenamientos de miles de atletas.

                  </p>
                  <p class="snipcss0-10-365-369 text-2xl text-gray-600">
                  También estamos en las fotos de tus vacaciones, paseos, días de playa, piscina o montaña con familiares y amigos, porque el packing y la imagen de las botellas Oasis es 100% atrevido, divertido e inspirador. Reutilízalas, consérvalas o deséchalas en el lugar adecuado ¡Gracias!
                  </p>
                 
                  </div>
               
              </motion.div>  
                )}
              </InView>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    {/* Oasis Ven */}
    <InView threshold={0.25}>
    {({ref, inView})=>(
    <motion.div 
    ref={ref}
    initial={{ y: 0, opacity: 0 }}
    animate={ inView ? { y: -100, opacity: 1} : {y:0}}
    transition={{duration: 0.8}}
    
    >
    <section class="text in-view snipcss0-3-217-370">
      <div class="container snipcss0-4-370-371">
        <div class="row snipcss0-5-371-372">
          <div class="col-12 col-sm-10 col-xxl-12 snipcss0-6-372-373">
          <InView threshold={0.25}>
                {({ref, inView})=>(
                <motion.div 
                ref={ref}
                initial={{ x: -100, opacity: 0 }}
                animate={ inView ? { x: 0, opacity: 1} : {x:-100}}
                transition={{duration: 0.8}}
                id=''
                >
                <h2 class="text-5xl text-[#005c99] text-center m-8 max-[420px]:text-center headline snipcss0-8-380-381">
                OASIS VEN
                </h2>
              </motion.div>  
                )}
              </InView>
         
              <InView threshold={0.25}>
                {({ref, inView})=>(
                <motion.div 
                ref={ref}
                initial={{ x: -100, opacity: 0 }}
                animate={ inView ? { x: 0, opacity: 1} : {x:0}}
                transition={{duration: 0.8}}
                id=''
                >
                <p class="text-center text-3xl text-gray-600 snipcss0-7-373-375">
                Para los que toman el verdadero desafío! Llenarte de vida, nunca fue tan fácil...
                </p>
              </motion.div>  
                )}
              </InView>
         
          </div>
        </div>
      </div>
    </section>
    </motion.div>
    )}
    </InView>
   
    
    {/* NUESTROS EVENTOS*/}
    <InView threshold={0.25}>
    {({ref, inView})=>(
    <motion.div 
    ref={ref}
    initial={{ x: -100, opacity: 0 }}
    animate={ inView ? { x: 0, opacity: 1} : {x:-100}}
    transition={{duration: 0.8}}
    viewport={{
      once: true,
    }}
    
    >
    <section id='Eventos' class="product-slider scroll-mt-[2rem] md:scroll-mt-[8rem]  in-view snipcss0-3-217-376">
      <div class="container container-wide snipcss0-4-376-377">
        <div class="row snipcss0-5-377-378">
          <div class="col-lg-4 col-xxl-3 snipcss0-6-378-379">
            <div class="product-teaser-text snipcss0-7-379-380">
              <div class="text-5xl text-[#005c99] ml-8 m-2 max-[480px]:text-center max-[480px]:ml-0 headline snipcss0-8-380-381">
              Eventos
              </div>
              <p class="ml-8 max-[480px]:ml-0 max-[480px]:!text-3xl  snipcss0-8-380-382">
              Como amantes de las actividades deportivas promovemos y patrocinamos eventos con instituciones y marcas aliadas que nos permiten estar más cerca de ti.
              </p>
              <p class="text-left ml-8 max-[480px]:ml-0 cta-link-wrap-button snipcss0-8-380-383">
                <a href="/products" class="button primary js-track-link-event snipcss0-9-383-384">
                  <span onClick={()=> sendWhatsappMessage()} class="button-text snipcss0-10-384-385">
                    Participa!
                  </span>
                </a>
              </p>
            </div>
          </div>
          <div class="col-lg-8 max-[480px]:ml-5 max-[740px]:ml-8 max-[768px]:ml-10 max-[991px]:ml-10 col-xxl-9 snipcss0-6-378-386">
          <ReactCardSlider infiniteLoop={true} slides={slides}/>
          </div>
        </div>
      </div>
    </section>
    </motion.div>
    )}
    </InView>

    {/*CONTACTANOS */}
    <InView threshold={0.25}>
                {({ref, inView})=>(
                <motion.div 
                ref={ref}
                initial={{ x: -100, opacity: 0 }}
                animate={ inView ? { x: 0, opacity: 1} : {x:-100}}
                transition={{duration: 0.8}}
                viewport={{
                  once: true,
                }}
                id=''
                >
    <section id='Contact' class="text scroll-mt-[4rem] in-view snipcss0-3-217-491">
      <div class="container snipcss0-4-491-492">
        <div class="row snipcss0-5-492-493">
          <div class="col-12 col-sm-10 col-xxl-12 snipcss0-6-493-494">
          <InView threshold={0.25}>
                {({ref, inView})=>(
                <motion.div 
                ref={ref}
                initial={{ x: -100, opacity: 0 }}
                animate={ inView ? { x: 0, opacity: 1} : {x:0}}
                transition={{duration: 0.8}}
                viewport={{
                  once: true,
                }}
                id=''
                >
            <h2 class="text-center text-[#005c99]  snipcss0-7-494-495 text-5xl max-[480px]:text-5xl mb-10">
            PRODUCTOS CON CALIDAD DE FABRICACIÓN PLASCAN <br /><br /> Oasis Agua & Hielo
            </h2>
            </motion.div>
          )}
          </InView>
          <InView threshold={0.25}>
                {({ref, inView})=>(
                <motion.div 
                ref={ref}
                initial={{ y: 0, opacity: 0 }}
                animate={ inView ? { y: -100, opacity: 1} : {y:0}}
                transition={{duration: 0.8}}
                viewport={{
                  once: true,
                }}
                id=''
                >
                  <div className='max-[480px]:mt-[35%] max-[768px]:mt-[25%] max-[1024px]:mt-[20%] mt-[13%]'>
                  <p class="text-center text-2xl text-gray-600 snipcss0-7-494-496">
                  Los productos Oasis (agua - hielo) son una inmersión de frescura, 100% naturales, fabricados por Plascan en la Isla de Margarita, con agua extraída de pozos profundos, ubicados en El Valle del Espíritu Santo. Gracias a los rigurosos procesos de purificación del agua, los productos Oasis no tienen sabor y garantizan tu hidratación.
                  </p>
                  <p class="text-center cta-link-wrap-button snipcss0-7-494-497">
                    <a class="button primary js-track-link-event snipcss0-8-497-498">
                      <span onClick={()=> sendWhatsappMessage()} class=" button-text snipcss0-9-498-499">
                      Contáctanos
                      </span>
                    </a>
                  </p>
                  </div>
           
                </motion.div>
                 )}
                 </InView>
            
          </div>
        </div>
      </div>
    </section>
    </motion.div>
    )}
   
    </InView>
   

    {/* SOCIAL WALL */}
    <div id='Social' class="frame mt-20 -mb-20 scroll-mt-[12rem]  lg:scroll-mt-[10rem] frame-default frame-type-list frame-layout-0 in-view snipcss0-3-217-500">
      <div class="tx-pb-social snipcss0-4-500-501">
        <section class="social-wall-module in-view snipcss0-5-501-502">
          <div class="container snipcss0-6-502-503">
            <div class="container social-wall snipcss0-7-503-504">
              <div class="social-wall-text snipcss0-8-504-505">
                <div class="category-headline snipcss0-9-505-506">
                  <h2 class="text-center text-5xl  text-[#005c99]  snipcss0-10-506-507">
                    Social Wall
                  </h2>
                </div>
                <p className='!text-gray-500 max-[420px]:!text-md !text-3xl'>¿Quieres saber más? Síguenos en nuestras redes sociales! @oasis.ven</p>
                <div class="row pb-list social-wall-grid">
                {/* Social Images */}
                <div class="social-teaser background-img4 social-teaser-big style-RRKvC" goto="0" data-src="#social-wall-modal" data-modal="true" data-image="./assets/Oasis5.jpeg" data-index="0" id="style-RRKvC">
                <span class="social-icon instagram-icon snipcss0-3-31-32">
                </span>
                  <div class="social-overlay  d-none d-xl-flex border flex-column justify-content-center align-items-center">
                    <a href="https://www.instagram.com/oasis.ven" target="_blank" class="button primary js-track-link-event vl-modal-open" >
                      <span class="slickGoTo button-text">
                        Ver mas
                        <span class="btn-arrow">
                        </span>
                      </span>
                    </a>
                  </div> 
                </div>
                <div class="social-teaser background-img2  style-BD1dS" goto="1" data-src="#social-wall-modal" data-modal="true"  data-index="1" id="style-BD1dS">
                <span class="social-icon instagram-icon snipcss0-3-31-32">
                </span>
                  <div class="social-overlay d-none d-xl-flex flex-column justify-content-center align-items-center ">
                    <a href="https://www.instagram.com/oasis.ven" target="_blank" class="button primary js-track-link-event vl-modal-open" >
                      <span class="slickGoTo button-text">
                        Ver mas
                        <span class="btn-arrow">
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="social-teaser background-img3 style-oGokt" goto="2" data-src="#social-wall-modal" data-modal="true"  data-index="2" id="style-oGokt">
                <span class="social-icon instagram-icon snipcss0-3-31-32">
                </span>
                  <div class="social-overlay d-none d-xl-flex flex-column justify-content-center align-items-center">
                    <a href="https://www.instagram.com/oasis.ven" target="_blank"  class="button primary js-track-link-event vl-modal-open" >
                      <span class="slickGoTo button-text">
                        Ver mas
                        <span class="btn-arrow">
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="social-teaser background-img5 style-QbYa2" goto="3" data-src="#social-wall-modal" data-modal="true"  data-index="3" id="style-QbYa2">
                <span class="social-icon  rounded-full instagram-icon snipcss0-3-31-32">
                </span>
                  <div class="social-overlay d-none d-xl-flex flex-column justify-content-center align-items-center">
                    <a href="https://www.instagram.com/oasis.ven" target="_blank" class="button primary js-track-link-event vl-modal-open" >
                      <span class="slickGoTo button-text">
                        Ver mas
                        <span class="btn-arrow">
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="social-teaser background-img1  style-mTySs" goto="4" data-src="#social-wall-modal" data-modal="true" data-image="/fileadmin/instafeed/17968682696280351.jpg" data-index="4" id="style-mTySs">
                <span class="social-icon instagram-icon snipcss0-3-31-32">
                </span>
                  <div class="social-overlay d-none d-xl-flex flex-column justify-content-center align-items-center">
                    <a href="https://www.instagram.com/oasis.ven" target="_blank" class="button primary js-track-link-event vl-modal-open" >
                      <span class="slickGoTo button-text">
                        Ver mas
                        <span class="btn-arrow">
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
               
              </div>
             
             <a href="https://www.instagram.com/oasis.ven" target="_blank" class="button  primary mt-4js-track-link-event snipcss0-8-504-540">
                <span class=" button-text snipcss0-9-540-541">
                  Ir a Instagram
                  <span class="btn-arrow snipcss0-10-541-542">
                  </span>
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>
      
    </div>
   
   
    </div>

    {/* FOOTER */}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f6f6f6" fill-opacity="1" d="M0,256L120,234.7C240,213,480,171,720,160C960,149,1200,171,1320,181.3L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    <footer class="site-footer snipcss-JT1SE" id="#Footer">
      <div class="container  container-wide">
        <div class="row ">
          <div class="footer-col ">
            <ul>
              <li>
                <a className='!text-gray-900' href="#NuestrosProductos" >
                  Productos
                </a>
              </li>
              <li class="nav-item">
                <a>
                  Agua Mineral
                </a>
              </li>
              <li class="nav-item">
                <a>
                  Cilindros de Hielo
                </a>
              </li>
              <li class="nav-item">
                <a>
                  Cilindros de Helado
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <ul>
              <li>
                <a className='!text-gray-900' href='#Eventos'>
                  Eventos
                </a>
              </li>
              <li class="nav-item">
                <a >
                  Camara de Turismo
                </a>
              </li>
              <li class="nav-item">
                <a >
                  Margarita Runners
                </a>
              </li>
              <li class="nav-item">
                <a >
                  Proximamente
                </a>
              </li>
              
            </ul>
          </div>
          <div class="footer-col">
            <ul>
              <li>
                <a className='!text-gray-900' href="#Contacto">
                  Contacto
                </a>
              </li>
              <li class="nav-item">
                <a >
                  Whatsapp
                </a>
              </li>
              <li class="nav-item">
                <a >
                  Intagram
                </a>
              </li>
              <li class="nav-item">
                <a >
                  Correo Electronico
                </a>
              </li>
            
            </ul>
          </div>
          
          <div class="footer-col ml-[15%] max-[768px]:ml-0 max-[1200px]:ml-0  contact-col">
            <ul class="contact">
              <li>
              Atencion al cliente
              </li>
              <li class="nav-item">
              
                <a href="tel:08004580366">
                  (VEN) 0412-2030851
                </a>
              </li>
           
              <li class="nav-item">
                Lunes a Viernes 8am - 5pm
              </li>
              <li>
              </li>
            </ul>
          </div>
        </div>
        <hr className='mr-20'></hr>
        <div class="row bottom">
          <div class="footer-col col-lg-4 copyright">
            <ul class="meta-menu">
              <li>
                © Oasis 2024
              </li>
              <li class="nav-item">
                <a href="#Productos">
                  Productos
                </a>
              </li>
              <li class="nav-item">
                <a href="#About">
                  Sobre Nosotros
                </a>
              </li>
              <li class="nav-item">
                <a href="#Eventos" >
                Eventos
                </a>
              </li>
              <li class="nav-item">
                <a href="#Contact" >
                  Contacto
                </a>
              </li>
              <li class="nav-item">
                <a href="#Social">
                  Social Wall
                </a>
              </li>
              
            </ul>
          </div>
        
          <div class="footer-col mr-[5%] max-[768px]:-ml-[4.5%] col-lg-4 additional-information">
            <p className='!text-gray-70 !text-center !text-xl'> 
            Oasis Agua & Hielo. Hecho en la Isla de Margarita.  Llenarte de vida es simple, ¡Hidrátate! 
            </p>
          
          </div>
      
        </div>
      </div>
  
    </footer>


    {/* WHATSAPP BUTTON */}
    <div onClick={()=> sendWhatsappMessage()} className="flex fixed bottom-0 w-20 right-0 m-2 p-4 rounded-full cursor-pointer">
  <img  className="w-20 hover:transform hover:scale-110" src={WhatsappIcon} alt=""/>
    </div> 

</div>


  )
}

export default App



