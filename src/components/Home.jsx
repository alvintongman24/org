
import React from 'react';


function Home() {
    
    return(
        <>
            
         <section class=" card flex flex-col">
           <div className="z-10">
              <div className='text-white block text-lg  md:text-7xl max-w-120 md:max-w-280 italic tracking-wide'>
                    <h1>
                   <span  className='text-[#90EE98]'>Orgymeet</span> is the Most Popular Social Network for your Orgy, Fetish & Kinky Community.
                    </h1>
            </div>

            <div className='flex '>
          
                 <button class="btn m-8  ml-0">
                     <span class="btn-text-one">Join Orgymeet for Free {">>"}</span>
                     <span class="btn-text-two ">Click!</span>
                 </button>

                 <button class="btn  m-8 ml-0 ">
                     <span class="btn-text-one">LOG IN</span>
                     <span class="btn-text-two">Click!</span>
                 </button>
            </div>
            </div>


            <div className='py-20  grid grid-cols-1 gap-3 md:grid-cols-3 z-20 text-white'>
           {/* Members div................... Star*/}
              <div className='Top flex items-start gap-8 max-w-80'>
                <div className='icons '>
               <img src='https://img.icons8.com/?size=100&id=YyEbAVyRYrMX&format=png&color=90EE98'/>
                </div>
                <div className='group grid grid-cols gap-y-3 pb-5'>
                <div className=' md:text-5xl'>
                    <h1>11,899,985</h1>
                 </div>
                 <div className='text-lg md:text-3xl text-[#90EE98]'>
                    <h1>Members</h1>
                 </div>
                <div className=''>
                    <h1>Explore, learn, and discover new things every day..</h1>
                 </div>
                 </div>
              </div>
               {/* Members div................... End*/}

                 {/* Picture $ Video div...................start */}
              <div className='Top flex items-start gap-8 max-w-80'>
                <div className='icons '>
               <img src='https://img.icons8.com/?size=100&id=42330&format=png&color=90EE98'/>
                </div>
                <div className='group grid grid-cols gap-y-3 pb-5'>
                <div className=' md:text-5xl'>
                    <h1>94,513,527</h1>
                 </div>
                 <div className='text-lg md:text-3xl text-[#90EE98]'>
                    <h1>Picture $ Video</h1>
                 </div>
                <div className=''>
                    <h1>Explore, learn, and discover new things every day.</h1>
                 </div>
                 </div>
              </div>
             {/* Picture $ Video div...................End */}

               {/* Upload Event div...................start */}
              <div className='Top flex items-start gap-8 max-w-80'>
                <div className='icons '>
               <img src='https://img.icons8.com/?size=100&id=10053&format=png&color=90EE98'/>
               
                </div>
                <div className='group grid grid-cols gap-y-3 pb-5'>
                <div className=' md:text-5xl'>
                    <h1>899,985</h1>
                 </div>
                 <div className='text-lg md:text-3xl text-[#90EE98]'>
                    <h1>Upcoming Event</h1>
                 </div>
                <div className='md:text-lg'>
                    <h1>Local munches, classes, play parties, BDSM parties, and more.</h1>
                 </div>
                 </div>
              </div>
               {/* Upload Event div...................End */}
          </div>
         </section>

        
        </>
    )
}

export default Home;