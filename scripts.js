function validar_campo(){
	var txt = document.getElementsById("txtNome");
	var nome = txt.value;
	
	if(nome.length < 3){
		alert ("O campo nome deve possuir ao menos 3 caracteres!");
		return false;
	}else{
		return true;
	}
}

function validar_preco(){
	var txt = document.getElementById("txtPreco");
	var preco = txt.value;
	
	if(preco.value > 0 ){
		return true;
	}else{
		alert ("O valor não pode ser negativo!");
		return false;
	}
}

function validar_quantidade(){
	var txt = document.getElementById("txtQnt");
	var quantidade = txt.value;
	
	if(quantidade.value > 0){
		return true;
	} else {
		alert("A quantidade não pode ser negativa!")
		return false;
	}
}

function validar_validade (){
	var txt = document.getElementById("txtData");
	var validade = txt.value;
	
	if(validade.value > 0){
		return true;
	} else {
		alert("Favor, inserir data com pelo menos 1 semana de validade!");
		return false;
	}
}

function validar_foto(){
	var txt = document.getElementById("txtFoto");
	var foto = txt.value;
	
	if(foto.value == ""){
		alert("Insira uma foto!");
		return false;
	}
}

function validar_lista(){
	var txt = document.getElementById ("Categoria");
	var lista = txt.value;
	
	if(lista.value == ""){
		alert("Selecione uma categoria ao item!");
		return false;
	}
}