import React, { useEffect , useState , useContext }  from 'react';
import PropTypes from 'prop-types';
import ThemeColors from '../themes/ThemeColors';
import ThemeContext from '../contexts/ThemeContext';

const CircleLoader = (props) => {

   const colors = ThemeColors[useContext(ThemeContext).theme]

    const xsmall = {
        width: 16,
        height: 16,
    }

    const small = {
        width: 24,
        height: 24
    }

    const medium = {
        width: 40,
        height: 40
    }

    const large = {
        width: 64,
        height: 64
    }

    const xlarge = {
        width: 96,
        height: 96
    }

    const [size, setSize] = useState(medium)
    const [speed, setSpeed] = useState('1s')
    const [strokeWidth,setStrokeWidth] = useState(1)

    useEffect(() => {
        if (props.size === 'xs') {
            setSize(xsmall)
        }
        if (props.size === 'sm') {
            setSize(small)
        }
        if (props.size === 'md') {
            setSize(medium)
        }
        if (props.size === 'lg') {
            setSize(large)
        }
        if (props.size === 'xl') {
            setSize(xlarge)
        }
        if(props.speed ==='slow') {
            setSpeed('2s')
        }
        if(props.speed ==='normal') {
            setSpeed('1s')
        }
        if (props.speed ==='fast') {
            setSpeed('0.5s')
        }
        if(props.bold) {
            setStrokeWidth(2)
        }
        if(props.thin) {
            setStrokeWidth(0.5)
        }
        
    }, [colors])

    return (
    <svg width={size.width} height={size.height} stroke={props.color ? props.color : colors ? colors.contrast : ThemeColors.light.contrast} viewBox="0 0 38 38">
        <g
            transform="translate(1 1)"
            strokeWidth={strokeWidth}
            fill="none"
            fillRule="evenodd"
        >
            <circle strokeOpacity={0.3} cx={18} cy={18} r={18} />
            <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur={speed}
                    repeatCount="indefinite"
                />
            </path>
        </g>
    </svg>)



}

export default CircleLoader;