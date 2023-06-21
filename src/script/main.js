const btnAbrir = document.getElementById("btnMenuAbrir");
const btnCerrar = document.getElementById("btnMenuCerrar");
const navbar = document.getElementById("navbar");

const canciones = [
  {
      titulo : "In the way",
      letra : `If I even tell u all I got for u<br>
      U wouldn´t come<br>
      U wouldn´t come<br> 
      <br>
      If I even tell u all the things we could<br>
      Do together<br>
      See together<br>
      <br>
      Ahh<br>
      <br>
      I´ve been trying to stay so far away<br>
      Even I can´t see my self reflected in your self<br>
      If I say, if I tell<br> 
      There is allways something in the way<br> 
      To tell how much a care.<br>
      <br>
      If I even tell u all the things we could<br>
      Do together<br> 
      See together<br>
      <br>
      If I even try to hide my feelings<br>
      Sometimes they would<br> 
      Blow up<br>
      <br>
      Now u left here<br> 
      Who will teach me<br> 
      How to bread<br> 
      How to see<br>
      <br>
      Who will teach me now<br> 
      <br>
      I´ve been trying to stay so far away<br>
      Even I can´t see my self reflected in your self<br>
      If I say, if I tell<br> 
      There is allways something in the way<br> 
      To tell how much a care.<br>
      <br>
      If I even tell u all the things we could<br>
      Do together<br> 
      See together<br>
      <br>
      If I even try to hide my feelings<br>
      Sometimes they would<br> 
      Blow up<br>
      <br>
      Who will teach me<br>
      How to bread<br>
      How to see<br>
      <br>
      Who I don´t know<br> 
      I gonna miss u<br> 
      <br>
      If I even tell u all the things we could<br>
      Do together<br> 
      See together<br>
      <br>
      If I even tell u all my feelings<br> 
      Sometimes they would<br> 
      Blow up`
  },
  {
      titulo : "Moving Motivation",
      letra : `U can talk me<br>
      U can stare<br>
      Shot whatever I don´t care<br>
      I have my hearth break and<br>
      I ain´t there<br> 
      I´ve grown lone some<br> 
      I go somewhere<br> 
      <br>
      See I´ve been<br> 
      I´ve been out in the dark<br>
      I´ve been out in the wild<br> 
      I´ve been feeling the vibes<br>
      When I can doing it all night<br>
      I know waht I´ve been facing<br>
      I know what I´ve been chasing<br> 
      Looking for salvation while I moving motivation<br>
      <br>
      All right<br> 
      All right yeah<br> 
      All right<br> 
      All right yeah !<br> 
      <br>
      So now u problably think u hurt me<br> 
      U thaught me with your army<br>
      But I´ve been pushing on with my own dreams<br>
      And life seems to guide me<br>
      And I can face u in my dark dreams<br> 
      U want me but u can´t stop me<br>
      Cause I know I know my voice is gonna show<br> 
      <br>
      Yeah !<br> 
      One day when I grew up I knew that<br> 
      When I smoke to much it just hold back<br> 
      U can talk me<br> 
      U can stare<br>
      Shot whatever but<br>
      I don´t care<br>
      I have my hearth break and<br>
      I ain´t there<br> 
      I´ve grown lone some<br> 
      I go somewhere<br> 
      <br>
      See I´ve been<br> 
      I´ve been out in the dark<br>
      I´ve been out in the wild<br> 
      I´ve been feeling the vibes<br>
      When I can doing it all night<br>
      I know waht I´ve been facing<br>
      I know what I´ve been chasing<br> 
      Looking for salvation while I Moving Motivation<br>
      <br>
      All right<br> 
      All right yeah<br> 
      All right<br> 
      All right yeah !<br> 
      <br>
      So now u problably think u hurt me<br> 
      U taught me with your army<br>
      But I´ve been pushing on with my own dreams<br>
      And life seems to guide me<br>
      And I can face u in my dark dreams<br> 
      U want me but u can´t stop me<br>
      Cause I know I know my voice is gonna show<br> 
      <br>
      Yeah !<br> 
      One day when I grew up I knew that<br> 
      When I smoke to much it just hold back<br> 
      Everytime u try to throwback I know that u know that<br> 
      But I´m honest I´m honest I´m keeping the truth<br> 
      I´m flying beyond this I´m living in improve<br>
      I feel the music inside my chest<br> 
      Feels god love and nothing esle<br>
      Let me take a break <br>
      <br>
      Cause I´m walking back and feel relax<br>
      When I´m looking back and I´m feeling these <br>
      Starting looking at you like oh men<br>
      Looking at like oh men<br>
      Gotta take a step forward <br>
      And I gotta do things right <br>
      And I gotta be honest in god life <br>
      And follow whatever he has in mind <br>
      <br>
      All right <br>
      All right yeah <br>
      All right <br>
      All right yeah ! <br>
      <br>
      U can talk me <br>
      U can stare<br>
      Shot whatever but <br>
      I don´t care<br>
      I have my hearth break and<br>
      I ain´t there <br>
      I´ve grown lone some <br>
      I go somewhere <br>
      <br>
      See I´ve been <br>
      I´ve been out in the dark<br>
      I´ve been out in the wild <br>
      I´ve been feeling the vibes<br>
      When I can doing it all night<br>
      I know waht I´ve been facing<br>
      I know what I´ve been chasing <br>
      Looking for salvation while I moving motivation<br>
      <br>
      All right <br>
      All right <br>
      All right <br>
      All right <br>
      <br>
      All right <br>
      All right <br>
      All right <br>
      All right 
      `
  },
  {
      titulo : "Orden del yo",
      letra : `Hay que salir y estar<br>
      Donde nadie te espera<br>
      Y así sorprender a todos <br>
      <br>
      Extraño sentir la gente ya <br>
      Aunque soy grandote ya no entro.. <br> 
      <br>
      Allá donde hay<br>
      Esperanzas del cielo <br>
      Allá donde estas<br>
      Quiero estar y reír<br>
      Junto a toda tu magia y ser… <br>
      <br>
      Yo se, yo se quién sos <br>
      Te conocí bien desde a<br>
      Adentro <br>
      <br>
      No me engañas <br>
      No me podras chamuyar <br>
      Ya no más…. <br>
      <br>
      No importa tener que estar <br>
      Lejos de todo lo que me gusta <br>
      No me importa ya, dejar todo por poco<br>
      Y quiero ser yo….<br>
      <br>
      Searching for a cure to seek my soul <br>
      Searching for a cure to heal my soul <br>
      <br>
      Qué querés que te diga ? <br>
      Todo el día acá tocando componiendo<br>
      En mí sillón y el mundo sigue girando <br>
      <br>
      Qué querés que te diga? <br>
      Que te diga cuanto pago para hacer mis cosas <br>
      Las hago con mis propias manos <br>
      <br>
      Qué querés que tes diga?,<br>
      Qué querés que te haga?<br>
      Qué querés ?! <br>
      Ya no tengo tiempo para hacer todo lo que querés <br>
      <br>
      Qué ? Querés otro favor ?  <br>
      Qué ? Querés otro favor ?<br>
      Ya no más <br>
      You gotta value time people spent with u !`
  },
  {
      titulo: "Flute mode",
      letra: `Move that ass <br>
      Like this flute <br>
      Will do right now<br>
      Common<br>
      <br>
      Marcando el tempo <br>
      Y sintiendo la música<br>
      Escalas y arpegios <br>
      Pero prefiero improvisar<br>
      Un paso atrás<br>
      Un paso más<br>
      Me dan ganas de bailar<br>
      Con este ritmo<br>
      Con esta flauta<br>
      Empezamos a bailar<br>
      Dandara ! <br>
      <br>
      Tocando esta melodía <br>
      Que trae amor <br>
      En la noche y el día<br>
      Lo que por dentro <br>
      No podía expresar<br>
      Con la música lo podía decir<br>
      Porque me hace sentir libre<br>
      Muy libre <br>
      Y ser feliz ! <br>
      <br>
      Tell me your sing <br>
      Tell me your fate<br>
      Tell me your move right now <br>
      <br>
      Tell me your sing <br>
      Tell me your fate<br>
      Tell me your move right now <br>
      <br>
      Noo yeah yeah <br>
      <br>
      Me siento libre<br>
      Never stop giving slow river <br>
      El bajo suena, mi solo escribe<br>
      Solo quiero que me tires <br>
      Lo que ya no sirve.<br>
      Vibra la vida, lo que vives<br>
      Ey, me siento mal ?, <br>
      O siempre estoy normal.<br>
      Solo viajando a otro lugar <br>
      De mi sistema solar.<br>
      Perdiendo pasos camine hasta <br>
      Lo profundo del mar<br>
      Para poder analizar <br>
      Mi irritacion mental,<br>
      Que me va consumiendo, <br>
      Como ese hash ardiendo, <br>
      Todos mis pensamientos <br>
      De la razón del tiempo.<br>
      Lo importante es trascender <br>
      Y no figurar, me dijo el profe<br>
      Antes de salir a cantar. <br>
      Ey! Nico kara en la base<br>
      Dandara haciendo que esto pase,<br>
      Tirando un freestyle ey me está grabando,<br>
      Yo lo estoy improvisando, <br>
      Ey yo! Rocking on a rough state <br>
      And every broken hearth and goes ok<br>
      <br>
      Tell me your sing <br>
      Tell me your fate<br>
      Tell me your move right now <br>
      <br>
      Tell me your sing <br>
      Tell me your fate<br>
      Tell me your move right now <br>
      <br>
      Tell<br>
      Tell <br>
      Move <br>
      <br>
      Tell<br>
      Tell <br>
      Move<br>
      <br>
      Tell<br>
      Tell <br>
      Move `
  },
  {
      titulo: "Anxiety",
      letra: `There's a sad story<br>
      Starting with a lie<br>
      Starting with an end <br>
      Starting with me crying<br>
      <br>
      Is there a happy ending? <br>
      All I can see is black <br>
      Everything turns dark <br>
      And im out of head <br>
      <br>
      For years and years<br>
      I tried to convince <br>
      That it doesent really matters <br>
      And now<br>
      <br>
      I just killed my self <br>
      Sometimes is in my skin<br>
      Sometimes in my hands <br>
      And all the time in my dreams <br>
      <br>
      Just don’t take it all of me <br>
      Dont let my breathe escape my body<br>
      Dont let me get insane no more <br>
      Cause I, <br>
      I’m not my anxiety<br>
      <br>
      Why I didnt set up my limits? <br>
      For years and year<br>
      I convince myself <br>
      I’m not <br>
      I’m not my <br>
      Anxiety<br>
      <br>
      I try to convice <br>
      That it doesn´t really matters<br>
      And now I just kill <br>
      My self everyday <br>
      <br>
      Sometimes is in my skin<br>
      Sometimes in my hands <br>
      And all the time in my dreams <br>
      <br>
      Is there a happy ending? <br>
      All I can see is black <br>
      Everything turns dark <br>
      And im out of head <br>
      <br>
      We have´ve been in love<br>
      We have´ve been in peace<br>
      We have´ve been friends for a long time <br>
      Now u get away <br>
      I wanna get back to u<br>
      I saw u running away <br>
      I saw u going to states <br>
      And u r leaving everything behind here <br>
      So I took my chance<br>
      I even´t care what u have been trough lately <br>
      <br>
      Just don’t take it all of me <br>
      Dont let my breathe escape my body<br>
      Dont let me get insane no more <br>
      Cause I, <br>
      I’m not my anxiety<br>
      <br>
      Why I didnt set up my limits? <br>
      For years and year<br>
      I convince myself <br>
      I’m not <br>
      I’m not my <br>
      Anxiety<br>
      <br>
      I’m not <br>
      I’m not my <br>
      Anxiety`
  },
  {
      titulo:"Mad at u",
      letra:`Every morning i woke up, i knew<br>
      everything i couldn´t ddo<br>
      every morning i woke and i knew <br>
      that i could´nt do.<br>
      so plese be there when i need u<br>
      so be there when everyone is walking on me<br>
      so be standing for me, don´t be shy for me.<br>
      <br>
      I´ven been thinking to much, in things i didn´t need<br>
      But everything u need. <br>
      so plese be there when i need a hand or two<br>
      so don´t be shy and hand them to me<br>
      yeah<br>
      <br>
      I gonna rock this bae, just wait a while<br>
      i´m gonna screw someone, yeah i´m mad<br>
      <br>
      Every time u tell me what to do,<br>
      every time u think i´m doing doing nice<br>
      every time i saw that face i knew that i failed again.<br>
      So please don´t think that i screw my life, <br>
      so plese give me some extra time, <br>
      so let me do what i love in my life for i little time. <br>
      <br>
      I´ven been thinking to much, in things i didn´t need<br>
      But everything u need yeah. <br>
      if u don´t like what i really do just tell me so <br>
      So can do it with all my strength<br>
      <br>
      I gonna rock this bae, just wait a while<br>
      i´m gonna screw someone, yeah i´m mad<br>
      <br>
      I´ve been think all day of motherfucker<br>
      u screw with and i screw with u<br>
      i don´t care wtf saying<br>
      so please be nice to everyone<br>
      so please be gentle to everyone<br>
      even the ones u don´t care for.`
  },
  {
      titulo: "Canción para el infante de 26 años",
      letra:`Si te cuesta levantarte temprano, <br>
      No te preocupes porque a mí también.<br>
      Todos los dias algo cambia, algo pasa <br>
      Y no sabemos que hacer.<br>
      <br>
      Nada nada, todo el día nada, hago nada<br>
      Porque no tengo ganas de hacer,<br>
      Aunque me guste lo dejo para el último <br>
      Porque no se.<br>
      <br>
      Param pam param<br>
      Param pam param<br>
      Param pam param<br>
      Param pam param<br>
      <br>
      Param pam param<br>
      Param pam param<br>
      Param pam param<br>
      Param pam param<br>
      <br>
      Nunca dejes que nadie te apure <br>
      A las cosas que debes probar,<br>
      Tu vida, tu tiempo y tu sueño no volveran.<br>
      No te condiciones a gente que no sabe <br>
      Te volverán muy loco.<br>
      <br>
      Hay que ser muy libres y poder gozar, <br>
      Si la vida te da nescuik <br>
      Haz una chocolorockeada<br>
      <br>
      Param pam param<br>
      Param pam param<br>
      Param pam param<br>
      Param pam param<br>
      <br>
      Param pam param<br>
      Param pam param<br>
      Param pam param<br>
      Param pam param<br>
      <br>
      Hay que ser muy libres y poder gozar, <br>
      Si la vida te da nescuik <br>
      Haz una chocolorockeada<br>
      <br>
      Param pam param<br>
      Param pam param<br>
      Param pam param<br>
      Param pam param<br>
      <br>
      Param pam param<br>
      Param pam param<br>
      Param pam param<br>
      Param pam param`
  },
  {
      titulo: "Cotillón cringe cumpleañito",
      letra: `En el día de tu cumpleaños <br>
      Me llamaste y me dijiste <br>
      Que estarías sola todo el día.<br>
      Y yo como buen amigo fui a visitarte.<br>
      Pero resultó ser una estafa todo el mundo estaba ahí <br>
      Y yo como un colgado no entendía<br>
      Que fumaban tus amigos todo el día.<br>
      <br>
      Ese humo me hizo mal <br>
      Me quise escapar<br>
      La mano se me trabo <br>
      En la puerta y sangro.<br>
      Au ! <br>
      <br>
      Para pa pa papapa papa paaaaa<br>
      Pararara pa pararara <br>
      Pararara rarara<br>
      Para pa pa papapa papa paaaaa<br>
      Pararara pa pararara <br>
      Pararara rarara raaaaa raaaa<br>
      Pararara ra ra ra ! <br>
      <br>
      Cuando vi mi mano que sangraba recordé<br> 
      Que soy propenso al desmayo y a la hipocondría.<br>
      Yo como un buen amigo me acosté en el suelo.<br>
      Todo lo demás está en blanco <br>
      Salvó el rostro de tu amiga quien desde muy cerca me decía: <br>
      Qué fumaste pibe? A dónde viajaste?<br>
      <br>
      Ese humo me hizo mal <br>
      Me quise escapar<br>
      La mano se me trabo <br>
      En la puerta y sangro.<br>
      Au ! <br>
      <br>
      Para pa pa papapa papa paaaaa<br>
      Pararara pa pararara <br>
      Pararara rarara<br>
      Para pa pa papapa papa paaaaa<br>
      Pararara pa pararara <br>
      Pararara rarara raaaaa raaaa<br>
      Pararara ra ra ra ! <br>
      <br>
      No se donde se han ido<br>
      Ya estoy en mi cama<br>
      Cuando cierro los ojos<br>
      Todo empieza a girar<br>
      Y a levitar<br>
      Despego y salgo <br>
      Por la ventana ya<br>
      Y veo la ciudad<br>
      <br>
      Para pa pa papapa papa paaaaa<br>
      Pararara pa pararara <br>
      Pararara rarara<br>
      Para pa pa papapa papa paaaaa<br>
      Pararara pa pararara <br>
      Pararara rarara raaaaa raaaa<br>
      Pararara ra ra ra ! 
      `
  }
];

