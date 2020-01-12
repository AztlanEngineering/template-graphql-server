import React from 'react'
import PropTypes from 'prop-types'

//Config
import C from 'ui/cssClasses'

//Relative imports

if(!process.env.BACKEND) {
  import(
    /* webpackChunkName: "css.complete" */ 
    './complete.scss'
  )
}

const baseClassName = 'complete'

const complete = ({
  id,
  className,
  style
}) => (
  <div 
    className={
      [
        baseClassName,
        className
      ].filter(e => e).join(' ')
  }
    id={ id }
    style={ style }
  >
    <h2>Welcome to the complete component</h2>
  </div>
)

complete.propTypes = {
  /**
   * Provide an HTML id to this element
   */
  id: PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  className: PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  style: PropTypes.object,

  /**
   *  The children JSX
   */
  children: PropTypes.node,

  /*
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  : PropTypes.func,
  : PropTypes.func,
  : PropTypes.oneOf(['primary', 'stroke', 'flat'])
  */
}

/*
complete.defaultProps = {
  status: 'neutral',
}
*/

export default complete
