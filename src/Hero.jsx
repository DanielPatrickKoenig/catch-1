import './Hero.css';

const Hero = (props) => {
  return (
    <div
        className="hero"
        style={{ left: `${props.x}%`, top: `${props.y - 6}%` }}
    >
        <div className="hero-content">
            { props.childern }
        </div>
    </div>
  );
};

export default Hero;
