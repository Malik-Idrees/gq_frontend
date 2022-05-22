import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'

const CourseDetail = () => {
    const [courseDetail, setCourseDetail] = useState()

    let { courseId } = useParams()
    console.log(courseId)

    const userInfoFromStorage = localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null

    const token = userInfoFromStorage?.access || ''

    useEffect(() => {
        const fetchCourseDetail = async () => {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            }
            const { data } = await axios.get(`/api/course/${courseId}`, config)
            setCourseDetail(data)
        }

        fetchCourseDetail()
    }, [])

    return (
        <Layout>
            <div className='container'>
                {courseDetail &&
                    courseDetail.map((x) => (
                        <VideoComponent
                            key={x.id}
                            // title={x.videos[0].title}
                            title={x.title}
                            href={x.videos[0].href.split('=')[1]}
                        />
                        // console.log(x.links[0].title)
                        // console.log(x.links[1].title)
                    ))}
            </div>
        </Layout>
    )
}

const VideoComponent = ({ title, href }) => {
    const [show, setShow] = useState(false)

    return (
        <>
            <div className='flex max-w-xl mx-4 my-3'>
                <button
                    onClick={() => setShow(!show)}
                    className='w-full rounded px-4 py-3 text-sm focus:outline-none bg-cyan-400'
                    type='button'
                >
                    {title}
                </button>
                <img src='../assets/images/check-mark.png' alt='Done' className='mt-2 ml-2' />
            </div>

            <div className={`${show ? 'flex' : 'hidden'} flex-row items-start mt-3`}>
                <div>
                    <div x-show='show' className='border px-4 py-3 my-2 text-gray-700'>
                        <iframe
                            width='560'
                            height='315'
                            // src={`https://www.youtube.com/embed/${href}`}
                            title='YouTube video player'
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                            webkitallowfullscreen='true'
                            mozallowfullscreen='true'
                            srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/${href}?autoplay=1&rel=0><img src=https://img.youtube.com/vi/${href}/hqdefault.jpg alt='Video The Dark Knight Rises: What Went Wrong? – Wisecrack Edition'><span>▶</span></a>`}
                        ></iframe>
                        <br />

                        <div className='mb-6 flex flex-row items-center    justify-between'>
                            <div className='link-wrapper flex flex-row items-center space-x-3'>
                                <p className='font-bold'>OR</p>
                                <a
                                    href='https://www.google.com/'
                                    className='main-btn gradient-btn contact-btn px-6 py-3 text-sm'
                                >
                                    Reading 1
                                </a>
                                <a
                                    href='https://www.google.com/'
                                    className='main-btn gradient-btn contact-btn px-6 py-3 text-sm'
                                >
                                    Reading 2
                                </a>
                            </div>

                            <div>
                                <label className='checkbox-wrapper cursor-pointer inline-flex items-center completed-btn px-6 py-3 text-sm'>
                                    <input
                                        type='checkbox'
                                        className='form-checkbox text-white-600'
                                    />
                                    <span className='ml-2'>Mark as completed</span>
                                </label>
                            </div>
                        </div>

                        <div className='notes-wrapper flex flex-col space-y-3 mt-2 text-gray-700'>
                            <h5 className='text-left text-xl font-bold title mt-3'>Notes:</h5>
                            <div className='flex flex-col items-end space-y-3'>
                                <textarea
                                    name='notes'
                                    id='notes'
                                    rows='10'
                                    className='border p-3'
                                ></textarea>
                                <button className='main-btn gradient-btn '>Save Notes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseDetail
