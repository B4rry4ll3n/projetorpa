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

import com.tcs.Ponto_e_Virgula.DAO.IUsuario;
import com.tcs.Ponto_e_Virgula.model.Usuario;

@RestController
@CrossOrigin("*")
@RequestMapping("/usuarios")

public class UsuarioControler {
	
	@Autowired
	private IUsuario dao;

	@GetMapping
	public List<Usuario> listaUsuarios () {
	return (List<Usuario>) dao.findAll();
	}
	
	@PostMapping("/salvar")
	public Usuario criarUsuario (@RequestBody Usuario usuario) {
		Usuario usuarioNovo = dao.save(usuario);
		return usuarioNovo;
	}
		
	@PutMapping
	public Usuario editarUsuario (@RequestBody Usuario usuario) {
		Usuario usuarioNovo = dao.save(usuario);
		return usuarioNovo;
	}
	
	@DeleteMapping("/{id}")
	public Optional<Usuario> excluirUsuario ( @PathVariable Integer id ) {
		Optional<Usuario> usuario = dao.findById(id);
		dao.deleteById(id);
		return usuario;
	
}

}
