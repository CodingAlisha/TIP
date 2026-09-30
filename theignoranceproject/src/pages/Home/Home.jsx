import React from 'react'
import Social from '../../components/Social/Social';
import './Home.css';
import Banner from '../../components/Banner/Banner';
import HomeBanner from '../../assets/HomeBanner.jpg';
import FacebookIcon from '../../assets/facebookIcon.png'
import InstagramIcon from '../../assets/instagramIcon.png'
import SubstackIcon from '../../assets/SubstackIcon2.png'
import SubstackIcon2 from '../../assets/SubstackIcon.png'
import YoutubeIcon from '../../assets/youtubeIcon.png'
import StreamCard from '../../components/Stream/Stream';
import tipLogo from '../../assets/tipLogo.jpeg'




const Home = () => {
  return (
    <div className='homeContainer'>

      <Banner img={HomeBanner} title={''} 
      socialLinks={[
        {icon: FacebookIcon, link: 'https://www.facebook.com/theignoranceproject', alt: 'Facebook icon'},
        {icon: InstagramIcon, link: 'https://www.instagram.com/theignoranceproject/', alt: 'Instagram icon'},
        {icon: SubstackIcon, link: 'https://substack.com/@theignoranceproject', alt: 'Substack icon'},
        {icon: YoutubeIcon, link: 'https://www.youtube.com/@theignoranceproject', alt: 'Youtube icon'}
      ]}
      />

     
     
      {/* <h1>THE <span className='specialWord'>ignorance </span>PROJECT</h1>  */}

      <h1 className='homeTitle'>THE IGNORANCE PROJECT</h1>
      <p className='homeSummary'>The Summary Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum facilis adipisci maxime quam quidem animi provident, dolore alias totam repellat consequuntur repudiandae accusantium culpa vitae asperiores voluptate nisi. Sint, excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cum modi eligendi, animi placeat ea, nulla sequi dolore eius fugiat doloribus, tenetur temporibus impedit praesentium! Impedit iusto laboriosam explicabo quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, expedita libero dignissimos inventore blanditiis in impedit ad officiis odit, voluptatem laborum modi quibusdam commodi numquam ullam maxime voluptates dolor voluptatum?</p>

      


      <div className='sectionTwo'>
        <h1 className='homeTitle'>Section Two</h1>

        <div>
          <StreamCard 
          img={tipLogo} 
          title= 'Ignorance, where learning begins' 
          subTitle='RECENT VIDEOS'
          
          socialImg= {
           {
            icon: SubstackIcon2, 
            link: 'https://www.youtube.com/@theignoranceproject',
              alt: 'Youtube icon',
           }
           }
          
          />


          

        </div>

      </div>


    </div>

    
  )
}

export default Home


{/* <h1>THE <span className='specialWord'>ignorance </span>PROJECT</h1> */}