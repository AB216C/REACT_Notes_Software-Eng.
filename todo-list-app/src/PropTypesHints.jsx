//Common PropTypes Validators//

// PropType	Description
// PropTypes.string	Confirms the prop is a string.
// PropTypes.number	Confirms the prop is a number.
// PropTypes.bool	Confirms the prop is a boolean (true or false).
// PropTypes.func	Confirms the prop is a function.
// PropTypes.array	Confirms the prop is an array.
// PropTypes.object	Confirms the prop is an object.
// PropTypes.node	Confirms the prop can be anything that can be rendered (e.g., numbers, strings, elements, or an array of elements).
// PropTypes.element	Confirms the prop is a React element.
// PropTypes.instanceOf(Class)	Confirms the prop is an instance of a particular class.
// PropTypes.oneOf([value1, value2])	Confirms the prop matches one of the provided values.
// PropTypes.oneOfType([type1, type2])	Confirms the prop matches one of the provided types.
// PropTypes.arrayOf(type)	Confirms the prop is an array of a specific type.
// PropTypes.objectOf(type)	Confirms the prop is an object where all values are of a specific type.
// PropTypes.shape({})	Confirms the prop is an object with a specific shape.


import react from 'react'
import PropTypes from 'prop-types'


// const Button= ({label,type}) => {
//   return <button className={`btn btn-${type}`}  > {label} </button>
// };


// Button.propTypes = {
//   label: PropTypes.string.isRequired,
//   type:PropTypes.oneOf(['primary', 'secondary', 'danger']).isRequired

// }


// export default Button