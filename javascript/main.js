const navMenu = document.getElementById("nav-menu");
const iconoNav = document.getElementById("icono-nav")
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
//mostrar MENU
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu'),
        iconoNav.innerHTML.add('show-menu')
    })
}
//ocultar MENU
if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("show-menu")
    })
}
const navLink = document.querySelectorAll(".nav__link")
function linkAction(){
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}
navLink.forEach(item => item.addEventListener("click",linkAction))


document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', function () {
      document.querySelectorAll('.nav__link').forEach(item => {
        item.classList.remove('selected');
      });
  
      this.classList.add('selected');
    });
  });

  
  


// scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll scroll 
const sr = ScrollReveal({
    reset:true,
})
sr.reveal(`.home__data`,{origin:"top",delay:400,distance:"150px"});
sr.reveal(`.swiper`,{origin:"bottom",delay:600,distance:"150px"});
sr.reveal(`.nav-item-api`,{origin:"left",delay:200, distance:"500%"});





//swiper imagenes swiper imagenes swiper imagenes swiper imagenes swiper imagenes 
const homeSwiper = new Swiper(".swiper",{
  slidesPerView:1,
  spaceBetween:30,
  loop: true,
  speed: 1000,
  pagination:{
    el: '.swiper-pagination',
    clickable:true,
  },
  autoplay: {
    delay: 3000, 
    disableOnInteraction: false, 
  },
})


// pokemon api api api
const listaPokemon = document.querySelector("#listaPokemon");
const botonesHeader = document.querySelectorAll(".btn-header");
let URL = "https://pokeapi.co/api/v2/pokemon/";

// Llamada a la API para obtener Pokémon
for (let i = 1; i <= 151; i++) {
    fetch(URL + i)
        .then((response) => response.json())
        .then(data => mostrarPokemon(data))
}

// Función para mostrar los Pokémon
function mostrarPokemon(poke) {

    let tipos = poke.types.map((type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`);
    tipos = tipos.join('');

    let pokeId = poke.id.toString();
    if (pokeId.length === 1) {
        pokeId = "00" + pokeId;
    } else if (pokeId.length === 2) {
        pokeId = "0" + pokeId;
    }


    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
        <p class="pokemon-id-back">#${pokeId}</p>
        <div class="pokemon-imagen">
            <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
        </div>
        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <p class="pokemon-id">#${pokeId}</p>
                <h2 class="pokemon-nombre">${poke.name}</h2>
            </div>
            <div class="pokemon-tipos">
                ${tipos}
            </div>
            <div class="pokemon-stats">
                <p class="stat">${poke.height}m</p>
                <p class="stat">${poke.weight}kg</p>
            </div>
        </div>
    `;
    listaPokemon.append(div);


const pokemons = document.querySelectorAll('.pokemon');

const targetSection = document.querySelector('.peleas');

pokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        targetSection.scrollIntoView({
            behavior: 'smooth', 
            block: 'start'    
        });
    });
});

}

botonesHeader.forEach(boton => boton.addEventListener("click", (event) => {
    const botonId = event.currentTarget.id;

    listaPokemon.innerHTML = "";

    for (let i = 1; i <= 151; i++) {
        fetch(URL + i)
            .then((response) => response.json())
            .then(data => {

                if(botonId === "ver-todos") {
                    mostrarPokemon(data);
                } else {
                    const tipos = data.types.map(type => type.type.name);
                    if (tipos.some(tipo => tipo.includes(botonId))) {
                        mostrarPokemon(data);
                    }
                }

            })
    }
}));





const contenedorPokemons = document.getElementById('listaPokemon');

const pokemon1 = document.querySelector('.pokemon__1');
const pokemon2 = document.querySelector('.pokemon__2');

let seleccionActual = 'pokemon1';

contenedorPokemons.addEventListener('click', (e) => {
  const pokemon = e.target.closest('.pokemon');
  if (!pokemon) return; 
  const contenidoClonado = pokemon.cloneNode(true);

  if (seleccionActual === 'pokemon1') {
    pokemon1.innerHTML = ''; 
    pokemon1.appendChild(contenidoClonado);
    seleccionActual = 'pokemon2'; 
  } else {
    pokemon2.innerHTML = '';
    pokemon2.appendChild(contenidoClonado);
    seleccionActual = 'pokemon1'; 
  }
});



