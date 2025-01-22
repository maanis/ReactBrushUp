import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

const FormHandeling = () => {

  //using useRef
  // const name = useRef(null)
  // const email = useRef(null)
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(name.current.value)
  //   console.log(email.current.value)
  // }

  //controlled statements
  // const [val, setval] = useState({ name: '', email: 'nananan' });
  // const handleChange = (e) => {
  //   setval({ ...val, name: e.target.value })
  //   console.log(val)
  // }

  //using React Hook Forms
  const { register, reset, handleSubmit } = useForm()

  const handleSubmitt = (e) => {
    // e.preventDefault()
    console.log(e)
    reset()
  }


  return (
    <>
      <div className='p-4'>
        <form action="" className='flex flex-col gap-4' onSubmit={handleSubmit(handleSubmitt)}>
          {/* <input ref={name} className='border-2 border-black mx-1 px-2' placeholder='name' type="text" />
          <input ref={email} className='border-2 border-black mx-1 px-2' placeholder='email' type="email" />
          <input className='border-2 border-black mx-1 px-2' onChange={handleChange} placeholder='controlled statements' type="text" /> */}
          <input {...register('name')} className='border-2 border-black mx-1 px-2' placeholder='text' type="text" />
          <input {...register('email')} className='border-2 border-black mx-1 px-2' placeholder='email' type="email" />
          <input {...register('password')} className='border-2 border-black mx-1 px-2' placeholder='password' type="password" autoComplete='' />

          <input type="submit" />
        </form>
      </div>
    </>
  )
}

export default FormHandeling