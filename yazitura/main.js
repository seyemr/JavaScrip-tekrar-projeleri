// Tura ve yazı sayılarını oluştur ve başlangıçta sıfırla

let tura = 0;
let yazi = 0;

// Html de bulunan coin, flip butonu ve reset butonu seç.

let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

// flip butonuna tıklanıldığında 
flipBtn.addEventListener("click", () => {
    // Rastgele 0 veya 1 sayısını seçer (0: tura, 1: Yazı )

    let i = Math.floor(Math.random() * 2);

    // Coin animasyonunu geçici olarak kapat
    coin.style.animation = "none"

    if (i) {
        // Eğer i 1 ise  (Yazı), 100 milisaniye sonra coine flip-tura animasyonunu uygula
        setTimeout(() => {
            coin.style.animation = "spin-tura 3s forwards";
        }, 100);
        tura++;
    } else {

        // Eğer i 1 ise  (Tura), 100 milisaniye sonra coine flip-tura animasyonunu uygula
        setTimeout(() => {
            coin.style.animation = "spin-yazi 3s forwards";
        }, 100);
        yazi++;
    }

    // İstatistikleri Güncelle ve butonu devre dışı bırak
    setTimeout(updateStats, 3000);
    disableButton();
});

// istatistikleri güncelleme fonskiyonu
function updateStats() {
    document.querySelector("#tura-count").textContent = `Tura: ${tura}`;
    document.querySelector("#yazi-count").textContent = `Yazı: ${yazi}`;
}

// butonu geçici olarak devredışı bırakma
function disableButton() {
    flipBtn.disabled = true;
    setTimeout(() => {
        flipBtn.disabled = false;
    }, 3000);
}

// Sıfırla butonuna tıklama
resetBtn.addEventListener('click', () => {
    // Coin animasyonunu kapat, tura ve yazı sayışarını sıfıra, istatistikleri güncelle
    coin.style.animation = "none";
    tura = 0;
    yazi = 0;
    updateStats();
});