webApp.controller('blockModalController', ["$scope", "$http", "blockModal", function ($scope, $http, blockModal) {
	$scope.loading = true;

	$scope.getTransactionsOfBlock = function (blockId) {
		$http.get("/api/transactions/", { params : { blockId : blockId }})
			.then(function (resp) {
				$scope.transactions = resp.data.transactions;
				$scope.loading = false;
			});
	};

	$scope.getTransactionsOfBlock($scope.block.id);

	/*
    $scope.addresses = $scope.block.addresses;
    $scope.transactions = $scope.block.transactions;
    */

    $scope.close = function () {
        blockModal.deactivate();
    }
}]);