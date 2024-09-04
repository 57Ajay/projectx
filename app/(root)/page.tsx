import React from 'react';
import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from "@/components/RightSidebar";
import { getLoggedInUser } from '@/lib/actions/user.actions';
const Home = async() => {
    const loggedIn = await getLoggedInUser();
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
            RECENT TRANSACTIONS
        </div>
        <RightSidebar user={loggedIn} transactions={[]} banks={[]} />
    </section>

  );

};

export default Home;