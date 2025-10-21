// 1. Pilih tombol berdasarkan ID-nya
const tombolSapa = document.getElementById('sapaButton');
// 2. Tambahkan 'event listener' untuk aksi 'click'
tombolsapa.addEventListener('click', function() {
  // 3. Jalankan kode ini ketika tombol di-klik
  altert('Halo! Terima kasih sudah berkunjung!');
});

// 1. Selec the button and the body
const themeToggleButton = document.getElemenById('tombol-tema');
cosnt bodyElement = document.body;
// 2. Add a 'click' event listener to the button
themeToggleButton.addEventListener('click', function() {
  // 3. Toggle the 'drak-mode' class on the body
bodyElement.classList.toggle('dark-mode');
});
