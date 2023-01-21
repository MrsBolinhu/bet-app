import { AccountHeader, AccountContent } from '../layouts/';

const Account = () => {
  return (
    <div className='flex flex-col min-w-screen min-h-screen bg-primaryDark pt-[60px] px-6 justify-items-center text-primaryLight'>
        <AccountHeader />
        <AccountContent />
    </div>
  )
}

export default Account