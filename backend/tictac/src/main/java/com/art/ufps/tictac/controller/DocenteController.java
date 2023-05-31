package com.art.ufps.tictac.controller;

import com.art.ufps.tictac.entity.Docente;
import com.art.ufps.tictac.service.implement.DocenteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/docente")
public class DocenteController {

    private final DocenteService docenteService;

    @Autowired
    public DocenteController(DocenteService docenteService){
        this.docenteService = docenteService;
    }

    @GetMapping("/list")
    public ResponseEntity<Docente> list(){
        List<Docente> list = docenteService.list();
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/getdocente/{id}")
    public ResponseEntity<Docente> getDocente(@PathVariable("id")String id){
        Docente docente = docenteService.getDocente(id);
        return new ResponseEntity<>(docente, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody Docente docenteDto){
        if (docenteDto == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        docenteService.save(docenteDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id")String id, @RequestBody Docente docenteDto){
        if (docenteDto == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        Docente docente = docenteService.getDocente(id);
        docente.setNumeroProyectosSociales(docenteDto.getNumeroProyectosSociales());
        docente.setNumeroProyectosSexualidad(docenteDto.getNumeroProyectosSexualidad());
        docente.setNumeroProyectosAmbiental(docenteDto.getNumeroProyectosAmbiental());
        docente.setNumeroProyectosEmprendimiento(docenteDto.getNumeroProyectosEmprendimiento());
        docente.setNumeroProyectosTic(docenteDto.getNumeroProyectosTic());
        docente.setNumeroHerramientasSociales(docenteDto.getNumeroHerramientasSociales());
        docente.setNumeroHerramientasSexualidad(docenteDto.getNumeroHerramientasSexualidad());
        docente.setNumeroHerramientasAmbiental(docenteDto.getNumeroHerramientasAmbiental());
        docente.setNumeroHerramientasEmprendimiento(docenteDto.getNumeroHerramientasEmprendimiento());
        docente.setNumeroHerramientasTic(docenteDto.getNumeroHerramientasTic());
        docente.setNumeroContenidosSociales(docenteDto.getNumeroContenidosSociales());
        docente.setNumeroContenidosSexualidad(docenteDto.getNumeroContenidosSexualidad());
        docente.setNumeroContenidosAmbiental(docenteDto.getNumeroContenidosAmbiental());
        docente.setNumeroContenidosEmprendimiento(docenteDto.getNumeroContenidosEmprendimiento());
        docente.setNumeroContenidosTic(docenteDto.getNumeroContenidosTic());

        docenteService.save(docente);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id")String id){
        docenteService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
