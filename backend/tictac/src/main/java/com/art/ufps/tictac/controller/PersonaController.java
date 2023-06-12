package com.art.ufps.tictac.controller;

import com.art.ufps.tictac.dto.DatosDocentes;
import com.art.ufps.tictac.dto.DatosEstudiantes;
import com.art.ufps.tictac.entity.Persona;
import com.art.ufps.tictac.excepciones.MensajeDto;
import com.art.ufps.tictac.repository.*;
//import com.art.ufps.tictac.repository.LiderLineaRepository;
import com.art.ufps.tictac.service.implement.PersonaService;
import com.art.ufps.tictac.utils.CargarExcels;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.util.List;

@RestController
@RequestMapping("/personas")
public class PersonaController {

    private final PersonaService personaService;

    private final PersonaRepository personaRepository;

    private final DocenteRepository docenteRepository;

    private final LiderLineaRepository liderLineaRepository;

    private final EstudianteRepository estudianteRepository;

    private final MatriculaRepository matriculaRepository;

    @Autowired
    private CargarExcels cargarExcels;

    // Supongo que solo el admin interacciona con con las personas entonces deje los endpoints como /admin/....

    @Autowired
    public PersonaController(PersonaService personaService, PersonaRepository personaRepository, DocenteRepository docenteRepository, LiderLineaRepository liderLineaRepository, EstudianteRepository estudianteRepository, MatriculaRepository matriculaRepository) {
        this.personaService = personaService;
        this.personaRepository = personaRepository;
        this.docenteRepository = docenteRepository;
        this.liderLineaRepository = liderLineaRepository;
        this.estudianteRepository = estudianteRepository;
        this.matriculaRepository = matriculaRepository;
    }

    @PostMapping("/admin/user/create")
    public ResponseEntity<Persona> createUser(@RequestBody Persona persona) {
        System.out.println(persona.toString());
        Persona savedUser = personaService.saveUser(persona);
        if (savedUser == null) ResponseEntity.badRequest().build();
        return ResponseEntity.ok(savedUser);
    }

    @GetMapping("/admin/user/{cedula}")
    public ResponseEntity<Persona> getUser(@PathVariable("cedula") String cedula) {
        Persona user = personaService.getUser(cedula);
        if (user == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(user);
    }

    @GetMapping("/admin/user")
    public ResponseEntity<List<Persona>> getAllUsers() {
        List<Persona> users = personaService.getAllUsers();
        if (users == null) return ResponseEntity.noContent().build();
        return ResponseEntity.ok(users);
    }

    @DeleteMapping("/admin/user/delete/{cedula}")
    public ResponseEntity<String> deletePersona(@RequestParam String cedula) {
        personaService.deleteUser(cedula);
        return ResponseEntity.ok("Persona eliminada con éxito");
    }

    @PostMapping("/uploadDocentes")
    public ResponseEntity<MensajeDto> uploadExcelDocentes(@RequestParam("file") MultipartFile file) {
        MensajeDto mensajeDto;
        try {
            if (file.isEmpty() || !file.getOriginalFilename().endsWith(".xlsx") || file.getSize() > 1000000) {
                mensajeDto = new MensajeDto("Archivo no valido",false);
                return ResponseEntity.badRequest().body(mensajeDto);
            }
            InputStream inputStream = file.getInputStream();
            //List<Persona> personas = cargarExcels.cargarDocentes(inputStream);
            DatosDocentes datosDocentes = cargarExcels.cargarDocentes(inputStream);
            if (datosDocentes.getListaPersonas().isEmpty()) {
                mensajeDto = new MensajeDto("El archivo esta vacio",true);
                return ResponseEntity.badRequest().body(mensajeDto);
            } else {
                personaRepository.saveAll(datosDocentes.getListaPersonas());
                docenteRepository.saveAll(datosDocentes.getListaDocentes());
                liderLineaRepository.saveAll(datosDocentes.getListaLideres());
                mensajeDto = new MensajeDto("Archivo cargado correctamente",false);
                return ResponseEntity.ok(mensajeDto);
            }
        }
        catch (Exception e){
            mensajeDto = new MensajeDto("Error al leer el archivo",false);
            return ResponseEntity.badRequest().body(mensajeDto);
        }
    }

    @PostMapping("/uploadEstudiantes")
    public ResponseEntity<MensajeDto> uploadExcelEstudiantes(@RequestParam("file") MultipartFile file) {
        MensajeDto mensajeDto;
        try {
            if (file.isEmpty() || !file.getOriginalFilename().endsWith(".xlsx") || file.getSize() > 1000000) {
                mensajeDto = new MensajeDto("Archivo no valido",false);
                return ResponseEntity.badRequest().body(mensajeDto);
            }
            InputStream inputStream = file.getInputStream();
            //List<Persona> personas = cargarExcels.cargarEstudiantes(inputStream);
            DatosEstudiantes datosEstudiantes = cargarExcels.cargarEstudiantes(inputStream);
            if (datosEstudiantes.getListaPersonas().isEmpty()) {
                mensajeDto = new MensajeDto("El archivo esta vacio",true);
                return ResponseEntity.badRequest().body(mensajeDto);
            } else {
                personaRepository.saveAll(datosEstudiantes.getListaPersonas());
                estudianteRepository.saveAll(datosEstudiantes.getListaEstudiantes());
                matriculaRepository.saveAll(datosEstudiantes.getListaMatriculas());
                mensajeDto = new MensajeDto("Archivo cargado correctamente",false);
                return ResponseEntity.ok(mensajeDto);
            }
        }
        catch (Exception e){
            mensajeDto = new MensajeDto("Error al leer el archivo",false);
            return ResponseEntity.badRequest().body(mensajeDto);
        }

    }

}
