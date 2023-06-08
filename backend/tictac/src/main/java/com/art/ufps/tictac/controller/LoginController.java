package com.art.ufps.tictac.controller;

import com.art.ufps.tictac.dto.LoginDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/sesion")
@CrossOrigin()
public class LoginController {


    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/login/{rol}")
    public ResponseEntity<String> login(@PathVariable("rol")String rol, @RequestBody LoginDto loginDto) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginDto.getDocumento(), loginDto.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);

        if (rol.equals("1")){
            boolean isAdmin = authentication.getAuthorities().stream()
                    .anyMatch(authority -> authority.getAuthority().equals("Admin"));
            boolean isLider = authentication.getAuthorities().stream()
                    .anyMatch(authority -> authority.getAuthority().equals("Lider"));
            boolean isDocente = authentication.getAuthorities().stream()
                    .anyMatch(authority -> authority.getAuthority().equals("Docente"));
            if (isAdmin) {
                return new ResponseEntity<>("/menu-directivos", HttpStatus.OK);
            }
            else if (isLider) {
                return new ResponseEntity<>("/menu-lideres", HttpStatus.OK);
            }
            else if (isDocente) {
                return new ResponseEntity<>("/menu-docentes", HttpStatus.OK);
            }
        }
        else if (rol.equals("2")) {
            boolean isEstudiante = authentication.getAuthorities().stream()
                    .anyMatch(authority -> authority.getAuthority().equals("Estudiante"));
            if (isEstudiante) {
                return new ResponseEntity<>("/menu-estudiantes", HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }
}

