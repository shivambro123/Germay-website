import React from 'react'
import './../../styles/Freecounsellingcss.css';
import university from './../../assests/Freelance/university_shortlist.svg'

const Freecounselling = () => {
  return (
    <>
    <div className='container'>
        <div className='freelance_wrapper'>
            <div className='freelace-left'>
                <div className='mb-3'><img src={university} alt="universityshort" className='university_img'/></div>
                <div className='university_content'>
                    <h3>University Shortlisting</h3>
                    <p>50% Applications fail due to wrong choice of university</p>
                </div>
            </div>
            <div className='freelace-right'>
                Hiiiii Second
            </div>
        </div>
        </div>
    </>
  )
}

export default Freecounselling