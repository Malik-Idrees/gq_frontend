import React from 'react'
import userAvatar from '../assets/user_avatar.png'

const UserCard = ({ name, username, profession, expertiseLevel }) => {
    return (
        <div className='box-border rounded-2xl max-w-xl mx-auto shadow bg-gray-50 dark:bg-slate-800 sm:mt-10 mb-4 sm:mb-6 p-3'>
            <div className='flex justify-center items-center mx-auto relative sm:w-3/12 box-border w-6/12 px-6 sm:px-4'>
                <img
                    className='rounded-full border-slate-500 border-4 w-full'
                    src={userAvatar}
                    alt='Goal Quest User'
                />
                {/* Icon by Icon8 'https://icons8.com/icon/108639/user'> */}
            </div>
            <div className='text-lg text-center'>
                <div className='text-blue-900 font-bold inline dark:text-blue-100'>{name}</div>
            </div>
            <div className='text-blue-600 text-sm text-center my-2 dark:text-blue-100'>
                @{username}
            </div>
            <div className='flex justify-between max-w-sm mx-auto border-t border-gray-200 dark:border-gray-600 mt-3 p-3 text-center'>
                <div>
                    <p className='text-very-dark-desaturated-blue font-bold text-base'>
                        Profession
                    </p>
                    <p className='text-xs'>{profession}</p>
                </div>
                <div>
                    <p className='text-very-dark-desaturated-blue font-bold text-lg'>
                        Expertise Level
                    </p>
                    <p className='text-xs'>{expertiseLevel}</p>
                </div>
            </div>
        </div>
    )
}

export default UserCard
