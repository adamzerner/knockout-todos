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
vm.currRoute = ko.observable('all');
vm.filteredTodos = ko.computed(function() {
  if (vm.currRoute() === 'all') {
    return vm.todos();
  }
  else if (vm.currRoute() === 'remaining') {
    return vm.todos().filter(function(todo) {
      return !todo.completed;
    });
  }
  else if (vm.currRoute() === 'completed') {
    return vm.todos().filter(function(todo) {
      return todo.completed;
    });
  }
});
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
vm.updateRoute = function(route) {
  vm.currRoute(route);
};

ko.applyBindings(vm);

});