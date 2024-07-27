'use client'
import Image, { StaticImageData } from 'next/image'
import { Container } from './Container'
import robustSystem from '../../public/robust-system.webp'
import '../styles/gradient-bords.css'
import strategyIcon from '../../public/strategyIcon.svg'
import comunityIcon from '../../public/comunityIcon.svg'

interface CardsProps {
  icon: StaticImageData
  title: string
  description: string
}
const Cards = ({ description, icon, title }: CardsProps) => {
  return (
    <div className="h-[376px] flex flex-col items-center justify-center px-5 gap-5 border-animated">
      {/* img div */}
      <div className="w-full flex justify-center h-fit">
        <Image src={icon} alt="icon" />
      </div>
      {/* title div */}
      <div className="px-5 ">
        <h2 className="text-[20px] text-white text-center font-extrabold leading-[26px] tracking-[0.4px]">
          {title}
        </h2>
      </div>

      {/* description div */}
      <span className="font-light text-center leading-[25px] text-white tracking-[0.28px]">
        {description}
      </span>
    </div>
  )
}

export function AboutUs() {
  // const ref = useRef(null)
  // const isInView = useInView(ref)
  const cardsArray: CardsProps[] = [
    {
      title: 'Estratégia Personalizada',
      description:
        'As campanhas são desenvolvidas sob medida para atender às necessidades exclusivas da sua marca, garantindo autenticidade e relevância para o seu público-alvo.',
      icon: strategyIcon,
    },
    {
      title: 'Estratégia Personalizada',
      description:
        'Possuímos uma ampla rede de influencers em diferentes nichos e redes sociais, tornando mais fácil encontrar os parceiros ideais para promover sua marca.',
      icon: comunityIcon,
    },
    {
      title: 'Estratégia Personalizada',
      description:
        'As campanhas são desenvolvidas sob medida para atender às necessidades exclusivas da sua marca, garantindo autenticidade e relevância para o seu público-alvo.',
      icon: strategyIcon,
    },
  ]
  return (
    <section className="py-[88px] px-20 relative bg-black  flex justify-center">
      {/* Left SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="498"
        height="611"
        viewBox="0 0 498 611"
        fill="none"
        className="absolute top-0 left-0"
      >
        <g filter="url(#filter0_f_257_256)">
          <path
            d="M178.265 447.276C-271.109 637.614 -58.3107 300.953 -108.76 176.11C-159.209 51.2677 -20.6764 6.99491 147.333 -60.8977C485.412 -227.252 300.72 -15.6453 351.169 109.197C453.853 300.927 346.274 379.384 178.265 447.276Z"
            fill="url(#paint0_linear_257_256)"
            fill-opacity="0.8"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_257_256"
            x="-225.275"
            y="-228.176"
            width="722.583"
            height="838.49"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="53"
              result="effect1_foregroundBlur_257_256"
            />
          </filter>
          <linearGradient
            id="paint0_linear_257_256"
            x1="224.315"
            y1="428.89"
            x2="41.9449"
            y2="-22.4086"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#6324D5" />
            <stop offset="0.631999" stop-color="#FC1B61" />
          </linearGradient>
        </defs>
      </svg>

      {/* right SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="559"
        height="557"
        viewBox="0 0 559 557"
        fill="none"
        className="absolute bottom-0 right-0"
      >
        <g filter="url(#filter0_f_257_257)">
          <path
            d="M404.265 676.276C-45.1087 866.614 167.689 529.953 117.24 405.11C66.7914 280.268 205.324 235.995 373.333 168.102C711.412 1.7482 526.72 213.355 577.169 338.197C679.853 529.927 572.274 608.384 404.265 676.276Z"
            fill="url(#paint0_linear_257_257)"
            fill-opacity="0.8"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_257_257"
            x="0.724121"
            y="0.824097"
            width="722.583"
            height="838.49"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="53"
              result="effect1_foregroundBlur_257_257"
            />
          </filter>
          <linearGradient
            id="paint0_linear_257_257"
            x1="450.315"
            y1="657.89"
            x2="267.945"
            y2="206.591"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#6324D5" />
            <stop offset="0.631999" stop-color="#FC1B61" />
          </linearGradient>
        </defs>
      </svg>
      <Container className="flex justify-center mx-auto flex-col gap-20">
        {/* Primeiro container com borda colorida */}
        <div
          // ref={ref}
          className="flex gap-[10px] h-[385px] mx-auto bg-[#181617]/50 rounded-[20px] max-w-[1080px] relative z-10 border-animated"
        >
          {/* Primeira parte */}
          <div className="flex flex-col w-full items-center justify-center pl-6 flex-1">
            <h2 className="text-[38px] font-extrabold leading-[44px] text-white tracking-[0.76px]">
              <span className="text-rosaPrimary">Plataforma Robusta</span> com
              insights das campanhas
            </h2>

            <span className="text-base tracking-[0.32px] font-light text-white">
              Nós realizamos uma análise minuciosa dos resultados das campanhas
              que são compartilhados com você através de relatórios da nossa
              plataforma, fornecendo insights valiosos para otimização futura e
              maximização dos resultados.
            </span>
          </div>

          {/* Segunda parte */}

          <div className="w-[587px] h-full rounded-tr-[20px] relative rounded-br-[20px] -translate-y-5 translate-x-2">
            <Image src={robustSystem} alt="Sistema robusto" />
          </div>
        </div>

        {/* Cards container */}
        <div className="flex relative z-20 mx-auto max-w-[1080px] gap-10">
          {cardsArray.map((card, index) => {
            return (
              <Cards
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            )
          })}
        </div>
      </Container>
    </section>
  )
}
