function loadItens() {
    tbody.innerHTML = "";
    fetch("http://localhost:8080/gestores/get", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then(function (res) {
        let all = res.json();
        all.then((json) => {
          json.forEach((item, index) => {
            let data = {
              id: item.id,
              nome: item.nome,
              idG: item.id_tcs,
              email: item.email,
              telefone: item.telefone,
              cidade: item.cidade,
              projeto: item.projeto,
              
              
            };
            itens.push(data);
            insertItem(data);
          });
        });
  
        console.log(all);
      })
      .catch(function (res) {
        console.log(res);
      });
  }