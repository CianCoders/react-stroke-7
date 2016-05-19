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
[See it here](api.md)


## Contributing

Pull requests welcome! 

Please use the `.editorconfig`, `.eslintrc` configurations in your editor to ensure proper formatting.

Run the test suite with `npm test` and linting with `npm run lint`. Make sure tests are passing and that you write tests for new features and document changes to the API with updates to the JSDocs.

## Changelog
[See it here](changelog.md)

## License

[MIT](LICENSE)


[author]: https://github.com/denjohx
