import { routes } from "../main";

export default function About() {
  return `       <section class="h-[45vh] bg-center mt-28 about-img md:mt-0 md:h-[60vh] lg:h-[80vh]">
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
      </main>`;
}
