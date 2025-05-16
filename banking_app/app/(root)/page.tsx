import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () => {
  const loggedIn = { firstname: 'Dev' };
  return (
    <div>
      <section className='home'>
        <div className='home-content'>
          <header className='home-header'>
            <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstname || 'Guest'}
            subtext='Access and manage your account and transactions efficiently.'
            />
            <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1000}
            />
          </header>
        </div>
      </section>
    </div>
  )
}

export default Home

