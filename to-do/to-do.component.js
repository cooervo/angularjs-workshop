// Stateful/ smart component: business logic, call services (http requests), handle forms, and other stateful task
app.component('toDo', {
  templateUrl: 'to-do/to-do.html', //notice: For templateUrl path is from root of where app.js is
  controller: function($scope, HttpService) { //notice: dependency injection
    $scope.foobar = 'Foobar @ todo.component.js'
    this.$onInit = function() { //notice lifecycle event

      HttpService.get('/todo') //Notice: Using a Service in a controller/component
        .then(response => $scope.todos = response.data.todos)
        .catch(error => log('there was an error', error))
    }
  }
});
