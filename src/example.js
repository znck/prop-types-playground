import PropTypes from '@znck/prop-types'

export default {
  props: {
    string: PropTypes.string,
    array: PropTypes.arrayOf(String),
    union: PropTypes.oneOfType(
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.objectOf(Number),
    ),
    object: PropTypes.shape({
      foo: PropTypes.string,
      bar: PropTypes.oneOfType(
        String,
        PropTypes.number,
        PropTypes.arrayOf(Number)
      )
    })
  }
}
