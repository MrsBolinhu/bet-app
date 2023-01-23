import { useState, useContext, createContext } from 'react'
import MainLayout from '../layouts/MainLayout'
import { requestService } from '../service';
import { useRouter } from 'next/router';
import { InputField, Toast, AuthenticationButton, BasicButton } from '../components'
import { useTabBarContext, useAdminContext } from '../contexts'

export const ToastContext = createContext<any>(undefined);

const SignIn = () => {
  const { hide, show } = useTabBarContext()
  hide()

  const router = useRouter()

  const { setAdminMode, unsetAdminMode } = useAdminContext()
  
  const [showToast, setShowToast] = useState(false)

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const handleLogin = async (e: any) => {
    e.preventDefault()
    const response = await requestService.loginUser(user)
    if (response === 'Invalid UserId / Password'){
      setShowToast(true)
      localStorage.clear()
    } else{
      if(localStorage.getItem('is_admin') === '1'){
        setAdminMode()
      } else { unsetAdminMode() }
      router.push('/')
      show()
    }
  }

  const handleClick = (e: any) => {
    e.preventDefault()
    router.push('/signup')
  }

  const handleChange=(e: any)=>{
    setUser({ ...user, [e.target.id]: e.target.value })
  }

  return (
    <MainLayout>
      <div className='w-full max-w-md m-auto'>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-primaryLight">Sign in</h2>
          <form className="mt-8 space-y-6" action="http://localhost:5000/login_user" method="POST">
            <div className="-space-y-px rounded-md shadow-sm">

              <InputField
                id='email'
                name='email'
                title='Email'
                value={user.email}
                handleChange={handleChange}
                placeholder='Email'
                roundedOption='rounded-t-md'
              />

              <InputField
                id='password'
                name='password'
                title='password'
                value={user.password}
                handleChange={handleChange}
                placeholder='Password'
                roundedOption='rounded-b-md'
              />
            
            </div>

            {showToast && <Toast/>}

            <AuthenticationButton handleLogin={handleLogin} Title='Sign in'/>
            <BasicButton onClick={handleClick} Title={`Don't have an account yet?  Sign Up`} />
          </form>
        </div>
    </MainLayout>    
  )
}

export default SignIn