import React from 'react'
import Chart from 'chart.js'

const UserProgress = () => {
    React.useEffect(() => {
        const dataDoughnut = {
            labels: ['JavaScript', 'Python', 'Ruby'],
            datasets: [
                {
                    label: 'My First Dataset',
                    data: [300, 50, 100],
                    backgroundColor: [
                        'rgb(133, 105, 241)',
                        'rgb(164, 101, 241)',
                        'rgb(101, 143, 241)',
                    ],
                    hoverOffset: 4,
                },
            ],
        }

        const configDoughnut = {
            type: 'doughnut',
            data: dataDoughnut,
            options: {},
        }

        var chartBar = new Chart(document.getElementById('chartDoughnut'), configDoughnut)
    })
    return (
        <>
            <div>UserProgress</div>
            <div class='shadow-lg rounded-lg overflow-hidden'>
                <div class='py-3 px-5 bg-gray-50'>Doughnut chart</div>
                <canvas class='p-10' id='chartDoughnut'></canvas>
            </div>
        </>
    )
}

export default UserProgress
