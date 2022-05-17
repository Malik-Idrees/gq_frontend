import React, { useState } from 'react'

const Profile = () => {
    const [profession, setProfession] = useState('')
    const [goalToAchieve, setGoalToAchieve] = useState('')
    const [expertiseLevel, setexpertiseLevel] = useState('')
    const [dailyTime, setdailyTime] = useState('')

    return (
        <div className='dark:text-gray-50'>
            <span className='text-xl font-medium whitespace-nowrap dark:text-white'>
                User Profile
            </span>
            <form>
                <div className='grid xl:grid-cols-2 xl:gap-6'>
                    <div className='relative z-0 w-full mb-6 group'>
                        <input
                            type='text'
                            name='profession'
                            id='user_profession'
                            value={profession}
                            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                            placeholder=' '
                            required=''
                            onChange={(e) => setProfession(e.target.value)}
                        />
                        <label
                            htmlFor='user_profession'
                            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                        >
                            Profession
                        </label>
                    </div>
                    <div className='relative z-0 w-full mb-6 group'>
                        <input
                            type='text'
                            name='profession'
                            id='user_profession'
                            value={goalToAchieve}
                            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                            placeholder=' '
                            required=''
                            onChange={(e) => setGoalToAchieve(e.target.value)}
                        />
                        <label
                            htmlFor='user_profession'
                            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                        >
                            Your Goal (Ex. Web developer)
                        </label>
                    </div>
                </div>
                <div className='grid xl:grid-cols-2 xl:gap-6'>
                    <div className='relative z-0 w-full mb-6 group'>
                        <input
                            type='tel'
                            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                            name='expertiseLevel'
                            id='user_expertise'
                            value={expertiseLevel}
                            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                            placeholder=' '
                            required=''
                            onChange={(e) => setexpertiseLevel(e.target.value)}
                        />
                        <label
                            htmlFor='user_expertise'
                            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                        >
                            Your Expertise level (Ex. Beginner)
                        </label>
                    </div>
                    <div className='relative z-0 w-full mb-6 group'>
                        <input
                            type='text'
                            name='floating_company'
                            id='user_daily_time_hrs'
                            value={dailyTime}
                            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                            placeholder=' '
                            required=''
                            onChange={(e) => setdailyTime(e.target.value)}
                        />
                        <label
                            htmlFor='user_daily_time_hrs'
                            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                        >
                            Daily Allocated Time (Ex. 2 hrs)
                        </label>
                    </div>
                </div>
                <button
                    type='submit'
                    className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Profile
