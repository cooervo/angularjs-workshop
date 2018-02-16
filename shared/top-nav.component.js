// Stateless/dumb component: mainly used just to display data
angular.module('foobar-app')
  // notice also controller is not needed here because it is stateless
  // notice: component name must be camelCased even though its used as dash-cased in html
  .component('topNav', {
    template: //notice we can inject small templates directly in component or use templateUrl for bigger ones
      `<header>
        <div class="centerer">
          <h1>{{::$ctrl.title}}</h1>{{$ctrl}}<!--notice useful for debugging-->
          <nav>
            <ul>
              <li>home</li>
              <li>fizzbuzz</li>
            </ul>
          </nav>
        </div>
      </header>`,
    bindings: {
      title: '<' //notice: one-way binding is the recommended way
    }
  });
