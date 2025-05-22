// Custom JavaScript can be added here

// Example: Smooth scrolling for navigation links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show 404 page or keep loading if offline
window.addEventListener('offline', function () {
    document.getElementById('loading-screen').innerHTML = `
        <div class="text-center">
            <h1>404</h1>
            <p>Halaman tidak ditemukan. Periksa koneksi internet Anda.</p>
        </div>
    `;
});

// pop up image
// Ambil elemen
var modal = document.getElementById("myModal");
var img = document.getElementById("myImage");
var modalImg = document.getElementById("imgPopup");
var closeBtn = document.getElementsByClassName("close")[0];

// Saat gambar diklik
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Saat tombol close diklik
closeBtn.onclick = function() { 
  modal.style.display = "none";
}
