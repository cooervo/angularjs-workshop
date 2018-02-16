angular.module('foobar-app') // sometimes you might see this instead of app
  .component('hideMe', {
    template: `
      <div class="hide-me">
        <p ng-if="isHideMe">ng IF</p><!-- Just use ng-if-->
        <p ng-show="isHideMe">ng SHOW</p>
        <p ng-hide="!isHideMe"><b>!</b>HIDE</p>
        <p ng-hide="isHideMe">ng HIDE</p>
        <button 
          ng-mouseenter="mouseEnters()"
          ng-mouseleave="mouseLeaves()">
          Hover me
        </button>
        
        <h3>More built infilters</h3>
        <p>{{59.99 | currency}}</p>
        <p>{{59.999999 | currency:'€':0 }}</p>
        <p>{{1517465087079 | date:'yyyy' }}</p>
        <p>{{1517465087079 | date:"'Year:' yyyy, 'Month:' MMM, 'Day:' EEEE" }}</p>
        <p>{{1517465087079 | date:"'Year:' yyyy" | uppercase }}</p><!-- notice chaining filters -->
      </div>
    `,
    controller: function($scope) {
      $scope.isHideMe = true

      $scope.mouseEnters = function() {
        toggleHide()
      }
      $scope.mouseLeaves = function() {
        toggleHide()
      }

      toggleHide = () => {
        $scope.isHideMe = !$scope.isHideMe
      }
    }
  });
