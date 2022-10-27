package com.tcs.Ponto_e_Virgula.DAO;

import org.springframework.data.repository.CrudRepository;

import com.tcs.Ponto_e_Virgula.model.Colaborador;

public interface IColaborador extends CrudRepository<Colaborador, Integer> {

	public Iterable < Colaborador > findByEspecialidadeContaining(String parteEspecialidade );
	public Iterable < Colaborador > findByDateContaining(String parteDate );
}
