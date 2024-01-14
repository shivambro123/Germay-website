import React, { useEffect } from 'react'
import './../../styles/Freecounsellingcss.css';
import university from './../../assests/Freelance/university_shortlist.svg';
import curriculum from './../../assests/Freelance/curriculum.svg'
import statement from './../../assests/Freelance/statement.svg'
import interview from './../../assests/Freelance/interview.svg'
import progress_start from './../../assests/Freelance/progress_start.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Freecounselling = () => {
    useEffect(()=>{
        AOS.init({
            duration: 1000,
            offset: 50
        })
    })
  return (
    <>
    <div className='container' id="third">
        <div className='freelance_wrapper'>
            <div className='freelace-left'>
                <div className='mb-2'>
                <div className='mb-5' div data-aos="fade-right"><img src={university} alt="universityshort" className='university_img'/></div>
                <div className='university_content'>
                    <h3 className='mb-2'>University Shortlisting</h3>
                    <p className='mb-2 applicartion_title'>50% Applications fail due to wrong choice of university</p>
                    <p className='lorem mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    <div className='explore_wrapper'><button className='explore_btn py-2 px-4 text-white font-bold text-xl rounded'>Explore Now</button></div>
                    </div>
                    </div>    
                    <div>
                <div className='mb-2' div data-aos="fade-right"><img src={curriculum} alt="universityshort" className='curriculum'/></div>
                <div className='university_content'>
                    <h3 className='mb-2'>Curriculum Vitae</h3>
                    <p className='mb-2 applicartion_title'>Full Assistance</p>
                    <p className='lorem mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    <div className='explore_wrapper'><button className='explore_btn py-2 px-4 text-white font-bold text-xl rounded'>Explore Now</button></div>
                    </div>
                    </div>        
                </div>
              
            <div className='freelace-right'>
                <div>
            <div className='university_content'>
                    <h3 className='mb-2'>Free Counselling</h3>
                    <p className='mb-2 applicartion_title'>Our personalized session at NO COST </p>
                    <p className='lorem mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    <div className='explore_wrapper'><button className='explore_btn py-2 px-4 text-white font-bold text-xl rounded'>Explore Now</button></div>
                    </div>
                </div>
                <div>
                <div className='mb-2' div data-aos="fade-left"><img src={statement} alt="statement" className='statement'/></div>
                <div className='university_content ps-2'>
                    <h3 className='mb-2'>Statement of purpose</h3>
                    <p className='mb-2 applicartion_title'>Stand out from the crowd</p>
                    <p className='lorem mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    <div className='explore_wrapper'><button className='explore_btn py-2 px-4 text-white font-bold text-xl rounded'>Explore Now</button></div>
                    </div>
                    </div>  
                    <div>
                <div className='mb-2 text-left' div data-aos="fade-left"><img src={interview} alt="interview" className='interview'/></div>
             
                    </div>  
            </div>
        <div className='divider_line'>
        </div>
        <div className='progress'> <img src={progress_start} alt="progress" className='inner_progress' height={400} width={500}/></div>

        
        </div>
        </div>  
    </>
  )
}

export default Freecounselling