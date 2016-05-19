# react-stroke-7

> A React component for pixeden's stroke-7 icon font set.

Completely based on the work of Dana Woodman for the [react-fontawesome](https://github.com/danawoodman/react-fontawesome) version.


## Install

```
npm install --save react-stroke-7
```


## Usage

```js
var React = require('react');
var Stroke7 = require('react-stroke-7');

React.render(<Stroke7 name='rocket' />, document.body);
```


**Note:** This component **does not include** any of the Pixeden's fonts or slyles, so you'll need to make sure to include those on your end somehow before using this.

For example using webpack (or other bundler) and [pixeden-stroke-7-icon](https://www.npmjs.com/package/pixeden-stroke-7-icon) package:

```js
require('pixeden-stroke-7-icon');
// -- then use it normally
```


## Features

- Simple API that mirrors Stroke7's class names.
- Supports all Stroke7 modifiers.
- Add your own `className`s, styles and other props (all additional props are passed directly to the component).


## Examples

```js
var React = require('react');
var Stroke7 = require('react-stroke-7');

var MyComponent = React.createClass({
  render: function () {
    return (
      <Stroke7
        className='my-custom-class'
        name='rocket'
        size='2x'
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
    );
  }
});
```


## API

###  Stroke7 : <code>ReactClass</code>
A React component for the pixeden's stroke7 icon library.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [border] | <code>Boolean</code> | <code>false</code> | Whether or not to show a border radius |
| [className] | <code>String</code> |  | An extra set of CSS classes to add to the component |
| [fixedWidth] | <code>Boolean</code> | <code>false</code> | Make buttons fixed width |
| [flip] | <code>String</code> | <code>false</code> | Flip the icon's orientation. |
| [inverse] | <code>Boolean</code> | <code>false</code> | Inverts the icon's color |
| [li] | <code>Boolean</code> | <code>false</code> | Use as bullets in `<li>`tags (has to be used inside of `<ul className="pe-ul">` tags) |
| name | <code>String</code> |  | Name of the icon to use |
| [rotate] | <code>Number</code> |  | The degress to rotate the icon by |
| [size] | <code>String</code> |  | The icon scaling size |
| [spin] | <code>Boolean</code> | <code>false</code> | Spin the icon |
| [stack] | <code>String</code> |  | Stack an icon on top of another |
| [va] | <code>Boolean</code> | <code>false</code> | Align the icon to de middle of the text |




## Contributing

Pull requests welcome! 

Please use the `.editorconfig`, `.eslintrc` configurations in your editor to ensure proper formatting.

Run the test suite with `npm test` and linting with `npm run lint`. Make sure tests are passing and that you write tests for new features and document changes to the API with updates to the JSDocs.

## Changelog
[See it here](changelog.md)

## License

[MIT](LICENSE)


[author]: https://github.com/denjohx
