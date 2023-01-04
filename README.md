[![npm version](https://badge.fury.io/js/%40justinribeiro%2Fcode-block.svg)](https://badge.fury.io/js/%40justinribeiro%2Fcode-block)


# \<code-block\>

> A web component that displays colorfully formatted code with Prism.js and Lit.

![screenshot of code-block](https://user-images.githubusercontent.com/643503/56254054-0ce02600-6074-11e9-9caf-e9dcc25b3ab1.png)

## Features

* Loads [Prism.js](https://prismjs.com/) language definitions on demand via dynamic imports from `node_modules/prismjs/components/`
* Loads Prism.js custom themes
* Built as a web component on [LitElement](https://lit-element.polymer-project.org/)

## Install

This web component is built with ES modules in mind and is
available on NPM:

Install code-block:

```sh
npm i @justinribeiro/code-block
# or
yarn add @justinribeiro/code-block
```

After install, import into your project:

```js
import '@justinribeiro/code-block';
```

Finally, use as required:

```html
<code-block language="javascript">
function helloWorld(say) {
  console.log(say);
}

helloWorld('Hi there!');
</code-block>
```

## Attributes

The web component allows certain attributes to be give a little additional
flexibility.

 | Name | Description | Default |
 | --- | --- | --- |
 | `language` | Code language you wish to utilize from Prism | `clike` |
 | `theme` | Path to Prism CSS theme file | `/node_modules/prismjs/themes/prism.css` |

## Building

If you want the ability to load the full spectrum of languages that Prism supports, you'll want to make sure your build script includes the `/node_modules/prismjs/**`, as there are many many language resources (and you don't want them all in your bundle, utilize the dynamic loading).
