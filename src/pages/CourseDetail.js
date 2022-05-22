import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'

const CourseDetail = () => {
    const [courseDetail, setCourseDetail] = useState()
    const [progress, setProgress] = useState(0)
    const [current, setCurrent] = useState(0)

    let { courseId } = useParams()
    console.log(courseId)

    const userInfoFromStorage = localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null

    const token = userInfoFromStorage?.access || ''

    const getProgress = (data) => {
        let check = true
        let countCompleted = 0
        const total = data.length
        data.forEach((x, i) => {
            if (x.videos[0].watched == true) {
                countCompleted += 1
            } else if (check == true && x.videos[0].watched == false) {
                check = false
                setCurrent(i)
            }
        })
        const prcntage = Math.ceil((countCompleted / total) * 100)
        return prcntage
    }
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
            setProgress(getProgress(data))
        }

        fetchCourseDetail()
    }, [])

    return (
        <Layout>
            <div className='container'>
                <div>
                    <p className='text-base font-semibold text-gray-800 mb-1'>Course Progress</p>
                    <div class='w-full bg-gray-200 rounded-full dark:bg-gray-700'>
                        <div
                            class='bg-green-600 text-white text-base font-medium text-center p-0.5 leading-none rounded-full'
                            style={{ width: `${progress}%` }}
                        >
                            {progress}%
                        </div>
                    </div>
                </div>
                <br />
                {courseDetail &&
                    courseDetail.map((x, i) => {
                        if (i == current) {
                            return (
                                <VideoComponent
                                    key={x.id}
                                    title={x.title}
                                    href={x.videos[0].href.split('=')[1]}
                                    videoId={x.videos[0].id}
                                    watched={x.videos[0].watched}
                                    token={token}
                                    index={i}
                                    current={true}
                                />
                            )
                        } else {
                            return (
                                <VideoComponent
                                    key={x.id}
                                    title={x.title}
                                    href={x.videos[0].href.split('=')[1]}
                                    videoId={x.videos[0].id}
                                    watched={x.videos[0].watched}
                                    token={token}
                                    index={i}
                                    current={false}
                                />
                            )
                        }
                        // console.log(x.links[0].title)
                        // console.log(x.links[1].title)
                    })}
            </div>
        </Layout>
    )
}

const VideoComponent = ({ title, href, videoId, watched, token, index, current }) => {
    const [show, setShow] = useState(false)
    const [tick, setTick] = useState(false)

    const updateVideo = async (id) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            }

            const { data } = await axios.post(`/api/videos/${id}`, {}, config)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const videoHandler = async (id) => {
        await updateVideo(id)
    }

    useEffect(() => {
        {
            current && setShow(true)
        }
    }, [])

    return (
        <>
            <div className='flex '>
                <div className='flex w-1/2 mx-4 my-3'>
                    <button
                        onClick={() => setShow(!show)}
                        className='w-full rounded px-4 py-3 text-base focus:outline-none bg-blue-600 text-white'
                        type='button'
                    >
                        {`${index + 1}.  ${title}`}
                    </button>
                </div>
                <div>
                    {(watched || tick) && (
                        <img
                            src='../assets/images/check-mark.png'
                            alt='Done'
                            className='mt-2 ml-2'
                        />
                    )}
                </div>
            </div>

            <div
                className={`
                ${show ? 'flex' : 'hidden'}  
                flex-row items-start mt-3`}
            >
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
                                <label
                                    onClick={() => {
                                        setTick(true)
                                        videoHandler(videoId)
                                    }}
                                    className='checkbox-wrapper cursor-pointer inline-flex items-center completed-btn px-6 py-3 text-sm'
                                >
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
