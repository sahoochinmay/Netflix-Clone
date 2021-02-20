import React, { useEffect, useState } from 'react'
import "./PlanScreen.css"

const PlanScreen = () => {
    const [plans,setPlans] =useState([
        {
            "name": "Premium",
             "quality" : "4k + HDR"
        },
        {
            "name": "Basic",
            "quality":"720p"
        },
        {
            "name": "Standard",
            "quality": "1080p"
        }
    ])
    return (
        <div className='planScreen'>
            {
                plans.map(data =>(
                    <div className="plan__box">
                        <p>{data?.name}</p>
                         <small>{data?.quality}</small>
                         <button>Subscribe</button>
                    </div>
                ))
            }
        </div>
    )
}

export default PlanScreen
