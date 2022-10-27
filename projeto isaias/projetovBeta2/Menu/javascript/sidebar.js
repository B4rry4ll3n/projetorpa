/* $() chama a classe, o click chama uma funcao quando $() chamar a classe menu lateral que esta com o left 0
eu tinha instanciado o menuLateral como negativo para esconder a sidebar
 */
$('.btnAbre').click(function(){
    $('.menuLateral').toggleClass('mostra');
});
$('.btnFecha').click(function(){
    $('.menuLateral').toggleClass('mostra');
});
