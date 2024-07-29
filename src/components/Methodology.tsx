import Image from 'next/image'
import bg from '../../public/bgMethodology.webp'
import { Container } from './Container'
import ShineBorder from './magicui/shine-border'
import { MethodologyCard, MethodologyCardProps } from './MethodologyCard'
import { FeedbackCard } from './FeedbackCard'
import avatar1 from '../../public/avatar1.jpeg'

export function Methodology() {
  const cardsInfosArray: MethodologyCardProps[] = [
    {
      number: 1,
      subtitle:
        'Compreendemos melhor o estado atual da sua marca e escolhermos juntos a melhor estratégia para o sua campanha.',
      title: 'Briefing',
    },
    {
      number: 2,
      subtitle:
        'Nossa equipe encontra os influencers ideais que mais se adequam ao propósito que estabelecemos juntos no briefing.',
      title: 'Seleção',
    },
    {
      number: 3,
      subtitle:
        'Nossos influencers começam a trabalhar, produzindo conteúdo para o seu negócio.',
      title: 'Mãos a obra',
    },
    {
      number: 4,
      subtitle:
        'No final de toda campanha, sem falta, nós deixamos um relatório na sua mesa. Analisaremos juntos o nosso desempenho.',
      title: 'Relatório',
    },
  ]

  function isOddNumber(numero: number) {
    return numero % 2 !== 0
  }
  return (
    <section className="bg-black relative w-full flex justify-center min-h-screen max-h-[2457px] py-20 px-20">
      <Image fill src={bg} alt="Background" className="object-cover" />
      <Container className="max-w-[1080px] flex flex-col gap-20">
        {/* Methodology container */}
        <ShineBorder
          borderRadius={20}
          borderWidth={1}
          color={['#FC1B61', '#000']}
          className=" text-white overflow-hidden w-full mx-auto bg-[#0F0F0F33]/20 backdrop-blur-md py-10 px-10 flex flex-col gap-8"
        >
          {/* Conheça nossa ... apresentação div */}
          <div className="pb-[30px] w-full text-center flex flex-col">
            <span className="uppercase text-rosaPrimary text-base font-extrabold leading-[44px] tracking-[6.24px]">
              conheça nossa
            </span>
            <span className="text-white font-light tracking-[0.76px] leading-[44px] text-4xl">
              <strong className="font-extrabold">Metodologia</strong> people
            </span>
          </div>

          <div className="w-full flex flex-col gap-[32px]">
            {cardsInfosArray.map((card, index) => {
              const isOdd = isOddNumber(card.number)
              return (
                <div key={index} className={`flex gap-5 `}>
                  {!isOdd && (
                    <>
                      <div className="flex-1" />
                      <svg
                        className="my-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="19"
                        viewBox="0 0 12 19"
                        fill="none"
                      >
                        <path
                          d="M0.367918 8.61018L7.78847 1.13768C8.14405 0.782036 8.62506 0.582413 9.12644 0.582413C9.62783 0.582413 10.1088 0.782036 10.4644 1.13768L11.445 2.12425C11.8004 2.48229 12 2.96761 12 3.47363C12 3.97965 11.8004 4.46498 11.445 4.82301L6.78894 9.50764L11.445 14.1923C11.8004 14.5503 12 15.0356 12 15.5417C12 16.0477 11.8004 16.533 11.445 16.891L10.4644 17.8776C10.1042 18.2243 9.62492 18.4177 9.12644 18.4177C8.62797 18.4177 8.14871 18.2243 7.78847 17.8776L0.367918 10.4051C0.132269 10.1666 0 9.84395 0 9.50764C0 9.17133 0.132269 8.84869 0.367918 8.61018Z"
                          fill="#FC1B61"
                        />
                      </svg>
                    </>
                  )}
                  <MethodologyCard
                    number={card.number}
                    subtitle={card.subtitle}
                    title={card.title}
                  />
                  {isOdd && (
                    <svg
                      className="my-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="19"
                      viewBox="0 0 12 19"
                      fill="none"
                    >
                      <path
                        d="M11.6321 8.61018L4.21153 1.13768C3.85595 0.782036 3.37494 0.582413 2.87356 0.582413C2.37217 0.582413 1.89116 0.782036 1.53558 1.13768L0.555029 2.12425C0.199626 2.48229 0 2.96761 0 3.47363C0 3.97965 0.199626 4.46498 0.555029 4.82301L5.21106 9.50764L0.555029 14.1923C0.199626 14.5503 0 15.0356 0 15.5417C0 16.0477 0.199626 16.533 0.555029 16.891L1.53558 17.8776C1.89582 18.2243 2.37508 18.4177 2.87356 18.4177C3.37203 18.4177 3.85129 18.2243 4.21153 17.8776L11.6321 10.4051C11.8677 10.1666 12 9.84395 12 9.50764C12 9.17133 11.8677 8.84869 11.6321 8.61018Z"
                        fill="#FC1B61"
                      />
                    </svg>
                  )}
                </div>
              )
            })}
          </div>
        </ShineBorder>

        {/* Container feedbacks */}
        <section className="flex flex-col gap-20 w-full">
          <h2 className="text-[38px] font-bold leading-[49px] text-white text-center">
            {' '}
            O que nossos clientes falam da People!
          </h2>

          <div className="flex gap-5 items-center justify-center">
            <FeedbackCard
              companyName="Agência Curta - Eventos"
              locale="Recife - pe"
              userName="Emerson Gomes"
              message="Toop de verdade meus amigos! Vocês estão presentes em todos os meus eventos pra dar aquela força crucial na divulgação. Sempre selecionando os melhores influenciadores de acordo com o propósito de cada evento!"
              stars={5}
              avatar={avatar1}
            />

            <FeedbackCard
              companyName="Agência Curta - Eventos"
              locale="Recife - pe"
              userName="Emerson Gomes"
              message="Toop de verdade meus amigos! Vocês estão presentes em todos os meus eventos pra dar aquela força crucial na divulgação. Sempre selecionando os melhores influenciadores de acordo com o propósito de cada evento!"
              stars={5}
              avatar={avatar1}
            />

            <FeedbackCard
              companyName="Agência Curta - Eventos"
              locale="Recife - pe"
              userName="Emerson Gomes"
              message="Toop de verdade meus amigos! Vocês estão presentes em todos os meus eventos pra dar aquela força crucial na divulgação. Sempre selecionando os melhores influenciadores de acordo com o propósito de cada evento!"
              stars={5}
              avatar={avatar1}
            />
          </div>
        </section>
      </Container>
    </section>
  )
}
