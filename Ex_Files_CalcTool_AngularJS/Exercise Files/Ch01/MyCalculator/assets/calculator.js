/* JavaScript Document */

(function(){

var app = angular.module('myCalculator',[]);


app.controller('CalculatorController',['$scope', function($scope){

	$scope.lumen_options = [375, 600, 900, 1125, 1600];
	$scope.current_lumens = 600;
	$scope.current_cost = 13;
	$scope.current_hours = 4;
	$scope.total_days = 365;

	$scope.inc_conversion = 0.0625;
	$scope.hal_conversion = 0.0450;
	$scope.cfl_conversion = 0.0416;
	$scope.led_conversion = 0.0125;

	$scope.calculate = function(){
		
		$scope.inc_wattage = ($scope.current_lumens * $scope.inc_conversion).toFixed(1);
		$scope.hal_wattage = ($scope.current_lumens * $scope.hal_conversion).toFixed(1);
		$scope.cfl_wattage = ($scope.current_lumens * $scope.cfl_conversion).toFixed(1);
		$scope.led_wattage = ($scope.current_lumens * $scope.led_conversion).toFixed(1);

		


	}

	$scope.calculate();
	
}]);



})();
