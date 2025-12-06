import {
  Client,
  gql,
  cacheExchange,
  fetchExchange,
} from "https://esm.sh/@urql/core";
// import {
//   Client,
//   cacheExchange,
//   fetchExchange,
//   gql,
// } from "https://cdn.jsdelivr.net/npm/urql@5.0.1/dist/urql.es.min.js";
// import * as urql from "https://cdn.jsdelivr.net/npm/urql@5.0.1/dist/urql.es.min.js";
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

// const client = new Client({
//   url: "https://eu-west-2.cdn.hygraph.com/content/cmic8lwzx01e407w429wkjxja/master",
//   exchanges: [cacheExchange, fetchExchange],
//   fetchOptions: () => {
//     const token =
//       "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3NjM5OTk2ODAsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY21pYzhsd3p4MDFlNDA3dzQyOXdranhqYS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiNmFlMzc4OWItNTE2ZC00ODQxLWEzYmYtYWM0MGM2MWE4Zjc2IiwianRpIjoiY21pZGJ2NG1yMDNjdTA3bW1hZTh1Ymp0eCJ9.W8kcTboiqjeC2YCVO5KhNgQgkQ0JjzbWRAXGQ2d7kEwOxMSGbNbPUc2z42IhXYwx9bnL76nuAwnuSn7gF3fSqbFBUQAVdPX4h2e3lmXEWe48q7Msqam32yH9gCoWk2U5TVgXdKLv6XVRM8bJWw11R8P5P66QpAjYYZ-niYu4577tD2iUTdyMb_QpEvdFWel5Hfb-sfBWHG8u9xSLZ_eUEN8gPfbFcoQwmt-OQ8FW-w7-2yzPNakFqcZ9Z0-uKd_4pAIZjyfH8_JqERyTu18LzicX4AH9nF6zd1dcloew6TD-AHgDouosa8QMAsCgLreFbuadUsshFrs5VpS3O0BXfZhbxRDOAQOSQpujewUMoaCNod_AN7b5JVUfHGBkiWgjXNSL1PaWyaSXT56VQdhxXUlDdOS_OWlNWhfjCyMC0CcjwOwCsSDh5ivrPF3DWMzYYp0Ardllqs_oHzr1XDxS80s3kzmlyCRmIBA3sWu0BghYDVghBv2ITyZWflfebz5heS793iUYowVapVBUhYLPdzw5aezFkLV28aLfU-IvmKaS6vAU6KFHAvYLnibtAf2nOWxU-wcuOOfswFmzD8M8pvF-yXPIUczGSuuHD62O-6JsHGbgL7JDeJCosckTpUYslCCtI48GsfcGNBen6UlLaRjItJqDJRNRNyhix-hUhag";
//     return {
//       headers: { authorization: token ? `Bearer ${token}` : "" },
//     };
//   },
// });
// const TodosQuery = gql`
//   query {
//     detectives {
//       name
//       age
//       nationality
//       introduction
//       appearingInMedia
//       profilePhoto {
//         url
//       }
//     }
//   }
// `;

// client
//   .query(TodosQuery)
//   .toPromise()
//   .then((result) => {
//     const container = document.getElementById("modules-container");

//     container.innerHTML = result.data.detectives
//       .map(
//         (d) => `
//       <li>
//         <a class="floating-photo" data-title="${d.name}">
//           <img src="${d.profilePhoto.url}" alt="${d.name}">
//           <div class="photo-title">${d.name}</div>
//         </a>
//       </li>
//     `
//       )
//       .join("");

//     // 2️⃣ ADD THIS — start floating AFTER Hygraph content is added
//     initFloatingPhotos();
//   });

// document.addEventListener("DOMContentLoaded", () => {
//   const SIZE = 150;
//   const elements = Array.from(document.querySelectorAll(".floating-photo"));
//   const searchInput = document.getElementById("searchInput");
//   const searchBtn = document.getElementById("searchBtn");
//   let highlighted = null;
//   const fullHeight = document.documentElement.scrollHeight;
//   const fullWidth = document.documentElement.scrollWidth;

