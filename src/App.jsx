import React, { useState, useEffect } from 'react';
import './index.css'; 
import Navbar from './components/Navbar';
import Home2 from './components/Home2';
import Home from './components/Home';

function Loader() {
  return (
    <div className="loader-container">
    <div className="loader">
      <div className="box">
        <div className="logo">
        <img
                        alt=""
                        src="https://https://postimg.cc/CdP76TQ4"
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



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div className="App">
     

      {loading ? (
        <Loader />
      ) : (
        <section>
        <Navbar />
        <section className="back py-34 flex justify-center ">
        <Home/>
        </section>
        <Home2 />
      </section>
      )}
    
    </div>
  );
}

export default App;

