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
vm.remove = function() {
  vm.todos.remove(this);
};
vm.currRoute = ko.observable('all');
vm.updateRoute = function(route) {
  vm.currRoute(route);
};

ko.applyBindings(vm);

});