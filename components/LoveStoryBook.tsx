'use client';
import React, { useRef, useState, useEffect } from 'react';
import HTMLFlipBook from "react-pageflip";

function LoveStoryBook() {
  // Correct typing for refs
  const bookRef = useRef<InstanceType<typeof HTMLFlipBook> | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const pokemonData = [
    { id: "1", 
      description: "Today is your birthday, it's the 4th birthday together. Njn orikalum vicharichittilaa ee 4 kolam nammlk orimich celebrate cheyan pattum nn. Ippolum enik orma ind 1st birthday kk njn ninnod choich ee  kolathe wish nthann nn. Ann nee ente adthu paranj nee ennum koode indaya mathiii.Enik nee allathe vere oru allene chinthikan koodi pattila, maybe vere allukal vanneka pakshe ninne pole akkan aarkum kazhiyila.Anyway I wish We can celebrate the coming birthdays together.", audio: "/audio/kunjan.mp3" },
    { id: "2",
      description: "Vayas 21 aayii, prayam koodi varanann, athpole thanne prshngalum. Ellam prshnagalum kaykarym cheyan ulla sakthi Ninak ind nn ariyam Ennalum parayannn be strong in every situation. Vayas 21 ayakilum enik ippolum nee 17 18 ann. Orupaad miss cheyum ninte koode ulla aa time . Ann onnum enik sherik vella mnsilayernila. But now I can understand.", 
      audio: "/audio/june.mp3" },
    { id: "3", 
      description: "Orupaad ishtam ann ninne......ikk ariyila nth kond ann pakshe oru krym ariyam ikk nte ammene ninnil kannan pattind maybe athavnm.", 
      audio: "/audio/meri.mp3" },
             { id: "12", 
      description: "And it continues", audio: "/audio/punchiri.mp3" },
    { id: "11",
      description: "I miss theseeeee days", 
      audio: "/audio/sona.mp3" },
    { id: "5",
      description: "Its all starts from here, jan 26 2022", 
      audio: "/audio/munbe.mp3" },
    { id: "4",
      description: "Ethranaal nammal orimich kannum nn ariyila. Njn Nala oru boyfriend ayirinilaa ikk ariyam pakshe nee Nala oru girlfriend ann. Kore karymgal sacrifice cheythittund ikk vndi. Nee ninte nalath nn vendi jeeviknm inji ulla varshgal.", 
      audio: "/audio/chane.mp3" },
      { id: "9", 
      description: "Happy brithday Unniyeeeee", audio: "/audio/aradhike.mp3" }
  ];

  const [currentAudio, setCurrentAudio] = useState(pokemonData[0].audio);

  // Play audio whenever currentAudio changes
  useEffect(() => {
  if (audioRef.current) {
    audioRef.current.pause();
    audioRef.current.src = currentAudio;

    audioRef.current.onloadedmetadata = () => {
      audioRef.current!.currentTime = 30; // skip to 40s position
      audioRef.current?.play().catch(() => {
        console.log("Autoplay blocked, user interaction required.");
      });
    };
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
        width={400}
        height={700}
        maxShadowOpacity={0.5}
        drawShadow={true}
        showCover={true}
        size="fixed"
        onFlip={onFlip}
      >
        <div>
          <div className="w-full h-full rounded-2xl flex justify-center items-center cover text-xl font-light text-center">
            May this year bring you more smiles, more love, and more moments that make your heart glow. Wishing you a birthday as beautiful as your soul and a year filled with blessings beyond measure. I love you foverever kuttaaaaaaaaaaaaaaaaa
          </div>
        </div>

        {pokemonData.map((pokemon) => (
          <div className="page rounded-4xl" key={pokemon.id}>
            <div className="page-content">
              <div className="pokemon-container">
                <img
                  src={`/photos/image${pokemon.id}.jpg`}
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