//   function initFloatingPhotos() {
//     const SIZE = 150;
//     const elements = Array.from(document.querySelectorAll(".floating-photo"));
//     const fullHeight = document.documentElement.scrollHeight;
//     const fullWidth = document.documentElement.scrollWidth;

//     const bubbles = elements.map((el) => {
//       const x = Math.random() * (fullWidth - SIZE);
//       const y = Math.random() * (fullHeight - SIZE);
//       const speed = 0.3 + Math.random() * 0.9;
//       const angle = Math.random() * Math.PI * 2;
//       const dx = Math.cos(angle) * speed;
//       const dy = Math.sin(angle) * speed;
//       el.style.left = x + "px";
//       el.style.top = y + "px";
//       return { el, x, y, dx, dy, paused: false };
//     });

//     // pause floating when hovered or highlighted
//     bubbles.forEach((b) => {
//       b.el.addEventListener("mouseenter", () => (b.paused = true));
//       b.el.addEventListener("mouseleave", () => (b.paused = false));
//     });

//     // floating animation
//     let lastTime = performance.now();
//     function animate(now) {
//       const dt = Math.min(40, now - lastTime) / 16.6667;
//       lastTime = now;
//       const w = fullWidth;
//       const h = fullHeight;

//       bubbles.forEach((b) => {
//         if (b.paused || b.el.classList.contains("highlighted")) return;

//         b.x += b.dx * dt;
//         b.y += b.dy * dt;
//         if (b.x <= 0 || b.x >= w - SIZE) b.dx *= -1;
//         if (b.y <= 0 || b.y >= h - SIZE) b.dy *= -1;
//         b.el.style.left = b.x + "px";
//         b.el.style.top = b.y + "px";
//       });

//       requestAnimationFrame(animate);
//     }
//     requestAnimationFrame(animate);

//     // search function
//     function searchPhotos() {
//       const query = searchInput.value.trim().toLowerCase();
//       console.log("Searching for:", query);
//       // remove previous highlight
//       if (highlighted) {
//         highlighted.classList.remove("highlighted");
//         highlighted = null;
//       }

//       if (!query) return;

//       const match = elements.find((el) =>
//         el.getAttribute("data-title").toLowerCase().includes(query)
//       );

//       if (match) {
//         console.log("Found match:", match.dataset.title);
//         const centerX = fullWidth / 2 - 100; // ~200px size
//         const centerY = fullHeight / 2 - 100;
//         match.classList.add("highlighted");
//         match.style.left = centerX + "px";
//         match.style.top = centerY + "px";
//         highlighted = match;
//       } else {
//         console.log("No match found");
//         alert("No matching title found.");
//       }
//     }

//     searchBtn.addEventListener("click", searchPhotos);
//     searchInput.addEventListener("keyup", (e) => {
//       if (e.key === "Enter") searchPhotos();
//     });
//   }

//   // add rating system
//   const API = "http://localhost:3000";

//   document.querySelectorAll(".rating-box").forEach((box) => {
//     const id = box.dataset.id;

//     const starsDiv = box.querySelector(".stars");
//     const avgSpan = box.querySelector(".avg");
//     const countSpan = box.querySelector(".count");

//     // Create clickable star <span> tags
//     starsDiv.innerHTML = "★★★★★"
//       .split("")
//       .map((s, i) => `<span class="star" data-star="${i + 1}">${s}</span>`)
//       .join("");

//     const stars = starsDiv.querySelectorAll(".star");

//     // // Load rating from server
//     // fetch(`${API}/rating/${id}`)
//     //   .then((res) => res.json())
//     //   .then((data) => updateDisplay(data.total, data.count));

