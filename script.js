// const photos = document.querySelectorAll(".floating-photo");
// const screenW = window.innerWidth;
// const screenH = window.innerHeight;

// const floats = Array.from(photos).map((photo) => {
//   const speed = 0.3 + Math.random() * 1;
//   const angle = Math.random() * Math.PI * 2;
//   const dx = Math.cos(angle) * speed;
//   const dy = Math.sin(angle) * speed;
//   photo.style.left = Math.random() * (screenW - 150) + "px";
//   photo.style.top = Math.random() * (screenH - 150) + "px";
//   return { el: photo, dx, dy };
// });

// function animate() {
//   floats.forEach((f) => {
//     let x = parseFloat(f.el.style.left);
//     let y = parseFloat(f.el.style.top);
//     x += f.dx;
//     y += f.dy;

//     // bounce off edges
//     if (x <= 0 || x >= screenW - 150) f.dx *= -1;
//     if (y <= 0 || y >= screenH - 150) f.dy *= -1;

//     f.el.style.left = x + "px";
//     f.el.style.top = y + "px";
//   });
//   requestAnimationFrame(animate);
// }

// animate();

// // Recalculate boundaries when window resizes
// window.addEventListener("resize", () => {
//   screenW = window.innerWidth;
//   screenH = window.innerHeight;
// });
// // 🔍 Search: bring matching photo to center
// function searchPhotos() {
//     const query = searchInput.value.trim().toLowerCase();
//     if (highlighted) highlighted.classList.remove('highlighted');
//     highlighted = null;

//     if (query === '') return;

//     const match = elements.find(el => el.dataset.title.toLowerCase().includes(query));
//     if (match) {
//       match.classList.add('highlighted');
//       highlighted = match;
//     }
//   }

// searchBtn.addEventListener('click', searchPhotos);
// searchInput.addEventListener('keyup', e => {
//     if (e.key === 'Enter') searchPhotos();
//   });
// })();
document.addEventListener("DOMContentLoaded", () => {
  const SIZE = 150;
  const elements = Array.from(document.querySelectorAll(".floating-photo"));
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  let highlighted = null;

  const bubbles = elements.map((el) => {
    const x = Math.random() * (window.innerWidth - SIZE);
    const y = Math.random() * (window.innerHeight - SIZE);
    const speed = 0.3 + Math.random() * 0.9;
    const angle = Math.random() * Math.PI * 2;
    const dx = Math.cos(angle) * speed;
    const dy = Math.sin(angle) * speed;
    el.style.left = x + "px";
    el.style.top = y + "px";
    return { el, x, y, dx, dy, paused: false };
  });

  // pause floating when hovered or highlighted
  bubbles.forEach((b) => {
    b.el.addEventListener("mouseenter", () => (b.paused = true));
    b.el.addEventListener("mouseleave", () => (b.paused = false));
  });

  // floating animation
  let lastTime = performance.now();
  function animate(now) {
    const dt = Math.min(40, now - lastTime) / 16.6667;
    lastTime = now;
    const w = window.innerWidth;
    const h = window.innerHeight;

    bubbles.forEach((b) => {
      if (b.paused || b.el.classList.contains("highlighted")) return;

      b.x += b.dx * dt;
      b.y += b.dy * dt;
      if (b.x <= 0 || b.x >= w - SIZE) b.dx *= -1;
      if (b.y <= 0 || b.y >= h - SIZE) b.dy *= -1;
      b.el.style.left = b.x + "px";
      b.el.style.top = b.y + "px";
    });

    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);

  // search function
  function searchPhotos() {
    const query = searchInput.value.trim().toLowerCase();
    console.log("Searching for:", query);
    // remove previous highlight
    if (highlighted) {
      highlighted.classList.remove("highlighted");
      highlighted = null;
    }

    if (!query) return;

    const match = elements.find((el) =>
      el.getAttribute("data-title").toLowerCase().includes(query)
    );

    if (match) {
      console.log("Found match:", match.dataset.title);
      const centerX = window.innerWidth / 2 - 100; // ~200px size
      const centerY = window.innerHeight / 2 - 100;
      match.classList.add("highlighted");
      match.style.left = centerX + "px";
      match.style.top = centerY + "px";
      highlighted = match;
    } else {
      console.log("No match found");
      alert("No matching title found.");
    }
  }

  searchBtn.addEventListener("click", searchPhotos);
  searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") searchPhotos();
  });
});
