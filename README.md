# react-gui-controller

<p align="center">
  <img src="./src/docs/Assets/logo.svg" height="200" width="200">
</p>

[![Build Status](https://travis-ci.com/pizza3/react-gui-controller.svg?token=4NFkLbpiPxAhFzZX3Yhz&branch=master)](https://travis-ci.com/pizza3/react-gui-controller)
![status](https://img.shields.io/badge/version-1.0.4-brightgreen.svg)
![status](https://img.shields.io/badge/size-91.1KB-brightgreen.svg)

## Table Of Contents

-  [Introduction](#introduction)
-  [Installation](#installation)
-  [Usage](#usage)
-  [Docs](#docs)
-  [Demo](#demo)
-  [Development](#development)
-  [Stuff to get done](#stuff-to-get-done)
-  [License](#license)

## Introduction

A graphical user interface for changing states in react. Inspired from Google's popular [dat.GUI](https://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage) controller library. This library provides additional functionalities such as Ease curve editor, Draggable placement and Stylable
component's. For styling this library uses Zeit [styled-jsx](https://github.com/zeit/styled-jsx).

## Installation

```js
npm install react-gui-controller --save
```

## Usage

```js
import React, { Component } from "react";
import Gui, { GuiString, GuiNumber, GuiColor } from "react-gui-controller";
class App extends Component {
   state = {
      data: {
         text: "Some Awesome Val",
         noise: 0.4,
         background: "#dc6900",
         foreground: "#b7c485"
      }
   };

   update = data => {
      this.setState({
         data
      });
   };

   render() {
      const { data } = this.state;
      return (
         <Gui data={data} theme="dark" onUpdate={this.update}>
            <GuiString path="text" label="Head" />
            <GuiNumber path="noise" label="Noise" min={0} max={1} step={0.1} />
            <GuiColor path="background" label="Background" type="hex" />
            <GuiColor path="foreground" label="Foreground" type="hex" />
         </Gui>
      );
   }
}

export default App;
```

## Docs

### Gui

`Gui` is the wrapper component which will create a new gui container and will distribute the `data` prop to other
child component's. This component will handle all the unidirectional data flow between the state data and child
component's with the help of `onUpdate` functional prop.

##### required props

-  `data` - The data your Gui controller will mutate.
-  `onUpdate` - The method which will be called whenever an update is handled by the controller.
-  `children` - The dat.GUI components that make up the controller.

##### optional props

-  `theme` - The theme selector as `light` or `dark`, default is `light`.

```js
   ...
   state = {
      data: {
         ...
      }
   };

   update = data => {
      this.setState({
         data
      });
   };

   render() {
      const { data } = this.state;
      return (
         <Gui data={data} theme="dark" onUpdate={this.update}>
            ...
         </Gui>
      );
   }
   ...
```

### GuiString

`GuiString` is used to mutate any kind of string.

##### required props

-  `path` - The state data object key.

```js
...
   state = {
      data: {
         text: "Some Awesome Value"
      }
   };

   update = data => {
      this.setState({
         data
      });
   };

   render() {
      const { data } = this.state;
      return (
         <Gui data={data} theme="dark" onUpdate={this.update}>
            <GuiString path="text" label="Head" />
         </Gui>
      );
   }
...
```

### GuiNumber

`GuiNumber` provides a range slider to toggle between whole and decimal values.

##### required props

-  `path` - The state data object key, this will eventually going to be the initial value.
-  `min` - The minimum value of the slider.
-  `max` - The maximum value of the slider.
-  `step` - The change in value of the slider.

```js
...
   state = {
      data: {
         noise: 0.4
      }
   };

   update = data => {
      this.setState({
         data
      });
   };

   render() {
      const { data } = this.state;
      return (
         <Gui data={data} theme="dark" onUpdate={this.update}>
            <GuiNumber path="noise" label="Noise" min={0} max={1} step={0.1} />
         </Gui>
      );
   }
...
```

### GuiBool

`GuiBool` provides a switch button to toggle between `true` and `false`.

##### required props

-  `path` - The state data object key, this will eventually going to be the initial value.

```js
...
   state = {
      data: {
         gravity: false
      }
   };

   update = data => {
      this.setState({
         data
      });
   };

   render() {
      const { data } = this.state;
      return (
         <Gui data={data} theme="dark" onUpdate={this.update}>
            <GuiBool path="gravity" label="Gravity"/>
         </Gui>
      );
   }
...
```

### GuiButton

`GuiButton` provides a button, under which you can specify the `onClick` prop and mention the
funtion.

##### required props

-  `onClick` mention the method present on the parent component which you want to invoke.

```js
...
   state = {
      data: {
        ...
      }
   };

   update = data => {
      this.setState({
         data
      });
   };

   handleButton=()=>{
      console.log('Button click occured')
   }

   render() {
      const { data } = this.state;
      return (
         <Gui data={data} theme="dark" onUpdate={this.update}>
            <GuiButton onClick={this.handleButton} label="Submit"/>
         </Gui>
      );
   }
...
```

### GuiSelect

A select component for updating a value with one of the options supplied via the `options` prop. The original value from the `path` will always be added to the passed options array as the first item.

##### required props

-  `options` - In the options prop we need to proved an array of options.
-  `path` - The state data object key, this will eventually going to be the initial value.

```js
...
   state = {
      data: {
         framerate: '30fps'
      }
   };

   update = data => {
      this.setState({
         data
      });
   };

   render() {
      const { data } = this.state;
      return (
         <Gui data={data} theme="dark" onUpdate={this.update}>
            <GuiSelect path='framerate' options={['25fps', '30fps', '40fps', '60fps']} label="Framerate"/>
         </Gui>
      );
   }
...
```

### GuiColor

A color picker component which can be used to mutate any specific colo type.

##### required props

-  `type` - Mention the type of color format you are using. `hex`,`rgb` & `hsl` are the format's available.
-  `path` - The state data object key, this will eventually going to be the initial value.

```js
...
   state = {
      data: {
         background: '#b7c485'
         // background: {
         //    r:255,
         //    g:0,
         //    b:0
         // }
      }
   };

   update = data => {
      this.setState({
         data
      });
   };

   render() {
      const { data } = this.state;
      return (
         <Gui data={data} theme='dark' onUpdate={this.update}>
            <GuiColor path='background' type='hex' label='Background' />
         </Gui>
      );
   }
...
```

## Demo

### Demo1

[![Edit Example1](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/wo7pr1278l)

## Development

In source folder:

```bash
npm run lib:watch
npm link
```

In project:

```bash
npm link react-gui-controller
```

## Stuff to get done

* [ ] Support for local storage.
* [ ] Ease curve pre defined graphs.

## License

MIT
