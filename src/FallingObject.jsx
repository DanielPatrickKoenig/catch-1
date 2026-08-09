import './FallingObject.css';

const FallingObject = (props) => {
  return (
    <div
        className={`falling-object falling-object-${props.type}`}
        style={{ left: `${props.x}%`, top: `${props.y}%` }}
    >
        <div className="falling-object-content">
            { props.children }
        </div>
    </div>
  );
};

export default FallingObject;
