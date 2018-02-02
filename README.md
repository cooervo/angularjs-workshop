### Scripts
* Start server: `npm run server`
* Compile css: `npm run css`

### Context
Angular initially was though at an MVVC framework, in where people would usually use huge Controllers,
Service, Factories and Provides (this all do the same, but have different syntax). Forget about all that.

On modern Angularjs which is more similar to modern web development (based in components/modules), we can
just focus on using components with small Controllers, and Services for contacting DB or doing http requests.

So remember Components and Services is all you need in modern angularjs.

### Good
* One way data binding and events for communication between components (child or parents or child to child)
* Use component when possible
* Isolate your logic. Keep as much of the component logic internal and away from other aspects of the application to ensure consistency and quality.
* Single Resp. Principle: Keep components simple and focused on a single role. They might be complex components, but the various tasks of a single component should be logically connected as a unit.
* Use the lifecycle events. By hooking into the component lifecycle, you can ensure that data is ready at the right time and that you can clean up.
* Use one-way and one-time bindings. When possible, one-way bindings are more efficient and promote good design, while one-time bindings can speed up your application. You can always use $onChanges lifecycle event to watch changes.
* Use events for communication. Components can communicate using custom events, which is in line with how Angular 2 functions and a better design.
   * Using $scope.$emit will fire an event up the $scope. Using $scope.$broadcast will fire an event down the $scope. Using $scope.$on is how we listen for these events. A quick example:
*  Have a well defined API. Ensure that your components are clearly named and easy to understand.

### Bad
* Avoid big controllers
* Avoid two way data bindings
* Avoid directives, prefer component syntax

### Documentation:
* Todd Motto is a big influencer in Angular and has the simplest and best tutorials: https://toddmotto.com/angularjs/
* https://www.sitepoint.com/building-angular-1-5-components/


