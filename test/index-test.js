/* eslint no-unused-expressions:0 */

import React from 'react'
import ReactDOM from 'react-dom'
import jsdom from 'mocha-jsdom'
import FontAwesome from '../src'

describe('FontAwesome', () => {
  let component
  let classes

  // Use mocha-jsdom.
  jsdom({ html: '<div id="root"></div>' })

  beforeEach(() => {
    const props = {
      border: true,
      className: 'my-custom-class',
      fixedWidth: true,
      flip: 'vertical',
      inverse: true,
      name: 'rocket',
      size: 'lg',
      spin: true,
      rotate: 180,
      va: true,
      stack: '1x',
      li: true,
    }
    component = ReactDOM.render(<FontAwesome {...props} />, document.getElementById('root'))
    classes = ReactDOM.findDOMNode(component).className.split(' ')
  })

  it('the proper class names get set', () => {
    const expectedClasses = [
      'pe-7s-rocket',
      'pe-border',
      'pe-flip-vertical',
      'pe-fw',
      'pe-inverse',
      'pe-lg',
      'pe-li',
      'pe-rotate-180',
      'pe-spin',
      'pe-stack-1x',
      'pe-va',
      'my-custom-class',
    ]
    expectedClasses.forEach(className => {
      expect(classes.indexOf(className)).to.be.above(-1)
    })
  })

  it('the "name" prop is not rendered in the markup', () => {
    expect(ReactDOM.findDOMNode(component).name).to.be.undefined
  })
})
