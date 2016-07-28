const React = require("react");
const ReactDOM = require("react-dom");

class HelloWorld extends React.Component {
   constructor() {
      super();
      this.greet = "Hello";
      this.name = "John";
   }

   changeGreet() {
      this.greet = "Hola amigo";
      this.forceUpdate();
   }
}

// attach template
HelloWorld.prototype.render = require("./hello-world.tag");

// mount component into DOM
const element = document.getElementById("mount-react-here");
ReactDOM.render(React.createElement(HelloWorld, {}), element);