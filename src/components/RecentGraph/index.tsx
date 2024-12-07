import dottedLine from '@/assets/dottedLine.svg'

export default function RecentGraph() {
  return (
    <div className="w-full h-full flex justify-center items-center gap-1 mt-12">
      <div className="w-1/6 flex flex-col justify-center items-center text-center">
        <div className="font-semibold w-24 h-16 bg-default-lightGreen text-text-white rounded-full p-2">
          지각, 야근 빈발형
        </div>
        <img className="h-10" src={dottedLine} alt="dottedLine" />
        <div className="w-full h-6 bg-default-lightGreen rounded-l-lg" />
        <div className="h-10" />
        <div className="font-semibold text-text-default w-20 h-16" />
      </div>

      <div className="w-1/6 flex flex-col justify-center items-center text-center">
        <div className="font-semibold text-text-default w-20 h-16" />
        <div className="h-10" />
        <div className="w-full h-6 bg-primary-200" />
        <img className="h-10" src={dottedLine} alt="dottedLine" />
        <div className="font-semibold w-24 h-16 bg-primary-200 text-text-white rounded-full p-2">
          지각, 야근 빈발형
        </div>
      </div>

      <div className="w-1/6 flex flex-col justify-center items-center text-center">
        <div className="font-semibold w-24 h-16 bg-default-darkGray text-text-white rounded-full p-2">
          지각, 야근 빈발형
        </div>
        <img className="h-10" src={dottedLine} alt="dottedLine" />
        <div className="w-full h-6 bg-default-darkGray" />
        <div className="h-10" />
        <div className="font-semibold text-text-default w-20 h-16" />
      </div>

      <div className="w-1/6 flex flex-col justify-center items-center text-center">
        <div className="font-semibold text-text-default w-20 h-16" />
        <div className="h-10" />
        <div className="w-full h-6 bg-default-orange" />
        <img className="h-10" src={dottedLine} alt="dottedLine" />
        <div className="font-semibold w-24 h-16 bg-default-orange text-text-white rounded-full p-2">
          지각, 야근 빈발형
        </div>
      </div>

      <div className="w-1/6 flex flex-col justify-center items-center text-center">
        <div className="font-semibold w-24 h-16 bg-default-red text-text-white rounded-full p-2">
          지각, 야근 빈발형
        </div>
        <img className="h-10" src={dottedLine} alt="dottedLine" />
        <div className="w-full h-6 bg-default-red" />
        <div className="h-10" />
        <div className="font-semibold text-text-default w-20 h-16" />
      </div>

      <div className="w-1/6 flex flex-col justify-center items-center text-center">
        <div className="font-semibold text-text-default w-20 h-16" />
        <div className="h-10" />
        <div className="w-full h-6 bg-black-400 rounded-r-lg" />
        <img className="h-10" src={dottedLine} alt="dottedLine" />
        <div className="font-semibold w-24 h-16 bg-black-400 text-text-white rounded-full p-2">
          지각, 야근 빈발형
        </div>
      </div>
    </div>
  )
}

// const COLORS = [
//   'bg-default-lightGreen',
//   'bg-primary-200',
//   'bg-default-darkGray',
//   'bg-default-orange',
//   'bg-default-red',
//   'bg-text-gray',
// ]

// type DataType = {
//   text: string
// }

// type RecentGraphProps = {
//   data: DataType[]
// }
