import dottedLine from '@/assets/dottedLine.svg'

export default function RecentGraph() {
  return (
    <div className="w-full h-full flex justify-center items-center gap-1 mt-12">
      <div className="w-1/6 flex flex-col justify-center items-center text-center">
        <div className="font-semibold text-text-default w-20 h-14">
          지각, 야근 빈발형
        </div>
        <img className="h-10" src={dottedLine} alt="dottedLine" />
        <div className="w-full h-6 bg-default-lightGreen rounded-l-lg" />
        <div className="h-10" />
        <div className="font-semibold text-text-default w-20 h-14" />
      </div>

      <div className="w-1/6 flex flex-col justify-center items-center text-center">
        <div className="font-semibold text-text-default w-20 h-14" />
        <div className="h-10" />
        <div className="w-full h-6 bg-primary-200" />
        <img className="h-10" src={dottedLine} alt="dottedLine" />
        <div className="font-semibold text-text-default w-20 h-14">
          지각, 야근 빈발형
        </div>
      </div>

      <div className="w-1/6 flex flex-col justify-center items-center text-center">
        <div className="font-semibold text-text-default w-20 h-14">
          지각, 야근 빈발형
        </div>
        <img className="h-10" src={dottedLine} alt="dottedLine" />
        <div className="w-full h-6 bg-default-darkGray" />
        <div className="h-10" />
        <div className="font-semibold text-text-default w-20 h-14" />
      </div>

      <div className="w-1/6 flex flex-col justify-center items-center text-center">
        <div className="font-semibold text-text-default w-20 h-14" />
        <div className="h-10" />
        <div className="w-full h-6 bg-default-orange" />
        <img className="h-10" src={dottedLine} alt="dottedLine" />
        <div className="font-semibold text-text-default w-20 h-14">
          지각, 야근 빈발형
        </div>
      </div>

      <div className="w-1/6 flex flex-col justify-center items-center text-center">
        <div className="font-semibold text-text-default w-20 h-14">
          지각, 야근 빈발형
        </div>
        <img className="h-10" src={dottedLine} alt="dottedLine" />
        <div className="w-full h-6 bg-default-red" />
        <div className="h-10" />
        <div className="font-semibold text-text-default w-20 h-14" />
      </div>

      <div className="w-1/6 flex flex-col justify-center items-center text-center">
        <div className="font-semibold text-text-default w-20 h-14" />
        <div className="h-10" />
        <div className="w-full h-6 bg-text-gray rounded-r-lg" />
        <img className="h-10" src={dottedLine} alt="dottedLine" />
        <div className="font-semibold text-text-default w-20 h-14">
          지각, 야근 빈발형
        </div>
      </div>
    </div>
  )
}