//     // When user clicks a star
//     stars.forEach((star) => {
//       star.addEventListener("click", () => {
//         const rating = parseInt(star.dataset.star);

//         fetch(`${API}/rating`, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ detective_id: id, rating }),
//         })
//           .then((res) => res.json())
//           .then((data) => updateDisplay(data.total, data.count));
//       });
//     });

//     function updateDisplay(total, count) {
//       const average = count === 0 ? 0 : total / count;

//       avgSpan.innerText = average.toFixed(1);
//       countSpan.innerText = count;

//       // Highlight stars according to average
//       stars.forEach((s, i) => {
//         s.classList.toggle("active", i < Math.round(average));
//       });
//     }
//   });
// });

// 1️⃣ HYGRAPH CLIENT
// 1️⃣ HYGRAPH CLIENT
// const client = new Client({
//   url: "https://eu-west-2.cdn.hygraph.com/content/cmic8lwzx01e407w429wkjxja/master",
//   exchanges: [cacheExchange, fetchExchange],
//   fetchOptions: () => {
//     const token = "YOUR TOKEN HERE";
//     return { headers: { authorization: `Bearer ${token}` } };
//   },
// });

// const DetectivesQuery = gql`
//   query {
//     detectives {
//       name
//       introduction
//       profilePhoto {
//         url
//       }
//     }
//   }
// `;

// // 2️⃣ DEFINE FLOATING FUNCTION BEFORE IT IS CALLED
// function initFloatingPhotos() {
//   const SIZE = 150;
//   const elements = Array.from(document.querySelectorAll(".floating-photo"));
//   const searchInput = document.getElementById("searchInput");
//   const searchBtn = document.getElementById("searchBtn");
//   // const fullHeight = document.documentElement.scrollHeight;
//   // const fullWidth = document.documentElement.scrollWidth;
//   const fullWidth = window.innerWidth;
//   const fullHeight = window.innerHeight;
//   let highlighted = null;

//   const bubbles = elements.map((el) => {
//     const x = Math.random() * (fullWidth - SIZE);
//     const y = Math.random() * (fullHeight - SIZE);
//     const speed = 0.3 + Math.random() * 0.9;
//     const angle = Math.random() * Math.PI * 2;
//     const dx = Math.cos(angle) * speed;
//     const dy = Math.sin(angle) * speed;

//     el.style.position = "fixed";
//     el.style.left = x + "px";
//     el.style.top = y + "px";

//     return { el, x, y, dx, dy, paused: false };
//   });

//   bubbles.forEach((b) => {
//     b.el.addEventListener("mouseenter", () => (b.paused = true));
//     b.el.addEventListener("mouseleave", () => (b.paused = false));
//   });

//   let lastTime = performance.now();
//   function animate(now) {
//     const dt = Math.min(40, now - lastTime) / 16.6667;
//     lastTime = now;

//     // bubbles.forEach((b) => {
//     //   if (b.paused || b.el.classList.contains("highlighted")) return;

//     //   b.x += b.dx * dt;
//     //   b.y += b.dy * dt;

//     //   if (b.x <= 0 || b.x >= fullWidth - SIZE) b.dx *= -1;
//     //   if (b.y <= 0 || b.y >= fullHeight - SIZE) b.dy *= -1;

//     //   b.el.style.left = b.x + "px";
//     //   b.el.style.top = b.y + "px";
//     // });
//     bubbles.forEach((b) => {
//       const x = Math.random() * (fullWidth - SIZE);
//       const y = Math.random() * (fullHeight - SIZE);
//       b.x = x;
//       b.y = y;
//       b.el.style.left = x + "px";
//       b.el.style.top = y + "px";
//     });

//     requestAnimationFrame(animate);
//   }
//   requestAnimationFrame(animate);

//   // Search functionality
//   function searchPhotos() {
//     const query = searchInput.value.trim().toLowerCase();

//     if (highlighted) {
//       highlighted.classList.remove("highlighted");
//       highlighted = null;
//     }

