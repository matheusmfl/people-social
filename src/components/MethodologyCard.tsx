export interface MethodologyCardProps {
  title: string
  subtitle: string
  number: number
}

export function MethodologyCard({
  number,
  subtitle,
  title,
}: MethodologyCardProps) {
  return (
    <div className="w-[463px] h-[173px] flex gap-[10px] bg-[#0F0F0F] card-methodology rounded-[10px]">
      <div className="pl-[32px] my-auto text-gradient text-[109px] font-black">
        {number}
      </div>

      <div className="w-[305px] flex flex-col py-5">
        <h2 className="text-[28px] font-bold text-rosaPrimary ">{title}</h2>
        <span className="text-base font-normal text-white">{subtitle}</span>
      </div>
    </div>
  )
}
