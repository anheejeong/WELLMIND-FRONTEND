export default function DetailInfo() {
  return (
    <div className="w-full">
      <div className="py-4 rounded-sm h-64 overflow-auto">
        <div className="flex justify-between text-text-default">
          <div className="flex flex-col gap-5 w-1/2">
            {leftDummy.map((left) => (
              <div key={left.id} className="flex gap-4">
                <div className="w-1/3 border-r border-r-text-gray mr-1">
                  {left.key}
                </div>
                <div className="font-semibold flex-1">{left.data}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-5 w-1/2">
            {rightDummy.map((left) => (
              <div key={left.id} className="flex gap-4">
                <div className="w-2/5 border-r border-r-text-gray pr-1">
                  {left.key}
                </div>
                <div className="font-semibold flex-1">{left.data}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const leftDummy = [
  {
    id: '1',
    key: '사번',
    data: 'M234P5060',
  },
  {
    id: '2',
    key: '입사일',
    data: '2021.5.21',
  },
  {
    id: '3',
    key: '포지션',
    data: '사무직',
  },
  {
    id: '4',
    key: '학력',
    data: '경북대학교(학사) 졸업',
  },
  {
    id: '5',
    key: '장거리 유무',
    data: 'O',
  },
  {
    id: '6',
    key: '취미(운동)',
    data: '테니스',
  },
]

const rightDummy = [
  {
    id: '1',
    key: '주민등록번호',
    data: '000000-0******',
  },
  {
    id: '2',
    key: '특이사항',
    data: '-',
  },
  {
    id: '3',
    key: '기혼/미혼',
    data: '미혼',
  },
  {
    id: '4',
    key: '흡연여부',
    data: 'X',
  },
  {
    id: '5',
    key: '수면시간',
    data: '6시간',
  },
  {
    id: '6',
    key: '아침 식사 결식 여부',
    data: 'O',
  },
  {
    id: '7',
    key: '만성 질환',
    data: '알레르기',
  },
]
