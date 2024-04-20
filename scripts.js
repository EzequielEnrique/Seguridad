// scripts.js

// Función para obtener la IP pública de un servicio externo
async function getPublicIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('Error al obtener la IP pública:', error);
        return 'No disponible';
    }
}

// Función para mostrar la IP pública en una alerta
async function showPublicIP() {
    // Obtenemos la IP pública de un servicio externo
    const ip = await getPublicIP();
    alert(`IP pública: ${ip}`);
}

// Añadimos el evento al primer botón
document.getElementById('button1').addEventListener('click', showPublicIP);


// Función para pedir un número y mostrar su representación binaria
function convertToBinary() {
    // Pedimos un número al usuario
    const numberString = prompt('Por favor, ingresa un número:');
    
    // Convertimos la entrada a número entero
    const number = parseInt(numberString, 10);
    
    // Verificamos si la entrada es un número válido
    if (isNaN(number)) {
        alert('Por favor, ingresa un número válido.');
    } else {
        // Convertimos el número a binario
        const binaryString = number.toString(2);
        
        // Mostramos el resultado en una alerta
        alert(`El número ${number} en binario es: ${binaryString}`);
    }
}

// Añadimos el evento al segundo botón
document.getElementById('button2').addEventListener('click', convertToBinary);


// Función para generar una contraseña segura
function generateSecurePassword() {
    // Definir caracteres disponibles para la contraseña
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    
    // Longitud deseada de la contraseña
    const passwordLength = 12;  // Puedes ajustar la longitud según tus necesidades
    
    // Generar la contraseña
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    
    // Mostrar la contraseña en una alerta
    alert(`Contraseña segura generada: ${password}`);
}

// Añadimos el evento al tercer botón
document.getElementById('button3').addEventListener('click', generateSecurePassword);

