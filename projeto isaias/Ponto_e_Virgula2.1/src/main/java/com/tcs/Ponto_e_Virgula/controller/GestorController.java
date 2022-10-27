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

import com.tcs.Ponto_e_Virgula.DAO.IGestor;
import com.tcs.Ponto_e_Virgula.model.Gestor;

@RestController
@CrossOrigin("*")
@RequestMapping("/gestores")
public class GestorController {

	@Autowired
	private IGestor dao;
	
	@GetMapping("/get")
	public  List<Gestor> listarGestor() {
		return (List<Gestor>) dao.findAll();
	}
	
	@PostMapping("/post")
	public Gestor criarGestor (@RequestBody Gestor gestor) {
		Gestor gestorNovo = dao.save(gestor);
		return gestorNovo;
	}
		
	@PutMapping
	public Gestor editarGestor (@RequestBody Gestor gestor) {
		Gestor gestorNovo = dao.save(gestor);
		return gestorNovo;
	}
	
	@DeleteMapping("/delete/{id}")
	public Optional<Gestor> excluirGestor ( @PathVariable Integer id ) {
		Optional<Gestor> gestor = dao.findById(id);
		dao.deleteById(id);
		return gestor;
	}
}
