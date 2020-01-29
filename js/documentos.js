function search(){
    var cpf = document.getElementById('inputCPF').value;
    console.log(cpf);
    validation(cpf);
}
function validation(cpfValue){
 
    document.getElementById('busca').setAttribute("class" , "ocultar");
    document.getElementById('resultado').removeAttribute("class", "ocultar");
    document.getElementById('tituloDocumentos').innerHTML= 'Certificados de: ' +cpfValue;

    var storage = firebase.storage();
    //Retorna uma promisses que será processada
    var resultado = storage.ref().child(cpfValue).listAll().then(function(todosArquivos){
        if(todosArquivos.items.length >= 1){
            listFiles(cpfValue);
            next(cpfValue);
        } else{
            alert('CPF não encontrado');
        }
    }).catch(function(error){
        console.log('ERRO', error);
    });
}

function listFiles(cpfValue){
    document.getElementById('tituloDocumentos').innerHTML= 'Certificados de: ' +cpfValue;
    var storage = firebase.storage();
    storage.ref().child(cpfValue).listAll().then(function(todosArquivos){
        
    });

}

function next(cpfValue){
    document.getElementById('busca').setAttribute("class" , "ocultar");
    document.getElementById('resultado').removeAttribute("class", "ocultar");
    

}
function back(){
    document.getElementById('busca').removeAttribute("class", "ocultar");
    document.getElementById('resultado').setAttribute("class" , "ocultar");
    document.getElementById('inputCPF').value = '';
}