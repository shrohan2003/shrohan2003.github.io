const photos = [
  ['linkedin.png', 'LinkedIn portrait'],
  ['facebook-profile.jpg', 'Facebook profile photo'],
  ['portrait.jpg', 'GitHub portrait']
];
const dialog = document.querySelector('#gallery');
const image = document.querySelector('#full-photo');
const portrait = document.querySelector('#portrait-link');
let current = 0;

function showPhoto(index) {
  current = (index + photos.length) % photos.length;
  const [url, label] = photos[current];
  image.src = url;
  image.alt = label;
  document.querySelector('#caption').textContent = label;
}

function openGallery(index) {
  showPhoto(index);
  dialog.showModal();
}

portrait.addEventListener('click', event => {
  if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  openGallery(0);
});
portrait.addEventListener('contextmenu', event => {
  event.preventDefault();
  openGallery(1);
});
document.querySelector('#more-photos').onclick = () => openGallery(1);
document.querySelector('#previous').onclick = () => showPhoto(current - 1);
document.querySelector('#next').onclick = () => showPhoto(current + 1);
dialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') showPhoto(current - 1);
  if (event.key === 'ArrowRight') showPhoto(current + 1);
});
