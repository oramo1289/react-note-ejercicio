var React = require('react');
require('addItemcss');
var AddItem = React.createClass({
  render: function () {
    return(
      <form id="add-todo" onSubmit={this.handleSubmit}>
        <input type="text" required ref="newItem"/>
        <input type="submit" value="hit me"/>
      </form>
    );
  },
  handleSubmit: function (e) {
    e.preventDefault();
    //console.log(this.refs.newItem.value);//si solo lo dejara en newItem la consola me mostraría todo el input y yo solo quiero el valor por eso le agregas value
    this.props.onAdd(this.refs.newItem.value);//al crearlo como props dentro del addItem nested en el componente anterior puedo utilizarlo en esta función custom
  }
});

module.exports = AddItem;

// <form id="add-todo" onSubmit={this.handleSubmit}>//para agregar un elemento a la lista primero creamos la función
//   <input type="text" required ref="newItem"/>//agregamos la referencia para poder utilizarla en la función
//   <input type="submit" value="hit me"/>
// </form>
