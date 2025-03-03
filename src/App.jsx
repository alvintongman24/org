import React, { useState, useEffect } from 'react';
import './index.css'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import Home2 from './components/Home2';

function Loader() {
  return (
    <div className="loader-container">
    <div className="loader">
      <div className="box">
        <div className="logo">
        <img
                        alt="Your Company"
                        src="https://theradishingreview.com/wp-content/uploads/2020/03/OnlineDatingRR.jpg"
                        className="h-8 w-auto"
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



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div className="App ">
     

      {loading ? (
        <Loader />
      ) : (
        <section className='bg-black m-0 '>
          <Navbar />
          <Home/>
          <Home2/>
          

        </section>
      )}
    
    </div>
  );
}

export default App;

