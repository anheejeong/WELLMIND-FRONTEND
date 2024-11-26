import { BiSolidChevronLeft, BiSolidChevronRight } from 'react-icons/bi'

import { PaginationItem } from '@/types'

export const Pagination = ({ currentPage, totalPage }: PaginationItem) => {
  const rendPage = totalPage >= 5 ? Math.ceil(currentPage / 5) * 5 : currentPage
  const startPage = Math.max(rendPage - 4, 1)
  const pages = Array.from(
    { length: rendPage - startPage + 1 },
    (_, i) => startPage + i
  )

  return (
    <div className="w-full flex gap-3 items-center justify-center">
      <button>
        <BiSolidChevronLeft className="text-primary-900" />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`px-3 py-1 rounded ${
            page === currentPage
              ? 'bg-primary-900 text-white'
              : 'border border-primary-900 text-text-default hover:bg-background-default'
          }`}
          onClick={() => console.log(`Go to page: ${page}`)}
        >
          {page}
        </button>
      ))}
      <button>
        <BiSolidChevronRight />
      </button>
    </div>
  )
}
