import React, { useState } from 'react'
import Header from './Header'

const Signin = () => {
  const [blnSignIn, setBlnSignIn] = useState(true)

  let toggleSignIn = () =>{
    setBlnSignIn(!blnSignIn)
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='logo' />
      </div>
      <section class="bg-gradient-to-b  dark:bg-gray-900 absolute my-24 mx-auto left-0 right-0">
        <div class="flex flex-col items-center justify-center px-6 py-2 mx-auto md:h-screen lg:py-0">
          <div class="px-10 py-6 bg-black rounded-lg bg-opacity-70">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white pb-2">{blnSignIn ? 'Sign In' : 'Sign Up'}</h1>
            <form class="space-y-4 md:space-y-6" action="#">
              {!blnSignIn ?  <div>
                <label for="email" class="block mb-1 text-sm font-medium text-white dark:text-white">Enter your name</label>
                <input type="text" name="name" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Enter Your Full name" required="" />
              </div> : ''}
              <div>
                <label for="email" class="block mb-1 text-sm font-medium text-white dark:text-white">Your email</label>
                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@gmail.com" required="" />
              </div>
              <div>
                <label for="password" class="block mb-1 text-sm font-medium text-white dark:text-white">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
              </div>
              <div class="flex items-center justify-between">
                <a href="#" class="text-sm font-medium text-white hover:underline ">Forgot password?</a>
              </div>
              <button type="submit" class="w-full text-white bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">{blnSignIn ? 'Sign In' : 'Sign Up'}</button>
              <p class="text-sm font-light text-white dark:text-gray-400">
              {blnSignIn ? 'New to Netflix?' : 'Already registered?'}<a href="#" class="font-medium text-white hover:underline dark:text-primary-500" onClick={toggleSignIn}>{blnSignIn ? 'Sign Up' : 'Sign In'}</a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signin