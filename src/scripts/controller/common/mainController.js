/**
 * Created by zhangyilong on 2018/11/25.
 */
angular.module('mainModule')
    .controller('mainController', ['RestBase', '$scope', 'BaseURL', '$timeout', '$http', '$state',
        function (RestBase, $scope, BaseURL, $timeout, $http, $state) {
            $scope.person = {};
            $scope.userLogin = function () {
                RestBase.get(
                    {
                        url: BaseURL + "/login",
                        params: $scope.person
                    },
                    function successCallback(response) {
                        var data = response.data;
                        if (data.status === "OK") {
                            $scope.toFirst(data.results[0]);//请求成功执行的代码
                        } else {
                            $scope.person.name = data.message;
                        }
                    },
                    function errorCallback(response) {
                        $scope.person.name = response.data.message;//请求失败执行的代码
                    });
            };
            $scope.userSignUp = function () {
                var pwdRepeat = $scope.pwdRepeat;
                if (pwdRepeat === $scope.person.password) {
                    RestBase.post(
                        {
                            url: BaseURL + "/signup",
                            data: $scope.person
                        },
                        function successCallback(response) {
                            var data = response.data;
                            if (data.status === "OK") {
                                $scope.toFirst(data.results[0]);//请求成功执行的代码
                            } else {
                                $scope.person.name = data.message;
                            }
                        },
                        function errorCallback(response) {
                            $scope.person.name = response.data.message;//请求失败执行的代码
                        });
                }
            };
            $scope.toSignUp = function () {
                $state.go('signup');
            };
            $scope.toFirst = function (user) {
                $state.go('first', {user: user});
            };
        }]);