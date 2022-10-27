package com.tcs.Ponto_e_Virgula.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tcs.Ponto_e_Virgula.DAO.IColaborador;
import com.tcs.Ponto_e_Virgula.model.Colaborador;


@RestController
@CrossOrigin("*")
@RequestMapping("/colaboradores")
public class ColaboradorController {

	@Autowired
	private IColaborador dao;
	
	@GetMapping("/get")
	public List<Colaborador> listarColaborador() {
		return (List<Colaborador>) dao.findAll();
	}
	
	@GetMapping(path = "/especialidade/{parteEspecialidade}")
	public List<Colaborador> listarColaboradorPorEspecialidade(@PathVariable String parteEspecialidade) {
		return (List<Colaborador>) dao.findByEspecialidadeContaining(parteEspecialidade);
	}
	
	@GetMapping(path = "/date/{parteDate}")
	public List<Colaborador> listarColaboradorPorDateDisponivel(@PathVariable String parteDate) {
		return (List<Colaborador>) dao.findByDateContaining(parteDate);
	}
	
	@PostMapping("/post")
	public Colaborador criarColaborador( @RequestBody Colaborador colaborador ) {
		Colaborador colaboradorNovo = dao.save(colaborador);
		return colaboradorNovo;
	}
	@PutMapping
	public Colaborador editarColaborador( @RequestBody Colaborador colaborador ) {
		Colaborador colaboradorNovo = dao.save(colaborador);
		return colaboradorNovo;
	}
	
	@DeleteMapping("/delete/{id}")
	public Optional<Colaborador> excluirColaborador ( @PathVariable Integer id ) {
		Optional<Colaborador> colaborador = dao.findById(id);
		dao.deleteById(id);
		return colaborador;
	}
}
