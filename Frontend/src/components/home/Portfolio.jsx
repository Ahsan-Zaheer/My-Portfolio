import React, {useState} from 'react'
import styles from '../../assets/stylesheets/home.module.css'
import work from '../../assets/work1.png'
import rika from '../../assets/Rika.png'
import virile from '../../assets/virile.png'
import ilmy from '../../assets/ilmy.png'
import gadget from '../../assets/gadget.png'
import mobileApp from '../../assets/mobile.png'
import hilray from '../../assets/hilray.png'
import redsport from '../../assets/redsport.png'
import work2 from '../../assets/work2.jpg'
import codenotice from '../../assets/codenotice.jpg'
import prismologic from '../../assets/Prismologic.png'
import x from '../../assets/x.png'
import tamwood from '../../assets/Tamwood.png'
import pfp from '../../assets/PFP.png'
import IntelliJournal from '../../assets/IntelliJournal.png'
import Aethon from '../../assets/Aethon.png'
import m from '../../assets/m.png'

export default function Portfolio() {


  const [all, setAll] = useState(true);
  const [web, setWeb] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [design, setDesign] = useState(false);


  const clickHandler = (value)=>{
    if(value == 'web'){
      setAll(false)
      setWeb(true)
      setMobile(false)
      setDesign(false)
    } else if (value == 'app'){
      setAll(false)
      setWeb(false)
      setMobile(true)
      setDesign(false)
    } else if (value == 'design'){
      setAll(false)
      setWeb(false)
      setMobile(false)
      setDesign(true)
    } else {
      setAll(true)
      setWeb(false)
      setMobile(false)
      setDesign(false)
    }
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
    <div className={isWideScreen? styles.portfolioWrapper: ''}>
    <div className='container pt-3' id='portfolio'>
        <h2 className={styles.abt_title}>Portfolio</h2>
        <h3 className={styles.abt_subtitle} data-aos="fade"  data-aos-delay="50">Most recent works</h3>

        <div className={styles.pMenu}>
            <div onClick={()=>clickHandler('all')} className={styles.pItem}>All</div>
            <div onClick={()=>clickHandler('web')}  className={styles.pItem}>Web</div>
            <div onClick={()=>clickHandler('app')}  className={styles.pItem}>App</div>
            <div onClick={()=>clickHandler('design')}  className={styles.pItem}>Design</div>
        </div>

        <div className={`${styles.projects} row mx-0`}>
          <div className="col-md-4" style={{display: all || web ? 'block' : 'none',}}>
          <div className={styles.project} data-aos="zoom-in"  data-aos-delay="350" >
            <img src={IntelliJournal} alt="" className={styles.pImg}/>
            <h3 className={styles.pTitle}>Web Devlopment</h3>
            <a href='https://intellijournal.vercel.app/' className={styles.pBtn}>View <i class="uil uil-arrow-right"></i></a>
          </div>
        </div>
          <div className="col-md-4" style={{display: all || web ? 'block' : 'none',}}>
          <div className={styles.project} data-aos="zoom-in"  data-aos-delay="550" >
            <img src={work} alt="" className={styles.pImg}/>
            <h3 className={styles.pTitle}>Web Devlopment</h3>
            <a href='https://invosoft.tech/' className={styles.pBtn}>View <i class="uil uil-arrow-right"></i></a>
          </div>
        </div>
          <div className="col-md-4" style={{display: all || web ? 'block' : 'none',}}>
          <div className={styles.project} data-aos="zoom-in"  data-aos-delay="750" >
            <img src={Aethon} alt="" className={styles.pImg}/>
            <h3 className={styles.pTitle}>Web Devlopment</h3>
            <a href='https://aethon.shop/' className={styles.pBtn}>View <i class="uil uil-arrow-right"></i></a>
          </div>
        </div>
          <div className="col-md-4" style={{display: all || web ? 'block' : 'none',}}>
          <div className={styles.project} data-aos="zoom-in"  data-aos-delay="350" >
            <img src={tamwood} alt="" className={styles.pImg}/>
            <h3 className={styles.pTitle}>Web Devlopment</h3>
            <a href='https://tamwood.com.au/' className={styles.pBtn}>View <i class="uil uil-arrow-right"></i></a>
          </div>
        </div>
        <div className="col-md-4" style={{display: all || web ? 'block' : 'none',}}>
          <div className={styles.project} data-aos="zoom-in"  data-aos-delay="550" >
            <img src={hilray} alt="" className={styles.pImg}/>
            <h3 className={styles.pTitle}>Web Development</h3>
            <a href='https://hillray.shop/' className={styles.pBtn}>View <i class="uil uil-arrow-right"></i></a>
          </div>
        </div>
          <div className="col-md-4" style={{display: all || design ? 'block' : 'none',}}>
          <div className={styles.project} data-aos="zoom-in"  data-aos-delay="750"  >
            <img src={rika} alt="" className={styles.pImg}/>
            <h3 className={styles.pTitle}>Web Design</h3>
            <a href='https://www.figma.com/design/KFG4Em0iyjyZVhnYI92Ij3/Rika?node-id=6-45&t=zGL0YLorqYk5qqdr-0' className={styles.pBtn}>View <i class="uil uil-arrow-right"></i></a>
          </div>
        </div>
          <div className="col-md-4" style={{display: all || web ? 'block' : 'none',}}>
          <div className={styles.project} data-aos="zoom-in"  data-aos-delay="350"  >
            <img src={pfp} alt="" className={styles.pImg}/>
            <h3 className={styles.pTitle}>Web Devlopment</h3>
            <a href='https://pfp.digitalgurus.com.au/' className={styles.pBtn}>View <i class="uil uil-arrow-right"></i></a>
          </div>
        </div>
          <div className="col-md-4" style={{display: all || web ? 'block' : 'none',}}>
          <div className={styles.project} data-aos="zoom-in"  data-aos-delay="550"  >
            <img src={work2} alt="" className={styles.pImg}/>
            <h3 className={styles.pTitle}>Web Devlopment</h3>
            <a href='https://smartpack.com.pk/' className={styles.pBtn}>View <i class="uil uil-arrow-right"></i></a>
          </div>
        </div>
          <div className="col-md-4" style={{display: all || web ? 'block' : 'none',}}>
          <div className={styles.project} data-aos="zoom-in"  data-aos-delay="550" >
            <img src={virile} alt="" className={styles.pImg}/>
            <h3 className={styles.pTitle}>Web Devlopment</h3>
            <a href='https://virile.au/' className={styles.pBtn}>View <i class="uil uil-arrow-right"></i></a>
          </div>
        </div>
        <div className="col-md-4" style={{display: all || web ? 'block' : 'none',}}>
          <div className={styles.project} data-aos="zoom-in"  data-aos-delay="750"  >
            <img src={prismologic} alt="" className={styles.pImg}/>
            <h3 className={styles.pTitle}>Web Development</h3>
            <a href='https://prismologic.com/' className={styles.pBtn}>View <i class="uil uil-arrow-right"></i></a>
          </div>
        </div>
          <div className="col-md-4" style={{display: all || mobile ? 'block' : 'none',}}>
          <div className={styles.project} data-aos="zoom-in"  data-aos-delay="350"  >
            <img src={mobileApp} alt="" className={styles.pImg}/>
            <h3 className={styles.pTitle}>Mobile App</h3>
            <a className={styles.pBtn}>View <i class="uil uil-arrow-right"></i></a>
          </div>
        </div>
          <div className="col-md-4" style={{display: all || design ? 'block' : 'none',}}>
          <div className={styles.project} data-aos="zoom-in"  data-aos-delay="550" >
            <img src={ilmy} alt="" className={styles.pImg}/>
            <h3 className={styles.pTitle}>Web Design</h3>
            <a href='https://www.figma.com/design/tqv0Cl6opZyM2ZMr5Vc5r9/Ilmy?node-id=0-1&t=wBZd6yAHAcr6NuWy-0' className={styles.pBtn}>View <i class="uil uil-arrow-right"></i></a>
          </div>
        </div>
          <div className="col-md-4" style={{display: all || web ? 'block' : 'none',}}>
          <div className={styles.project} data-aos="zoom-in"  data-aos-delay="750" >
            <img src={codenotice} alt="" className={styles.pImg}/>
            <h3 className={styles.pTitle}>Web Development</h3>
            <a href='https://codenotice.com/' className={styles.pBtn}>View <i class="uil uil-arrow-right"></i></a>
          </div>
        </div>
        <div className="col-md-4" style={{display: all || web ? 'block' : 'none',}}>
          <div className={styles.project} data-aos="zoom-in"  data-aos-delay="350" >
            <img src={redsport} alt="" className={styles.pImg}/>
            <h3 className={styles.pTitle}>Web Development</h3>
            <a href='https://redsport.au/' className={styles.pBtn}>View <i class="uil uil-arrow-right"></i></a>
          </div>
        </div>
          <div className="col-md-4" style={{display: all || web ? 'block' : 'none',}}>
          <div className={styles.project} data-aos="zoom-in"  data-aos-delay="550"  >
            <img src={x} alt="" className={styles.pImg}/>
            <h3 className={styles.pTitle}>Web Development</h3>
            <a href='https://protocolx.ahsanzaheer.me/' className={styles.pBtn}>View <i class="uil uil-arrow-right"></i></a>
          </div>
        </div>
        <div className="col-md-4" style={{display: all || web ? 'block' : 'none',}}>
          <div className={styles.project} data-aos="zoom-in"  data-aos-delay="750" >
            <img src={gadget} alt="" className={styles.pImg}/>
            <h3 className={styles.pTitle}>Web Development</h3>
            <a href='https://gadgetland.site/' className={styles.pBtn}>View <i class="uil uil-arrow-right"></i></a>
          </div>
        </div>
        
        
       
        </div>
    </div>
    </div>
  )
}
