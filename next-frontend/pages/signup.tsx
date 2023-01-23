import { useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import { useRouter } from 'next/router';
import { BasicButton } from '../components/BasicButton';
import { AuthenticationButton, InputField } from '../components';

const SignUp = () => {

  const router = useRouter()

  const [user, setUser] = useState({
    email: '',
    password: '',
    username: ''
  })

  const handleClick = (e: any) => {
    e.preventDefault()
    router.push('/signin')
  }

  const handleChange=(e: any)=>{
    setUser({ ...user, [e.target.id]: e.target.value })
  }

  return (
    <MainLayout>
      <div className='w-full max-w-md m-auto space-y-8'>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-primaryLight">Sign up</h2>
        <form className="mt-8 space-y-6" action="http://localhost:5000/register_user" method="POST">
          <div className="-space-y-px rounded-md shadow-sm">
            <InputField
              id='username'
              name='username'
              title='Username'
              value={user.username}
              handleChange={handleChange}
              placeholder='Username'
              roundedOption='rounded-t-md'
            />

            <InputField
              id='email'
              name='email'
              title='Email address'
              value={user.email}
              handleChange={handleChange}
              placeholder='Email address'
            />

            <InputField
              id='password'
              name='password'
              title='Password'
              value={user.password}
              handleChange={handleChange}
              placeholder='Password'
              roundedOption='rounded-b-md'
              type="password"
            />

          </div>

          <AuthenticationButton Title='Sign up'/>
          <BasicButton onClick={handleClick} Title='Already have an account?  Sign In' />
        </form>

      </div>
    </MainLayout>    
  )
}

export default SignUp