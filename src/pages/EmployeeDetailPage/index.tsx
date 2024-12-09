export default function EmployeeDetailPage() {
  return (
    <div className="relative flex flex-col w-full h-full mx-10">
      <div className="absolute w-full h-40 bg-background-default z-20" />
      <div className="flex text-text-default gap-10 w-full z-40 mt-20 items-center mx-10">
        <img
          className="w-40 h-40 object-cover rounded-full"
          src={dummyData.data.userInfo.photo}
          alt="employeePhoto"
        />
        <div className="flex gap-1 flex-col w-full pb-2 mt-2.5">
          <div className="text-3xl font-bold">
            {dummyData.data.userTopDto.name}
          </div>
          <div className="flex gap-3 text-xl font-semibold">
            <div>{dummyData.data.departName}</div>
            <div>{dummyData.data.positionName}</div>
          </div>
          <div className="flex flex-col">
            <div>사번 : {dummyData.data.userTopDto.employeeId}</div>
            <div>이메일 : {dummyData.data.userTopDto.email}</div>
            <div>전화번호 : {dummyData.data.userTopDto.phoneNum}</div>
          </div>
        </div>
      </div>
      <div className="mt-7 font-semibold text-lg mx-60">주소</div>
      <div
        className="my-2 bg-text-darkgray ml-60"
        style={{ height: '1.5px' }}
      />
      <div className="mx-60 flex flex-col gap-2">
        <div className="flex gap-3">
          <div className="w-32 font-semibold text-center border-r border-gray-300">
            우편번호
          </div>
          {dummyData.data.userInfo.address.postalCode}
        </div>
        <div className="flex gap-3">
          <div className="w-32 font-semibold text-center border-r border-gray-300">
            기본주소
          </div>
          {dummyData.data.userInfo.address.address}
        </div>
        <div className="flex gap-3">
          <div className="w-32 font-semibold text-center border-r border-gray-300">
            상세주소
          </div>
          {dummyData.data.userInfo.address.address_detail}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="ml-60">
          <div className="mt-10 font-semibold text-lg">학력</div>
          <div
            className="my-2 bg-text-darkgray w-96"
            style={{ height: '1.5px' }}
          />
          <div className="flex flex-col gap-2">
            <div className="flex gap-3">
              <div className="w-32 font-semibold text-center border-r border-gray-300">
                학사
              </div>
              경북대학교 컴퓨터학부
            </div>
            <div className="flex gap-3">
              <div className="w-32 font-semibold text-center border-r border-gray-300">
                석사
              </div>
              서울대학교 기계공학과
            </div>
            <div className="flex gap-3">
              <div className="w-32 font-semibold text-center border-r border-gray-300">
                박사
              </div>
              KAIST 전기공학과
            </div>
          </div>
        </div>
        <div>
          <div className="mt-10 font-semibold text-lg">특이사항</div>
          <div
            className="my-2 bg-text-darkgray w-96"
            style={{ height: '1.5px' }}
          />
          <div className="flex flex-col gap-2">
            <div className="flex gap-3">
              <div className="w-32 font-semibold text-center border-r border-gray-300">
                입사날짜
              </div>{' '}
              {dummyData.data.userInfo.hireDate}
            </div>
            <div className="flex gap-3">
              <div className="w-32 font-semibold text-center border-r border-gray-300">
                장거리 유무
              </div>
              {dummyData.data.userInfo.long ? 'O' : 'X'}
            </div>
            <div className="flex gap-3">
              <div className="w-32 font-semibold text-center border-r border-gray-300">
                취미
              </div>
              {dummyData.data.userInfo.hobby}
            </div>
            <div className="flex gap-3">
              <div className="w-32 font-semibold text-center border-r border-gray-300">
                중요사항
              </div>
              {dummyData.data.userInfo.significant}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const dummyData = {
  data: {
    userTopDto: {
      id: 28,
      employeeId: 'EMP997',
      email: 'eyrt6973@naver.com',
      name: '권예린',
      phoneNum: '010-4567-9012',
      deleteFlag: false,
      authType: 'M',
      roleId: 2,
      userInfoId: 26,
      regDate: '2024-11-18T15:11:39.000',
      modDate: '2024-11-18T15:11:39.000',
    },
    userInfo: {
      id: 26,
      address: {
        address: '부산시 해운대구 해운대해변로',
        address_detail: '15층 1501호',
        postalCode: '78901',
      },
      hobby: '요리',
      significant: '리더십 경력 있음',
      photo: 'https://ifh.cc/g/PVdXh3.jpg',
      hireDate: '2024-11-01T09:00:00.000',
      long: false,
    },
    education: [],
    departName: '마케팅팀',
    positionName: '차장',
  },
}
