package com.art.ufps.tictac.controller;

import com.art.ufps.tictac.entity.Usuario;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth" )
public class AuthController {
  @PostMapping("/signup")
  public ResponseEntity<Usuario> signUp(@RequestBody Usuario usuario){
    
    return null;
  }
}
