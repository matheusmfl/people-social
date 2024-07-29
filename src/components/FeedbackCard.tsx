import Image, { StaticImageData } from 'next/image'
import ShineBorder from './magicui/shine-border'
import star from '../../public/star.svg'

export interface FeedbackCardProps {
  userName: string
  companyName: string
  locale: string
  message: string
  stars: number
  avatar: StaticImageData
}

export function FeedbackCard({
  companyName,
  locale,
  message,
  stars,
  userName,
  avatar,
}: FeedbackCardProps) {
  const starsCountArray = Array.from({ length: stars }, (_, i) => i)
  return (
    <ShineBorder
      borderRadius={10}
      borderWidth={1}
      color={['#FC1B61', '#000']}
      className="w-[299px] h-[465px] px-6 py-8 flex flex-col gap-5 bg-[#0F0F0F33]/20 backdrop-blur-md"
    >
      <div className="flex flex-col gap-5 h-[80px]">
        {/* Primeira coluna com avatar e userInfos */}
        <div className="flex  gap-5">
          {/* Avatar */}
          <div className="rounded-full relative h-[80px] w-[80px] overflow-hidden ">
            <Image src={avatar} fill alt="avatar" className="object-cover" />
          </div>
          {/* user infos */}
          <div className="flex flex-col">
            <h3 className="text-base text-white font-bold truncate">
              {userName}
            </h3>
            <h4 className="text-sm font-medium text-rosaPrimary">
              {companyName}
            </h4>
            {/* Locale infos */}
            <div className="flex text-[10px] gap-2 font-semibold uppercase text-[#D9D9D9]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="13"
                viewBox="0 0 11 13"
                fill="none"
              >
                <path
                  d="M5.3125 0.375C4.03659 0.376447 2.81335 0.883942 1.91115 1.78615C1.00894 2.68835 0.501447 3.91159 0.5 5.1875C0.5 9.30547 4.875 12.4155 5.06148 12.5457C5.13505 12.5972 5.22268 12.6249 5.3125 12.6249C5.40232 12.6249 5.48995 12.5972 5.56352 12.5457C5.75 12.4155 10.125 9.30547 10.125 5.1875C10.1236 3.91159 9.61606 2.68835 8.71385 1.78615C7.81165 0.883942 6.58841 0.376447 5.3125 0.375ZM5.3125 3.4375C5.65862 3.4375 5.99696 3.54014 6.28475 3.73243C6.57253 3.92472 6.79684 4.19803 6.92929 4.5178C7.06174 4.83757 7.0964 5.18944 7.02887 5.52891C6.96135 5.86837 6.79468 6.18019 6.54994 6.42494C6.30519 6.66968 5.99337 6.83635 5.65391 6.90387C5.31444 6.9714 4.96257 6.93674 4.6428 6.80429C4.32303 6.67184 4.04972 6.44753 3.85743 6.15975C3.66514 5.87196 3.5625 5.53362 3.5625 5.1875C3.5625 4.72337 3.74687 4.27825 4.07506 3.95006C4.40325 3.62187 4.84837 3.4375 5.3125 3.4375Z"
                  fill="#C2134A"
                />
              </svg>
              {locale}
            </div>
          </div>
        </div>
        {/* Description */}
        <span className="text-white text-sm font-normal leading-[24px]">
          {message}
        </span>

        {/* Stars count */}

        <div className="h-full flex-1 flex flex-col justify-end  gap-2">
          <span className="text-sm text-white font-semibold mt-auto">
            Avaliação
          </span>
          <div className="flex gap-1">
            {starsCountArray.map((_, index) => {
              return <Image src={star} key={index} alt="Estrelinha" />
            })}
          </div>
        </div>
      </div>
    </ShineBorder>
  )
}
