import React, { useState, useEffect } from 'react';
import './index.css'; 
import Navbar from './components/Navbar';
import Home2 from './components/Home2';
import Home from './components/Home';
import Home3 from './components/Home3';
import Home4 from './components/Home4';
import Home5 from './components/Home5';
import Home6 from './components/Home6';
import Home7 from './components/Home7';
import Footer from './components/Footer'


function Loader() {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="box">
          <div className="logo">
            <img
              alt="Your Company"
              src="https://media-hosting.imagekit.io//9a3862b29e7448d6/orgymeet-logo-2.png?Expires=1837254583&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=L6-AO2IyLeVz7oP5dtLlPplGTsFB6YyY3KDrtXLjcgU2-6eqQ0KL0cjZmTnvs0A2BtMHV3ff95Fbvoy~p31IZxB-vfr~Q7ixD2ZQnT7r28aFbtzX~iSfOIfYtfGNrjzFDpFNH-H-SOC6JOMbIDkDnRNC6gBCdG6Zd3~MoFdIazeo2V1EOqPYGMdU9V8JehAUnRE0SlbelA8ICnWPlIByx3~Du7NSG-3PWjdrWbnuVH5WmOvImz6zjc6O6HudpBoi1gAw2JENkoKA6qu~I5KY1uAO~fMsLQJP3jyIMSZQddzNy66Xrm8Ah5xDrS-ZOfuv2wz0XhOlKm6YE-Fgw2G9Ww__"
              className="h-40 w-auto"
            />
          </div>
        </div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  );
}

function RestrictedPage() {
  return (
    <section className='bg-black'>
   
<div class="container center ">
  <div class="rope center">
    <div class="legs center">
      <div class="boot-l"></div>
      <div class="boot-r"></div>
    </div>
    <div class="costume center">
      <div class="spider">
        <div class="s1 center"></div>
        <div class="s2 center"></div>
        <div class="s3"></div>
        <div class="s4"></div>
      </div>
      <div class="belt center"></div>
      <div class="hand-r"></div>
      <div class="hand-l"></div>
      <div class="neck center"></div>
      <div class="mask center">
        <div class="eye-l"></div>
        <div class="eye-r"></div>
      </div>
      <div class="cover center"></div>
    </div>
</div></div>

<div  style={{ textAlign: "center", marginTop: "", color: "red" }}>
 <div className=''>
   
 <div class="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-red-400 via-red-500 to-pink-500">
  <h1 class="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white animate-pulse drop-shadow-lg">
    Access Denied
  </h1>
  <p class="text-lg md:text-2xl lg:text-3xl text-white mt-4 animate-bounce">
    You must be 18 years or older to access this website.
  </p>
</div>

      </div>
      </div>
   </section> 
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [isEligible, setIsEligible] = useState(false);

  useEffect(() => {
    const age = prompt("How old are you?");
    if (age && parseInt(age, 10) >= 18) {
      setIsEligible(true);
      alert("Welcome!");
    } else {
      setIsEligible(false);
      alert("You are not eligible to access this website.");
    }

    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : isEligible ? (
        <section className="font-serif back">
          <Navbar />
          <section className="py-26 flex justify-center">
            <Home />
          </section>

          <section className="overflow-x-hidden w-[100%] py-8">
            <Home2 />
          </section>
          <section className="px-5 md:px-36 py-8 flex justify-start">
            <Home3 />
          </section>
          <section className="overflow-x-hidden w-[100%] py-8">
            <Home4 />
          </section>
          <section className="px-5 md:px-36 py-8 flex justify-center">
            <Home5 />
          </section>
          <section className="overflow-x-hidden w-[100%] py-8">
            <Home6 />
          </section>
          <section className="px-5 ">
            <Home7 />
          </section>
          <section  className="px-5 ">
            <Footer />
          </section>
        </section>
      ) : (
        <RestrictedPage />
      )}
    </div>
  );
}

export default App;
