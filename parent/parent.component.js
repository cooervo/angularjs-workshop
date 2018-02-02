angular.module('foobar-app')
  .component('parent', {
    controller: ($scope) => {
      this.clicked = false //notice we don't use $scope here because we don't need access to this var on template

      // publish
      $scope.changeChild = () => {
        $scope.$broadcast('changeChild', {})
      }

      // subscribe
      $scope.$on('changeParent', (event, data) => {
        $scope.parentVar = this.clicked ? 'ON' : 'OFF'
        this.clicked = !this.clicked
      });
    },
    template:
      `<div class="parent">
          <h3>Parent Component</h3>
          <button ng-click="changeChild()">Change Child</button>
          <p class="big">parentVar: {{parentVar}}</p>
          
          <br>
          <child></child>
      </div>`,
    bindings: {
      title: '<' //notice: one-way binding
    }
  });
