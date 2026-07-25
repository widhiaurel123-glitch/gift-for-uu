// ===============================
// BUKA HADIAH
// ===============================

function openGift(){

    document.getElementById("opening").style.display="none";

    document.getElementById("main").classList.remove("hidden");

    startTyping();

}



// ===============================
// EFEK MENGETIK SURAT
// ===============================

const text = 
"Halo sayang ❤️ Aku membuat website kecil-kecilan ini khusus buat kamu. Terima kasih sudah hadir, menemani, dan membuat hari-hariku lebih indah.";

let index = 0;


function startTyping(){

let typing = document.getElementById("typing");


let interval = setInterval(()=>{

    typing.innerHTML += text[index];

    index++;

    if(index >= text.length){

        clearInterval(interval);

    }
    
    
},50);



// ===============================
// HATI BERJATUHAN
// ===============================


function createHeart(){

let heart = document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";


heart.style.left =
Math.random()*100+"vw";


heart.style.animationDuration =
(3 + Math.random()*5)+"s";


heart.style.fontSize =
(15 + Math.random()*25)+"px";


document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},8000);


}


setInterval(createHeart,300);





// ===============================
// COUNTDOWN HARI BERSAMA
// GANTI TANGGAL DI SINI
// ===============================


const tanggalJadian = new Date("2026-2-16");


function hitungHari(){


let sekarang = new Date();


let selisih =
sekarang - tanggalJadian;


let hari =
Math.floor(
selisih/(1000*60*60*24)
);



document.getElementById("days").innerHTML =
hari+" Hari ❤️";


}


hitungHari();





// ===============================
// TOMBOL CINTA
// ===============================


function love(){


alert(
"Aku sayang kamu ❤️ Jangan lupa bahagia ya!"
);


}
