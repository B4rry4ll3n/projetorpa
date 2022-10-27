function logar(){
    let login = document.getElementById('labelEmail').value;
    let senha = document.getElementById('password').value;

    if (login.value == 'admin@admin' && senha.value == 'admin'){
        location.href = "./index.html";
        
    }else{
        

       
    }
}