//     if (!query) return;

//     const match = elements.find((el) =>
//       el.getAttribute("data-title").toLowerCase().includes(query)
//     );

//     if (match) {
//       const centerX = fullWidth / 2 - 100;
//       const centerY = fullHeight / 2 - 100;
//       match.classList.add("highlighted");
//       match.style.left = centerX + "px";
//       match.style.top = centerY + "px";
//       highlighted = match;
//     } else {
//       alert("No matching title found.");
//     }
//   }

//   searchBtn.addEventListener("click", searchPhotos);
//   searchInput.addEventListener("keyup", (e) => {
//     if (e.key === "Enter") searchPhotos();
//   });
// }

// // 3️⃣ FETCH HYGRAPH DATA AND START FLOATING
// client
//   .query(DetectivesQuery)
//   .toPromise()
//   .then((result) => {
//     const container = document.getElementById("modules-container");

//     container.innerHTML = result.data.detectives
//       .map(
//         (d) => `
//       <li>
//         <a class="floating-photo" data-title="${d.name}">
//           <img src="${d.profilePhoto.url}" alt="${d.name}">
//           <div class="photo-title">${d.name}</div>
//         </a>
//       </li>
//     `
//       )
//       .join("");

//     // CALL FLOATING FUNCTION AFTER CONTENT IS ADDED
//     initFloatingPhotos();
//   });

// // 4️⃣ RATING SYSTEM (unchanged)
// document.addEventListener("DOMContentLoaded", () => {
//   const API = "http://localhost:3000";

//   document.querySelectorAll(".rating-box").forEach((box) => {
//     const id = box.dataset.id;
//     const starsDiv = box.querySelector(".stars");
//     const avgSpan = box.querySelector(".avg");
//     const countSpan = box.querySelector(".count");

//     starsDiv.innerHTML = "★★★★★"
//       .split("")
//       .map((s, i) => `<span class="star" data-star="${i + 1}">${s}</span>`)
//       .join("");

//     const stars = starsDiv.querySelectorAll(".star");

//     stars.forEach((star) => {
//       star.addEventListener("click", () => {
//         const rating = parseInt(star.dataset.star);

//         fetch(`${API}/rating`, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ detective_id: id, rating }),
//         })
//           .then((res) => res.json())
//           .then((data) => updateDisplay(data.total, data.count));
//       });
//     });

//     function updateDisplay(total, count) {
//       const average = count === 0 ? 0 : total / count;

//       avgSpan.innerText = average.toFixed(1);
//       countSpan.innerText = count;

//       stars.forEach((s, i) => {
//         s.classList.toggle("active", i < Math.round(average));
//       });
//     }
//   });
// });

