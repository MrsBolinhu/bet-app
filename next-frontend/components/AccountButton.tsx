import { MouseEventHandler, ReactNode } from "react"

export const AccountButton = ({ onClick, Icon, Title }: Props) => (
  <button onClick={ onClick } type='submit' className='flex items-center pt-5 pb-2'>
    <div>{Icon}</div>
    <div className='ml-4'>{ Title }</div>
  </button>
)

interface Props {
  onClick?: MouseEventHandler;
  Icon: ReactNode;
  Title: string;
}