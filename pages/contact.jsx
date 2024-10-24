export default function Contact() {
  return `
          <section class="contact mt-20 md:mt-0">
        <div
          class="bg-[rgba(23,23,23,.7)] h-full flex justify-center items-start flex-col gap-4 px-8 py-28 md:bg-gradient-to-b from-[rgba(23,23,23,7)] to-[rgba(23,23,23,.5)] lg:h-[65vh] lg:items-center"
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
              cols="30" rows="10" 
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
  `;
}
