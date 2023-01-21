import { ReactNode } from "react"

export const TabBarButton = ({ PageLink, Icon, Title }: Props) => (
  <a href={ PageLink } className="w-full focus:text-teal-500 hover:text-indigo-600 justify-center inline-block text-center pt-2 pb-1">
    <div>{Icon}</div>
    <span className="tab tab-home block text-xs text-primaryLight">{ Title }</span>
  </a>
)

interface Props {
  PageLink: string;
  Icon: ReactNode;
  Title: string;
}