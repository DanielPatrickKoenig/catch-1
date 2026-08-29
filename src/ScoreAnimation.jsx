import './ScoreAnimation.css';

const ScoreAnimation = (props) => {
    const orientation = props.points > 0 ? 'positive' : 'negative';
    return (
        <div
            className={`score-animation score-animation-${orientation}`}
            style={{ left: `${props.x}%`, top: `${props.y}%` }}
        >
            <div className="content">
                {props.points}
            </div>
            
        </div>
    );
};

export default ScoreAnimation;