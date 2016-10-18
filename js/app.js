 (function (){
 var store = angular.module('store', []);

store.controller('shopController', function(){
	this.products = products;
});

var products = [
	{id: 0, name: 'nike', price: 119.57, soldOut: false, description: 'Lorem ipsum dolor sit amet'},
	{id: 1, name: 'adidas', price: 123.99, soldOut: false, description: 'Lorem ipsum dolor sit amet'},
	{id: 2, name: 'puma', price: 150.95, soldOut: false, description: 'Lorem ipsum dolor sit amet'},
	{id: 3, name: 'fila', price: 178.90, soldOut: false, description: 'Lorem ipsum dolor sit amet'},
	{id: 0, name: 'nike', price: 119.57, soldOut: false, description: 'Lorem ipsum dolor sit amet'},
	{id: 1, name: 'adidas', price: 123.99, soldOut: false, description: 'Lorem ipsum dolor sit amet'},
	{id: 2, name: 'puma', price: 150.95, soldOut: false, description: 'Lorem ipsum dolor sit amet'},
	{id: 3, name: 'fila', price: 178.90, soldOut: false, description: 'Lorem ipsum dolor sit amet'}
];
})();

