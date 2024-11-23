import { BiEnvelope, BiHome, BiPencil, BiPhone } from 'react-icons/bi'

export default function MyInfo() {
  return (
    <div className="flex gap-12">
      <img
        className="rounded-sm object-cover"
        src="https://ifh.cc/g/PVdXh3.jpg"
        alt="myphoto"
        style={{ width: '200px', height: '280px' }}
      />
      <div className="flex justify-between flex-1 relative">
        <div className="flex flex-col gap-6 py-3">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-4">
              <div className="text-4xl font-bold text-text-default">안희정</div>
              <div className="text-text-white text-xs bg-default-lightRed px-2 py-1 rounded-sm">
                Manager
              </div>
            </div>
            <div className="text-primary-400 text-xl font-bold">
              IT부서 주임
            </div>
          </div>
          <div className="flex flex-col text-lg font-semibold gap-3">
            <div className="flex justify-between">
              <div>
                <div>
                  <BiEnvelope className="w-6 h-6 text-text-gray" />
                </div>
                <div>
                  <div>eyrt6973@naver.com</div>
                </div>
              </div>
              <div>
                <div>
                  <BiPhone className="w-6 h-6 text-text-gray" />
                </div>
                <div>010-5513-7514</div>
              </div>
            </div>
            <div>
              <div>
                <BiHome className="w-6 h-6 text-text-gray" />
              </div>
              <div>42615</div>
              <div>
                대구광역시 달서구 선원남로 77(이곡동, 한샘타운) 105동 506호
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-8">
          <button className="bg-primary-700 py-1 pl-4 pr-5 text-text-white rounded-md flex items-center gap-2">
            <div>
              <BiPencil className="w-6 h-6" />
            </div>
            EDIT
          </button>
        </div>
      </div>
    </div>
  )
}
