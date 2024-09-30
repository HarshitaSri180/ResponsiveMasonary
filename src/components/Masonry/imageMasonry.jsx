import React from 'react'
import './imageMasonry.css'
import img1 from '../../assets/images/img1.png';
// import img2 from '../assets/images/img2.png'

import img3 from '../../assets/images/img3.png'


import img5 from '../../assets/images/img5.png'

import img6 from '../../assets/images/img6.png'

import img7 from '../../assets/images/img7.png'

import img8 from '../../assets/images/img8.png'

import img9 from '../../assets/images/img9.png'
import img10  from '../../assets/images/img10.png'

import img12 from '../../assets/images/img12.png'


import img11 from '../../assets/images/img11.png'


function imagesec() {
  return (
    <div>
      <div className="container grid-wrapper d-flex align-items-center justify-content-center ">
        <div className="firstDiv ">
        <div className="imgOne"> <img src={img1}/></div>
       
       
        <div className="imgtwo"> <img src={img3}/></div>
        </div>
      <div className="secondDiv">
        <div className="imgthree"> <img src={img5}/></div>
       <div className="imgfour"><img src={img6}/></div>
        <div className="imgFive"> <img src={img6}/></div>
        </div>
        <div className="thirdDiv">
       <div className="imgSix"> <img src={img7}/></div>
       <div className="imgEight"> <img src={img8}/></div>
       <div className="imgNine"> <img src={img9}/></div>
       <div className="imgTen"> <img src={img10}/></div>
       </div>
       <div className="fourthDiv">
       <div className="imgEleven"> <img src={img11}/></div>
       <div className="imgThwelv">  <img src={img8}/></div>
       
      <div className="imhthor"><img src={img12}/></div>
      </div>
      <div className="fifthDiv">
        <div className="imgFourteen">  <img src={img1}/></div>
      <div className="imgFifiten"><img src={img9}/></div>
     </div>
        

      </div>
    </div>
  )
}

export default imagesec
