import { Graph } from '@/components/Graph'

export default function CommuteGraph() {
  return (
    <div className="flex py-1 rounded-md align-center bg-background-light">
      <div className="mx-auto">
        <Graph
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
    </div>
  )
}
