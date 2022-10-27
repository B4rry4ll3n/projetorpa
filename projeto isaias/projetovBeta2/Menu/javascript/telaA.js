const modal = document.querySelector(".modal-container");
const tbody = document.querySelector("tbody");
const sNome = document.querySelector("#m-nome");
const sMat = document.querySelector("#m-mat");
const sFuncao = document.querySelector("#m-funcao");
const sEspecialidade = document.querySelector("#m-especialidade");
const sStatus = document.querySelector("#m-status");
const btnSalvar = document.querySelector("#btnSalvar");
const sCelular = document.querySelector("#m-celular");
const sLocalizacao = document.querySelector("#m-localizacao");
const sEmail = document.querySelector("#m-email");
const sId = document.querySelector("#m-id");
const button = document.querySelector(".searchbtn");
const bData = document.querySelector('#m-data')

let itens = [];

function openModal(edit = false, id = 0) {
  modal.classList.add("active");

  modal.onclick = (e) => {
    if (e.target.className.indexOf("modal-container") !== -1) {
      modal.classList.remove("active");
    }
  };

  if (edit) {
    let item = itens.find((i) => i.id == id);

    sId.value = item.id;
    sNome.value = item.nome;
    sMat.value = item.mat;
    sFuncao.value = item.funcao;
    sEspecialidade.value = item.especialidade;
    sStatus.value = item.status;
    sCelular.value = item.celular;
    sEmail.value = item.email;
    sLocalizacao.value = item.localizacao;
    bData.value = item.date;
  
  } else {
    sId.value = null;
    sNome.value = "";
    sMat.value = "";
    sFuncao.value = "";
    sEspecialidade.value = "";
    sStatus.value = "";
    sCelular.value = "";
    sEmail.value = "";
    sLocalizacao.value ="",
    bData.value = ""
  }
}


function editItem(id) {
  console.log(itens);
  openModal(true, id);
}

function deleteItem(id) {
  if (confirm("Deseja realmente deletar?")) {
    fetch("http://localhost:8080/colaboradores/delete/" + id, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (res) {
        console.log(res);
      })
      .finally(() => {
        loadItens();
      });
  }
}

function insertItem(item, index) {
  let tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.mat}</td>
    <td>${item.funcao}</td>
    <td>${item.especialidade}</td>
    <td>${item.status}</td>
    <td id = "dates">${(item.date.split('-').reverse().join('/'))}</td>
    <td class="acao">
    
  </td>
    <td class="acao">
      
    </td>
  `;
  tbody.appendChild(tr);
}



btnSalvar.onclick = (e) => {
  if (
    sNome.value == "" ||
    sMat.value == "" ||
    sFuncao.value == "" ||
    sEspecialidade.value == "" ||
    sStatus.value == ""
  ) {
    return;
  }

  e.preventDefault();

  sendData({
    id: sId.value,
    nome: sNome.value,
    id_Colaborador_TCS: sMat.value,
    cargo: sFuncao.value,
    localizacao: sLocalizacao.value,
    status: sStatus.value,
    contato_telefone: sCelular.value,
    contato_email: sEmail.value,
    especialidade: sEspecialidade.value,
    date: bData.value,
  });

  modal.classList.remove("active");
};

function sendData(data) {
  fetch("http://localhost:8080/colaboradores/post", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (res) {
      console.log(res);
    })
    .finally(() => {
      loadItens();
    });
}



function loadItens() {
  tbody.innerHTML = "";
  fetch("http://localhost:8080/colaboradores/get", {
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
            especialidade: item.especialidade,
            funcao: item.cargo,
            mat: item.id_Colaborador_TCS,
            nome: item.nome,
            status: item.status,
            email: item.contato_email,
            celular: item.contato_telefone,
            localizacao: item.localizacao,
            date:item.date,
          };

          if (data.status == "Inativo") {
            itens.push(data);
            insertItem(data);

           }

        });
      });

      console.log();
    })
    .catch(function (res) {
      console.log(res);
    });
}


function searchItem(){
  var skill = document.getElementById('name').value;
  document.getElementById('tbody').innerHTML = "";
  debugger;
   fetch("http://localhost:8080/colaboradores/data/" + skill, {
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
            especialidade: item.especialidade,
            funcao: item.cargo,
            mat: item.id_Colaborador_TCS,
            nome: item.nome,
            status: item.status,
            email: item.contato_email,
            celular: item.contato_telefone,
            localizacao: item.localizacao,
            date:item.date,
          };
          if(data.status == "Inativo"){
            
            itens.push(data);
            insertItem(data);
            
          }
        
          
        });
      });

      console.log();
    })
    .catch(function (res) {
      console.log(res);
    });
}









loadItens();