const btn_menuAbrir = () => {
  navbar.classList.add("active");
};

const btn_menuCerrar = () => {
  navbar.classList.remove("active");
};

function cambiarSeccion(seccionId) {
  let seccion = document.getElementById(seccionId);
  if (seccion) {
    seccion.scrollIntoView({ behavior: "smooth" });
    history.replaceState({ seccionId: seccionId }, "", "#" + seccionId);
  }
}

function handleClick(event) {
  event.preventDefault();
  let seccionId = event.target.getAttribute("href").substring(1);
  cambiarSeccion(seccionId);
}

let enlacesNavegacion = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < enlacesNavegacion.length; i++) {
  enlacesNavegacion[i].addEventListener("click", handleClick);
};

window.addEventListener("popstate", function (event) {
  if (event.state && event.state.seccionId) {
    var seccionActual = document.getElementById(event.state.seccionId);
    if (seccionActual) {
      if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        cambiarSeccion(event.state.seccionId);
      }
    }
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("beforeunload", function (event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

var scrollTopButton = document.getElementById("scrollTopButton");

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 1000 || document.body.scrollTop > 106) {
    scrollTopButton.classList.add("show");
  } else {
    scrollTopButton.classList.remove("show");
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const cancionesList = document.querySelectorAll('.letras__lista li');

cancionesList.forEach((cancion) => {
  cancion.addEventListener('click', cargarLetra);
});

function cargarLetra(event) {
  cancionesList.forEach((cancion) => {
    cancion.classList.remove('active');
  });

  event.target.classList.add('active');

  const tituloCancion = event.target.innerText;

  const cancionSeleccionada = canciones.find(cancion => cancion.titulo === tituloCancion);

  if (cancionSeleccionada) {
    const letrasLetraDiv = document.querySelector('.letras__letra div');
    letrasLetraDiv.innerHTML = `
      <div>
        <h3>${cancionSeleccionada.titulo}</h3>
        <p>${cancionSeleccionada.letra}</p>
      </div>
    `;
  }
}


const checkbox = document.getElementById('checkbox');
const letrasLetraDiv = document.querySelector('.letras__letra');

checkbox.addEventListener('change', cambiarClase);

function cambiarClase() {
  if (checkbox.checked) {
    letrasLetraDiv.classList.add('darkMode');
  } else {
    letrasLetraDiv.classList.remove('darkMode');
  }
};
