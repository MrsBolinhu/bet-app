import { MouseEventHandler } from "react"

export const BasicButton = ({ onClick, Title }: PropTypes) => (
  <button onClick={onClick} className="group relative flex w-full justify-center rounded-md border-b border-transparent my-5 py-2 px-4 text-sm font-medium text-white hover:border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
    {Title}
  </button>
)

interface PropTypes {
  onClick: MouseEventHandler
  Title: string
}