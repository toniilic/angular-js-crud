app.controller('productsController', function($scope, $mdDialog, $mdToast, productsFactory){
 
    // read products
    $scope.readProducts = function(){
 
        // use products factory
        productsFactory.readProducts().then(function successCallback(response){
            $scope.products = response.data.records;
        }, function errorCallback(response){
            $scope.showToast("Unable to read record.");
        });
 
    }
     
    // show 'create product form' in dialog box
    $scope.showCreateProductForm = function(event){
     
        $mdDialog.show({
            controller: DialogController,
            templateUrl: './app/products/create_product.template.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            scope: $scope,
            preserveScope: true,
            fullscreen: true // Only for -xs, -sm breakpoints.
        });
    }
 
    // create new product
    $scope.createProduct = function(){
     
        productsFactory.createProduct($scope).then(function successCallback(response){
     
            // tell the user new product was created
            $scope.showToast(response.data.message);
     
            // refresh the list
            $scope.readProducts();
     
            // close dialog
            $scope.cancel();
     
            // remove form values
            $scope.clearProductForm();
     
        }, function errorCallback(response){
            $scope.showToast("Unable to create record.");
        });
    }

    // clear variable / form values
    $scope.clearProductForm = function(){
        $scope.id = "";
        $scope.name = "";
        $scope.description = "";
        $scope.price = "";
    }

    // show toast message
    $scope.showToast = function(message){
        $mdToast.show(
            $mdToast.simple()
                .textContent(message)
                .hideDelay(3000)
                .position("top right")
        );
    }
     
    // retrieve record to fill out the form
    $scope.readOneProduct = function(id){
     
        // get product to be edited
        productsFactory.readOneProduct(id).then(function successCallback(response){
     
            // put the values in form
            $scope.id = response.data.id;
            $scope.name = response.data.name;
            $scope.description = response.data.description;
            $scope.price = response.data.price;
     
            $mdDialog.show({
                controller: DialogController,
                templateUrl: './app/products/read_one_product.template.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                fullscreen: true
            }).then(
                function(){},
     
                // user clicked 'Cancel'
                function() {
                    // clear modal content
                    $scope.clearProductForm();
                }
            );
     
        }, function errorCallback(response){
            $scope.showToast("Unable to retrieve record.");
        });
     
    }
     
    // showUpdateProductForm will be here
     
    // methods for dialog box
    function DialogController($scope, $mdDialog) {
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
    }
});
