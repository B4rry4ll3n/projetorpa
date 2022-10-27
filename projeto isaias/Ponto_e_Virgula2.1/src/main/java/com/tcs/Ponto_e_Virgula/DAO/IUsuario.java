package com.tcs.Ponto_e_Virgula.DAO;

import org.springframework.data.repository.CrudRepository;

import com.tcs.Ponto_e_Virgula.model.Usuario;

public interface IUsuario extends CrudRepository<Usuario, Integer>{

}
