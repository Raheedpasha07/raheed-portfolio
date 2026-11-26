import { createRoot } from 'react-dom/client';
import TiltedCard from './react-bits/TiltedCard.jsx';
import SpotlightCard from './react-bits/SpotlightCard.jsx';

function Portrait() {
  return (
    <TiltedCard
      containerHeight="100%" imageHeight="100%" imageWidth="100%"
      radius={14} rotateAmplitude={2} scaleOnHover={1}
      glare={0} shadow={0} parallax={0} intro={false}
      gyroscope={false} showTooltip={false} flipOnClick={false}
    >
      <SpotlightCard
        className="portrait-stage"
        spotlightColor="#efefef"
        intensity={0.08}
        spotlightSize={320}
        borderGlow={0.09}
        proximity={0}
        flare={false}
        style={{ '--spotlight-card-surface': '#343631' }}
      >
        <div className="portrait-lines" aria-hidden="true" />
        <img
          src="/assets/raheed-portrait.webp"
          alt="Portrait of Raheed Pasha"
          width="840" height="1000"
          draggable="false"
          fetchPriority="high"
        />
      </SpotlightCard>
    </TiltedCard>
  );
}

createRoot(document.querySelector('#portrait-island')).render(<Portrait />);
