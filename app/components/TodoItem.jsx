var React = require('react');
//var ReactDOM = require('react-dom');
require('todoItem');


var TodoItem = React.createClass({
  render : function () {
    return (
      <li>
        <div className="todo-item">
          <span className="item-name" ref="thisItem">{this.props.item}</span>
          <span className="item-remove" onClick={this.handleDelete}>X</span>
        </div>
      </li>
    );
  },
  //custom event
  handleDelete : function () {
    this.props.onDelete(this.props.item);//al crearlo como props dentro del TodoItem nested en el componente anterior puedo utilizarlo en esta función custom
  }
});

module.exports = TodoItem;
