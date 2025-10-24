
document.addEventListener("DOMContentLoaded", () => {
  // Smooth fade-in when page loads
  document.body.classList.add("fade-in");

  // Get all links safely
  const links = document.querySelectorAll("a[href]");

  links.forEach(link => {
    // Skip anchor-only links and external links
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("javascript:")) return;

    // Add fade-out before navigation
    link.addEventListener("click", function (e) {
      const targetUrl = this.href;

      // Make sure it's same-origin (avoid external sites)
      if (targetUrl.startsWith(window.location.origin)) {
        e.preventDefault();
        document.body.classList.remove("fade-in");
        document.body.classList.add("fade-out");

        // Wait for animation before going to new page
        setTimeout(() => {
          window.location.href = targetUrl;
        }, 400);
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const downloadBtn = document.getElementById('downloadHistory');

  // === PDF DOWNLOAD ===
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function () {
      const historySection = document.getElementById('history');
      if (!historySection) return;

      const win = window.open('', '_blank');
      if (!win) return;

      const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
        .map(l => `<link rel="stylesheet" href="${l.href}">`)
        .join('\n');

      const html = `
        <html>
          <head>
            <title>Food Park History</title>
            ${stylesheets}
            <style>
              body { margin: 20px; }
            </style>
          </head>
          <body>
            ${historySection.outerHTML}
            <script>
              window.onload = function() { window.print(); }
            <\/script>
          </body>
        </html>
      `;

      win.document.open();
      win.document.write(html);
      win.document.close();
    });
  }

  // Accessibility: press Enter to trigger download
  const dl = document.getElementById('downloadHistory');
  if (dl) {
    dl.addEventListener('keyup', function (e) {
      if (e.key === 'Enter') dl.click();
    });
  }
});


// =====================
// LAUNCH CAROUSEL (5 images)
// =====================
let currentIndex = 0;
const launchImages = [
  "assets/img/launch1.jpg",
  "assets/img/launch2.jpg",
  "assets/img/launch3.jpg",
  "assets/img/launch4.jpg",
  "assets/img/launch5.jpg",
];

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = launchImages.length - 1;
  if (currentIndex >= launchImages.length) currentIndex = 0;

  const img = document.getElementById("carouselImage");
  if (!img) return;

  img.style.transition = "opacity 0.4s ease";
  img.style.opacity = 0;
  setTimeout(() => {
    img.src = launchImages[currentIndex];
    img.style.opacity = 1;
  }, 200);
}


// =====================
// CLAYGO CAROUSEL (4 images)
// =====================
let claygoIndex = 0;
const claygoImages = [
  "assets/img/A1.jpg",
  "assets/img/A2.jpg",
  "assets/img/A3.jpg",
  "assets/img/A4.jpg"
];

function changeClaygoImage(direction) {
  claygoIndex += direction;
  if (claygoIndex < 0) claygoIndex = claygoImages.length - 1;
  if (claygoIndex >= claygoImages.length) claygoIndex = 0;

  const img = document.getElementById("claygoImage");
  if (!img) return;

  img.style.transition = "opacity 0.4s ease";
  img.style.opacity = 0;
  setTimeout(() => {
    img.src = claygoImages[claygoIndex];
    img.style.opacity = 1;
  }, 200);
}

