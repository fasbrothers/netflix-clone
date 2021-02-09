import React from 'react'
import './PlansScreen.css'

function PlansScreen() {

    return (
        <div className='plansScreen'>
            <div className='plansScreen__plan'>
                <div className='plan1'>
                    <div className='plansScreen__info'>
                        <h5>Premium</h5>
                        <h6>4K + HDR</h6>
                    </div>
                <button>Subscribe</button>
                </div>
                <div className='plan2'>
                    <div className='plansScreen__info'>
                        <h5>Basic</h5>
                        <h6>720p</h6>
                    </div>
                    <button>Subscribe</button>
                </div>
                <div className='plan3'>
                    <div className='plansScreen__info'>
                        <h5>Standard</h5>
                        <h6>1080p</h6>
                    </div>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default PlansScreen
