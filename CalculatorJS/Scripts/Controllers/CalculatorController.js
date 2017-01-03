var CalculatorController = function ($scope) 
{
    $scope.calculator = calculatorModel;

    $scope.number = function (param) {
        calculatorModel.processNumber(param);
    };

    $scope.modifier = function (modifier) {
        calculatorModel.processModifier(modifier);
    };

    $scope.operation = function (operation) {
        calculatorModel.processOperation(operation);
    };

    $scope.clear = function () {
        calculatorModel.clear();
    };
};


CalculatorController.$inject = ['$scope'];