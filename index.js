const nama = document.getElementById('nama');
const kodam = document.getElementById('kodam');
const btnSave = document.getElementById('btnSave');

function generateKodam(){
  let kumpulanKodam = ["harimau", "naga", "ulat", "ular", "singa", "serigala","tempe", "tahu", "cilok", "panda", "batubata", "kucing", "kaoskaki", "elang", "unicorn", "minotaur", "macan"];
  let kumpulanKodam2 = ["beracun", "ganas", "menggoda", "sigma", "mewing", "jomok", "duduk", "pemalas", "pemberani", "kecil", "capek", "tua", "berumur", "gendut", "pencangkul"]
  let pass = '';

  // Ambil dua kata secara acak dari array nama
  let kata1 = kumpulanKodam[Math.floor(Math.random() * kumpulanKodam.length)];
  let kata2 = kumpulanKodam2[Math.floor(Math.random() * kumpulanKodam2.length)];

  // Gabungkan kedua kata menjadi password
  pass = kata1 + " " + kata2;

  return pass;
}

function getKodam(){
  const newPass = generateKodam();
  
  if(nama.value == null || nama.value == 0){
    alert('anda belum mengisi nama')
  }else{
    kodam.value = newPass;
  }
  
  
  
  
}

function save(){
  const newPass = kodam.value;
  
  if(!nama.value && !kodam.value ){
    alert('masukan terlebih dahulu nama mu!!!')
  }else if(nama.value && kodam.value){
    btnSave.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`halo ${nama.value} kodam mu: ${newPass}`));
  btnSave.setAttribute('download', 'Mykodam.txt')
  // setTimeout(() => {
  //   alert('password berhasil disimpan')
  // },1000)
  }
  
  
}
