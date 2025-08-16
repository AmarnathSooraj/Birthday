'use client';
import React, { useRef, useState, useEffect } from 'react';
import HTMLFlipBook from "react-pageflip";

function LoveStoryBook() {
  // Correct typing for refs
  const bookRef = useRef<InstanceType<typeof HTMLFlipBook> | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const pokemonData = [
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
