import React from 'react'

// components

import CardLineChart from '../components/Cards/CardLineChart'
import CardBarChart from '../components/Cards/CardBarChart'
import CardPageVisits from '../components/Cards/CardPageVisits'
import CardSocialTraffic from '../components/Cards/CardSocialTraffic'

const Dashboard = () => {
    return (
        <>
            <span className='text-xl p-4 mb-5 font-medium whitespace-nowrap dark:text-white'>
                Dashboard
            </span>

            <div className='flex flex-wrap mt-3 sm:mt-5'>
                <div className='w-full xl:w-8/12 mb-12 xl:mb-0 px-4'>
                    <CardLineChart />
                </div>
                <div className='w-full xl:w-4/12 px-4'>
                    <CardBarChart />
                </div>
            </div>
            <div className='flex flex-wrap mt-4'>
                <div className='w-full xl:w-8/12 mb-12 xl:mb-0 px-4'>
                    <CardPageVisits />
                </div>
                <div className='w-full xl:w-4/12 px-4'>
                    <CardSocialTraffic />
                </div>
            </div>
        </>
    )
}

export default Dashboard
