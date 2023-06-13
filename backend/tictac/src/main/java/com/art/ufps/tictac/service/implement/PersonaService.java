package com.art.ufps.tictac.service.implement;

import com.art.ufps.tictac.entity.Persona;
import com.art.ufps.tictac.entity.Rol;
import com.art.ufps.tictac.repository.PersonaRepository;
import com.art.ufps.tictac.service.PersonaInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonaService implements PersonaInterface {
  
  private final PersonaRepository personaRepository;
  
  @Autowired
  public PersonaService(PersonaRepository personaRepository) {
    this.personaRepository = personaRepository;
  }
  
  @Override
  public List<Persona> getAllUsers() {
    return personaRepository.findAll();
  }
  
  @Override
  public Persona getUser(String cedula) {
    return personaRepository.findById(cedula).orElse(null);
  }
  
  @Override
  public Persona saveUser(Persona persona) {
    return personaRepository.save(persona);
  }
  
  @Override
  public Persona updateUser(Persona persona) {
    return null;
  }
  
  @Override
  public void deleteUser(String cedula) {
    personaRepository.deleteById(cedula);
  }
  
  @Override
  public void loadUsers(List<Persona> personas) {
    personaRepository.saveAll(personas);
  }

  public List<Persona> getAllUsersByRol(int n) {
    Rol rol = new Rol();
    rol.setIdRol(n);
    return personaRepository.findAllByRol(rol);
  }

}
