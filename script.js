// Keep the copyright year current and show uploaded images when they are present.
document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".image-frame img").forEach((img) => {
  const frame = img.closest(".image-frame");
  const showImage = () => {
    if (img.naturalWidth > 0) frame.classList.add("has-image");
  };

  if (img.complete) showImage();
  img.addEventListener("load", showImage);
  img.addEventListener("error", () => frame.classList.remove("has-image"));
});
