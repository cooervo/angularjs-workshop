### Run Instructions
1. `sh install.sh`
2. open app at http://localhost:3000

### Scripts
* Start server: `npm run server`
* Compile css: `npm run css`

### Context

Angular initially was an MVVC framework, with a huge API and some confusing which are no longer used, for example:
Service, Factories and Providers (these all do the same, but have different syntax). Forget about all that.

On modern Angularjs which is more similar to modern web development (based in components/modules), we can
just focus on using components with small Controllers.
 
Leave Services for doing async tasks (http requests) or heavy work.

Another useful tool in Angular are Filters. With Filters you can filter results from an array, or format them and
return them in a different way, for example raw Date to a formatted Date.

Angularjs directives usually start with ng-* in HTML.

You can create your own directives for example: <foo-bar></foo-bar> but usually it's better to just use Components
for this.

Publish/Subscribe: For communication between parent and child components we use events. `$scope.$emit()` fires upward and `$scope.$broadcast()` fires downwards.

So remember **`Components`**, **`Services`**, **`Directives`**, **`Filters`** and **`Events`** is what you need to understand modern Angularjs.

### Good
* One way data binding and events for communication between components (child or parents or child to child)
* Use Component when possible (avoid custom Directives)
* Single Resp. Principle: Keep components simple and focused on a single role. They might be complex components, but the various tasks of a single component should be logically connected as a unit.
* Use the lifecycle events. By hooking into the component lifecycle, you can ensure that data is ready at the right time and that you can clean up.
* Use one-way and one-time bindings. When possible, one-way bindings are more efficient and promote good design, while one-time bindings can speed up your application. You can always use $onChanges lifecycle event to watch changes.
* Use events for communication. Components can communicate using custom events, which is in line with how Angular 5 works and a better design.

### Bad
* Avoid big controllers
* Avoid two way data bindings
* Avoid custom directives, prefer component syntax
* Avoid factories and providers (just use Service)
* Avoid too much logic in HTML, logic goes in the code not in the template

### Documentation:
* Todd Motto is a big influencer in Angular and has the simplest and best tutorials: https://toddmotto.com/angularjs/
* Understanding $scope: https://toddmotto.com/all-about-angulars-emit-broadcast-on-publish-subscribing/
* Filters: https://toddmotto.com/everything-about-custom-filters-in-angular-js/ 
* Events, broadcasting and listening: https://toddmotto.com/all-about-angulars-emit-broadcast-on-publish-subscribing/
* Angularjs with components: https://www.sitepoint.com/building-angular-1-5-components/
