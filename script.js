const buyBtn = document.getElementById('buy-btn');
const resetBtn = document.getElementById('reset-btn');
const counterDisplay = document.getElementById('counter');
const toastContainer = document.getElementById('toast-container');


let count = localStorage.getItem('orderCount') || 0;
counterDisplay.innerText = count;


buyBtn.addEventListener('click', () => {
 
    count++;
    counterDisplay.innerText = count;
    localStorage.setItem('orderCount', count); 

    
    showToast(`Dodano produkt do koszyka! (Razem: ${count})`);
});


function showToast(message) {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerText = message;

    toastContainer.appendChild(toast);

   
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
