# react-gui

## Table Of Contents

-  [Introduction](#introduction)
-  [Installation](#installation)
-  [Usage](#usage)
-  [Docs](#docs)
-  [Demo](#demo)

## Introduction

A graphical user interface for changing states in react. Inspired from Google's popular [dat.GUI](https://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage) controller library. This library provides additional functionalities such as Ease curve editor, Enhanced hue selector, Draggable placement and Stylable
component's.

## Installation

```
npm install react-gui-controller --save
```

## Usage

```js
import React, { Component } from "react";
import Gui, { GuiString, GuiNumber, GuiColor } from "./components/Gui";
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

-  `data` - The data your Gui controller will mutate
-  `onUpdate` - The method which will be called whenever an update is handled by the controller
-  `children` - The dat.GUI components that make up the controller

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

###GuiString
`GuiString` is used to mutate any kind of string.

##### required props

-  `path` - The data object key

##### optional props

-  `theme` - The theme selector as `light` or `dark`, default is `light`.

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

## Demo

## License

MIT
