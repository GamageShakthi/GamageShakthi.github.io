// Show uploaded images and leave a clear placeholder when a file is missing.
document.querySelectorAll('.image-frame img').forEach((img) => {
  const frame = img.closest('.image-frame');
  const showImage = () => {
    if (img.naturalWidth > 0) {
      frame.classList.add('has-image');
      frame.classList.remove('image-error');
    }
  };
  const showFallback = () => {
    frame.classList.remove('has-image');
    frame.classList.add('image-error');
  };

  img.addEventListener('load', showImage);
  img.addEventListener('error', showFallback);
  if (img.complete) {
    if (img.naturalWidth > 0) showImage();
    else showFallback();
  }
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
