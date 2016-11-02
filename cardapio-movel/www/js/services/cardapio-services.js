app.service('CardapioServices', function(){
	//Mock Bebidas
	var bebidas = [
		{'nome': 'Vinho Tinto Brasil', 'id' : 01, 'preco' : '40,00'},
		{'nome': 'Cerveja Especial', 'id' : 02, 'preco' : '23,00'},
		{'nome': 'Wisky 18 anos', 'id' : 03, 'preco' : '200,00'}
	];
	//Mock Petiscos
	var petiscos = [
		{'nome': 'Filé ao molho madeira', 'id' : 01, 'preco' : '60,00', 'imagem' : 'http://www.abgsolucoes.com.br/publico/carne.png'},
		{'nome': 'Camarão ao alho', 'id' : 02, 'preco' : '21,00'},
		{'nome': 'Lagosta assada', 'id' : 03, 'preco' : '100,00'}
	];

	//Mock Sucos
	var sucos = [
		{'nome': 'Cajá', 'id' : 01, 'preco' : '3,00'},
		{'nome': 'Açaí', 'id' : 02, 'preco' : '4,00'},
		{'nome': 'Cacau', 'id' : 03, 'preco' : '5,00'}
	];

	this.getPetiscos = function(){
		return petiscos;
	}
	
	this.getBebidas = function(){
		return bebidas;
	}

	this.getSucos = function(){
		return sucos;
	}

});