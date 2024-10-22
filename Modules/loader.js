const loadingBox = document.querySelector(".loading-box");

let isLoading = false;

export function startLoadingAnimation() {
  isLoading = true;

  loadingBox.style.display = "grid";
  loadingBox.classList.add("rotate");
}

export function stopLoadingAnimation() {
  isLoading = false;

  loadingBox.style.display = "none";
  loadingBox.classList.remove("rotate");
}
