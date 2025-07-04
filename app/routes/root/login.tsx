import React from 'react'
import { Link, redirect } from 'react-router';
import pkg from "@syncfusion/ej2-react-buttons";
import {loginWithGoogle} from "~/appwrite/auth";
import {account} from "~/appwrite/client";
import '@syncfusion/ej2-react-buttons/styles/material.css';

const { ButtonComponent } = pkg;
const login = () => {
  return (
    <main className='auth'>
      <section className='size-full glassmorphism flex-center px-6'>
        <div className='sign-in-card'>
                <header className='header'>
                  <Link to="/">
                    <img src='/assets/icons/logo.svg'  alt="Logo"
                      className="size-[30px]"/>
                      <h1 className="p-28-bold text-dark-100">Travel App</h1>
                  </Link>
                    
                </header>
                 <article>
                        <h2 className="p-28-semibold text-dark-100 text-center">Start Your Travel Journey</h2>

                        <p className="p-18-regular text-center text-gray-100 !leading-7">Sign in with Google to manage destinations, itineraries, and user activity with ease.</p>
                    </article>
                      <ButtonComponent
                        type="button"
                        iconCss="e-search-icon"
                        className="button-class !h-11 !w-full"
                        onClick={loginWithGoogle}
                    >
                        <img
                            src="/assets/icons/google.svg"
                            className="size-5"
                            alt="google"
                        />
                        <span className="p-18-semibold text-white">Sign in with Google</span>
                    </ButtonComponent>
            </div>
        </section>
    </main>
  )
}

export default login