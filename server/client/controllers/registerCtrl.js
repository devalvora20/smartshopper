
angular.module('smartShopper')
    .controller('registerCtrl', ['$scope', '$http', 'remote_host', 'remote_host_port', RegistrationController])

function RegistrationController($scope, $http, remote_host, remote_host_port) {

    $scope.user = {};

    function validateInput() {

        if (($scope.user) && ($scope.user.email && $scope.user.email.length > 0) &&
            ($scope.user.password && $scope.user.password.length > 0) &&
            ($scope.user.firstName && $scope.user.firstName.length > 0) &&
            ($scope.user.lastName && $scope.user.lastName.length > 0))
            return true;


        return false;
    }
    $scope.doRegisteration = function () {

        const url = `http://${remote_host}:${remote_host_port}/api/smartshopper/user/registration`

        const userdto = $scope.user;
        //console.log(userdto);
       // console.log(url)


        console.log(validateInput())
        if (validateInput()) {
            $http.post(url, userdto)
                .then((userId) => {
                    console.log(userId)
                    $scope.responseMessage = "Registration is Successful"
                    $scope.isSuccess = true;
                })
                .catch(() => {
                    console.log("error")
                    $scope.isSuccess = true;
                    $scope.responseMessage = "Registration failed"
                })

        }
        else {
            console.log("else")
            $scope.isSuccess = false;
            $scope.responseMessage = "All Fields are to be filled !!"
        }

    }


}