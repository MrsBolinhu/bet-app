import { useUserContext } from '../../contexts'
export const AccountHeader = () => {
  const { user, userImage } = useUserContext()
  return (
    <div>
      <div className='w-[120px] mx-auto mb-3 bg-primaryLight aspect-square rounded-full overflow-hidden'>
        <img src={userImage?.slice(1, -1)} alt="" />
      </div>
      <h2 className='text-center font-bold tracking-tight text-primaryLight text-xl'>{user?.username}</h2>
      <p className='text-center text-primaryLight text-lg mb-3'>{user?.email}</p> 
    </div>
  )
}