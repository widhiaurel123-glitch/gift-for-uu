// ===============================
// BUKA HADIAH & PUTAR LAGU
// ===============================

function openGift(){
    document.getElementById("opening").style.display="none";
    document.getElementById("main").classList.remove("hidden");
    
    // Memutar lagu otomatis saat tombol dibuka
    let audio = document.querySelector("audio");
    if (audio) {
        audio.play();
    }
    
    startTyping();
}



// ===============================
// EFEK MENGETIK SURAT
// ===============================

const text = "Halo sayang ❤️ Aku membuat website kecil-kecilan ini khusus buat kamu. Terima kasih sudah hadir, menemani, dan membuat hari-hariku lebih indah.";

let index = 0;

function startTyping(){
    let typing = document.getElementById("typing");

    let interval = setInterval(()=>{
        typing.innerHTML += text[index];
        index++;

        if(index >= text.length){
            clearInterval(interval);
        }
    }, 50);
} // <--- Tanda tutup kurung ini kemarin kurang!



// ===============================
// HATI BERJATUHAN
// ===============================

function createHeart(){
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 5) + "s";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 300);



// ===============================
// COUNTDOWN HARI BERSAMA
// ===============================

const tanggalJadian = new Date("2026-2-16");

function hitungHari(){
    let sekarang = new Date();
    let selisih = sekarang - tanggalJadian;
    let hari = Math.floor(selisih / (1000 * 60 * 60 * 24));

    let daysEl = document.getElementById("days");
    if (daysEl) {
        daysEl.innerHTML = hari + " Hari ❤️";
    }
}

hitungHari();



// ===============================
// TOMBOL CINTA
// ===============================

function love(){
    alert("Aku sayang kamu ❤️ Jangan lupa bahagia ya!");
}
