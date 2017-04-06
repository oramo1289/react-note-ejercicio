var React = require('react');
var ReactDOM = require('react-dom');
//local modules
var TodoItem = require('TodoItem');
var AddItem = require('addItem');
require('indexcss');

var Saludo = React.createClass({
  getInitialState: function () {
    return {
      todos: ['domir la siesta', 'comer salmon', 'aprender react'],
      age: 30
    }
  },
  render: function () {
    var todos = this.state.todos;
    todos = todos.map(function (item, index){
      return(//con .map() podemos agarrar los elementos de un array y jugar con ellos
        <TodoItem item={item} key={index} onDelete={this.onDelete}/>
      );
    }.bind(this));﻿//this fuera de esta función se refiere al componente adentro de esta funcón si quieres referirte al componente tienes que enlazar el this mediante bind()
  return (
      <div id="todo-list">
        <p>la persona más ocupada del mundo y tiene {this.state.age} años</p>
        <ul>
            {todos}
        </ul>
        <AddItem onAdd={this.onAdd}/>
      </div>
    );
  },//render

  //custom functions
  onDelete: function (item) {//creas la función para borrar los items, necesita de el argumento para correr va a ser this.props.item
    var updateTodos = this.state.todos.filter(function (val, index){//filter() es una función de javascript va a crear un filtro tiene un callback en este asiga un valor y un index a los elementos del array
      return item!==val; //regresame el item si no es igual al valor, si es igual no lo regresa
    });
    this.setState({
      todos: updateTodos//refresca el state
    });
  },
  onAdd: function (item) {
    var updateTodos = this.state.todos; //obtiene los elementos de la lista de todos
    updateTodos.push(item);//el item que pasa por la función es gregado al final del array
    this.setState({
      todos: updateTodos//actualiza el state
    })
  }
});



ReactDOM.render(<Saludo />, document.getElementById('todo-wrapper'));

// var Saludo = React.createClass({
//   render: function () {
//     var name = 'Oscar';
//     return (
//       <div>
//         <h1>{name}</h1>
//         <p><bold>Nombre:</bold> {this.props.persona.name}</p>
//         <p><bold>Edad:</bold> {this.props.persona.edad}</p>
//         <p><bold>Escuela:</bold> {this.props.persona.escuela}</p>
//       </div>
//     );
//   }
// });
// //props: propiedades accedes a ellas mediante this.props.la propiedad.elemento dentro de la propiedad
// var objeto = {name:"hola", edad:27, escuela:"anáhuac"};
//
// ReactDOM.render(<Saludo persona={objeto}/>, document.getElementById('app'));

//function .map() cycling
// var Saludo = React.createClass({
//   getInitialState: function () {
//     return {
//       todos: ['domir la siesta', 'comer salmon', 'aprender react'],
//       age: 30
//     }
//   },
//   render: function () {
//       var ager = setTimeout(function () {
//         this.setState({
//           age:35
//         });
//       }.bind(this), 5000);
// //bind this, esta diciendo que this tenga el valor del this global que serìa
// //getInitialState si no no funcionaria porque this agaeraría el valo de this
// //local el cual no ha sido establecido
//   return (
//       <div>
//         <p>la persona más ocupada del mundo y tiene {this.state.age} años</p>
//         <ul>
//           <li>{this.state.todos[0]}</li>
//           <li>{this.state.todos[1]}</li>
//           <li>{this.state.todos[2]}</li>
//         </ul>
//       </div>
//     );
//   }//render
// });


//Nesyed components
// var Saludo = React.createClass({
//   getInitialState: function () {
//     return {
//       todos: ['domir la siesta', 'comer salmon', 'aprender react'],
//       age: 30
//     }
//   },
//   render: function () {
//     var todos = this.state.todos;
//     todos = todos.map(function (item, index){
//       return(//con .map() podemos agarrar los elementos de un array y jugar con ellos
//         <TodoItem item={item} key={index}/>
//       );
//     });
//   return (
//       <div>
//         <p>la persona más ocupada del mundo y tiene {this.state.age} años</p>
//         <ul>
//             {todos}
//         </ul>
//       </div>
//     );
//   }//render
// });
//
// var TodoItem = React.createClass({
//   render : function () {
//     return (
//       <li>
//         <div className="todo-item">
//           <span className="item-name">{this.props.item}</span>
//         </div>
//       </li>
//     );
//   }
// });
