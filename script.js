var playSound = audio => {
  const clone = audio.cloneNode();
  clone.play();
  setTimeout(() => (clone.volume = 0.8), 400);
  setTimeout(() => (clone.volume = 0.6), 800);
  setTimeout(() => (clone.volume = 0.4), 1200);
  setTimeout(() => (clone.volume = 0.2), 1600);
  setTimeout(() => (clone.volume = 0), 2000);
};
var playSound2 = audio => {
  const clone = audio.cloneNode();
  clone.play();
  setTimeout(() => (clone.volume = 0.8), 400);
  setTimeout(() => (clone.volume = 0.6), 800);
  setTimeout(() => (clone.volume = 0.4), 1200);
  setTimeout(() => (clone.volume = 0.2), 1600);
  setTimeout(() => (clone.volume = 0), 2000);
};
var playSound3 = audio => {
  const clone = audio.cloneNode();
  clone.play();
  setTimeout(() => (clone.volume = 0.8), 400);
  setTimeout(() => (clone.volume = 0.6), 800);
  setTimeout(() => (clone.volume = 0.4), 1200);
  setTimeout(() => (clone.volume = 0.2), 1600);
  setTimeout(() => (clone.volume = 0), 2000);
};
//Null
const stopButton = document.querySelector(".stop");
// const movementC4 = document.querySelector(".slider");
var playNull = () => {
 
//   stopButton.classList.add("active");
//   // movementC4.classList.add("active");
//   // console.log("movement", movement);
//   setTimeout(() => C4Key.classList.remove("active"), 200);
 
//   C4 = "";
//   Db4 = "";
//   D4 = "";
//   Eb4 = "";
//   E4 = "";
//   F4 = "";
//   Gb4 = "";
//   G4 = "";
//   Ab4 = "";
//   A4 = "";
//   Bb4 = "";
//   B4 = "";
//   C5 = "";
//   Db5 = "";
//   D5 = "";
//   Eb5 = "";
//   E5 = "";
//   clearInterval(one);
//   clearInterval(two);
//   clearInterval(three);
//   return playE5;
// };
// stopButton.addEventListener("click", playNull);




// C4
const C4Key = document.querySelector(".C4-key");
const movementC4 = document.querySelector(".slider");
var playC4 = () => {
 
  C4Key.classList.toggle("active");
  movementC4.classList.add("active");
  // console.log("movement", movement);
  setTimeout(() => C4Key.classList.remove("active"), 200);
  setTimeout(() => movementC4.classList.remove("active"), 400);
  setTimeout(() => movementC4.classList.add("shrink"), 400);
   playSound(C4);
  playSound2(C4Two);
  playSound3(C4Three)
};
C4Key.addEventListener("click", playC4);

// Db4
const Db4Key = document.querySelector(".Db4-key");
const movementDb4 = document.querySelector(".slider");
const playDb4 = () => {
  
  Db4Key.classList.add("active");

  movementDb4.classList.add("active")
  // console.log("movement", movement);
  setTimeout(() => Db4Key.classList.remove("active"), 200);
  setTimeout(() => movementDb4.classList.remove("active"), 400);
  setTimeout(() => movementDb4.classList.add("shrink"), 400);
  playSound(Db4);
  playSound2(Db4Two);
  playSound3(Db4Three);
};

// D4
const D4Key = document.querySelector(".D4-key");
const movementD4 = document.querySelector(".slider");
var playD4 = () => {
  
  D4Key.classList.add("active");
  movementD4.classList.add("active");
  setTimeout(() => D4Key.classList.remove("active"), 200);
  setTimeout(() => movementD4.classList.remove("active"), 400);
  setTimeout(() => movementD4.classList.add("shrink"), 400);
  playSound(D4);
  playSound2(D4Two);
  playSound3(D4Three);
};
D4Key.addEventListener("click", playD4);

// Eb4
const Eb4Key = document.querySelector(".Eb4-key");
const playEb4 = () => {
 
  Eb4Key.classList.add("active");
  setTimeout(() => Eb4Key.classList.remove("active"), 200);
   playSound(Eb4);
  playSound2(Eb4Two);
  playSound3(Eb4Three);
};
Eb4Key.addEventListener("click", playEb4);

// E4
const E4Key = document.querySelector(".E4-key");
const playE4 = () => {
  
  E4Key.classList.add("active");
  setTimeout(() => E4Key.classList.remove("active"), 200);
  playSound(E4);
  playSound2(E4Two);
  playSound3(E4Three);
};
E4Key.addEventListener("click", playE4);

// F4
const F4Key = document.querySelector(".F4-key");
const playF4 = () => {
  
  F4Key.classList.add("active");
  setTimeout(() => F4Key.classList.remove("active"), 200);
  playSound(F4);
  playSound2(F4Two);
  playSound3(F4Three);
};
F4Key.addEventListener("click", playF4);

// Gb4
const Gb4Key = document.querySelector(".Gb4-key");
const playGb4 = () => {
  
  Gb4Key.classList.add("active");
  setTimeout(() => Gb4Key.classList.remove("active"), 200);
  playSound(Gb4);
  playSound2(Gb4Two);
  playSound3(Gb4Three);
};
Gb4Key.addEventListener("click", playGb4);

// G4
const G4Key = document.querySelector(".G4-key");
const playG4 = () => {
  
  G4Key.classList.add("active");
  setTimeout(() => G4Key.classList.remove("active"), 200);
  playSound(G4);
  playSound2(G4Two);
  playSound3(G4Three);
};
G4Key.addEventListener("click", playG4);

// Ab4
const Ab4Key = document.querySelector(".Ab4-key");
const playAb4 = () => {
  
  Ab4Key.classList.add("active");
  setTimeout(() => Ab4Key.classList.remove("active"), 200);
  playSound(Ab4);
  playSound2(Ab4Two);
  playSound3(Ab4Three);
};
Ab4Key.addEventListener("click", playAb4);

// A4
const A4Key = document.querySelector(".A4-key");
const playA4 = () => {
  
  A4Key.classList.add("active");
  setTimeout(() => A4Key.classList.remove("active"), 200);
  playSound(A4);
  playSound2(A4Two);
  playSound3(A4Three);
};
A4Key.addEventListener("click", playA4);

// Bb4
const Bb4Key = document.querySelector(".Bb4-key");
const playBb4 = () => {
  
  Bb4Key.classList.add("active");
  setTimeout(() => Bb4Key.classList.remove("active"), 200);
  playSound(Bb4);
  playSound2(Bb4Two);
  playSound3(Bb4Three);
};
Bb4Key.addEventListener("click", playBb4);

// B4
const B4Key = document.querySelector(".B4-key");
const playB4 = () => {
  
  B4Key.classList.add("active");
  setTimeout(() => B4Key.classList.remove("active"), 200);
  playSound(B4);
  playSound2(B4Two);
  playSound3(B4Three);
};
B4Key.addEventListener("click", playB4);

// C5
const C5Key = document.querySelector(".C5-key");
const playC5 = () => {
  
  C5Key.classList.add("active");
  setTimeout(() => C5Key.classList.remove("active"), 200);
  playSound(C5);
  playSound2(C5Two);
  playSound3(C5Three);
};
C5Key.addEventListener("click", playC5);

// Db5
const Db5Key = document.querySelector(".Db5-key");
const playDb5 = () => {
 
  Db5Key.classList.add("active");
  setTimeout(() => Db5Key.classList.remove("active"), 200);
   playSound(Db5);
  playSound2(Db5Two);
  playSound3(Db5Three);
};
Db5Key.addEventListener("click", playDb5);

// D5
const D5Key = document.querySelector(".D5-key");
const playD5 = () => {
  
  D5Key.classList.add("active");
  setTimeout(() => D5Key.classList.remove("active"), 200);
  playSound(D5);
  playSound2(D5Two);
  playSound3(D5Three);
};
D5Key.addEventListener("click", playD5);

// Eb5
const Eb5Key = document.querySelector(".Eb5-key");
const playEb5 = () => {
  
  Eb5Key.classList.add("active");
  setTimeout(() => Eb5Key.classList.remove("active"), 200);
  playSound(Eb5);
  playSound2(Eb5Two);
  playSound3(Eb5Three);
};
Eb5Key.addEventListener("click", playEb5);

// E5
const E5Key = document.querySelector(".E5-key");
const playE5 = () => {
 
  E5Key.classList.add("active");
  setTimeout(() => E5Key.classList.remove("active"), 200);
   playSound(E5);
  playSound2(E5Two);
  playSound3(E5Three);
};
E5Key.addEventListener("click", playE5);

window.addEventListener("keydown", ({ keyCode }) => {
  // Press Q
  if (keyCode === 81) return playC4();

  // Press 2
  if (keyCode === 50) return playDb4();

  // Press W
  if (keyCode === 87) return playD4();

  // Press 3
  if (keyCode === 51) return playEb4();

  // Press E
  if (keyCode === 69) return playE4();

  // Press R
  if (keyCode === 82) return playF4();

  // Press 5
  if (keyCode === 53) return playGb4();

  // Press T
  if (keyCode === 84) return playG4();

  // Press 6
  if (keyCode === 54) return playAb4();

  // Press Y
  if (keyCode === 89) return playA4();

  // Press 7
  if (keyCode === 55) return playBb4();

  // Press U
  if (keyCode === 85) return playB4();

  // Press I
  if (keyCode === 73) return playC5();

  // Press 9
  if (keyCode === 57) return playDb5();

  // Press O
  if (keyCode === 79) return playD5();

  // Press 0 
  if (keyCode === 48) return playEb5();

  // Press P
  if (keyCode === 80) return playE5();
}); 


//sound2
const sound2 = document.querySelector(".sndTwo");
sound2.addEventListener("click", function(sound1){
  C4 = new Audio("synth2/cq.wav");
  Db4 = new Audio("synth2/dbq.wav");
  D4 = new Audio("synth2/dq.wav");
  Eb4 = new Audio("synth2/ebq.wav");
  E4 = new Audio("synth2/eq.wav");
  F4 = new Audio("synth2/fq.wav");
  Gb4 = new Audio("synth2/gbq.wav");
  G4 = new Audio("synth2/gq.wav");
  Bb4 = new Audio("synth2/bbq.wav");
  B4 = new Audio("synth2/bq.wav");
  C5 = new Audio("synth2/c2q.wav");
  Db5 = new Audio("synth2/db2q.wav");
  D5 = new Audio("synth2/d2q.wav");
  Eb5 = new Audio("synth2/eb2q.wav");
  E5 = new Audio("synth2/e2q.wav");
  // document.querySelector('.background').style.backgroundColor = "#" + Math.floor(Math.random() * 2566);
 });


 //sound1
 
const sound1 = document.querySelector(".sndOne");
sound1.addEventListener("click", function(){
  C4 = new Audio("synth1/csynth.wav");
  Db4 = new Audio("synth1/dbsynth.wav");
  D4 = new Audio("synth1/dsynth.wav");
  Eb4 = new Audio("synth1/ebsynth.wav");
  E4 = new Audio("synth1/esynth.wav");
  F4 = new Audio("synth1/fsynth.wav");
  Gb4 = new Audio("synth1/gbsynth.wav");
  G4 = new Audio("synth1/gsynth.wav");
  Ab4 = new Audio("synth1/absynth.wav");
  A4 = new Audio("synth1/asynth.wav");
  Bb4 = new Audio("synth1/bbsynth.wav");
  B4 = new Audio("synth1/bsynth.wav");
  C5 = new Audio("synth1/c2synth.wav");
  Db5 = new Audio("synth1/db2synth.wav");
  D5 = new Audio("synth1/d2synth.wav");
  Eb5 = new Audio("synth1/eb2synth.wav");
  E5 = new Audio("synth1/e2synth.wav");
 });

 //chord


 const chord = document.querySelector(".chordBtn");
 chord.addEventListener("click", function(){

   C4Two = new Audio("synth1/esynth.wav");
   C4Three = new Audio("synth1/gsynth.wav");

   Db4Two = new Audio("synth1/fsynth.wav");
   Db4Three = new Audio("synth1/absynth.wav");

   D4Two = new Audio("synth1/gbsynth.wav");
   D4Three = new Audio("synth1/asynth.wav");

   Eb4Two = new Audio("synth1/gsynth.wav");
   Eb4Three = new Audio("synth1/bbsynth.wav");


   E4Two = new Audio("synth1/absynth.wav");
   E4Three = new Audio("synth1/bsynth.wav");

   F4Two = new Audio("synth1/asynth.wav");
   F4Three = new Audio("synth1/c2synth.wav");

   Gb4Two = new Audio("synth1/bbsynth.wav");
   Gb4Three = new Audio("synth1/db2synth.wav");

   G4Two = new Audio("synth1/bsynth.wav");
   G4Three = new Audio("synth1/d2synth.wav");

   Ab4Two = new Audio("synth1/c2synth.wav");
   Ab4Three = new Audio("synth1/eb2synth.wav");

   A4Two = new Audio("synth1/db2synth.wav");
   A4Three = new Audio("synth1/e2synth.wav");

   Bb4Two = new Audio("synth1/d2synth.wav");
   Bb4Three = new Audio("synth1/fsynth.wav");

   B4Two = new Audio("synth1/eb2synth.wav");
   B4Three = new Audio("synth1/asynbth.wav");

   C5Two = new Audio("synth1/d2synth.wav");
   C5Three = new Audio("synth1/gsynth.wav");

   Db5Two = new Audio("synth1/fsynth.wav");
   Db5Three = new Audio("synth1/absynth.wav");

   D5Two = new Audio("synth1/gbsynth.wav");
   D5Three = new Audio("synth1/asynth.wav");

   Eb5Two = new Audio("synth1/gsynth.wav");
   Eb5Three = new Audio("synth1/bbsynth.wav");

   E5Two = new Audio("synth1/absynth.wav");
   E5Three = new Audio("synth1/bsynth.wav");
  });

 //arpeggio

  const arpeggio = document.querySelector(".arpeg");
  arpeggio.addEventListener("click", function(){
      playC4 = () => {
       let movementConstant = document.querySelector(".slider");
      setInterval((one) => playSound(C4), 400,600);
      setInterval((two) => playSound2(Eb4), 600);
      setInterval((three) => playSound2(Bb4), 800);

      C4Key.classList.add("constant");
      movementConstant.classList.add("constant");
      
      setTimeout(() => C4Key.classList.remove("active"), 200);
      setTimeout(() => movementC4.classList.remove("active"), 400);
      setTimeout(() => movementC4.classList.add("shrink"), 400);

      // window.addEventListener("keydown", ({ keyCode }) => {
      // if (!keyCode === 87) playSound(null), playSound2(null), playSound3(null);
      // });
    };
    C4Key.addEventListener("click", playC4);


    //

    playD4 = () => {

      setInterval(() => playSound(D4), 400);
      setInterval(() => playSound2(F4), 600);
      setInterval(() => playSound2(C5), 800);

      D4Key.classList.add("active");
      movementD4.classList.add("active");
      
      setTimeout(() => D4Key.classList.remove("active"), 200);
      setTimeout(() => movementD4.classList.remove("active"), 400);
      setTimeout(() => movementD4.classList.add("shrink"), 400);
    };
    D4Key.addEventListener("click", playC4);
  });  

  //stop

// const stop = document.querySelector(".stop");
// stop.addEventListener("click", function(){
// playsound = clone.stop;
// playsound2 = clone.stop;
// playsound3 = clone.stop;

// });