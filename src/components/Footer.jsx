import React, { useEffect, useState } from "react";

function Footer(){
    const currentDate = new Date();

    // Extract initial time, year, and month
    const time = currentDate.toLocaleTimeString();
    const year = currentDate.getFullYear();
    const month = currentDate.toLocaleString("default", { month: "long" });
  
    const [timer, setTimer] = useState({
      time: time,
      year: year,
      month: month,
    });
  
    function watch() {
      const newDate = new Date();
      const newTime = newDate.toLocaleTimeString();
      const newYear = newDate.getFullYear();
      const newMonth = newDate.toLocaleString("default", { month: "long" });
  
      setTimer({
        time: newTime,
        year: newYear,
        month: newMonth,
      });
    }
  
    useEffect(() => {
      const interval = setInterval(watch, 1000);
      return () => clearInterval(interval);
    }, []);

    return(
        <>
       
<section class="w-full bg-white">
    <div class="px-8 py-12 mx-auto max-w-7xl">
        <div class="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-12 lg:gap-20">
            <div class="col-span-3">
                <a href="#_" class="text-xl text-center font-black leading-none text-green-500 select-none logo ">Orgymeet</a>
                
            </div>
            <nav class="col-span-1 md:col-span-1 lg:col-span-2">
                <p class="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">About Orgymeet</p>
                <a href="#" class="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Meet the Team</a>
                <a href="#" class="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">What's New</a>
                <a href="#" class="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Documentation</a>
                <a href="#" class="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">FAQs</a>
                <a href="#" class="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Careers</a>
            </nav>
            <nav class="col-span-1 md:col-span-1 lg:col-span-2">
                <p class="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Community</p>
                <a href="#" class="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Trust & Safety</a>
                <a href="#" class="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Transparency</a>
                <a href="#" class="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Guiding Values</a>
                <a href="#" class="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Content Guidelines</a>
                <a href="#" class="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Security Bug Bounty</a>
            </nav>
            <nav class="col-span-2 md:col-span-1 lg:col-span-2">
                <p class="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Legalese</p>
                <a href="#" class="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Privacy Policy</a>
                <a href="#" class="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Terms of Use</a>
                <a href="#" class="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Partners</a>
                <a href="#" class="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Jobs</a>
            </nav>
            <div class="col-span-3">
                <p class="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">SUBSCRIBE TO OUR Orgy Fetish</p>
                <form action="#" class="mb-2">
                    <div class="relative flex items-center overflow-hidden border border-gray-200 rounded-lg">
                        <input class="w-full px-3 py-2 text-base leading-normal transition duration-150 ease-in-out bg-white appearance-none focus:outline-none" type="email" placeholder="Enter your email"/>
                        <button class="px-3 py-2 text-xs text-sm font-medium text-center text-white no-underline bg-green-500 border-2 border-green-500 " type="submit">Subscribe</button>
                    </div>
                </form>
                <p class="text-xs leading-normal text-gray-500">Get the latest updates and news about our service.</p>
            </div>
        </div>
        <div class="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
            <p class="mb-6 text-sm text-left text-gray-600 md:mb-0">© Copyright{timer.year}{timer.month}{timer.time}. All Rights Reserved.</p>
            <div class="flex items-start justify-start space-x-6 md:items-center md:justify-center">
                <a href="#_" class="text-sm text-gray-600 transition hover:text-primary">Terms</a>
                <a href="#_" class="text-sm text-gray-600 transition hover:text-primary">Privacy</a>
            </div>
        </div>
    </div>
</section>
        </>
    )
}


export default Footer;