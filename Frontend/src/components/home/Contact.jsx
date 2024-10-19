import React, {useRef, useState} from 'react'
import styles from '../../assets/stylesheets/home.module.css'
import send from '../../assets/send.svg'
import emailjs from '@emailjs/browser';
import { useMessageStore } from '../store/Message';

export default function Contact() {

    const [thanks, setThanks] = useState(false);
    const form = useRef();
    // const sendEmail = (e) => {
    //     e.preventDefault();
    
    //     emailjs
    //       .sendForm('service_3lnofrc', 'template_7gq9hih', form.current, {
    //         publicKey: '35KLsrC6NOtoAo4NW',
    //       })
    //       .then(
    //         () => {
    //           console.log('SUCCESS!');
    //           setThanks(true)
    //         },
    //         (error) => {
    //           console.log('FAILED...', error.text);
    //         },
    //       );
    //   };


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const {sendMessage} = useMessageStore()

    const handleSendMesssage = async (e) => {
        e.preventDefault();

        console.log(formData);
        
        const {success, message} = await sendMessage(formData);
        setThanks(true)

        console.log(success, message);
        
      
    }





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
    <div className={isWideScreen? styles.contactWrapper: ''}>
    <div className='container' id='contact'>
        <div className={styles.contactSec}>
        <h2 className={styles.abt_title}>Get In Touch</h2>
        <h3 className={styles.abt_subtitle} data-aos="fade"  data-aos-delay="50">Contact Me</h3>

        <div className='row'>
            <div className="col-md-5 ">
                <div className={styles.cLeft}>
                <h3 className={styles.cTitle}>Talk to me</h3>
                <div className={styles.cBox}  >
                <i class={`uil uil-fast-mail ${styles.cIco}`}></i>
                <h3 className={styles.cBoxTitle}>Email</h3>
                <p className={styles.boxInfo}>dev.ahsan@outlook.com</p>

                <a href='mailto:dev.ahsan@outlook.com' className={styles.sBtn}>Write me <i class="uil uil-arrow-right ms-1"></i></a>

                </div>
                <div className={styles.cBox} >
                <i class={`uil uil-whatsapp ${styles.cIco}`}></i>
                <h3 className={styles.cBoxTitle}>Whatsapp</h3>
                <p className={styles.boxInfo}>+923 244 695 160</p>

                <a href='https://api.whatsapp.com/send?phone=%2B923244695160&data=ARDzdTvWL3sqCOPGlIRskS6mtr8EJUOuFaTT__Z_nzA6823KOC8DXQ0XrwD1PpREWW6Wy_DI3h4kBcXgjDSIFvMC29k-TtKBzFMCqw3H5LjKuAmJIQrKLL7b9w_8G6K9yNPZBTsoNl45fol92VPw0pTEuA&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR0oPK7nH5iOMb2plmNOA3lQ7UT2Gga5BGPgnRVlOEQxZtVqLmYg_rfJRZA' className={styles.sBtn}>Write me <i class="uil uil-arrow-right ms-1"></i></a>

                </div>
                <div className={styles.cBox}>
                <i class={`uil uil-linkedin-alt ${styles.cIco}`}></i>
                <h3 className={styles.cBoxTitle}>Linked In</h3>
                <a href='https://www.linkedin.com/in/ahsan-zaheer-55101b280/' className={styles.boxInfo}>Ahsan Zaheer</a>

                <a href='https://www.linkedin.com/in/ahsan-zaheer-55101b280/' className={styles.sBtn}>Write me <i class="uil uil-arrow-right ms-1"></i></a>

                </div>
            </div>
            </div>
            <div className="col-md-7">
            <h3 className={styles.cTitle2}>Write me your project</h3>
            <div className={styles.cRight}>
                <h2 className={styles.thanks} style={{display: thanks? 'flex' : 'none'}}>Thank You!</h2>
                <form onSubmit={handleSendMesssage} className={styles.cInput} style={{display: !thanks? 'flex' : 'none'}}>
                    <input type="text" name='name' value={formData.name} onChange={(e)=>setFormData({...formData, name: e.target.value})} className={styles.cInputBox} placeholder='Name' />

                    <input type="email" name='email' value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})} className={styles.cInputBox} placeholder='Email' />
             
                    <input type="text" name='phn' value={formData.phone} onChange={(e)=>setFormData({...formData, phone: e.target.value})} className={styles.cInputBox} placeholder='Phone' />
                
                <textarea name="project" id="project" value={formData.message} onChange={(e)=>setFormData({...formData, message: e.target.value})}  cols="30" rows="10" className={styles.cTextArea} placeholder='Write Your Project'></textarea>
                <button href="#contact" className={`button ${styles.btn3}`}>
                Send Message
                <img src={send} alt="" className='ms-2' />
                </button>
                </form>
                </div>

            </div>

        </div>

        </div>

    </div>
    </div>
  )
}
