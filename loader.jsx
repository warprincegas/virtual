export default function Loader() {
  const loadingBox = document.querySelector(".loading-box");

  let isLoading = false;

  // start animation
  function startLoadingAnimation() {
    isLoading = true;

    loadingBox.style.display = "grid";
    loadingBox.classList.add("rotate");
  }

  startLoadingAnimation();

  function stopLoadingAnimation() {
    isLoading = false;

    loadingBox.style.display = "none";
    loadingBox.classList.remove("rotate");
  }
  return (
    <div class="fixed top-0 left-0 right-0 bottom-0 z-[200] flex justify-center items-center bg-stone-50">
      <div class="fixed top-3 flex right-3 flex-col text-stone-500 font-semibold cursor-pointer z-[201]">
        <small class="font-mono">Powered by</small>
        <img src="logo.jpg" class="w-24 bg-white rounded-sm" alt="" />
      </div>
      <div class="w-full p-6 flex flex-col items-center justify-center">
        <div class="loading-box max-w-[60px] m-8 hidden grid-cols-2 gap-[5px]">
          <div class="loading-dot w-5 h-5 bg-green-500 rounded-full"></div>
          <div class="loading-dot w-5 h-5 bg-green-500 rounded-full"></div>
          <div class="loading-dot w-5 h-5 bg-green-500 rounded-full"></div>
          <div class="loading-dot w-5 h-5 bg-green-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
