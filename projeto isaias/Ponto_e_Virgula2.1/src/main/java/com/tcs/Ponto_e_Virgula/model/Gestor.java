package com.tcs.Ponto_e_Virgula.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name ="gestor")

public class Gestor {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;
	
	
	@Column(name = "nome", length = 200, nullable = false)
	private String nome;
	
	@Column(name = "id_tcs", nullable = false)
	private int  id_tcs ;
	
	
	@Column(name = "email", length = 200, nullable = false)
	private String email;
	
	
	@Column(name = "telefone", length = 20, nullable = false)
	private String telefone;
	
	
	@Column(name = "cidade", length = 20, nullable = false)
	private String cidade;
	
	@Column(name = "projeto", length = 20, nullable = false)
	private String projeto;
	
	@OneToMany(mappedBy="gestor" )
	private Set<Colaborador> colaboradores;
	
	@Deprecated
	public Gestor() {}
	
	public Gestor(Integer id, String nome, int id_tcs, String email, String telefone, String cidade, String projeto) {
		super();
		this.id = id;
		this.nome = nome;
		this.id_tcs = id_tcs;
		this.email = email;
		this.telefone = telefone;
		this.cidade = cidade;
		this.projeto = projeto;
		
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	
	
	public int getId_tcs() {
		return id_tcs;
	}

	public void setId_tcs(int id_tcs) {
		this.id_tcs = id_tcs;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}
	
	

	public String getProjeto() {
		return projeto;
	}

	public void setProjeto(String projeto) {
		this.projeto = projeto;
	}

	
	
	
	public Set<Colaborador> getColaboradores() {
		return colaboradores;
	}

	public void setColaboradores(Set<Colaborador> colaboradores) {
		this.colaboradores = colaboradores;
	}

	@Override
	public String toString() {
		return "Gestor [id=" + id + ", nome=" + nome + ", id_tcs=" + id_tcs + ", email=" + email + ", telefone="
				+ telefone + ", cidade=" + cidade + ", projeto=" + projeto + "]";
	}


	
	

}
