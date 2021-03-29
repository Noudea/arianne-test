import { useState , useEffect } from 'react'

const Avatar = (props) => {

    const xsmall = {
        width: 25,
        height: 25,
    }

    const small = {
        width: 50,
        height: 50
    }

    const medium = {
        width: 100,
        height: 100
    }

    const large = {
        width: 150,
        height: 150
    }

    const xlarge = {
        width: 200,
        height: 200
    }

    const [size, setSize] = useState(medium)
    const [borderRadius,setBorderRadius] = useState(50)

    useEffect(() => {
        if (props.size ===  'xs') {
            setSize(xsmall)
        }
        if (props.size ===  'small') {
            setSize(small)
        }
        if (props.size ===  'md') {
            setSize(medium)
        }
        if (props.size ===  'lg') {
            setSize(large)
        }
        if (props.size ===  'xl') {
            setSize(xlarge)
        }

        if(props.round) {
            setBorderRadius(50)
        }
        if(props.square) {
            setBorderRadius(10)
        }

    },[])

    return(<>
    <style jsx>{`
        .avatar {
            width: ${size.width}px;
            height: ${size.height}px;
            border-radius: ${borderRadius}%;
        }
        
        `}</style>
        <img className='avatar' src={props.src} alt={props.alt}></img>
    </>)
}

export default Avatar