'use client';
import React, { useRef, useState, useEffect } from 'react';
import HTMLFlipBook from "react-pageflip";

function LoveStoryBook() {
  const bookRef = useRef(null);
  const audioRef = useRef(null);

  const pokemonData = [
    { id: "006", name: "Charizard", types: ["Fire", "Flying"], description: "Flies in search of strong opponents. Breathes extremely hot fire that melts anything, but never uses it on weaker foes.", audio: "/audio/charizard.mp3" },
    { id: "025", name: "Pikachu", types: ["Electric"], description: "When Pikachu meet, they touch tails to exchange electricity as a greeting.", audio: "/audio/pikachu.mp3" },
    { id: "125", name: "Electabuzz", types: ["Electric"], description: "Often kept at power plants to regulate electricity. Competes with others to attract lightning during storms.", audio: "/audio/electabuzz.mp3" },
    { id: "185", name: "Sudowoodo", types: ["Rock"], description: "Despite looking like a tree, its body is more like rock. Hates water and hides when it rains.", audio: "/audio/sudowoodo.mp3" },
    { id: "448", name: "Lucario", types: ["Fighting", "Steel"], description: "Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.", audio: "/audio/lucario.mp3" },
    { id: "658", name: "Greninja", types: ["Water", "Dark"], description: "Creates throwing stars from compressed water that can slice through metal when thrown at high speed.", audio: "/audio/greninja.mp3" },
    { id: "491", name: "Darkrai", types: ["Dark"], description: "A legendary Pokémon that appears on moonless nights, putting people to sleep and giving them nightmares.", audio: "/audio/darkrai.mp3" }
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
  const onFlip = (e) => {
    const pageIndex = e.data; // current page index
    if (pageIndex > 0) {
      setCurrentAudio(pokemonData[pageIndex - 1].audio); // -1 because cover page is index 0
    }
  };

  return (
    <div className="relative">
      <audio ref={audioRef} loop />
      <HTMLFlipBook
        ref={bookRef}
        width={370}
        height={500}
        maxShadowOpacity={0.5}
        drawShadow={true}
        showCover={true}
        size='fixed'
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
                  alt={pokemon.name}
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
