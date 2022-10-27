var logado = false;

if (localStorage.getItem("acesso") == "true") {
    logado = true;
    }
if (logado != true) {
        window.location.href = "./index.html";   
    }
