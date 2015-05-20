'use strict';

angular.module('HybridApp',[]).directive('hybridVsNormal',[function(){
	return {
		restrict:'A',
		link:function($scope){

			function setup(){
				$scope.hybrid = {};
				$scope.normal = {};
				$scope.type = 'cost';
				$scope.percents =[];
				$scope.resellValue = 75;
			}

			$scope.calc = function(type) {
				switch(type){
					case 'gas':
						alert('You select type ' + type);
						break;
					case 'cost':
						alert('You select type ' + type);
						break;
					default:
						alert('please select type');
				}
			};

			setup();

			for(var i=100;i>49;i-=5){
				$scope.percents.push(i);
			}
		}
	};
}]);
