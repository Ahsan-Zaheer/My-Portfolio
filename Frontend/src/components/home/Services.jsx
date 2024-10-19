import React, {useState, useEffect} from 'react'
import styles from '../../assets/stylesheets/home.module.css'
import ico from '../../assets/color.svg'
import ico2 from '../../assets/development.svg'
import ico3 from '../../assets/app-development.svg'

export default function Services() {
    const [modal, setModal] = useState(false)
    const [modal1, setModal1] = useState(false)
    const [modal2, setModal2] = useState(false)
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
    <div className={isWideScreen? styles.servicesWrapper: ''}>
    <div className='container' id='services'>
        <div className={styles.modalBg} style={{display: modal || modal1 || modal2 ? 'flex' : 'none'}}  >
        <div className={styles.modal}>
            <button className={styles.modalClose} onClick={()=> {
                if(modal){
                    setModal(false)
                }else if(modal1){
                    setModal1(false)
                }
                else if(modal2){
                    setModal2(false)
                }
            }}><i class="uil uil-multiply"></i></button>
            <h2 className={styles.modalTitle}>
                {modal ? 'Ui / Ux Design' : ''}
                {modal1 ? 'Web Development' : ''}
                {modal2 ? 'Mobile App Development' : ''}
            </h2>

            <p className={styles.modalDisc}>Service with more 2 years of experience. Providing quality work to clients and companies</p>

            {modal ? <ul className={styles.modalContent}>
                <li><i class="uil uil-check-circle"></i> Visual Hierarchy and Consistency</li>
                <li><i class="uil uil-check-circle"></i> User-Centered Design Focus</li>
                <li><i class="uil uil-check-circle"></i> Responsive Design and Cross-Platform Compatibility</li>
                <li><i class="uil uil-check-circle"></i> Interaction Design and Usability</li>
                <li><i class="uil uil-check-circle"></i> Problem-Solving and Innovation</li>

            </ul> : ''}
            {modal1 ? <ul className={styles.modalContent}>
                <li><i class="uil uil-check-circle"></i> Built high-performance, scalable web applications</li>
                <li><i class="uil uil-check-circle"></i> Leveraged React js to create engaging user interfaces</li>
                <li><i class="uil uil-check-circle"></i> Implemented robust backend systems for efficient data management</li>
                <li><i class="uil uil-check-circle"></i> Delivered exceptional user experiences through optimized performance and accessibility.</li>
                <li><i class="uil uil-check-circle"></i> Collaborated effectively with design teams to bring creative visions to life.</li>

            </ul> : ''}
            {modal2 ? <ul className={styles.modalContent}>
                <li><i class="uil uil-check-circle"></i> Developed Android / IOS apps with intuitive UI/UX for seamless user experiences.</li>
                <li><i class="uil uil-check-circle"></i> Built high-performance mobile apps optimized for speed and responsiveness.</li>
                <li><i class="uil uil-check-circle"></i> Implemented robust backend integrations for seamless data synchronization.</li>
                <li><i class="uil uil-check-circle"></i> Mastered Flutter to create innovative mobile solutions.</li>
                <li><i class="uil uil-check-circle"></i> Delivered successful mobile apps with a focus on user engagement and retention.</li>

            </ul> : ''}




        </div>
        </div>
        <div className={styles.services}>
        <h2 className={styles.abt_title}>Services</h2>
        <h3 className={styles.abt_subtitle} data-aos="fade"  data-aos-delay="350">What i offer</h3>
        <div className="row">
            <div className="col-md-4">
                <div className={styles.serviceBox} data-aos="fade-up"  data-aos-delay="350">

                    <img src={ico} alt="" className={styles.sico} />
                    <h3 className={styles.serviceBoxTitle}>Ui / Ux <br /> Design</h3>

                    <button className={styles.sBtn} onClick={()=> setModal(true)}>
                        View More <i class="uil uil-arrow-right"></i>
                    </button>
                    
                   
                </div>
            </div>
            <div className="col-md-4">
                <div className={styles.serviceBox2} data-aos="fade-up"  data-aos-delay="700">

                    <img src={ico2} alt="" className={styles.sico} />
                    <h3 className={styles.serviceBoxTitle}>Web <br /> Development</h3>

                    <button className={styles.sBtn} onClick={()=> setModal1(true)}>
                        View More <i class="uil uil-arrow-right"></i>
                    </button>
                    
                   
                </div>
            </div>
            <div className="col-md-4">
                <div className={styles.serviceBox3} data-aos="fade-up"  data-aos-delay="1050">

                    <img src={ico3} alt="" className={styles.sico} />
                    <h3 className={styles.serviceBoxTitle}>Mobile App <br /> Development</h3>

                    <button className={styles.sBtn} onClick={()=> setModal2(true)}>
                        View More <i class="uil uil-arrow-right"></i>
                    </button>
                    
                   
                </div>
            </div>
        </div>
        </div>



    </div>
    </div>
  )
}
