export const ReportColors = (type: string): string => {
  const bgColors: Record<string, string> = {
    '정상 출퇴근형': 'bg-default-lightGreen',
    '지각 빈발형': 'bg-primary-200',
    '야근 빈발형': 'bg-default-darkGray',
    '출장 빈발형': 'bg-default-orange',
    '조퇴 빈발형': 'bg-default-red',
    '외출 빈발형': 'bg-black-400',
  }
  return bgColors[type] || 'bg-text-gray'
}
