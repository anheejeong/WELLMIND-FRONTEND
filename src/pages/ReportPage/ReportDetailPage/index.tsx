import ReactMarkdown from 'react-markdown'

import { Graph } from '@/components/Graph'

export default function ReportDetailPage() {
  return (
    <div className="w-full py-5 flex flex-col gap-5 h-full overflow-scroll">
      <div className="flex flex-col gap-10">
        <div className="text-2xl text-text-default font-bold">
          상세 웰니스 리포트
        </div>
        <div className="flex gap-7 justify-center items-center">
          <img
            className="rounded-lg object-cover"
            src="https://ifh.cc/g/PVdXh3.jpg"
            alt="myphoto"
            style={{ width: '140px', height: '180px' }}
          />
          <div className="flex flex-col gap-2">
            <div className="text-3xl font-bold mb-2 flex">
              안희정
              <div className="text-sm font-medium mx-2 bg-background-pink py-1 px-2 my-1 rounded-lg">
                2024.11.29
              </div>
            </div>
            <div className="flex gap-2">
              {dummyData1.map((dummyData) => (
                <div className="flex flex-col w-52" key={dummyData.type}>
                  <div className="text-text-darkgray text-sm">
                    {dummyData.type}
                  </div>
                  <ReactMarkdown className="text-text-default font-semibold">
                    {dummyData.data}
                  </ReactMarkdown>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              {dummyData2.map((dummyData) => (
                <div className="flex flex-col w-52" key={dummyData.type}>
                  <div className="text-text-darkgray text-sm">
                    {dummyData.type}
                  </div>
                  <div className="text-text-default text-lg font-semibold">
                    <ReactMarkdown>{dummyData.data}</ReactMarkdown>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-background-light mx-36 rounded-sm py-2 px-4">
          <div className="flex flex-col gap-6">
            <div className="text-lg font-semibold">AI Report</div>
            <div className="flex items-center justify-center">
              <Graph
                type="small"
                time={[
                  '09:00',
                  '09:00',
                  '09:20',
                  '08:50',
                  '09:00',
                  '09:02',
                  '08:20',
                  '08:98',
                ]}
                date={[
                  '2024-11-19',
                  '2024-11-20',
                  '2024-11-21',
                  '2024-11-22',
                  '2024-11-23',
                  '2024-11-24',
                  '2024-11-25',
                  '2024-11-26',
                ]}
              />
            </div>
            {dummyReportData.map((dummyReport) => (
              <div className="flex flex-col gap-3" key={dummyReport.title}>
                <div className="font-semibold">{dummyReport.title}</div>
                <div className="">
                  <ReactMarkdown>{dummyReport.description}</ReactMarkdown>
                </div>
              </div>
            ))}
            <div>
              본 리포트는 김수철 직원의 건강 증진과 업무 효율 향상을 위한
              제안이며, 직원과의 상담을 통해 개선 방향을 구체화하고, 필요한
              지원을 제공해야 합니다.
            </div>
            <div className="w-full bg-text-gray" style={{ height: '1px' }} />
            <div className="mb-4">
              <div className="text-lg font-semibold">관리자 코멘트</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const dummyData1 = [
  {
    type: 'Department',
    data: 'IT부터 프론트엔드 개발자',
  },
  {
    type: 'Joined',
    data: '2020.08.01',
  },
  {
    type: 'Commuting Distance',
    data: 'Long',
  },
]

const dummyData2 = [
  {
    type: 'Email',
    data: 'Email@google.com',
  },
  {
    type: 'Date of Birth',
    data: '1992.04.23',
  },
  {
    type: 'Type',
    data: '지각, 야근 빈발형',
  },
]

const dummyReportData = [
  {
    title: '1. 출근 시간 및 지각 패턴 분석',
    description: `김수철 직원의 총 근무일수는 239일이며, 평균 출근 시간은 08시 51분입니다.  지각 기준 시각을 9시 이후로 설정했을 때 지각률은 24.69%로 나타났습니다.  이는 장거리 통근으로 인한 지각이 빈번함을 시사합니다. 출근 시간 분포를 살펴보면, 8시 30분부터 8시 59분 사이에 출근하는 경우가 대부분(180일, 75.3%) 이지만, 9시 이후 지각하는 경우도 59일(24.69%)이나 됩니다. 요일별 평균 출근 시간을 분석해보면, 수요일이 가장 빠르고 목요일이 가장 늦은 것으로 나타났습니다.  월별 평균 출근 시간은 큰 차이를 보이지 않으나, 7월과 6월의 평균 출근 시간이 상대적으로 빠른 편입니다.  이러한 패턴은 장거리 통근과 더불어, 교통 상황이나 개인적인 사정 등 다양한 요인에 영향을 받는 것으로 추정됩니다.`,
  },
  {
    title: '2. 원인 추측 및 건강 리스크',
    description: `위와 같은 출근 패턴 및 높은 지각률은 장거리 통근으로 인한 스트레스와 수면 부족을 야기할 가능성이 높습니다.  매일 장거리 통근으로 인한 이동 시간과 불확실한 교통 상황은 심리적 부담과 스트레스를 증가시키며, 이는 만성 피로, 좌식 생활로 인한 건강 문제(허리 통증 등), 그리고 우울증과 같은 심각한 건강 리스크로 이어질 수 있습니다.  특히, 지각으로 인한 업무 시작의 지연은 추가적인 스트레스를 유발하고 업무 효율성을 저하시킬 수 있습니다.`,
  },
  {
    title: '3. 권장사항 및 해결책',
    description: `김수철 직원의 건강을 보호하고 업무 효율성을 높이기 위해 다음과 같은 해결책을 제안합니다.

* **수면 시간 확보:** 충분한 수면은 신체적, 정신적 건강 유지에 필수적입니다.  장거리 통근으로 인한 수면 부족을 해결하기 위해, 통근 시간을 줄이거나, 통근 방식을 변경하는 것을 고려해 볼 수 있습니다.  (예: 대중교통 이용, 이 사 등)
* **건강 관리 및 우울증 예방:** 균형 잡힌 식사와 규칙적인 운동은 신체 건강을 유지하고 만성 피로를 예방하는 데 중요한 역할을 합니다.  또한,  스트레스 해소를 위한 취미 활동(예: 영화 감상)을 적극적으로 활용하는 것도 도움이  될 것입니다.  우울증 증상이 의심될 경우, 전문가의 도움을 받는 것이 중요합니다.
* **근무 시간 조절:** 가능하다면, 출근 시간을 조정하거나 유연 근무제를 활용하는 방안을 검토하여, 장거리 통근으로 인한 스트레스를 줄이는 것이 좋습니다.`,
  },
  {
    title: '4. 야근 패턴 분석 및 건강 리스크',
    description: `김수철 직원은 239일 중 94일(39.33%) 야근을 하였으며, 평균 초과 근무 시간은 1시간 45분 49초입니다.  이는 과도한 업무량으로 인한 만성 피로, 수면 부족, 스트레스 누적을 야기할 수 있습니다.  장기간 지속될 경우, 심혈관 질환, 소화기 질환, 면역력 저하 등 심각한 건강 문제로 이어질 위험이 높습니다.  또한, 개인 생활의 균형을 깨뜨려 우울증이나 불안감을 증가시킬 수 있습니다.`,
  },
  {
    title: '5. 야근 관련 권장사항',
    description: `김수철 직원의 건강을 보호하고 지속 가능한 업무 환경을 조성하기 위해 다음과 같은 권장 사항을 제안합니다.

* **업무량 조절:**  과도한 업무량이 야근의 주요 원인일 가능성이 높습니다.  업무량을 재분배하거나, 업무 효율성을 높이는 방안을 모색해야 합니다. 우선순위를 정하고, 업무 시간 관리 기술을 향상시키는 교육을 받는 것도 고려할 수 있습니다.
* **야근 관리 시스템 강화:**  야근 발생 시, 그 원인과 시간을 기록하고 분석하여 과도한 야근을 예방하는 시스템을 구축해야 합니다.  필요시, 추가 인력 지원 등의 조치가 필요합니다.
* **휴식 및 건강 관리:**  야근 후에는 충분한 휴식과 수면을 취하고, 규칙적인 운동과 건강한 식습관을 통해 건강을 관리해야 합니다.  스트레스 해소를 위한 취미 활동(예: 영화 감상)을 적극적으로 활용하는 것도 중요합니다.  심리적인 어려움을 느낄 경우, 전문가의 도움을 받는 것도 고려해야 합니다.`,
  },
]
