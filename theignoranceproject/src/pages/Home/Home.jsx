import React from 'react'
import Social from '../../components/Social/Social';
import './Home.css';
import Banner from '../../components/Banner/Banner';
import HomeBanner from '../../assets/HomeBanner.jpg';
import FacebookIcon from '../../assets/facebookIcon.jpg'
import SubstackIcon from '../../assets/SubstackIcon.png'




const Home = () => {
  return (
    <div className='homeContainer'>

      <Banner img={HomeBanner} title={''} 
      socialLinks={[
        {icon: SubstackIcon, link: 'https://facebook.com', alt: 'Facebook icon'}
      ]}
      />

     
     
      {/* <h1>THE <span className='specialWord'>ignorance </span>PROJECT</h1>  */}

      <h1>THE IGNORANCE PROJECT</h1>
      <p className='homeSummary'>The Summary Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum facilis adipisci maxime quam quidem animi provident, dolore alias totam repellat consequuntur repudiandae accusantium culpa vitae asperiores voluptate nisi. Sint, excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cum modi eligendi, animi placeat ea, nulla sequi dolore eius fugiat doloribus, tenetur temporibus impedit praesentium! Impedit iusto laboriosam explicabo quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, expedita libero dignissimos inventore blanditiis in impedit ad officiis odit, voluptatem laborum modi quibusdam commodi numquam ullam maxime voluptates dolor voluptatum?</p>

      


      <div className='sectionTwo'>
        <h1>Section Two</h1>

      </div>


    </div>

    
  )
}

export default Home


{/* <h1>THE <span className='specialWord'>ignorance </span>PROJECT</h1> */}