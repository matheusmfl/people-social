import Image from 'next/image'
import { Container } from './Container'
import { Button } from './ui/button'
import zuckerberg from '../../public/zuckerberg.png'

export function MarkZuckembergSection() {
  return (
    <section className="max-h-[440px] w-full bg-white relative flex justify-center">
      <Container className="px-20 flex justify-center relative">
        <Image
          src={zuckerberg}
          className="absolute bottom-0 right-0"
          alt="Mark Zuckerberg - CEO Facebook"
        />
        {/* Primeira div */}
        <div className="max-w-[593px] ml-[100px] flex flex-col py-[55px]">
          <h2 className="text-[38px] font-light text-black leading-[49px]">
            <strong className="font-bold">Pessoas influenciam pessoas.</strong>
            <br />
            Nada influencia mais do que a recomendação de alguém de confiança.
          </h2>

          <span className="text-[#777] text-[20px] font-normal leading-[49px]">
            Mark Zuckerberg - CEO do Facebook
          </span>

          <Button className="font-semibold leading-[32px] mt-[46px]  h-[44px] py-[10px] text-lg">
            Quero anunciar com a People!
          </Button>
        </div>

        <div className="flex-1" />
      </Container>
    </section>
  )
}