async function loadDetectives() {
  const client = new Client({
    url: "https://eu-west-2.cdn.hygraph.com/content/cmic8lwzx01e407w429wkjxja/master",
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: () => {
      const token =
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3NjM5OTk2ODAsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY21pYzhsd3p4MDFlNDA3dzQyOXdranhqYS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiNmFlMzc4OWItNTE2ZC00ODQxLWEzYmYtYWM0MGM2MWE4Zjc2IiwianRpIjoiY21pZGJ2NG1yMDNjdTA3bW1hZTh1Ymp0eCJ9.W8kcTboiqjeC2YCVO5KhNgQgkQ0JjzbWRAXGQ2d7kEwOxMSGbNbPUc2z42IhXYwx9bnL76nuAwnuSn7gF3fSqbFBUQAVdPX4h2e3lmXEWe48q7Msqam32yH9gCoWk2U5TVgXdKLv6XVRM8bJWw11R8P5P66QpAjYYZ-niYu4577tD2iUTdyMb_QpEvdFWel5Hfb-sfBWHG8u9xSLZ_eUEN8gPfbFcoQwmt-OQ8FW-w7-2yzPNakFqcZ9Z0-uKd_4pAIZjyfH8_JqERyTu18LzicX4AH9nF6zd1dcloew6TD-AHgDouosa8QMAsCgLreFbuadUsshFrs5VpS3O0BXfZhbxRDOAQOSQpujewUMoaCNod_AN7b5JVUfHGBkiWgjXNSL1PaWyaSXT56VQdhxXUlDdOS_OWlNWhfjCyMC0CcjwOwCsSDh5ivrPF3DWMzYYp0Ardllqs_oHzr1XDxS80s3kzmlyCRmIBA3sWu0BghYDVghBv2ITyZWflfebz5heS793iUYowVapVBUhYLPdzw5aezFkLV28aLfU-IvmKaS6vAU6KFHAvYLnibtAf2nOWxU-wcuOOfswFmzD8M8pvF-yXPIUczGSuuHD62O-6JsHGbgL7JDeJCosckTpUYslCCtI48GsfcGNBen6UlLaRjItJqDJRNRNyhix-hUhag";
      return {
        headers: { authorization: token ? `Bearer ${token}` : "" },
      };
    },
  });

  const DetectivesQuery = gql`
    query {
      detectives {
        name
        age
        nationality
        introduction
        appearingInMedia
        profilePhoto {
          url
        }
      }
    }
  `;

  const clientQueryResult = await client.query(DetectivesQuery);
  console.log(clientQueryResult);

  const list = document.querySelector(".photo-list");
  const detectives = clientQueryResult.data.detectives;
  list.innerHTML = "";

  const container = document.getElementById("modules-container");

  // Insert floating photos
  container.innerHTML = detectives
    .map(
      (d) => `
        <a class="floating-photo" data-id="${d.name}">
          <img src="${d.profilePhoto.url}" alt="${d.name}">
          <div class="photo-title">${d.name}</div>
        </a>
      `
    )
    .join("");

  function initDetectiveClick() {
    const photos = document.querySelectorAll(".floating-photo");

    photos.forEach((photo) => {
      photo.addEventListener("click", () => {
        const id = photo.dataset.id;

        loadDetectiveProfile(id);
      });
    });
  }

  function loadDetectiveProfile(id) {
    const selectDetective = detectives.find((d) => d.name === id);
    console.log(selectDetective);

    `Detective: ${selectDetective.name}\n\nIntroduction: ${selectDetective.introduction}`;
  }
  initFloatingPhotos();
  initDetectiveClick();
}
//   client
//     .query(query, { id })
//     .toPromise()
//     .then((result) => {
//       const d = result.data.detective;

//       const profile = document.getElementById("profile-container");

//       profile.innerHTML = `
//       <div class="profile-card">
//         <img src="${d.profilePhoto.url}">
//         <h2>${d.name}</h2>
//         <p>${d.introduction}</p>
//       </div>
//     `;
//     });

// --------------------- FLOATING SYSTEM ---------------------
function initFloatingPhotos() {
  const SIZE = 150;
  const items = [...document.querySelectorAll(".floating-photo")];

  const W = window.innerWidth;
  const H = window.innerHeight;

  const bubbles = items.map((el) => {
    const x = Math.random() * (W - SIZE);
    const y = Math.random() * (H - SIZE);
    const speed = 0.4 + Math.random();
    const angle = Math.random() * Math.PI * 2;

    const dx = Math.cos(angle) * speed;
    const dy = Math.sin(angle) * speed;

    el.style.left = x + "px";
    el.style.top = y + "px";

    return { el, x, y, dx, dy };
  });

  function animate() {
    bubbles.forEach((b) => {
      b.x += b.dx;
      b.y += b.dy;

      if (b.x <= 0 || b.x >= W - SIZE) b.dx *= -1;
      if (b.y <= 0 || b.y >= H - SIZE) b.dy *= -1;

      b.el.style.left = b.x + "px";
      b.el.style.top = b.y + "px";
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// Start
loadDetectives();
