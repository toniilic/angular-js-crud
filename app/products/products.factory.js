app.factory("productsFactory", function($http){
 
    var factory = {};
 
    // read all products
    factory.readProducts = function(){
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/product/read.php'
        });
    };
     
    // create product
    factory.createProduct = function($scope){
        return $http({
            method: 'POST',
            data: {
                'name' : $scope.name,
                'description' : $scope.description,
                'price' : $scope.price,
                'category_id' : 1
            },
            url: 'http://localhost:8080/api/product/create.php'
        });
    };
     
    // read one product
    factory.readOneProduct = function(id){
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/product/read_one.php?id=' + id
        });
    };
     
    // updateProduct will be here
     
    return factory;
});