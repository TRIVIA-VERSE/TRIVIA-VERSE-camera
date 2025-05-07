const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snap = document.getElementById('snap');
const context = canvas.getContext('2d');

// Request access to webcam
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => {
    alert('Error accessing camera: ' + err);
  });

// Capture the snapshot
snap.addEventListener('click', () => {
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
});
