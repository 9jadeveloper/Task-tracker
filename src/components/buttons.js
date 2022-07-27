import PropTypes from 'prop-types'

const buttons = ({color, text, onClick}) => {
    return  <button 
    onClick={onClick}
    style={{backgroundColor: color}} 
    className='btn'>
        {text}
        </button>
}

buttons.defaultProps = {
    color:'steelblue',
}

buttons.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default buttons
