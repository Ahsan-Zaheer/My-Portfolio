import React, {useState, useEffect}from 'react'
import styles from '../../assets/stylesheets/home.module.css'
import ico1 from '../../assets/insta.svg'
import ico2 from '../../assets/github.svg'
import ico3 from '../../assets/linkedIn.svg'
import hand from '../../assets/hand.svg'
import ai from '../../assets/ai.png'
import Typewriter from 'typewriter-effect'; 
import gif from '../../assets/loading.gif';
import { useQAStore } from '../store/question'

export default function Home() {


  const {askQuestion} = useQAStore();
  const [value, setValue] = useState('');
  const [smodal, setSModal] = useState(false)
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState();


  const handleOnchange = (e) => {
    setValue(e.target.value);
  };


  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setResponse('');
    setLoading(true);
    
    const answer = await askQuestion(value);
    setResponse(answer.answer);
    
    setValue('');
    setLoading(false);
  };


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
    <div className={isWideScreen? styles.homeWrapper: ''}>
       <div className={styles.modalBg} style={{display: smodal ? 'flex' : 'none'}}  >
        <div className={styles.modal}>
            <button className={styles.modalClose} onClick={()=> {
                if(smodal){
                    setSModal(false)
                }
            }}><i class="uil uil-multiply"></i></button>
            

            <form onSubmit={handleOnSubmit} className='searchBg'>
            <button className="ms-3 searchBtn" disabled={loading}>
            <i class="uil uil-search searchIco"></i>
            </button>
            <input type="text" name="search" id="seacrh" className='search' value={value}
            onChange={handleOnchange}
            disabled={loading} placeholder='Ask anything about me...'/>
            {loading && <span> <img src={gif} className='gif'/> </span>}

            </form>

            <div className="searchContent">
            
              {response && (
                <Typewriter 
                options={{
                  delay: 30, 
                }}
              onInit={(typewriter) => { 
                typewriter.typeString(`${response}`) 
                .start(); 
                  }} 
                /> )}
            </div>




        </div>
        </div>

    
    <div className="container p-0">
    <div className={`row ${styles.heroSec}`}>
    
        <div className={`col-2   ${styles.socials}`}>
            <a href="https://www.instagram.com/btw_me_ahsan/" className={styles.socialIco} data-aos="zoom-in" data-aos-easing="ease-in-sine"
                     data-aos-delay="150">
                <img src={ico1} alt="social Icons" />
            </a>
            <a href="https://github.com/Ahsan-Zaheer" className={styles.socialIco} data-aos="zoom-in"  data-aos-delay="350">
            <img src={ico2} alt="social Icons" />
            </a>
            <a href="https://www.linkedin.com/in/ahsan-zaheer-55101b280/" className={styles.socialIco} data-aos="zoom-in" data-aos-easing="ease-in-sine"
                     data-aos-delay="550">
            <img src={ico3} alt="social Icons" />
            </a>
        </div>
        <div className={`col-10 col-md-6 mb-md-5 ${styles.res_d}`}>

        <div className={styles.myImg}>
        
        </div>


        </div>
        
        <div className={`col-md-6 col-lg-5 ${styles.data}`}>
            <h1 className={styles.sec1title}  >
                Ahsan Zaheer
                <img src={hand} alt="Waving Hand" className={styles.hand}/>
            </h1>
            <h3 className={styles.sec1Subtitle} data-aos="fade-up" >
                Web Developer
            </h3>
            <p className={styles.sec1Desc} data-aos="fade-up" data-aos-delay="150">
            <Typewriter 
              options={{
                delay: 30, 
              }}
            onInit={(typewriter) => { 
              typewriter.typeString(`I am a passionate and creative web developer, committed to delivering exceptional work that merges innovation with elegance.`) 
              .start(); 
                }} 
              /> 
            
            </p>

            <button  className={`button ${styles.btn}`} onClick={()=> setSModal(true)}>
                Ask AI About Me!
                <img src={ai} alt="" className='ai' />
            </button>

            <a href='#about' className={styles.scroll}>
            <svg
                width="32px"
                height="32px"
                class="home__scroll-mouse"
                viewBox="0 0 247 390"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                style={{
                    fillRule: "evenodd",
                  clipRule: "evenodd",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 1.5,

                }}
              >
                <path
                  class="wheel"
                  d="M123.359,79.775l0,72.843"
                  style={{
                    fill:"none",
                    stroke: "#000",
                    strokeWidth: "20px",
                  }}
                ></path>
                <path
                  id="mouse"
                  d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                  style={{
                    fill: "none",
                    stroke: "#000",
                    strokeWidth:" 20px",
                  }}
                ></path>
              </svg>
                <span>Scroll Down</span>
                <i class="uis uis-angle-double-down"></i>
              

            </a>

        </div>
        <div className={`col-md-5 ${styles.res_v}`}>

            <div className={styles.myImg}>
               
            </div>
            

        </div>
    </div>
    </div>
    </div>
  )
}
