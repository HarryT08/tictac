package com.art.ufps.tictac.controller;

import com.art.ufps.tictac.dto.ExcelEstudianteDto;
import com.art.ufps.tictac.entity.Estudiante;
import com.art.ufps.tictac.entity.Matricula;
import com.art.ufps.tictac.entity.Persona;
import com.art.ufps.tictac.repository.MatriculaRepository;
import com.art.ufps.tictac.service.implement.EstudianteService;
import com.art.ufps.tictac.service.implement.PersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/estudiante")
@CrossOrigin()
public class EstudianteController {

    private final EstudianteService estudianteService;
    
    private final PersonaService personaService;

    private final MatriculaRepository matriculaRepository;

    @Autowired
    public EstudianteController(EstudianteService estudianteService, PersonaService personaService, MatriculaRepository matriculaRepository){
        this.estudianteService = estudianteService;
        this.personaService = personaService;
        this.matriculaRepository = matriculaRepository;
    }

    @GetMapping("/list")
    public ResponseEntity<List<ExcelEstudianteDto>> list(@RequestParam("grado") String curso, @RequestParam("anio") String anio){
        List<ExcelEstudianteDto> datos = new ArrayList<>();
        List<Persona> personas = personaService.getAllUsersByRol(4);
        List<Matricula> matriculas = matriculaRepository.findAll();
        int intCurso = Integer.parseInt(curso);
        int intAnio = Integer.parseInt(anio);

        for (Persona persona: personas) {
            ExcelEstudianteDto excelEstudianteDto = new ExcelEstudianteDto();
            excelEstudianteDto.setCedula(persona.getCedula());
            excelEstudianteDto.setNombre(persona.getNombre());
            excelEstudianteDto.setApellido(persona.getApellido());
            excelEstudianteDto.setCodigo(persona.getCodigo());

            Matricula matricula = matriculas.stream()
                    .filter(p -> p.getIdEstudiante().equals(persona.getCedula()))
                    .findFirst()
                    .orElse(null);
            if (matricula != null) {
                excelEstudianteDto.setId_curso(matricula.getIdCurso());
                excelEstudianteDto.setAno_lectivo(matricula.getAnoLectivo());
            }
            if (excelEstudianteDto.getId_curso() == intCurso && excelEstudianteDto.getAno_lectivo() == intAnio){
                datos.add(excelEstudianteDto);
            }
        }
        return new ResponseEntity<>(datos, HttpStatus.OK);
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
