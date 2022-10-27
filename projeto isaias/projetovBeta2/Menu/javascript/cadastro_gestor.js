const modal = document.querySelector(".modal-container");
const tbody = document.querySelector("tbody");
const sStatus = document.querySelector("#m-status");
const btnSalvar = document.querySelector("#btnSalvar");


const sId = document.querySelector("#m-id");
const sNome = document.querySelector("#m-nome");
const sidG = document.querySelector("#m-idG");
const sEmail = document.querySelector("#m-email");
const sTelefone = document.querySelector("#m-telefone");
const sProjeto = document.querySelector("#m-projeto");
const sCidade = document.querySelector("#m-cidade");
//const sEspecialidade = document.querySelector("#m-especialidade");

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
    sidG.value = item.idG;
    sEmail.value = item.email;
    sTelefone.value = item.telefone;
    sCidade.value = item.cidade;
    sProjeto.value = item.projeto;

  } else {
    sId.value = '';
    sNome.value = '';
    sidG.value = '';
    sEmail.value = '';
    sTelefone.value = '';
    sCidade.value = '';
    sProjeto.value = '';
  }
}

function editItem(id) {
  console.log(itens);
  openModal(true, id);
}

function deleteItem(id) {
  if (confirm("Deseja realmente deletar?")) {
    fetch("http://localhost:8080/gestores/delete/" + id, {
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
    <td>${item.idG}</td>
    <td>${item.email}</td>
    <td>${item.telefone}</td>
    <td>${item.cidade}</td>
    <td>${item.projeto}</td>
   
    <td></td>
    <td></td>
    <td class="acao">
      <button onclick="editItem(${item.id})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button id="btnDelete" onclick="deleteItem(${item.id})"><i class='bx bx-trash'></i></button>
    </td>
  `;
  tbody.appendChild(tr);
}



btnSalvar.onclick = (e) => {
  if (
    
    sNome.value == ""|| 
    sidG.value == ""|| 
    sEmail.value == ""|| 
    sTelefone.value == ""|| 
    sCidade.value == ""|| 
    sProjeto.value == ""
  ) {
    return;
  }

  e.preventDefault();

  sendData({
    id: sId.value,
    nome: sNome.value,
    id_tcs: sidG.value,
    email: sEmail.value,
    telefone: sTelefone.value,
    cidade: sCidade.value,
    projeto: sProjeto.value,
    
    
  });

  modal.classList.remove("active");
};

function sendData(data) {
  fetch("http://localhost:8080/gestores/post", {
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

loadItens();
