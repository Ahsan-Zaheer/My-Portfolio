import React, { useState, useEffect } from 'react';
import styles from '../../assets/stylesheets/home.module.css';
import profile from '../../assets/profile.jpg';
import files from '../../assets/files.svg';
import Typewriter from 'typewriter-effect'; 

import CV from '../../assets/Ahsan-Cv.pdf';

export default function About() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 850);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 850);
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={isWideScreen ? styles.aboutWrapper : ''}>
    <div className='container'>

    <div className={`row ${styles.about} m-0` } id="about"  >
        <h2 className={styles.abt_title} >About Me</h2>
        <h3 className={styles.abt_subtitle} data-aos="fade"  data-aos-delay="0" data-aos-duration="500">My introduction</h3>

        <div className="col-lg-5">
            <div className={styles.abt_img}>
                <img src={profile} alt="Profile" className={styles.profile} />
            </div>
        </div>
        <div className="col-lg-7">
            <div className={styles.abt}>
            <div className="row m-0">
                <div className="col-4">
                    <div className={styles.abtBox} data-aos="zoom-in"  data-aos-delay="350">
                    <i class="uil uil-medal"></i>
                        <h3 className={styles.abtBoxTitle}>Experience</h3>
                        <p className={styles.abtBoxDesc}>2 Years Working</p>

                    </div>
                </div>
                <div className="col-4">
                    <div className={styles.abtBox} data-aos="zoom-in"  data-aos-delay="750">
                    <i class="uil uil-suitcase"></i>
                    <h3 className={styles.abtBoxTitle}>Completed</h3>
                    <p className={styles.abtBoxDesc}>30+ Projects</p>


                    </div>
                </div>
                <div className="col-4">
                    <div className={styles.abtBox} data-aos="zoom-in"  data-aos-delay="1050">
                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 48 48" viewBox="0 0 48 48" id="headphones"><path d="M43.05 35.46h-3.63c-1.02 0-1.85-.83-1.85-1.85V20.83c0-1.02.83-1.85 1.85-1.85h3.63c2.6 0 4.72 2.12 4.72 4.72v7.04C47.76 33.34 45.65 35.46 43.05 35.46zM41.26 31.77h1.79c.57 0 1.03-.46 1.03-1.02V23.7c0-.57-.46-1.02-1.03-1.02h-1.79V31.77zM8.59 35.46H4.95c-2.6 0-4.72-2.12-4.72-4.72V23.7c0-2.6 2.12-4.72 4.72-4.72h3.63c1.02 0 1.85.83 1.85 1.85v12.79C10.43 34.63 9.61 35.46 8.59 35.46zM4.95 22.67c-.57 0-1.03.46-1.03 1.02v7.04c0 .57.46 1.02 1.03 1.02h1.79v-9.09H4.95z"></path><path d="M42.06 22.67c-1.02 0-1.85-.83-1.85-1.85v-1.38c0-8.69-7.07-15.76-15.76-15.76h-.91c-8.7 0-15.77 7.07-15.77 15.76v1.38c0 1.02-.83 1.85-1.85 1.85s-1.85-.83-1.85-1.85v-1.38C4.09 8.73 12.82 0 23.55 0h.91C35.18 0 43.9 8.73 43.9 19.45v1.38C43.9 21.85 43.08 22.67 42.06 22.67zM38.7 45.3h-8.03c-1.02 0-1.85-.83-1.85-1.85s.83-1.85 1.85-1.85h8.03c1.38 0 2.5-1.12 2.5-2.49v-5.5c0-1.02.83-1.85 1.85-1.85 1.02 0 1.85.83 1.85 1.85v5.5C44.9 42.53 42.12 45.3 38.7 45.3z"></path><g><path d="M29.24,48H24.3c-1.81,0-3.28-1.47-3.28-3.28v-2.51c0-1.81,1.47-3.28,3.28-3.28h4.94c1.81,0,3.28,1.47,3.28,3.28v2.51
			C32.52,46.53,31.05,48,29.24,48z M24.71,44.31h4.12v-1.69h-4.12V44.31z"></path></g></svg>
            <h3 className={styles.abtBoxTitle}>Support</h3>
                    <p className={styles.abtBoxDesc}>Online 24/7</p>


                    </div>
                </div>
                <div className={` p-0 ${styles.abtDisc}`} data-aos="fade-up"  data-aos-delay="0">
                <Typewriter 
              options={{
                delay: 50, 
              }}
            onInit={(typewriter) => { 
              typewriter.typeString(`Hi, I'm Ahsan, a highly skilled React.js and Next.js Developer with a strong background in both Front-End and Full-Stack development. With 2 years of professional experience, I specialize in leveraging the MERN stack to build top-notch websites and applications.`) 
              .start(); 
                }} 
              /> 
                
                </div>
                <a download='' href={CV} className={`button ms-2 ${styles.btn2}`}>
                Download CV
                <img src={files} alt="" className='ms-2' />
                </a>
            </div>
        </div>
        </div>

    </div>

        

    </div>
    </div>

  )
}
