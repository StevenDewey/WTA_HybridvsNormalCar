'use strict';

angular.module('HybridApp',[]).directive('hybridVsNormal',[function(){
	return {
		restrict:'A',
		controller:function($scope){

			function setup(){
				$scope.hybrid = {};
				$scope.normal = {};
				$scope.type = 'cost';
				$scope.percents =[];
				$scope.resellValue = 75;
			}

			function determineWhatToShow(type){
				var show;
				switch (type) {
					case 'cost':
						show=$scope.hybrid.total < $scope.normal.total;
						break;
					case 'gas':
						show=$scope.hybrid.efficiency > $scope.normal.efficiency;
					default:
				}
				$scope.hybrid.show=show;
				$scope.normal.show=!show;
			}

			function calcHybrid(){
				var cost = $scope.hybrid.cost;
				var eff = $scope.hybrid.efficiency;
				var resell = cost * $scope.resellValue / 100;
				var gas = $scope.milesDriven/eff*$scope.gasPrice;
				$scope.hybrid.total = cost+gas-resell;
			}

			function calcNormal(){
				var cost = $scope.normal.cost;
				var eff = $scope.normal.efficiency;
				var resell = cost * $scope.resellValue / 100;
				var gas = $scope.milesDriven/eff*$scope.gasPrice;
				$scope.normal.total = cost+gas-resell;
			}

			$scope.calc = function(type) {
				calcHybrid();
				calcNormal();
				determineWhatToShow(type);
			};

			setup();

			for(var i=100;i>49;i-=5){
				$scope.percents.push(i);
			}
		}
	};
}]);
