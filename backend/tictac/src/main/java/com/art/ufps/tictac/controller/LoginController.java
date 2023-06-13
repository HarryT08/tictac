package com.art.ufps.tictac.controller;

import com.art.ufps.tictac.dto.LoginDto;
import com.art.ufps.tictac.entity.Persona;
import com.art.ufps.tictac.excepciones.MensajeDto;
import com.art.ufps.tictac.security.JWTAuthResponseDTO;
import com.art.ufps.tictac.security.JwtTokenProvider;
import com.art.ufps.tictac.service.PersonaInterface;
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
    private PersonaInterface personaInterface;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @PostMapping("/login/{rol}")
    public ResponseEntity<JWTAuthResponseDTO> login(@PathVariable("rol")String rol, @RequestBody LoginDto loginDto) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginDto.getDocumento(), loginDto.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);

        Persona persona = personaInterface.getUser(loginDto.getDocumento());

        String token = jwtTokenProvider.generarToken(authentication);

        if (rol.equals("1")){
            boolean isAdmin = authentication.getAuthorities().stream()
                    .anyMatch(authority -> authority.getAuthority().equals("Admin"));
            boolean isLider = authentication.getAuthorities().stream()
                    .anyMatch(authority -> authority.getAuthority().equals("Lider PPT"));
            boolean isDocente = authentication.getAuthorities().stream()
                    .anyMatch(authority -> authority.getAuthority().equals("Docente"));
            if (isAdmin) {
                return ResponseEntity.ok(new JWTAuthResponseDTO(token, persona.getNombre(), persona.getApellido(), persona.getCedula(), "Admin"));
            }
            else if (isLider) {
                return ResponseEntity.ok(new JWTAuthResponseDTO(token, persona.getNombre(), persona.getApellido(), persona.getCedula(), "Lider PPT"));
            }
            else if (isDocente) {
                return ResponseEntity.ok(new JWTAuthResponseDTO(token, persona.getNombre(), persona.getApellido(), persona.getCedula(), "Docente"));
            }
        }
        else if (rol.equals("2")) {
            boolean isEstudiante = authentication.getAuthorities().stream()
                    .anyMatch(authority -> authority.getAuthority().equals("Estudiante"));
            if (isEstudiante) {
                return ResponseEntity.ok(new JWTAuthResponseDTO(token, persona.getNombre(), persona.getApellido(), persona.getCedula(), "Estudiante"));
            }
        }
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }

    @PostMapping("/validarToken")
    public ResponseEntity<MensajeDto> validarToken(@RequestBody JWTAuthResponseDTO jwtAuthResponseDTO){
        Boolean validate = jwtTokenProvider.validarToken(jwtAuthResponseDTO.getToken());

        if (validate){
            MensajeDto response = new MensajeDto("Sesión activa",true);
            return ResponseEntity.ok().body(response);
        }
        else {
            MensajeDto response = new MensajeDto("Sesión caducada",false);
            return ResponseEntity.badRequest().body(response);
        }
    }
}