// juego juego juego juego juego juego juego juego juego juego juego juego juego juego juego juego juego juego juego juego juego


const number1 = document.querySelector('.number-1');  
const number2 = document.querySelector('.number-2'); 
const resultadoTexto = document.querySelector('.texto-resultado > h2');  
const resetButton = document.querySelector('.reset-total');  
const peleasDiv = document.querySelector('.peleas');  
const pokemon1Div = document.querySelector('.pokemon__1'); 
const pokemon2Div = document.querySelector('.pokemon__2'); 

const resultadoContenedor = document.querySelector('.texto-resultado');
resultadoContenedor.style.textAlign = "justify";
resultadoContenedor.style.margin = "auto";
resultadoContenedor.style.maxWidth = "600px";
resultadoContenedor.style.padding = "1rem";

function jugarJuego(eleccionUsuario) {
  const ganador = Math.random() < 0.5 ? 1 : 2;
  
  if (eleccionUsuario === ganador) {
    resultadoTexto.innerHTML = '<span class="titulo-span"; style="color: green;">¡Ganaste!</span> El Pokémon elegido ganó.';
  } else {
    resultadoTexto.innerHTML = '<span class="titulo-span"; style="color: red;">¡Perdiste!</span>El Pokémon elegido perdió.';
  }
}

function resetearJuego() {
  resultadoTexto.textContent = '';
  resultadoTexto.style.color = 'aliceblue';

  number1.style.pointerEvents = 'auto';  
  number2.style.pointerEvents = 'auto';  

  pokemon1Div.innerHTML = '';  
  pokemon2Div.innerHTML = '';  
}


number1.addEventListener('click', () => jugarJuego(1));
number2.addEventListener('click', () => jugarJuego(2));


resetButton.addEventListener('click', resetearJuego);  





//Memory game Memory game Memory game Memory game Memory game Memory game Memory game Memory game Memory game 
const grid = document.getElementById('grid');
const message = document.getElementById('message');
const winMessage = document.getElementById('win-message');
const resetButton2 = document.getElementById('reset__memory-game')

// Array con rutas
const images = [
  'assets/img/butterfly.PNG', 'assets/img/charmander.PNG','assets/img/fire.PNG',
  'assets/img/green.PNG', 'assets/img/pikachu.PNG','assets/img/pink.PNG','assets/img/plant.PNG','assets/img/snorblk.PNG',
  'assets/img/butterfly.PNG', 'assets/img/charmander.PNG','assets/img/fire.PNG',
  'assets/img/green.PNG', 'assets/img/pikachu.PNG','assets/img/pink.PNG','assets/img/plant.PNG','assets/img/snorblk.PNG',
];

let flippedCards = [];
let matchedPairs = 0;

// Mezclar las cartas
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function createCard(image) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">
        <img src="${image}" alt="Card Image">
      </div>
      <div class="card-back"></div>
    </div>
  `;

  card.addEventListener('click', () => {
    if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
      card.classList.add('flipped');
      flippedCards.push(card);

      if (flippedCards.length === 2) {
        checkMatch();
      }
    }
  });

  return card;
}

function checkMatch() {
  const [card1, card2] = flippedCards;
  const img1 = card1.querySelector('.card-front img').src;
  const img2 = card2.querySelector('.card-front img').src;

  if (img1 === img2) {
    matchedPairs++;
    showTemporaryMessage('¡Buen tiro!');
    flippedCards = [];

    if (matchedPairs === images.length / 2) {
      showWinMessage('¡Felicidades, ganaste el juego!');
    }
  } else {
    setTimeout(() => {
      card1.classList.remove('flipped');
      card2.classList.remove('flipped');
      flippedCards = [];
    }, 1000);
  }
}

function showTemporaryMessage(msg) {
  message.textContent = msg;
  message.style.display = 'block';
  setTimeout(() => {
    message.style.display = 'none';
  }, 1000);
}

function showWinMessage(msg) {
  winMessage.textContent = msg;
}

function initGame() {
  grid.innerHTML = ''; 
  matchedPairs = 0; 
  flippedCards = []; 
  winMessage.textContent = ''; 
  shuffle(images);
  images.forEach(image => {
    const card = createCard(image);
    grid.appendChild(card);
  });
}

initGame();

resetButton2.addEventListener('click', initGame);