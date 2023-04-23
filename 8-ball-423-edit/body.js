const container = document.querySelector('.stars-container');
​
​
​
setInterval(() => {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  container.appendChild(star);
  setTimeout(() => {
    container.removeChild(star);
  }, 5000);
  //Star spawn time
}, 100);