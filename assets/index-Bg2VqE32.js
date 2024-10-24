(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();function s(){return`
           <section class="h-[60vh] bg-center mt-20  md:mt-0 flex justify-center items-cente flex-col text-center home-img lg:h-[85vh] md:h-[70vh]">
        <div class="bg-[rgba(23,23,23,.65)] h-full flex justify-center items-center  flex-col gap-4 p-8 md:bg-gradient-to-b from-[rgba(23,23,23,7)]  to-[rgba(23,23,23,.5)] ">

        <h1 class="font-extrabold text-4xl tracking-wider lg:text-7xl"> A VIRTUAL TOUR<h1>
        <p class=" font-medium text-2xl tracking-wider">represents your business<p>

        <span class="font-medium text-lg mt-[10px] tracking-wide block">
          And we are qequipped to deliver nothing short of awesome
        </span>
        <a href="#" class="border-[1px] border-solid border-white py-2 rounded-md font-medium px-7 inline-block mt-10 hover:text-black hover:bg-white tracking-wider duration-200 transition ">Get In Touch</a>
        <div>
      </section>
  
      <main class="md:grid grid-cols-2 lg:grid-cols-4">
        <section class="h-[55vh] bg-center flex justify-center items-center flex-col entertainment md:h-[500px] lg:h-[400px]">

          <div class="bg-[rgba(23,23,23,.65)] h-full flex flex-col p-7 relative md:bg-[rgba(23,23,23,.85)] ">

          <span class="font-semibold font-serif tracking-widest opacity-70">01</span>

          <div class="flex flex-col justify-center  h-full gap-3 translate-y-[20px] hover:translate-y-[0] transition-all duration-300 text-container md:gap-7 lg:gap-3">

            <ion-icon name="happy-outline" class="text-4xl lg:text-lg lg:font-semibold"></ion-icon>

            <h1 class="text-3xl lg:text-lg">ENTERTAINMENT</h1>
        
            <div class="text-lg lg:text-sm text lg:font-normal ">Virtual Tour NG redefine the music industry by offering a unique and immersive virtual experience for music artists, focusing on studio sessions and live shows. In a world increasingly reliant on digital interactions, our platform bridge the gap between artists and their fans, providing an innovative and engaging way to connect with ni distance barrier.</div>
          </div>
          <div>
        </section>
        <section class="h-[55vh] bg-center  flex justify-center items-center flex-col edu-trip  md:h-[500px] lg:h-[400px]">
          <div class="bg-[rgba(23,23,23,.65)] h-full flex flex-col gap-4 p-7 relative md:bg-[rgba(23,23,23,.85)] ">
          <span class="font-semibold font-serif tracking-widest opacity-70">02</span>
          <div class="flex flex-col justify-center  h-full gap-3 translate-y-[20px] hover:translate-y-[0] transition-all duration-300 text-container md:gap-7 lg:gap-3">
            <ion-icon name="book-outline" class="text-4xl lg:text-lg lg:font-semibold"></ion-icon>
            <h1 class="text-3xl lg:text-lg">EDU TRIP</h1>
        
            <div class="text-lg text lg:text-sm lg:font-normal  ">VTN is making travel and exploration a thrilling educational adventure for kids across Nigeria and Africa. Let your little ones dive into the wonders of our planet from the comfort of their own space.</div>
          </div>
          <div>
        </section>
        <section class="h-[55vh] bg-center  flex justify-center items-center flex-col event md:h-[500px] lg:h-[400px]">

          <div class="bg-[rgba(23,23,23,.65)] h-full flex flex-col gap-4 p-7 relative md:bg-[rgba(23,23,23,.85)]">
          <span class="font-semibold font-serif tracking-widest opacity-70">03</span>
          <div class="flex flex-col justify-center  h-full gap-3 translate-y-[20px] hover:translate-y-[0] transition-all duration-300 text-container md:gap-7 lg:gap-2">
            <ion-icon name="star-outline" class="text-4xl lg:text-lg lg:font-semibold"></ion-icon>
            <h1 class="text-3xl lg:text-lg lg:font-semibold">EVENT</h1>
        
            <div class="text-lg lg:text-sm text lg:font-normal ">In an era where physical presence is not always possible, Virtual Tour NG presents an innovative solution for event planners to capture and immortalize weddings, anniversaries, and various events. Our cutting-edge technology offers a unique and immersive virtual experience, allowing party guests to relive special moments from the comfort of their homes. Breaking distance barrier.</div>
          </div>
          <div>
        </section>
        <section class="h-[55vh] bg-center  flex justify-center items-center flex-col real-estate  md:h-[500px] lg:h-[400px]">
          <div class="bg-[rgba(23,23,23,.65)] h-full flex flex-col gap-4 p-7 relative md:bg-[rgba(23,23,23,.85)]">
          <span class="font-semibold font-serif tracking-widest opacity-70">04</span>
          <div class="flex flex-col justify-center  h-full gap-3 translate-y-[20px] hover:translate-y-[0] transition-all duration-300 text-container md:gap-7 lg:gap-3">
            <ion-icon name="home-outline" class="text-4xl lg:text-lg lg:font-semibold"></ion-icon>
            <h1 class="text-3xl lg:text-lg lg:font-semibold">REAL ESTATE</h1>
        
            <div class="text-lg lg:text-sm text lg:font-normal ">VTN provide immersive 360-degree virtual tours of properties. Prospective buyers can explore properties remotely, offering a realistic and detailed viewing experience without physically visiting the location.</div>
          </div>
          <div>
        </section>
      </main>

      <section class="vr-img h-[40vh] bg-center lg:hidden">
        <div class="bg-[rgba(23,23,23,.65)] h-full flex justify-center items-center  flex-col gap-4 p-8 "></div>
      </section>

      <section class="dev-process">
        <div class=" h-full flex flex-col gap-4 p-7 relative bg-gradient-to-b from-[rgba(23,23,23,.65)] text-white  to-orange-200">

          <h1 class="text-3xl font-bold tracking-wider md:mt-10">Our Interactive Development Process</h1>
          <div class="flex items-start gap-3 mt-10 md:mt-5 md:items-center">
            <ion-icon name="phone-portrait-outline" class="font-bold text-2xl"></ion-icon>
            <div class="flex flex-col">
              <p class="font-semibold text-lg md:text-xl tracking-wider">Mobile-friendly</p>
              <span class="text-base md:text-lg">Our focus is more on mobile platform and compatibles</span>
            </div>
          </div>
          <div class="flex items-start gap-3 md:items-center">
            <ion-icon name="time-outline"  class="text-2xl font-extrabold"></ion-icon>
            
            <div class="flex flex-col">
              <p class="font-semibold text-lg  md:text-xl tracking-wider">Mobile-friendly</p>
              <span class="text-base md:text-lg">Our focus is more on mobile platform and compatibles</span>
            </div>
          </div>

          <div class="flex items-start md:items-center gap-3">
            <ion-icon name="images-outline" class="text-4xl md:text-xl font-extrabold"></ion-icon>

            <div class="flex flex-col">
              <p class="font-semibold text-lg md:text-xl tracking-wider">Custom designs</p>
              <span class="text-base md:text-lg">No teo projects are the same with us. We always tailor accordoing to your unique specifications.</span>
            </div>
          </div>
        </div>
      </section>

   
  `}function a(){return`       <section class="h-[45vh] bg-center mt-28 about-img md:mt-0 md:h-[60vh] lg:h-[80vh]">
        <div class="bg-[rgba(23,23,23,.65)] h-full flex justify-center items-start  flex-col p-8  md:bg-gradient-to-b from-[rgba(23,23,23,7)]  to-[rgba(23,23,23,.5)] md:items-center">

        <h1 class="font-bold text-4xl tracking-wider">Hello!<h1>
        <span class="font-medium text-sm mt-[10px] md:text-lg md:text-center
         tracking-wide block">
         Our goal is to provide interactive 360 virtual tour which will serve as a platform for people to view the facilities virtually.
        </span>
        
        <div class="md:flex md:justify-center">
        
        <a href="#/contact" class="contact-link border-[1px] border-solid border-white py-2 rounded-md font-medium px-7 inline-block mt-10 hover:text-black hover:bg-white tracking-wider duration-200 transition">Get In Touch</a>
        </div>

        <div>
      </section>
      <section class="px-8 py-16 bg-gradient-to-b from-black  to-[rgb(23,23,23)]">
        <h1 class="font-extrabold text-2xl mb-7">VirtualTourNG</h1>
        <div class="flex flex-col gap-4 text-stone-200 ">
          <span>VirtualTourNG is a tourism brand that is key of changing the traditional scope of tourism in Nigeria, also help and promote tourism and provide a unique experience for both local residents and international travellers, using virtual reality (VR) technology to allow people to explore Nigeria without physically being there.
           </span>
           <span> Our platform offers immersive virtual tours of diverse destinations, from natural wonders and historical sites. Hello Nigerians and the people the world experience Nigeria's rich cultural heritage, tourist destinations, Festivals and educational landmarks. Through cutting- edge virtual reality (VR) technology.</span>
        </div>
        <a class="contact-link border-[1px] border-solid border-white py-2 rounded-md font-medium px-7 inline-block mt-10 hover:text-black hover:bg-white tracking-wider duration-200 transition ">Get In Touch</a>
      </section>

      <main class="m-2 flex gap-4 flex-col md:px-32 md:py-7 md:bg-gradient-to-b from-[rgba(23,23,23,7)]  to-[rgba(23,23,23,.5)] md:m-[-1.5px] lg:flex-row lg:justify-between lg:m-[0]">

        <section class="vision rounded-xl lg:w-[300px]">
          <div class="bg-[rgba(23,23,23,.7)] h-full flex justify-center items-start  flex-col gap-2 py-24 px-8 rounded-xl lg:items-center lg:px-4">
            <ion-icon name="eye-outline" class="font-extrabold text-3xl"></ion-icon>
            <h1 class="font-bold tracking-widest text-xl">Vision</h1>
            <p class="lg:text-center">To crate a highly interactive VR experience that adds prominence to our client's sales and marketing efforts.</p>
          </div>
        </section>

        <section class="mission rounded-xl lg:w-[300px]">
          <div class="bg-[rgba(23,23,23,.7)] h-full flex justify-center items-start  flex-col gap-2 py-24 px-8 rounded-xl lg:items-center lg:px-4">
            <ion-icon name="infinite-outline" class="font-extrabold text-3xl"></ion-icon>
            <h1 class="font-bold tracking-widest text-xl">Mission</h1>
            <p class="lg:text-center">To crate a highly interactive VR experience that adds prominence to our client's sales and marketing efforts.</p>
          </div>
        </section>

        <section class="goal rounded-xl lg:w-[300px]">
          <div class="bg-[rgba(23,23,23,.7)] h-full flex justify-center items-start  flex-col gap-2 py-24 px-8 rounded-xl lg:items-center lg:px-4">
            <ion-icon name="globe-outline" class="font-extrabold text-3xl"></ion-icon>
            <h1 class="font-bold tracking-widest text-xl">Goal</h1>
            <p class="lg:text-center">To crate a highly interactive VR experience that adds prominence to our client's sales and marketing efforts.</p>
          </div>
        </section>
      </main>`}function d(){return`
          <section class="contact mt-20 md:mt-0">
        <div
          class="bg-[rgba(23,23,23,.7)] h-full flex justify-center items-start flex-col gap-4 px-8 py-28 md:bg-gradient-to-b from-[rgba(23,23,23,7)] to-[rgba(23,23,23,.5)] lg:h-[60vh] lg:items-center"
        >
          <h1 class="font-bold text-4xl tracking-wider">Contact us</h1>
          <div class="flex flex-col lg:justify-center lg:items-center">
            <a href="#"> +234 816 696 7472</a>
            <a href="#">virtualtourism@gmail.com</a>
            <span></span>
          </div>
        </div>
      </section>
      <section class="text-stone-500">
        <form action="" class="flex flex-col py-20 px-7 gap-6 lg:max-w-md">
          <label for="Name">
            <input type="text" placeholder="Your Name" />
          </label>
          <label for="Email" class="relative">
            <input type="email" placeholder="Your Email" />
            <ion-icon
              name="mail-outline"
              class="absolute right-2 bottom-2"
            ></ion-icon>
          </label>
          <label for="Phone">
            <input type="tel" placeholder="Phone No" />
            <ion-icon name="call-outline"></ion-icon>
          </label>
          <label for="Subject">
            <input type="text" placeholder="Subject" />
            <ion-icon name="receipt-outline"></ion-icon>
          </label>
          <label for="Message">
            <textarea
              name="Message"
              maxlength="50"
              placeholder="Your Message"
            ></textarea>
            <ion-icon name="chatbox-ellipses-outline"></ion-icon>
          </label>
          <button class="bg-gray-400 text-lg text-slate-100 py-3 rounded-lg">
            Submit
          </button>
        </form>
      </section>
      <section class="text-gray-600 px-7 pb-10">
        <div>
          <h1 class="font-bold text-2xl">Visit us</h1>
          <p class="font-mono text-sm mt-5">
            We'd love to start your project with our digital solutions.
          </p>
        </div>

        <div class="flex flex-col mt-6">
          <div class="flex items-center gap-1 font-semibold">
            <ion-icon name="location-outline"></ion-icon>
            <p>Our Address</p>
          </div>
          <div class="flex flex-col font-thin text-base">
            <span>Victorial Island,</span>
            <span>Lagos, Nigeria.</span>
          </div>
        </div>

        <div class="mt-4 flex items-center justify-between lg:max-w-md">
          <div class="">
            <div class="flex items-center gap-1 text-lg font-medium">
              <ion-icon name="logo-instagram" class=""></ion-icon>
              <a href="#">@virtualtour_ng</a>
            </div>
          </div>
          <div class="">
            <div class="flex items-center gap-1 text-lg font-medium">
              <ion-icon name="logo-twitter"></ion-icon>
              <a href="#">@virtualtour_ng</a>
            </div>
          </div>
        </div>
      </section>
  `}const g={"/":s,"/about":a,"/contact":d};console.log(a);function r(){const o=location.hash.slice(1)||"/",i=g[o]||s;document.getElementById("app").innerHTML=i(),console.log(document.querySelector("body"))}window.addEventListener("hashchange",r);window.addEventListener("load",r);
