// Funzione per aprire il modale di registrazione
function openRegister() {
    document.getElementById('registerModal').style.display = 'flex';
}

// Funzione per aprire il modale di login
function openLogin() {
    document.getElementById('loginModal').style.display = 'flex';
}

// Funzione per chiudere il modale
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Gestione registrazione
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    alert('You are successfully registered on Scotch. We hope you will enjoy your journey!');
    
    // Qui puoi aggiungere il codice per salvare l'utente nel database
    closeModal('registerModal');
});

// Gestione login
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Simula l'accesso, qui potresti verificare i dati con un database
    alert('Login effettuato con successo!');
    closeModal('loginModal');

    // Reindirizza alla pagina del profilo
    window.location.href = 'profile.html';  // crea anche un file profile.html successivamente
});
