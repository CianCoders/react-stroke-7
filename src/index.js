import React from 'react'

/**
 * A React component for the font-awesome icon library.
 *
 *
 * @param {Boolean} [border=false] Whether or not to show a border radius
 * @param {String} [className] An extra set of CSS classes to add to the component
 * @param {Boolean} [fixedWidth=false] Make buttons fixed width
 * @param {String} [flip=false] Flip the icon's orientation.
 * @param {Boolean} [inverse=false]Inverse the icon's color
 * @param {Boolean} [li=false] Icon replaces <li> bullets (has to be used inside <ul className='pe-ul'> tags)
 * @param {String} name Name of the icon to use
 * @param {Number} [rotate] The degress to rotate the icon by
 * @param {String} [size] The icon scaling size
 * @param {Boolean} [spin=false] Spin the icon
 * @param {Boolean} [va=false] Align at the middle of the text
 * @param {String} [stack] Stack an icon on top of another
 * @module Stroke7
 * @type {ReactClass}
 */

export default React.createClass({

  displayName: 'Stroke7',

  propTypes: {
    border: React.PropTypes.bool,
    className: React.PropTypes.string,
    fixedWidth: React.PropTypes.bool,
    flip: React.PropTypes.oneOf([ 'horizontal', 'vertical' ]),
    inverse: React.PropTypes.bool,
    li: React.PropTypes.bool,
    name: React.PropTypes.string.isRequired,
    rotate: React.PropTypes.oneOf([ 90, 180, 270 ]),
    size: React.PropTypes.oneOf([ 'lg', '2x', '3x', '4x', '5x' ]),
    spin: React.PropTypes.bool,
    stack: React.PropTypes.oneOf([ '1x', '2x' ]),
    va: React.PropTypes.bool,
  },

  render() {
    let {
      border,
      fixedWidth,
      flip,
      inverse,
      name,
      rotate,
      size,
      spin,
      stack,
      li,
      va,
      ...props,
    } = this.props

    let className = 'pe-7s-' + name

    if (size) {
      className += ' pe-' + size
    }

    if (spin) {
      className += ' pe-spin'
    }

    if (border) {
      className += ' pe-border'
    }

    if (fixedWidth) {
      className += ' pe-fw'
    }

    if (inverse) {
      className += ' pe-inverse'
    }

    if (flip) {
      className += ' pe-flip-' + flip
    }

    if (rotate) {
      className += ' pe-rotate-' + rotate
    }

    if (stack) {
      className += ' pe-stack-' + stack
    }

    if (va) {
      className += ' pe-va'
    }

    if (li) {
      className += ' pe-li'
    }

    if (this.props.className) {
      className += ' ' + this.props.className
    }

    return (
      <span
        {...props}
        className={className}
      />
    )
  },
})
