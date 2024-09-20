var app = angular.module("filterSearchApp", ["ngRoute"]);

app.config(function ($routeProvider) {
	$routeProvider
		.when("/array", {
			templateUrl: "partials/array.html",
			controller: "ArrayController",
		})
		.when("/currency", {
			templateUrl: "partials/currency.html",
			controller: "CurrencyController",
		})
		.when("/date", {
			templateUrl: "partials/date.html",
			controller: "DateController",
		})
		.when("/json", {
			templateUrl: "partials/json.html",
			controller: "JsonController",
		})
		.when("/limit-to", {
			templateUrl: "partials/limitTo.html",
			controller: "LimitToController",
		})
		.when("/case", {
			templateUrl: "partials/case.html",
			controller: "CaseController",
		})
		.when("/number", {
			templateUrl: "partials/number.html",
			controller: "NumberController",
		})
		.when("/order-by", {
			templateUrl: "partials/orderBy.html",
			controller: "OrderByController",
		})
		.when("/reverse", {
			templateUrl: "partials/reverse.html",
			controller: "ReverseController",
		})
		.when("/capitalize", {
			templateUrl: "partials/capitalize.html",
			controller: "CapitalizeController",
		})
		.when("/truncate", {
			templateUrl: "partials/truncate.html",
			controller: "TruncateController",
		})
		.when("/", {
			templateUrl: "partials/home.html",
			controller: "HomeController",
		})
		.when("/home", {
			redirectTo: "/",
		})
		.otherwise({
			redirectTo: "/",
		});
});

const fruits = [
	"Apple",
	"Banana",
	"Cherry",
	"Date",
	"Elderberry",
	"Fig",
	"Grape",
	"Honeydew",
	"Indian Fig",
	"Jackfruit",
	"Kiwi",
	"Lemon",
	"Mango",
	"Nectarine",
	"Orange",
	"Pineapple",
	"Quince",
	"Raspberry",
	"Strawberry",
	"Tangerine",
	"Ugli Fruit",
	"Valencia Orange",
	"Watermelon",
	"Ximenia",
	"Yellow Passion Fruit",
	"Zucchini",
];

app.controller("MainController", function ($scope) {
	// Main controller logic
});

app.controller("HomeController", function ($scope, $location) {
	$scope.message = "Welcome to the home page.";
	$scope.selectedFilter = ""; // Default selection

	$scope.navigateToFilter = function () {
		var path = "/" + $scope.selectedFilter;
		$location.path(path);
	};
});

app.controller("ArrayController", function ($scope) {
	$scope.items = fruits;
});

app.controller("CurrencyController", function ($scope) {
	$scope.amount = 1234.56;
});

app.controller("DateController", function ($scope) {
	$scope.dateInput = new Date();
});

app.controller("JsonController", function ($scope) {
	$scope.jsonObject = { name: "John", age: 30, city: "New York" };

	$scope.addKeyValue = function () {
		if ($scope.newKey && $scope.newValue) {
			$scope.jsonObject[$scope.newKey] = $scope.newValue;
			$scope.newKey = "";
			$scope.newValue = "";
		}
	};
	$scope.removeKeyValue = function () {
		if ($scope.newKey) {
			$scope.jsonObject = Object.keys($scope.jsonObject)
				.filter((objKey) => objKey !== $scope.newKey)
				.reduce((newObj, key) => {
					newObj[key] = $scope.jsonObject[key];
					return newObj;
				}, {});
		}
	};
});

app.controller("LimitToController", function ($scope) {
	$scope.items = fruits;
	$scope.longString = "abcdefghijklmnopqrstuvwxyz";
});

app.controller("CaseController", function ($scope) {
	$scope.inputText = "Hello World";
});

app.controller("NumberController", function ($scope) {
	$scope.number = 0.0123456789;
});

app.controller("OrderByController", function ($scope) {
	$scope.items = [
		{ name: "Apple", value: 3 },
		{ name: "Banana", value: 1 },
		{ name: "Cherry", value: 2 },
	];
	$scope.sortBy = "name";
	$scope.reverseOrder = false;
});

app.controller("ReverseController", function ($scope) {
	$scope.text = "AngularJS";
});

app.controller("CapitalizeController", function ($scope) {
	$scope.inputText = "hello world";
});

app.controller("TruncateController", function ($scope) {
	$scope.longText = "This is a long sentence that needs to be truncated.";
});

app.filter("reverse", function () {
	return function (input) {
		return input.split("").reverse().join("");
	};
});

app.filter("capitalize", function () {
	return function (input) {
		return input.charAt(0).toUpperCase() + input.slice(1);
	};
});

app.filter("truncate", function () {
	return function (input, length) {
		if (input.length <= length) return input;
		return input.substring(0, length) + "...";
	};
});
