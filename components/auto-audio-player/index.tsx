import React from 'react';

export default function AutoAudioPlayer() {
  const musicRef = React.useRef<HTMLAudioElement>();

  const play = () => {
    musicRef.current.play();
  };

  React.useEffect(() => {
    const r = window.confirm('Would You Like To Play Background Music?');
    if (r) {
      play();
    }
  }, [null]);

  return (
    <div style={{ display: 'none' }}>
      <audio ref={musicRef} loop>
        <source src="/media/galaxy-fragments.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
}
