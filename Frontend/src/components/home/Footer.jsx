import React from 'react'
import styles from '../../assets/stylesheets/home.module.css'

export default function Footer() {
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
    <div className={isWideScreen? styles.footerWrapper: ''}>
    <div className='container-fluid'>
        <div className={styles.footer}>
            <h2 className={styles.fTitle}>Ahsan Z.</h2>
            <div className={styles.fmenu}>
                <a href="#about" className={styles.fLink}>About</a>
                <a href="#skills" className={styles.fLink}>Skills</a>
                <a href="#services" className={styles.fLink}>Services</a>
                <a href="#qualification" className={styles.fLink}>Qualification</a>
            </div>
            <div className={styles.fsocials}>
                <a href="https://web.facebook.com/SlasherWolf47" className={styles.socialLink}>
                    <i class="uil uil-facebook"></i>
                </a>
                <a href="https://www.instagram.com/btw_me_ahsan/" className={styles.socialLink}>
                <i class="uil uil-instagram-alt"></i>
                </a>
                <a href="https://www.linkedin.com/in/ahsan-zaheer-55101b280/" className={styles.socialLink}>
                    <i class="uil uil-linkedin"></i>
                </a>
                
            </div>
        </div>
        <div className={`container ${styles.copyright}`}>
        <i class="uil uil-copyright"></i>
        Ahsan Zaheer, All Rights Reserved.
        </div>
    </div>
    </div>
  )
}
