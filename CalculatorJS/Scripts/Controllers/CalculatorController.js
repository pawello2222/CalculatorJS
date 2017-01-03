var CalculatorController = function ($scope, $window)
{
    $scope.buttonStyle = {
        "font-size": "25px",
        "font-family": 'Comic Sans MS'
    }

    $scope.calculator = calculatorModel;

    $scope.number = function (param) {
        calculatorModel.processNumber(param);
    };

    $scope.modifier = function (modifier) {
        calculatorModel.processModifier(modifier);
    };

    $scope.operation = function (operation) {
        calculatorModel.processOperation(operation);
        //if (calculatorModel.isDisabled) {
        //    $window.alert("Nieprawidłowa operacja. Spróbuj ponownie.");
        //}
    };

    $scope.clear = function () {
        calculatorModel.clear();
    };
};


CalculatorController.$inject = ['$scope', '$window'];