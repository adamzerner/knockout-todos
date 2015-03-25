$(document).ready(function() {

function Todo(title) {
  this.title = title;
  this.completed = false;
}

var vm = {};
vm.todos = ko.observableArray([
  new Todo('one'),
  new Todo('two'),
  new Todo('three')
]);
vm.newTitle = ko.observable();
vm.addTodo = function() {
  var newTitle = vm.newTitle();
  var newTodo = new Todo(newTitle);
  vm.todos.push(newTodo);
  $('input').blur().val('');
};

ko.applyBindings(vm);

});