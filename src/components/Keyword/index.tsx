type KeywordParams = {
  keyword: string
}

export const Keyword = ({ keyword }: KeywordParams) => {
  return (
    <div className="m-2 px-5 py-1 bg-background-default rounded-full text-default-purple font-semibold">
      {keyword}
    </div>
  )
}
