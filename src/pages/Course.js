import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Layout from '../components/Layout'

const Course = () => {
    const [course, setCourse] = useState([])
    const [modal, setModal] = useState(false)

    const [alert, setAlert] = useState(false)

    const [jobRequired, setJobRequired] = useState(true)
    const [goalToAchieve, setGoalToAchieve] = useState('')
    const [expertiseLevel, setexpertiseLevel] = useState('')
    const [dailyTime, setDailyTime] = useState('')

    const userInfoFromStorage = localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null

    const token = userInfoFromStorage?.access || ''

    const createUserCourse = async (jobRequired, goalToAchieve, expertiseLevel, dailyTime) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            }

            const { data } = await axios.post(
                '/api/course/',
                { jobRequired, goalToAchieve, expertiseLevel, dailyTime },
                config
            )
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        setModal(false)
        setAlert(true)
        setTimeout(() => {
            setAlert(false)
        }, 5000)
        await createUserCourse(jobRequired, goalToAchieve, expertiseLevel, dailyTime)
    }

    useEffect(() => {
        const fetchCourseList = async () => {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            }
            const { data } = await axios.get('/api/course/', config)
            setCourse(data)
        }

        fetchCourseList()
    }, [])

    return (
        <Layout>
            <section id='work' className='work_area'>
                {alert && (
                    <div
                        class='p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800'
                        role='alert'
                    >
                        <span class='font-medium'>
                            Please hold on! This will take a couple of minutes ...
                        </span>
                    </div>
                )}
                <div className='container'>
                    <div className='row justify-center'>
                        <div className='w-full'>
                            <div
                                className='mx-4 mt-12 about-content wow fadeInLeftBig'
                                data-wow-duration='1s'
                                data-wow-delay='0.5s'
                            >
                                <div className='mb-4 section-title'>
                                    <div
                                        className='mb-3 h-1 w-40'
                                        style={{
                                            background: 'linear-gradient(#fe8464 0%, #fe6e9a 100%)',
                                        }}
                                    ></div>
                                    <h3 className='text-3xl pt-2 font-bold'>
                                        Enrolled <span className='font-normal'>Courses</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container pb-4'>
                    <div className='work_wrapper relative'>
                        <div className='mx-auto flex flex-row flex-wrap work_active'>
                            {course &&
                                course.map((course) => (
                                    <div
                                        key={course.id}
                                        className='box-border px-2 w-full lg:w-3/12'
                                    >
                                        <div className='single_item mx-auto'>
                                            <Link to={`${course.id}`}>
                                                <div className='single_work'>
                                                    <div className='work_image'>
                                                        <img
                                                            src='assets/images/work-1.jpg'
                                                            alt='work'
                                                            className='w-full bg-cover mx-auto'
                                                        />
                                                    </div>
                                                    <div className='work_content'>
                                                        {/* <a href='#' className='arrow'>
                                                        <i className='lni lni-chevron-right'></i>
                                                    </a> */}

                                                        <h4 className='work_title text-xl md:text-2xl'>
                                                            {course.goalToAchieve}
                                                        </h4>
                                                        <p className='mt-1 text-sm'>
                                                            {course.expertiseLevel}
                                                        </p>
                                                        <p className='mt-1 text-sm'>
                                                            {course.dailyTime}
                                                            {' days'}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>

                {/* PopUp */}
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-'>
                            <button
                                onClick={() => setModal(true)}
                                className='main-btn gradient-btn'
                            >
                                Learn Something New
                            </button>
                        </div>
                    </div>
                </div>

                {/* --====== MODAL PART START ====== */}
                <div
                    id='modal'
                    className={`${
                        modal ? 'flex' : 'hidden'
                    } modal-wrapper items-center justify-center bg-black bg-opacity-90 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-screen md:inset-0 h-modal md:h-full`}
                >
                    <div className='contact_form relative bg-white p-3 py-6 rounded-md w-1/2'>
                        <div className='text-center section-title'>
                            <div className='m-auto line'></div>
                            <h3 className='title'>
                                Learn Something <span> New</span>
                            </h3>
                        </div>
                        <form id='course-form' className='mt-5'>
                            <div className='row'>
                                <div className='w-full'>
                                    <div className='mx-3'>
                                        <div className='single_form mt-4'>
                                            <label htmlFor='jobRequired'>
                                                Are you learning this to get a job?
                                            </label>
                                            <div
                                                className='flex row space-x-10 mt-2'
                                                id='jobRequired'
                                            >
                                                <div className='form-check'>
                                                    <input
                                                        onChange={(e) => setJobRequired(true)}
                                                        className='form-check-input h-4 w-4 mt-1 align-top mr-1 cursor-pointer'
                                                        type='radio'
                                                        name='job'
                                                        checked={jobRequired}
                                                        id='jobYes'
                                                    />
                                                    <label
                                                        className='form-check-label inline-block'
                                                        htmlFor='jobYes'
                                                    >
                                                        Yes
                                                    </label>
                                                </div>
                                                <div className='form-check'>
                                                    <input
                                                        onChange={(e) => setJobRequired(false)}
                                                        className='form-check-input h-4 w-4 mt-1 align-top mr-1 cursor-pointer'
                                                        type='radio'
                                                        name='job'
                                                        id='jobNo'
                                                    />
                                                    <label
                                                        className='form-check-label inline-block'
                                                        htmlFor='jobNo'
                                                    >
                                                        No
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {jobRequired ? (
                                    <div className='w-full'>
                                        <div className='mx-3'>
                                            <div className='single_form mt-4'>
                                                <label htmlFor='selectGoaltoAchieve'>
                                                    Goal to Achieve
                                                </label>
                                                <select
                                                    onChange={(e) =>
                                                        setGoalToAchieve(e.target.value)
                                                    }
                                                    value={goalToAchieve}
                                                    // defaultValue={''}
                                                    className='form-select appearance-none block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mt-1'
                                                    aria-label='Default select example'
                                                >
                                                    <option disabled>Select one</option>
                                                    <option value='Backend Development'>
                                                        Backend Development
                                                    </option>
                                                    <option value='Data Science'>
                                                        Data Science
                                                    </option>
                                                    <option value='DevOps Engineer'>
                                                        DevOps Engineer
                                                    </option>
                                                    <option value='Frontend Development'>
                                                        Frontend Development
                                                    </option>
                                                    <option value='Machine Learning'>
                                                        Machine Learning
                                                    </option>
                                                    <option value='Python Development'>
                                                        Python Development
                                                    </option>
                                                    <option value='Web Development'>
                                                        Web Development
                                                    </option>
                                                    <option value='Cloud'>Cloud</option>
                                                    <option value='React Development'>
                                                        React Development
                                                    </option>
                                                    <option value='Quality Assurance Engineer'>
                                                        Quality Assurance Engineer
                                                    </option>
                                                    <option value='Android Development'>
                                                        Android Development
                                                    </option>
                                                    <option value='Graphic Design'>
                                                        Graphic Design
                                                    </option>
                                                    <option value='Web Design'>Web Design</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className='w-full'>
                                        <div className='mx-3'>
                                            <div className='single_form mt-4'>
                                                <label htmlFor='goaltoAchieve'>
                                                    Goal to Achieve
                                                </label>
                                                <input
                                                    name='goaltoAchieve'
                                                    value={goalToAchieve}
                                                    placeholder='Ex. Web Developer'
                                                    onChange={(e) =>
                                                        setGoalToAchieve(e.target.value)
                                                    }
                                                    id='goaltoAchieve'
                                                    type='text'
                                                    className='mt-2 w-full rounded-md py-2 px-4 border border-solid border-body-color'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className='w-full'>
                                    <div className='mx-3'>
                                        <div className='single_form mt-4'>
                                            <label htmlFor='expertise'>Expertise</label>
                                            <select
                                                onChange={(e) => setexpertiseLevel(e.target.value)}
                                                className='form-select appearance-none block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mt-1'
                                                aria-label='Default select example'
                                            >
                                                <option disabled>
                                                    Expertise in selected category
                                                </option>
                                                <option value='Begineer'>Beginner</option>
                                                <option value='Advanced'>Expert</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <div className='mx-3'>
                                        <div className='single_form mt-4'>
                                            <label htmlFor='timeAvailable'>Time available</label>
                                            <input
                                                onChange={(e) => setDailyTime(e.target.value)}
                                                name='timeAvailable'
                                                id='timeAvailable'
                                                type='number'
                                                placeholder='Availibility in No. of days'
                                                className='w-full rounded-md py-2 px-4 border border-solid border-body-color mt-1'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <p className='form-message mx-3'></p>
                                <div className='w-full'>
                                    <div className='mx-3'>
                                        <div className='single_form mt-4'>
                                            <button
                                                onClick={submitHandler}
                                                className='main-btn gradient-btn-2'
                                            >
                                                Let's Start
                                            </button>
                                            <span
                                                onClick={() => setModal(false)}
                                                className='ml-2 cursor-pointer hover:underline hover:text-theme-color-2'
                                            >
                                                Cancel
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <svg
                            id='modal-close'
                            onClick={() => {
                                setModal(false)
                            }}
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-8 w-8 absolute right-4 top-4 cursor-pointer'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            strokeWidth='2'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
                            />
                        </svg>
                    </div>
                </div>

                {/* --====== MODAL PART ENDS ====== */}
            </section>
        </Layout>
    )
}

export default Course
