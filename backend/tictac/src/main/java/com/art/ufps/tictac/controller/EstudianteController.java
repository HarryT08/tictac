package com.art.ufps.tictac.controller;

import com.art.ufps.tictac.entity.Estudiante;
import com.art.ufps.tictac.service.implement.EstudianteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/estudiante")
public class EstudianteController {

    private final EstudianteService estudianteService;

    @Autowired
    public EstudianteController(EstudianteService estudianteService){
        this.estudianteService = estudianteService;
    }

    @GetMapping("/list")
    public ResponseEntity<Estudiante> list(){
        List<Estudiante> estudiantes = estudianteService.list();
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/getEstudiante/{id}")
    public ResponseEntity<Estudiante> getEstudiante(@PathVariable("id")String id){
        Estudiante estudiante = estudianteService.getEstudiante(id);
        return new ResponseEntity<>(estudiante, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody Estudiante estudianteDto){
        if (estudianteDto == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        estudianteService.save(estudianteDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id")String id, @RequestBody Estudiante estudianteDto){
        if (estudianteDto == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        Estudiante estudiante = estudianteService.getEstudiante(id);
        estudiante.setNumeroProyectosSociales(estudianteDto.getNumeroProyectosSociales());
        estudiante.setNumeroProyectosSexualidad(estudianteDto.getNumeroProyectosSexualidad());
        estudiante.setNumeroProyectosAmbiental(estudianteDto.getNumeroProyectosAmbiental());
        estudiante.setNumeroProyectosEmprendimiento(estudianteDto.getNumeroProyectosEmprendimiento());
        estudiante.setNumeroProyectosTic(estudianteDto.getNumeroProyectosTic());

        estudianteService.save(estudiante);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id")String id){
        estudianteService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
