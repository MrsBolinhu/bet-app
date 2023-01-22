import { AccountHeader, AccountContent } from '../layouts/';

const Account = () => {
  return (
    <div className='min-h-screen bg-primaryDark pt-[60px] px-6 text-primaryLight'>
        <AccountHeader />
        <AccountContent />
    </div>
  )
}

export default Account