import React from 'react'
import Web from '../assets/web.png';

function Home() {
    return (
        <div className='half'>
            <h1 className='text-xl primary-text spacer-ly'>Developer tools for Web Developers</h1>
            <p className='text-l'>
                We provide FREE developer tools to help Web developers and make their day to day life easier.
            </p>
            <p className='text-l spacer-my'>
                Support us by sharing this platform with your friends and colleagues.
            </p>
            <div className='spacer-my'><button className='accent'>support@intellidtools.com</button></div>
            <img src={Web} alt="web" className='graphic-aa' />
        </div>
    )
}

export default Home
