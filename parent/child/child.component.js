// notice: you can nest child components in parent component this is considered good dir structure in angular
angular.module('foobar-app')
  .component('child', {
    controller: function($scope, $element) {
      this.clicked = false //notice we don't use $scope here because we don't need access to this var on template

      // publish
      $scope.changeParent = function() {
        $scope.$emit('changeParent', {})
      }

      // subscribe
      $scope.$on('changeChild', function(event, data) {
        $scope.childVar = this.clicked ? 'ON' : 'OFF'
        this.clicked = !this.clicked
      })

      $scope.colorTitle = function() {
        let title = $element[0].getElementsByTagName('h3')[0]
        if (title.style.color === 'red') {
          title.style.color = 'black'

        } else {
          title.style.color = 'red'

        }
      }
    },
    template:
      `<div class="child-a">
          <h3>Child Component</h3>
          <button ng-click="changeParent()">Change Parent</button>
          <p class="big">childVar: {{childVar}}</p>
          <br>
          <button ng-click="colorTitle()">Color title</button>
      </div>`,
  });
