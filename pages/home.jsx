export default function Home() {
  return `
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

   
  `;
}
