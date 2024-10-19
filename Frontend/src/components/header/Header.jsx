import React, { useState, useEffect } from 'react'
import styles from '../../assets/stylesheets/header.module.css'

export default function Header() {

    const [toggle, setToggle] = useState(true)
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 1000) {
            setToggle(false);
          } else {
            setToggle(true);
          }
        };
    
        
        handleResize();
    
        
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

      const linkHandler = () =>{
            if (window.innerWidth <= 1000) {
            setToggle(false);
          } else {
            setToggle(true);
          }

      }



    return (
        <header className={styles.header}>
            <nav className='container '>
                <a href="/" className={styles.nav_logo}>Ahsan Z.</a>

                <div className={styles.nav_menu} style={{ display: !toggle ? 'none' : 'block', bottom: !toggle ? 0 : 0 }}>
                    <ul className={styles.nav_list}>
                        <div>
                            <li className={styles.nav_item}>
                                <a href="#home" className={styles.nav_link}>
                                    <i className={`uil uil-estate ${styles.nav_ico}`}>
                                    </i>
                                    Home
                                </a>
                            </li>
                            <li className={styles.nav_item}>
                                <a href="#about" onClick={()=>linkHandler()} className={styles.nav_link}>
                                    <i className={`uil uil-user ${styles.nav_ico}`}>
                                    </i>
                                    About
                                </a>
                            </li>
                            <li className={styles.nav_item}>
                                <a href="#skills" onClick={()=>linkHandler()} className={styles.nav_link}>
                                    <i className={`uil uil-file-alt ${styles.nav_ico}`}>
                                    </i>
                                    Skills
                                </a>
                            </li>
                        </div>
                        <div>
                            <li className={styles.nav_item}>
                                <a href="#services" onClick={()=>linkHandler()} className={styles.nav_link}>
                                    <i className={`uil uil-briefcase-alt ${styles.nav_ico}`}>
                                    </i>
                                    Services
                                </a>
                            </li>
                            <li className={styles.nav_item}>
                                <a href="#portfolio" onClick={()=>linkHandler()} className={styles.nav_link}>
                                    <i className={`uil uil-scenery ${styles.nav_ico}`}>

                                    </i>
                                    Portfolio
                                </a>
                            </li>
                            <li className={styles.nav_item}>
                                <a href="#contact" onClick={()=>linkHandler()} className={styles.nav_link}>
                                    <i className={`uil uil-message ${styles.nav_ico}`}>

                                    </i>
                                    Contact
                                </a>
                            </li>
                        </div>

                    </ul>

                    <i className={`uil uil-times ${styles.nav_close}`} onClick={() => { setToggle(!toggle) }}></i>

                </div>

                <div className={styles.nav_toggle}>
                    <i className={`uil uil-apps ${styles.nav_toggler}`} onClick={() => { setToggle(!toggle) }}></i>
                </div>

            </nav>

        </header>
    )
}




