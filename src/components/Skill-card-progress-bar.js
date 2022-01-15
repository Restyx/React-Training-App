import PropTypes from 'prop-types';

const ProgressBar = ({progress, color, size}) => {
    const ProgressBarStrokeStyle = {
        strokeDashoffset: 502-(502*progress)/100,
        stroke: color
    }

    return (
        <div className='progress-bar'>
            <svg>
                <circle cx={size} cy={size} r={size}></circle>
                <circle cx={size} cy={size} r={size} style={ProgressBarStrokeStyle}></circle>
            </svg>
            <div className='number'>
                <h2>{ progress }<span>%</span></h2>
            </div>
        </div>
    );
}



export default ProgressBar;