 (function (){
 var store = angular.module('store', []);

store.controller('shopController',['$scope', function($scope){
	this.products = products;
	 $scope.addToCart = function(){
	 	
	 	var num = num + 1;
		 cartItems.push({id: num, name: this.product.name, price: this.product.price, soldOut: this.product.soldOut, description: this.product.description, images: this.product.images });
		 console.log(cartItems)
	}
}]);

var products = [
	{id: 0, name: 'nike', price: 119.57, soldOut: false, description: 'Lorem ipsum dolor sit amet', images : [{full: 'https://placeholdit.imgix.net/~text?txtsize=47&txt=500%C3%97300&w=500&h=300', thumbnail: 'https://placeholdit.imgix.net/~text?txtsize=14&txt=150%C3%97150&w=150&h=150'}]},
	{id: 1, name: 'adidas', price: 123.99, soldOut: false, description: 'Lorem ipsum dolor sit amet', images : [{full: 'https://placeholdit.imgix.net/~text?txtsize=47&txt=500%C3%97300&w=500&h=300', thumbnail: 'https://placeholdit.imgix.net/~text?txtsize=14&txt=150%C3%97150&w=150&h=150'}]},
	{id: 2, name: 'puma', price: 150.95, soldOut: false, description: 'Lorem ipsum dolor sit amet', images : [{full: 'https://placeholdit.imgix.net/~text?txtsize=47&txt=500%C3%97300&w=500&h=300', thumbnail: 'https://placeholdit.imgix.net/~text?txtsize=14&txt=150%C3%97150&w=150&h=150'}]},
	{id: 3, name: 'fila', price: 178.90, soldOut: false, description: 'Lorem ipsum dolor sit amet', images : [{full: 'https://placeholdit.imgix.net/~text?txtsize=47&txt=500%C3%97300&w=500&h=300', thumbnail: 'https://placeholdit.imgix.net/~text?txtsize=14&txt=150%C3%97150&w=150&h=150'}]},
	{id: 0, name: 'nike', price: 119.57, soldOut: false, description: 'Lorem ipsum dolor sit amet', images : [{full: 'https://placeholdit.imgix.net/~text?txtsize=47&txt=500%C3%97300&w=500&h=300', thumbnail: 'https://placeholdit.imgix.net/~text?txtsize=14&txt=150%C3%97150&w=150&h=150'}]},
	{id: 1, name: 'adidas', price: 123.99, soldOut: false, description: 'Lorem ipsum dolor sit amet', images : [{full: 'https://placeholdit.imgix.net/~text?txtsize=47&txt=500%C3%97300&w=500&h=300', thumbnail: 'https://placeholdit.imgix.net/~text?txtsize=14&txt=150%C3%97150&w=150&h=150'}]},
	{id: 2, name: 'puma', price: 150.95, soldOut: false, description: 'Lorem ipsum dolor sit amet', images : [{full: 'https://placeholdit.imgix.net/~text?txtsize=47&txt=500%C3%97300&w=500&h=300', thumbnail: 'https://placeholdit.imgix.net/~text?txtsize=14&txt=150%C3%97150&w=150&h=150'}]},
	{id: 3, name: 'fila', price: 178.90, soldOut: false, description: 'Lorem ipsum dolor sit amet', images : [{full: 'https://placeholdit.imgix.net/~text?txtsize=47&txt=500%C3%97300&w=500&h=300', thumbnail: 'https://placeholdit.imgix.net/~text?txtsize=14&txt=150%C3%97150&w=150&h=150'}]}
];


store.controller('cartController', function(){
	this.cartItems = cartItems;
});
var cartItems = [
	{id: 3, name: 'fila', price: 178.90, soldOut: false, description: 'Lorem ipsum dolor sit amet', images : [{full: 'https://placeholdit.imgix.net/~text?txtsize=47&txt=500%C3%97300&w=500&h=300', thumbnail: 'https://placeholdit.imgix.net/~text?txtsize=14&txt=150%C3%97150&w=150&h=150'}]}

];
})();

