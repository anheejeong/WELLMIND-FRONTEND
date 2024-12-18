import { useEffect, useState } from 'react'
import { BiShow } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import { useGetAllEmployees } from '@/api/services/admin/allEmployees.api'
import {
  ConfirmModal,
  ConfirmModalButton,
} from '@/components/Modal/ConfirmModal'
import { FormModal } from '@/components/Modal/FormModal'
import EmployeeSlider from '@/pages/EmployeeInfoPage/EmployeeSlider'
import LoadingPage from '@/pages/LoadingPage'

export default function EmployeeInfoPage() {
  const navigate = useNavigate()
  const { data: AllEmployees, isLoading, error } = useGetAllEmployees()

  const [confirmIsOpen, setConfirmIsOpen] = useState(false)
  const [formIsOpen, setFormIsOpen] = useState(false)
  const [groupedEmployees, setGroupedEmployees] = useState<
    { departName: string; employees: typeof AllEmployees }[]
  >([])
  const [selectEmployeeId, setSelectEmployeeId] = useState<number | null>(null)

  useEffect(() => {
    if (AllEmployees && AllEmployees.length > 0) {
      const grouped = AllEmployees.reduce(
        (acc, employee) => {
          const { departName } = employee

          const group = acc.find((item) => item.departName === departName)
          if (group) {
            group.employees.push(employee)
          } else {
            acc.push({
              departName,
              employees: [employee],
            })
          }
          return acc
        },
        [] as { departName: string; employees: typeof AllEmployees }[]
      )

      setGroupedEmployees(grouped)
    }
  }, [AllEmployees])

  useEffect(() => {
    console.log(selectEmployeeId)
  }, [selectEmployeeId])

  if (isLoading) return <LoadingPage />
  if (error) throw Error()

  return (
    <div className="w-full h-full pt-5 flex flex-col gap-7">
      <div className="text-2xl text-text-default font-bold">직원 조회</div>
      <div className="w-full flex-1 flex flex-col gap-5 h-full overflow-y-auto">
        {groupedEmployees?.length > 0 &&
          groupedEmployees.map((group) => (
            <EmployeeSlider
              key={group.departName}
              departName={group.departName}
              employees={group.employees || []}
              setConfirmIsOpen={() => setConfirmIsOpen(true)}
              setSelectEmployeeId={(id: number) => setSelectEmployeeId(id)}
            />
          ))}
      </div>
      <ConfirmModal
        isOpen={confirmIsOpen}
        onClose={() => setConfirmIsOpen(false)}
        icon={<BiShow />}
        title={`직원 정보를 조회하시겠습니까?`}
        description={
          '직원 정보 조회를 위해서는 권한 인증과 조회 사유가 필요합니다.'
        }
        confirmButton={
          <ConfirmModalButton
            onClick={() => {
              setConfirmIsOpen(false)
              setFormIsOpen(true)
            }}
          >
            확인
          </ConfirmModalButton>
        }
      />
      <FormModal
        isOpen={formIsOpen}
        onClose={() => {
          setFormIsOpen(false)
        }}
        icon={<BiShow />}
        title="직원 조회 사유"
        description="직원 정보 조회를 위한 사유를 작성해주세요."
        confirmButton={
          <ConfirmModalButton
            onClick={() => {
              setFormIsOpen(false)
              navigate('/employee-info/detail')
            }}
          >
            확인
          </ConfirmModalButton>
        }
      >
        <input
          className="w-full border rounded-md border-text-gray nowrap p-1 focus:outline-none focus:border-default-darkGray"
          type="text"
        />
      </FormModal>
    </div>
  )
}

// const dummyData = [
//   {
//     name: '안희정',
//     photo: 'https://ifh.cc/g/PVdXh3.jpg',
//     email: 'eyrt6973@naver.com',
//     buttonMod: 'MESSAGE' as const,
//   },
//   {
//     name: '석유리',
//     photo: 'https://ifh.cc/g/PVdXh3.jpg',
//     email: 'dlkjs800@naver.com',
//     buttonMod: 'MESSAGE' as const,
//   },
//   {
//     name: '박지현',
//     photo: 'https://ifh.cc/g/PVdXh3.jpg',
//     email: 'alkjlskd192@naver.com',
//     buttonMod: 'MESSAGE' as const,
//   },
//   {
//     name: '김서준',
//     photo: 'https://ifh.cc/g/PVdXh3.jpg',
//     email: 'a99a99d@naver.com',
//     buttonMod: 'MESSAGE' as const,
//   },
//   {
//     name: '한민준',
//     photo: 'https://ifh.cc/g/PVdXh3.jpg',
//     email: 'lksjd1@naver.com',
//     buttonMod: 'MESSAGE' as const,
//   },
//   {
//     name: '서도윤',
//     photo: 'https://ifh.cc/g/PVdXh3.jpg',
//     email: 'llldis223@naver.com',
//     buttonMod: 'MESSAGE' as const,
//   },
//   {
//     name: '김예준',
//     photo: 'https://ifh.cc/g/PVdXh3.jpg',
//     email: 'ye1010@naver.com',
//     buttonMod: 'MESSAGE' as const,
//   },
//   {
//     name: '김시우',
//     photo: 'https://ifh.cc/g/PVdXh3.jpg',
//     email: 'lkjdoij123123@naver.com',
//     buttonMod: 'MESSAGE' as const,
//   },
//   {
//     name: '박하준',
//     photo: 'https://ifh.cc/g/PVdXh3.jpg',
//     email: 'hahaha1010@naver.com',
//     buttonMod: 'MESSAGE' as const,
//   },
//   {
//     name: '유지호',
//     photo: 'https://ifh.cc/g/PVdXh3.jpg',
//     email: 'jihoo30@naver.com',
//     buttonMod: 'MESSAGE' as const,
//   },
//   {
//     name: '강준우',
//     photo: 'https://ifh.cc/g/PVdXh3.jpg',
//     email: 'joonhoi100@naver.com',
//     buttonMod: 'MESSAGE' as const,
//   },
//   {
//     name: '라도현',
//     photo: 'https://ifh.cc/g/PVdXh3.jpg',
//     email: 'dodododo66@naver.com',
//     buttonMod: 'MESSAGE' as const,
//   },
// ]
