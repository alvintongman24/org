import React from "react";
import {  Link } from "react-router";

function Home2() {

    return(
    <section>
       <div className="flex flex-col justify-center items-center">
              <div>
                <img src="https://theradishingreview.com/wp-content/uploads/2020/03/OnlineDatingRR.jpg"  className="w-10 h-10  md:w-20 md:h-20 rounded-full md:pb-0 shadow-lg"/>
              </div>
              <div className="pt-10 pb-2">
                  <button className="botton">
                      Continue with Google
                  </button>
                  
              </div>
              <div className="">
                  <button className="botton">
                      Continue with Apple
                  </button>
                  
              </div>
              <div className="py-2">
                  <button className="botton">
                      Continue with Email
                  </button>
                  
              </div>
              <button className="text-white text-bold py-5 cursor-pointer"><Link to="Register">Log In</Link></button>
       </div>
    </section>
    )

}

export default Home2;