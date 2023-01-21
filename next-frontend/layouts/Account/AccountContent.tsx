import { useTabBarContext } from '../../contexts'
import { AccountButton, Divider, Logout, Trash } from '../../components';
import { useRouter } from 'next/router';
import { requestService } from '../../service';

export const AccountContent = () => {
  const { hide } = useTabBarContext()
  const router = useRouter()

  const handleLogout = (e: any) => {
    e.preventDefault()
    requestService.logoutUser()
    router.push('/signin')
    hide()
  }
  
  return (
    <>
      {/* <AccountButton onClick={() => setShowModal(true)} Icon={<Change />} Title={'Change username'} /> */}
      <form >
        <AccountButton onClick={handleLogout} Icon={<Logout />} Title={'Logout'} />
      </form>
      <Divider />
      
      <form action="http://localhost:5000/delete_account">
        <AccountButton Icon={<Trash />} Title={'Delete account'} />
      </form>
    </>
  )
}