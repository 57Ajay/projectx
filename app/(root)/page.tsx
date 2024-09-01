import React from 'react';
import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
    const loggedIn = {
        firstName: "Ajay",
        lastName: "Upadhyay"
    }
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest' }
                    subtext="Access and manage your accounts and transactions in a single place efficiently."
                />

                <TotalBalanceBox
                    accounts = {[]}
                    totalBanks = {1}
                    totalCurrentBalance = {1250.43}
                />

            </header>
        </div>

    </section>

  );

};

export default Home;