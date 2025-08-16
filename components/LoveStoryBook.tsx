'use client';
import React, { useRef, useState, useEffect } from 'react';
import HTMLFlipBook from "react-pageflip";

function LoveStoryBook() {
  // Correct typing for refs
  const bookRef = useRef<InstanceType<typeof HTMLFlipBook> | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const pokemonData = [
    { id: "006", 
      description: "Today is your birthday, it's the 4th birthday together. Njn orikalum vicharichittilaa ee 4 kolam nammlk orimich celebrate cheyan pattum nn. Ippolum enik orma ind 1st birthday kk njn ninnod choich ee  kolathe wish nthann nn. Ann nee ente adthu paranj "nee ennum koode indaya mathiii".
Enik nee allathe vere oru allene chinthikan koodi pattila, maybe vere allukal vanneka pakshe ninne pole akkan aarkum kazhiyila.Anyway I wish We can celebrate the coming birthdays together.", audio: "/audio/aradhike.mp3" },
    { id: "025",
      description: "Vayas 21 aayii, prayam koodi varanann, athpole thanne prshngalum. Ellam prshnagalum kaykarym cheyan ulla sakthi Ninak ind nn ariyam Ennalum parayannn be strong in every situation. Vayas 21 ayakilum enik ippolum nee 17 18 ann. Orupaad miss cheyum ninte koode ulla aa time . Ann onnum enik sherik vella mnsilayernila. But now I can understand.", 
      audio: "/audio/june.mp3" },
    { id: "125", 
      description: "Orupaad ishtam ann ninne......ikk ariyila nth kond ann pakshe oru krym ariyam ikk nte ammene ninnil kannan pattind maybe athavnm.", 
      audio: "/audio/meri.mp3" },
    { id: "185",
      description: "Ethranaal nammal orimich kannum nn ariyila. Njn Nala oru boyfriend ayirinilaa ikk ariyam pakshe nee Nala oru girlfriend ann. Kore karymgal sacrifice cheythittund ikk vndi. Nee ninte nalath nn vendi jeeviknm inji ulla varshgal.", 
      audio: "/audio/chane.mp3" },
    { id: "448",
      description: "Kazhinja karygal oke potte,varan ullath varate. Nth thanne aayalum nee ithral veshmichthinn oke Nala kalam varum kuttaa. Deivam indakil ath agne thanne vannirikum, Ninne vnda nn paranjavrde munnil oke ninne thedii alukal vannirikum", 
      audio: "/audio/kaise.mp3" },
      { id: "006", 
      description: "Life alle ith....orepole ore wavelength il poknm nn illalo...maybe ups and downs indavum. Usefull avanth oke enjoy cheyy useless avanth ozhivakki vidd", audio: "/audio/aradhike.mp3" },
    { id: "025",
      description: "When Pikachu meet, they touch tails to exchange electricity as a greeting.", 
      audio: "/audio/june.mp3" },
    { id: "125", 
      description: "Often kept at power plants to regulate electricity. Competes with others to attract lightning during storms.", 
      audio: "/audio/meri.mp3" },
    { id: "185",
      description: "Despite looking like a tree, its body is more like rock. Hates water and hides when it rains.", 
      audio: "/audio/chane.mp3" },
    { id: "448",
      description: "Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.", 
      audio: "/audio/kaise.mp3" },
      { id: "006", 
      description: "Flies in search of strong opponents. Breathes extremely hot fire that melts anything, but never uses it on weaker foes.", audio: "/audio/aradhike.mp3" },
    { id: "025",
      description: "When Pikachu meet, they touch tails to exchange electricity as a greeting.", 
      audio: "/audio/june.mp3" },
    { id: "125", 
      description: "Often kept at power plants to regulate electricity. Competes with others to attract lightning during storms.", 
      audio: "/audio/meri.mp3" },
    { id: "185",
      description: "Despite looking like a tree, its body is more like rock. Hates water and hides when it rains.", 
      audio: "/audio/chane.mp3" },
    { id: "448",
      description: "Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.", 
      audio: "/audio/kaise.mp3" },
      { id: "006", 
      description: "Flies in search of strong opponents. Breathes extremely hot fire that melts anything, but never uses it on weaker foes.", audio: "/audio/aradhike.mp3" },
    { id: "025",
      description: "When Pikachu meet, they touch tails to exchange electricity as a greeting.", 
      audio: "/audio/june.mp3" },
    { id: "125", 
      description: "Often kept at power plants to regulate electricity. Competes with others to attract lightning during storms.", 
      audio: "/audio/meri.mp3" },
    { id: "185",
      description: "Despite looking like a tree, its body is more like rock. Hates water and hides when it rains.", 
      audio: "/audio/chane.mp3" },
    { id: "448",
      description: "Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.", 
      audio: "/audio/kaise.mp3" },
      { id: "006", 
      description: "Flies in search of strong opponents. Breathes extremely hot fire that melts anything, but never uses it on weaker foes.", audio: "/audio/aradhike.mp3" },
    { id: "025",
      description: "When Pikachu meet, they touch tails to exchange electricity as a greeting.", 
      audio: "/audio/june.mp3" },
    { id: "125", 
      description: "Often kept at power plants to regulate electricity. Competes with others to attract lightning during storms.", 
      audio: "/audio/meri.mp3" },
    { id: "185",
      description: "Despite looking like a tree, its body is more like rock. Hates water and hides when it rains.", 
      audio: "/audio/chane.mp3" },
    { id: "448",
      description: "Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.", 
      audio: "/audio/kaise.mp3" },
      { id: "006", 
      description: "Flies in search of strong opponents. Breathes extremely hot fire that melts anything, but never uses it on weaker foes.", audio: "/audio/aradhike.mp3" },
    { id: "025",
      description: "When Pikachu meet, they touch tails to exchange electricity as a greeting.", 
      audio: "/audio/june.mp3" },
    { id: "125", 
      description: "Often kept at power plants to regulate electricity. Competes with others to attract lightning during storms.", 
      audio: "/audio/meri.mp3" },
    { id: "185",
      description: "Despite looking like a tree, its body is more like rock. Hates water and hides when it rains.", 
      audio: "/audio/chane.mp3" },
    { id: "448",
      description: "Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.", 
      audio: "/audio/kaise.mp3" },
      { id: "006", 
      description: "Flies in search of strong opponents. Breathes extremely hot fire that melts anything, but never uses it on weaker foes.", audio: "/audio/aradhike.mp3" },
    { id: "025",
      description: "When Pikachu meet, they touch tails to exchange electricity as a greeting.", 
      audio: "/audio/june.mp3" },
    { id: "125", 
      description: "Often kept at power plants to regulate electricity. Competes with others to attract lightning during storms.", 
      audio: "/audio/meri.mp3" },
    { id: "185",
      description: "Despite looking like a tree, its body is more like rock. Hates water and hides when it rains.", 
      audio: "/audio/chane.mp3" },
    { id: "448",
      description: "Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.", 
      audio: "/audio/kaise.mp3" },
  ];

  const [currentAudio, setCurrentAudio] = useState(pokemonData[0].audio);

  // Play audio whenever currentAudio changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = currentAudio;
      audioRef.current.play().catch(() => {
        console.log("Autoplay blocked, user interaction required.");
      });
    }
  }, [currentAudio]);

  // Handle page flip
  // Handle page flip
const onFlip = (e: { data: number }) => {
  const pageIndex = e.data;
  if (pageIndex > 0) {
    setCurrentAudio(pokemonData[pageIndex - 1].audio);
  }
};


  return (
    <div className="relative">
      <audio ref={audioRef} loop />
      <HTMLFlipBook
        ref={bookRef}
        width={370}
        height={600}
        maxShadowOpacity={0.5}
        drawShadow={true}
        showCover={true}
        size="fixed"
        onFlip={onFlip}
      >
        <div>
          <div className="w-full h-full rounded-2xl flex justify-center items-center cover text-2xl font-light">
            Our Story never ends
          </div>
        </div>

        {pokemonData.map((pokemon) => (
          <div className="page rounded-4xl" key={pokemon.id}>
            <div className="page-content">
              <div className="pokemon-container">
                <img
                  src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${pokemon.id}.png`}
                />
                <div className="pokemon-info">
                  <p className="pokemon-description">{pokemon.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
}

export default LoveStoryBook;
