var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
    AppComponent.prototype.getSelectedClass = function (hero) {
        return { 'selected': hero === this.selectedHero };
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES],
            template: "\n  <h2>My Heroes</h2>\n<ul class=\"heroes\">\n  <li *ng-for=\"#hero of heroes\" (click)=\"onSelect(hero)\" [ng-class]=\"getSelectedClass(hero)\">\n    <!-- Cada heroe va aqui -->\n    <span class=\"badge\">{{hero.id}}</span> {{hero.name}}</a>\n  </li>\n</ul>\n<h1>{{title}}</h1>\n<div *ng-if=\"selectedHero\"> <h2>{{selectedHero.name}} details!</h2>\n    <div><label>id: </label>{{selectedHero.id}}</div>\n    <div>\n      <label>name: </label>\n      <div><input [(ng-model)]=\"selectedHero.name\" placeholder=\"name\"></div>\n    </div>\n    </div>\n\n  ",
            styles: ["\n  .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}\n  .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }\n  .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}\n  .heroes .badge {\n    font-size: small;\n    color: white;\n    padding: 0.1em 0.7em;\n    background-color: #369;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -1px;\n  }\n  .selected { background-color: #EEE; color: #369; }\n  "],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
var Hero = (function () {
    function Hero() {
    }
    return Hero;
})();
var HEROES = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];
angular2_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map