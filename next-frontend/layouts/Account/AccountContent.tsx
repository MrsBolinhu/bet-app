import { useTabBarContext } from '../../contexts'
import { Item, Logout, Trash } from '../../components';
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
      {/* <Item onClick={() => setShowModal(true)} Icon={<Change />} Title={'Change username'} /> */}
      <Item onClick={handleLogout} Icon={<Logout />} Title={'Logout'} />
      <form action="http://localhost:5000/delete_account">
        <Item Icon={<Trash />} Title={'Delete account'} />
      </form>
    </>
  )
}