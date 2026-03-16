const buyBtn = document.getElementById('buy-btn');
const resetBtn = document.getElementById('reset-btn');
const counterDisplay = document.getElementById('counter');
const toastContainer = document.getElementById('toast-container');

// 1. Ładowanie licznika z localStorage na starcie
let count = localStorage.getItem('orderCount') || 0;
counterDisplay.innerText = count;

// Funkcja obsługująca kliknięcie "Kup"
buyBtn.addEventListener('click', () => {
    // Logika licznika
    count++;
    counterDisplay.innerText = count;
    localStorage.setItem('orderCount', count); // Zapis do pamięci

    // Tworzenie powiadomienia
    showToast(`Dodano produkt do koszyka! (Razem: ${count})`);
});

// Funkcja tworząca Toast
function showToast(message) {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerText = message;

    toastContainer.appendChild(toast);

    // Automatyczne usuwanie po 3 sekundach
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Resetowanie pamięci (dodatek dla wygody)
resetBtn.addEventListener('click', () => {
    localStorage.clear();
    count = 0;
    counterDisplay.innerText = count;
});
