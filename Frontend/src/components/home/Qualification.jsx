import React, {useState}from 'react'
import styles from '../../assets/stylesheets/home.module.css'
import cap from '../../assets/cap.svg'
import cap2 from '../../assets/cap2.svg'
import circle from '../../assets/circle.svg'

export default function Qualification() {
    const [qualification, setQualification] = useState(true);
    const [isWideScreen, setIsWideScreen] = React.useState(window.innerWidth > 850);

    React.useEffect(() => {
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
    <div className={isWideScreen? styles.qualificationWrapper:''}>
    <div className='container mt-5 pt-5' id='qualification' >
        <h2 className={styles.abt_title}>Qualification</h2>
        <h3 className={styles.abt_subtitle} data-aos="fade"  data-aos-delay="0">My personal journey</h3>

        <div className={styles.qualification}>
            <div className="row">
                <div className="col-6">
                    <h3 className={styles.qTitle} data-aos="zoom-in"  data-aos-delay="550"  onClick={()=> setQualification(true)}> <img src={cap} alt="" className={styles.cap}/> Education</h3>
                    <div className={styles.eBox} style={{display: qualification ? 'flex' : 'none' }} >
                        <div>
                        <h3 className={styles.eBoxTitle}>Next js | Figma</h3>
                        <h6 className={styles.eBoxSubTitle}>Frontend Masters</h6>

                        <div className={styles.calender}><i class="uil uil-calendar-alt"></i> 2024 </div>
                        </div>
                        <img src={circle} alt="" className={styles.circle}/>

                    </div>

                </div>
                <div className="col-6">
                <h3 className={styles.qTitle2} data-aos="zoom-in"  data-aos-delay="550" onClick={()=> setQualification(false)}> <img src={cap2} alt="" className={styles.cap}/> Experience</h3>
                <div className={styles.eBox2} style={{display: qualification ? 'none' : 'flex' }}>
                        <img src={circle} alt="" className={styles.circle2}/>
                        <div className={styles.eBox2Inner}>
                        <h3 className={styles.eBoxTitle}>Digital Energy</h3>
                        <h6 className={styles.eBoxSubTitle}>React Developer</h6>

                        <div className={styles.calender}><i class="uil uil-calendar-alt"></i> 2024 </div>
                        </div>

                    </div>
                    
                </div>
                <div className="col-6">
                <div className={styles.eBox} style={{display: qualification ? 'none' : 'flex' }}>
                        <div>
                        <h3 className={styles.eBoxTitle}>Code Notice</h3>
                        <h6 className={styles.eBoxSubTitle}>Full Stack Developer</h6>

                        <div className={styles.calender}><i class="uil uil-calendar-alt"></i> 2023 </div>
                        </div>
                        <img src={circle} alt="" className={styles.circle}/>

                    </div>
                </div>
                <div className="col-6">
                    <div className={styles.eBox2} style={{display: qualification ? 'flex' : 'none' }}>
                        <img src={circle} alt="" className={styles.circle2}/>
                        <div className={styles.eBox2Inner}>
                        <h3 className={styles.eBoxTitle}>React js | Redux</h3>
                        <h6 className={styles.eBoxSubTitle}>Udemy</h6>

                        <div className={styles.calender}><i class="uil uil-calendar-alt"></i> 2023 </div>
                        </div>

                    </div>

                </div>
                <div className="col-6">
                    <div className={styles.eBox} style={{display: qualification ? 'flex' : 'none' }}>
                        <div>
                        <h3 className={styles.eBoxTitle}>Web | Mobile App Development</h3>
                        <h6 className={styles.eBoxSubTitle}>Corvit Institute</h6>

                        <div className={styles.calender}><i class="uil uil-calendar-alt"></i> 2023 </div>
                        </div>
                        <img src={circle} alt="" className={styles.circle}/>

                    </div>

                </div>
                <div className="col-6">
                <div className={styles.eBox2} style={{display: qualification ? 'none' : 'flex' }}>
                        <img src={circle} alt="" className={styles.circle2}/>
                        <div className={styles.eBox2Inner}>
                        <h3 className={styles.eBoxTitle}>Invosoft</h3>
                        <h6 className={styles.eBoxSubTitle}>Frontend Devloper</h6>

                        <div className={styles.calender}><i class="uil uil-calendar-alt"></i> 2023 </div>
                        </div>

                    </div>
                
                    
                </div>
                <div className="col-6">
                <div className={styles.eBoxl2} style={{display: qualification ? 'none' : 'flex' }}>
                        <div>
                        <h3 className={styles.eBoxTitle}>Full Stack Developer Intern</h3>
                        <h6 className={styles.eBoxSubTitle}>Corvit Institute</h6>

                        <div className={styles.calender}><i class="uil uil-calendar-alt"></i> 2023 </div>
                        </div>
                        <img src={circle} alt="" className={styles.circle}/>

                    </div>
                </div>
                <div className="col-6">
                    <div className={styles.eBoxl} style={{display: qualification ? 'flex' : 'none' }}>
                        <img src={circle} alt="" className={styles.circle2}/>
                        <div className={styles.eBox2Inner}>
                        <h3 className={styles.eBoxTitle}>Full Stack Web Development</h3>
                        <h6 className={styles.eBoxSubTitle}>Code With Harry</h6>

                        <div className={styles.calender}><i class="uil uil-calendar-alt"></i> 2022 </div>
                        </div>

                    </div>

                </div>

            </div>
        

        </div>

    </div>
    </div>
  )
}
