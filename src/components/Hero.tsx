'use client'
import Image from 'next/image'
import { Container } from './Container'
import heroImg from '../../public/Imagem-Hero.webp'

import { Button } from './ui/button'
import BlurFade from './magicui/blur-fade'

export function Hero() {
  return (
    <main className="z-0  min-h-[600px] h-full relative flex justify-center w-full overflow-x-hidden">
      {/* SVG da esquerda */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="319"
        height="550"
        viewBox="0 0 319 550"
        fill="none"
        className="absolute top-0 left-0"
      >
        <g filter="url(#filter0_f_237_37)">
          <path
            d="M114.999 420.012C-123.951 525.318 -50.629 245.019 -101.078 120.176C-151.527 -4.66635 -75.5363 -23.6661 14.3296 -59.9809C190.359 -160.851 113.7 7.09963 164.149 131.942C256.755 327.745 204.865 383.697 114.999 420.012Z"
            fill="url(#paint0_linear_237_37)"
            fill-opacity="0.8"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_237_37"
            x="-223.214"
            y="-196.864"
            width="542.208"
            height="746.069"
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
              result="effect1_foregroundBlur_237_37"
            />
          </filter>
          <linearGradient
            id="paint0_linear_237_37"
            x1="139.667"
            y1="410.267"
            x2="-42.7032"
            y2="-41.0322"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#6324D5" />
            <stop offset="0.631999" stop-color="#FC1B61" />
          </linearGradient>
        </defs>
      </svg>

      {/* SVG 1 da direita */}
      <svg
        width="489"
        height="411"
        viewBox="0 0 489 411"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 -right-4 z-0"
      >
        <g filter="url(#filter0_f_237_36)">
          <path
            d="M115.66 184.719C52.6096 -68.6805 316.316 51.3306 447.929 22.8916C579.542 -5.54727 585.316 72.5695 605.787 167.309C675.187 357.952 522.755 253.797 391.142 282.236C182.424 340.124 136.131 279.459 115.66 184.719Z"
            fill="url(#paint0_linear_237_36)"
            fill-opacity="0.8"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_237_36"
            x="0.0748291"
            y="-89.0351"
            width="729.07"
            height="499.895"
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
              result="effect1_foregroundBlur_237_36"
            />
          </filter>
          <linearGradient
            id="paint0_linear_237_36"
            x1="121.06"
            y1="210.687"
            x2="596.833"
            y2="107.882"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#6324D5" />
            <stop offset="0.631999" stop-color="#FC1B61" />
          </linearGradient>
        </defs>
      </svg>

      <Container className="flex justify-center pt-[60px] z-10">
        {/* Container principal */}
        <div className="max-w-[1080px] pt-5 flex">
          {/* Div com textos */}
          <div className="h-full flex flex-col max-w-[472px] relative z-40 justify-center gap-5">
            <h1 className="text-[58px] font-light text-white tracking-[1.16px] z-10 leading-[67px]">
              <BlurFade>
                <strong className="font-extrabold">
                  Marketing de Influência
                </strong>{' '}
              </BlurFade>
              baseado em dados
            </h1>

            <span className="text-lg text-slate-50 leading-[31px] font-light">
              Conectamos você à seu público-alvo de maneira{' '}
              <strong className="font-extrabold">autêntica</strong> e{' '}
              <strong className="font-extrabold">lucrativa</strong> através da
              nossa comunidade de influenciadores.
            </span>

            <Button className="font-semibold leading-[32px]  h-[44px] py-[10px] text-lg">
              Anunciar com a People
            </Button>
          </div>

          <Image
            src={heroImg}
            alt="Mulher segurando um celular"
            className="z-10"
          />
        </div>
      </Container>
    </main>
  )
}
