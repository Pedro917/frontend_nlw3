import React from 'react';

import '../styles/global.css'
import '../styles/pages/lading-page.css'

import logoImg from '../assets/IMG/logo.svg'
import { FiArrowRight } from 'react-icons/fi'

import { Link } from 'react-router-dom'

function Landing() {
    return (
      <div id="lading-page">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy"/>
  
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças</p>
        </main>
  
        <div className="location">
          <strong>Fortaleza</strong>
          <span>Ceará</span>
        </div>
  
        <Link to="/app" className="enter-app"><FiArrowRight size={26} color="rgba(0,0,0,0.6)"/></Link>
  
      </div>
  
  
  
  
      </div>
    );
  }
  
  export default Landing;