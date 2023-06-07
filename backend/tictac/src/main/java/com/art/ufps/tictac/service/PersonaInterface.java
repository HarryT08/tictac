package com.art.ufps.tictac.service;

import com.art.ufps.tictac.entity.Persona;

import java.util.List;

public interface PersonaInterface {
  
  List<Persona> getAllUsers();
  Persona getUser(String cedula);
  Persona saveUser(Persona persona);
  Persona updateUser(Persona persona);
  void deleteUser(String cedula);
  void loadUsers(List<Persona> personas);
}
