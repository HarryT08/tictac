package com.art.ufps.tictac.controller;

import com.art.ufps.tictac.entity.Persona;
import com.art.ufps.tictac.service.implement.PersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/persona")
public class PersonaController {
  
  private final PersonaService personaService;
  
  @Autowired
  public PersonaController(PersonaService personaService) {
    this.personaService = personaService;
  }
  
  
  //Se supone que solo un admin puede crear un usuario
  @PostMapping("/admin")
  public ResponseEntity<?> createUser(@RequestBody Persona persona) {
    Persona savedUser = personaService.saveUser(persona);
    if(savedUser == null) ResponseEntity.badRequest().body("No se pudo crear el usuario");
    return ResponseEntity.ok(savedUser);
  }
  
  //Se supone que solo un admin puede obtener a cualquier usuario
  @GetMapping("/admin")
  public ResponseEntity<Persona> getUser(@RequestParam String cedula) {
    return null;
  }
  
}
