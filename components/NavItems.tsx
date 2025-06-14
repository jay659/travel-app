import React from 'react'
import { Link, NavLink } from 'react-router';
import { sidebarItems } from '~/constants';
import { cn } from '~/lib/utils';

function NavItems() {
  const user = {
    "name": "jay Patel",
    "email": "jay400479@gmail.com",
    "imageUrl" : "/assets/images/david.webp",
  }
  
  return (
    <section className='nav-items'>
        <Link to="/dashboard" className='nav-logo'>
            <img src="/assets/icons/logo.svg" alt="Logo" className='size-[30px]' />
            <h1> ExporeTrips</h1>
        </Link>
        <div className='container'>
            <nav>
                {sidebarItems.map(({id,icon,label,href}) => (
                <NavLink to={href} key={id}>
                        {({isActive}:{isActive:boolean}) => (
                            <div className={cn( "group nav-item",{
                                isActive: "bg-primary-100 text-white",
                            })}>
                                <img 
                                    src={icon} 
                                    alt={label}
                                    className={`group-hover:brightness-1 size-5
                                        group-hover:invert ${isActive ? 'brightness-0 invert': 'text-dark-200'}`}
                                />
                                {label}</div>
                        )}
                    </NavLink>
                ))}
            </nav>

            <footer className="nav-footer">
                <img src={user.imageUrl || '/assets/images/james.webp'} alt={user.name} />
                <article>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </article>
                <button className='cursor-pointer' 
                onClick={() =>{
                    console.log('logout');
                }}
                >
                    <img src ="/assets/icons/logout.svg" alt="logout" className='size-5' />
                </button>
            </footer>
        </div>



    </section>
  )
}

export default NavItems