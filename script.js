function hitungLuas() {
    const alas = parseFloat(document.getElementById("alasInputLuas").value);
    const tinggi = parseFloat(document.getElementById("tinggiInputLuas").value);
    const luas = 0.5 * alas * tinggi;
    document.getElementById("hasil").innerText = `Luas: ${luas}`;
  }
  
  function hitungKeliling() {
    const sisi1 = parseFloat(document.getElementById("sisi1InputKeliling").value);
    const sisi2 = parseFloat(document.getElementById("sisi2InputKeliling").value);
    const sisi3 = parseFloat(document.getElementById("sisi3InputKeliling").value);
    const keliling = sisi1 + sisi2 + sisi3;
    document.getElementById("hasil").innerText = `Keliling: ${keliling}`;
  }
  
  function tampilkanLuas() {
    document.getElementById('rumusLuas').style.display = 'block';
    document.getElementById('rumusKeliling').style.display = 'none';
    document.getElementById('hasil').innerText = ''; // Menghapus hasil sebelumnya jika ada
    resetInputFields(); // Mengatur nilai input ke default
  }
  
  function tampilkanKeliling() {
    document.getElementById('rumusLuas').style.display = 'none';
    document.getElementById('rumusKeliling').style.display = 'block';
    document.getElementById('hasil').innerText = ''; // Menghapus hasil sebelumnya jika ada
    resetInputFields(); // Mengatur nilai input ke default
  }
  
  function resetInputFields() {
    document.getElementById("alasInputLuas").value = '';
    document.getElementById("tinggiInputLuas").value = '';
    document.getElementById("sisi1InputKeliling").value = '';
    document.getElementById("sisi2InputKeliling").value = '';
    document.getElementById("sisi3InputKeliling").value = '';
  }
  
  // Menambahkan fungsi untuk handle tombol reset
  document.addEventListener('DOMContentLoaded', function() {
    const resetButton = document.getElementById('Reset');
    if (resetButton) {
      resetButton.addEventListener('click', function() {
        resetInputFields();
        document.getElementById('hasil').innerText = ''; // Menghapus hasil
      });
    }
  });