'use client'
import { useRef } from 'react'
import { Container } from './Container'
import { useInView } from 'framer-motion'
import CountUp from 'react-countup'

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <section ref={ref} className="py-12 px-20  flex justify-center bg-slate-50">
      <Container className="flex flex-col gap-10">
        <div className="w-full flex justify-center">
          <h2 className="text-center relative text-[38px] font-normal leading-[44px] tracking-[0.76px] z-20 pt-5">
            <strong className="font-bold">Nossos números</strong> falam...
          </h2>
        </div>

        <div className="flex justify-center gap-12">
          <div className="px-16 flex flex-col gap-5 w-[308px]">
            <span className="text-gradient text-[70px] font-bold">
              +{isInView ? <CountUp start={0} end={30} duration={2.75} /> : 0}K
            </span>
            <span className="text-[30px] font-light text-[#181617] text-center leading-[38px]">
              <strong className="font-bold">Publis</strong> <br /> realizadas
            </span>
          </div>
          <div className="px-16 flex flex-col gap-5 w-[308px]">
            <span className="text-gradient text-[70px] font-bold">
              +{isInView ? <CountUp start={0} end={15} duration={2.75} /> : 0}M
            </span>
            <span className="text-[30px] font-light text-[#181617] text-center leading-[38px]">
              <strong className="font-bold">Contas</strong> <br /> alcançadas
            </span>
          </div>
          <div className="px-16 flex flex-col gap-5 w-[308px]">
            <span className="text-gradient text-[70px] font-bold">
              +{isInView ? <CountUp start={0} end={500} duration={2.75} /> : 0}
            </span>

            <span className="text-[30px] font-light text-[#181617] text-center leading-[38px]">
              <strong className="font-bold">Campanhas</strong> <br /> realizadas
            </span>
          </div>
        </div>
      </Container>
    </section>
  )
}
