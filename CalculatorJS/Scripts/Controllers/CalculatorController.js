var CalculatorController = function ($scope, $window)
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
        if (calculatorModel.isDisabled) {
            $window.alert("Nieprawidłowa operacja. Spróbuj ponownie.");
        }
    };

    $scope.clear = function () {
        calculatorModel.clear();
    };
};


CalculatorController.$inject = ['$scope', '$window'];