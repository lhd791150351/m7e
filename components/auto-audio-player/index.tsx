import React from 'react';

export default function AutoAudioPlayer() {
  const musicRef = React.useRef<HTMLAudioElement>();

  const play = () => {
    musicRef.current.play();
  };

  React.useEffect(() => {
    document.addEventListener('click', () => {
      play();
    });
  }, [null]);

  return (
    <div style={{ display: 'none' }}>
      <audio ref={musicRef} loop autoPlay>
        <source src="/media/galaxy-fragments.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
}
