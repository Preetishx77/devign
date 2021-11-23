import React from 'react'
import designer_signup_img from '../assets/undraw_prototyping_process_rswj.svg'
import logo from '../assets/ACDE0E19-1DE9-491A-8CA8-DB338EE7BBB4.png'

function SignupDesign() {
    return (
        <div>
             <section className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
    <div
      className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1"
    >
      <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
      <div>
          <img alt="alt"
              src={logo}
            class="w-48 mx-auto"
          />
        </div>
        <div className="mt-2 flex flex-col items-center">
       
          <h1 className="text-2xl xl:text-3xl font-extrabold">
            Sign up for Devign
          </h1>
          <div className="w-full flex-1 mt-8">
            <div className="flex flex-col items-center">
              <button
                className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-purple-400 bg-opacity-25 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
              >
                <div class="bg-white p-2 rounded-full">
                  <svg class="w-4" viewBox="0 0 533.5 544.3">
                    <path
                      d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                      fill="#4285f4"
                    />
                    <path
                      d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                      fill="#34a853"
                    />
                    <path
                      d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                      fill="#fbbc04"
                    />
                    <path
                      d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                      fill="#ea4335"
                    />
                  </svg>
                </div>
                <span class="ml-4">
                  Sign Up with Google
                </span>
              </button>

              <button
                class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-purple-400 bg-opacity-25 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5"
              >
                <div class="bg-white p-1 rounded-full">
                <svg className="w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 8.101h-4v-.875h4v.875zm.84 6.125c-.77 2.258-5.949 2.966-5.949-1.56 0-4.583 5.508-4.377 6.053-.872.045.295.062.693.055 1.249h-4.41c-.104 1.715 1.76 1.932 2.404 1.184h1.847zm-4.211-2.333h2.624c-.115-1.687-2.36-1.81-2.624 0zm-5.858 4.076h-3.771v-8.73h4.056c3.194.047 3.255 3.176 1.587 4.028 2.019.735 2.086 4.702-1.872 4.702zm-1.896-5.134h1.965c1.464 0 1.696-1.859-.182-1.859h-1.783v1.859zm1.854 1.454h-1.854v1.947h1.824c1.782-.001 1.673-1.947.03-1.947zm3.271-10.289c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"/></svg>
                </div>
                <span class="ml-4">
                  Sign Up with Behance
                </span>
              </button>
            </div>

            <div class="my-12 border-b text-center">
              <div
                class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
              >
                Or sign up with e-mail
              </div>
            </div>

            <div class="mx-auto max-w-xs">
              <input
                class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="email"
                placeholder="Email"
              />
              <input
                class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                type="password"
                placeholder="Password"
              />
               <input
                class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                type="password"
                placeholder="Confirm Password"
              />
              <button
                class="mt-5 tracking-wide font-semibold bg-purple-500 text-gray-100 w-full py-4 rounded-lg hover:bg-purple-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              >
                <svg
                  class="w-6 h-6 -ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
                <span class="ml-3">
                  Sign Up
                </span>
              </button>
              <h1 className="mx-auto text-center mt-3">Already have an account ? <span className="hover:text-purple-500"> <a  href=" "> Log In  </a></span></h1>
            
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 bg-purple-400 bg-opacity-25  text-center hidden lg:flex">
        <div
          class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
          style={{backgroundImage: `url(${designer_signup_img})`}}
        ></div>
      </div>
    </div>
 
  </section>
            
        </div>
    )
}

export default SignupDesign
