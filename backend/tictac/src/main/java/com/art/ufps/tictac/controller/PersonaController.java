package com.art.ufps.tictac.controller;

import com.art.ufps.tictac.entity.Persona;
import com.art.ufps.tictac.service.implement.PersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
  @RequestMapping("/personas")
public class PersonaController {
  
  private final PersonaService personaService;
  
  // Supongo que solo el admin interacciona con con las personas entonces deje los endpoints como /admin/....
  
  @Autowired
  public PersonaController(PersonaService personaService) {
    this.personaService = personaService;
  }
  
  @PostMapping("/admin/user/create")
  public ResponseEntity<Persona> createUser(@RequestBody Persona persona) {
    System.out.println(persona.toString());
    Persona savedUser = personaService.saveUser(persona);
    if(savedUser == null) ResponseEntity.badRequest().build();
    return ResponseEntity.ok(savedUser);
  }
  
  @GetMapping("/admin/user/{cedula}")
  public ResponseEntity<Persona> getUser(@PathVariable("cedula")String cedula) {
    Persona user = personaService.getUser(cedula);
    if(user == null) return ResponseEntity.notFound().build();
    return ResponseEntity.ok(user);
  }
  
  @GetMapping("/admin/user")
  public ResponseEntity<List<Persona>> getAllUsers() {
    List<Persona> users = personaService.getAllUsers();
    if(users == null) return ResponseEntity.noContent().build();
    return ResponseEntity.ok(users);
  }

  @DeleteMapping("/admin/user/delete/{cedula}")
  public ResponseEntity<String> deletePersona(@RequestParam String cedula){
    personaService.deleteUser(cedula);
    return ResponseEntity.ok("Persona eliminada con éxito");
  }
}
