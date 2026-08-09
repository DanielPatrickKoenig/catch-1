import './Hero.css';

const Hero = (props) => {
  return (
    <div
        className="hero"
        style={{ left: `${props.x}%`, top: `${props.y}%` }}
    >
        <div className="hero-content">
            { props.children }
        </div>
    </div>
  );
};

export default Hero;
