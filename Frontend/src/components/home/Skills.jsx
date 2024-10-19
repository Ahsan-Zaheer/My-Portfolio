import React from 'react'
import styles from '../../assets/stylesheets/home.module.css'
import verified from '../../assets/verified.svg'

export default function Skills() {
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
    <div className={isWideScreen? styles.skillsWrapper: ''}>
    <div className='container' id='skills'>
        <h2 className={styles.abt_title}>Skills</h2>
        <h3 className={styles.abt_subtitle} data-aos="fade"  data-aos-delay="0">My technical level</h3>

        <div className="row">
            <div className="col-md-4">
                <div className={styles.skillBox} data-aos="zoom-in"  data-aos-delay="550">
                    <h3 className={styles.skillBoxTitle}>Front-End Development</h3>
                    <div className={styles.innerSkillBox}>
                    <ul>
                        <li> <img src={verified} alt="" /> HTML <p>Expert</p></li>
                        <li><img src={verified} alt="" /> CSS <p>Expert</p></li>
                        <li><img src={verified} alt="" /> JavaScript <p>Expert</p></li>                     
                    </ul>
                    <ul>  
                        <li><img src={verified} alt="" /> Bootstrap <p>Expert</p></li>
                        <li><img src={verified} alt="" /> React.js <p>Expert</p></li>
                        <li><img src={verified} alt="" /> Next.js <p>Intermidiate</p></li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className={styles.skillBox} data-aos="zoom-in"  data-aos-delay="150">
                    <h3 className={styles.skillBoxTitle}>Back-End Development</h3>
                    <div className={styles.innerSkillBox}>
                    <ul>
                        <li><img src={verified} alt="" /> Node js <p>Intermidiate</p></li>
                        <li><img src={verified} alt="" /> Express js <p>Intermidiate</p></li>
                        <li><img src={verified} alt="" /> PHP <p>Basic</p></li>                     
                    </ul>
                    <ul>  
                        <li><img src={verified} alt="" /> MongoDB <p>Intermidiate</p></li>
                        <li><img src={verified} alt="" /> MySQL <p>Intermidiate</p></li>
                        <li><img src={verified} alt="" /> Firebase <p>Intermidiate</p></li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className={styles.skillBox} data-aos="zoom-in"  data-aos-delay="550">
                    <h3 className={styles.skillBoxTitle}>Design | CMS</h3>
                    <div className={styles.innerSkillBox}>
                    <ul>
                        <li><img src={verified} alt="" /> Figma <p>Expert</p></li>
                        <li><img src={verified} alt="" /> Spline 3D <p>Intermidiate</p></li>
                        <li><img src={verified} alt="" /> Adobe InDesign <p>Basic</p></li>                     
                    </ul>
                    <ul>  
                        <li><img src={verified} alt="" /> WordPress <p>Expert</p></li>
                        <li><img src={verified} alt="" /> WebFlow <p>Intermidiate</p></li>
                        <li><img src={verified} alt="" /> Shopify <p>Intermidiate</p></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>


    </div>
    </div>
  )
}
