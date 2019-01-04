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
     
    // update product
    factory.updateProduct = function($scope){
     
        return $http({
            method: 'POST',
            data: {
                'id' : $scope.id,
                'name' : $scope.name,
                'description' : $scope.description,
                'price' : $scope.price,
                'category_id' : 1
            },
            url: 'http://localhost:8080/api/product/update.php'
        });
    };
     
    // delete product
    factory.deleteProduct = function(id){
        return $http({
            method: 'POST',
            data: { 'id' : id },
            url: 'http://localhost:8080/api/product/delete.php'
        });
    };
     
    // search all products
    factory.searchProducts = function(keywords){
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/product/search.php?s=' + keywords
        });
    };
     
    return factory;
});