package com.art.ufps.tictac.controller;

import com.art.ufps.tictac.entity.Momento;
import com.art.ufps.tictac.service.implement.MomentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/momento")
public class MomentoController {

    private final MomentoService momentoService;

    @Autowired
    public MomentoController(MomentoService momentoService){
        this.momentoService = momentoService;
    }

    @GetMapping("/list")
    public ResponseEntity<List<Momento>> list(){
        List<Momento> list = momentoService.list();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody Momento momentoDto){
        momentoService.save(momentoDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id")int id, @RequestBody Momento momentoDto){
        Momento momento = momentoService.getById(id).get();
        momento.setNombre(momentoDto.getNombre());
        momento.setDescripcion(momentoDto.getDescripcion());

        momentoService.save(momento);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id")int id){
        momentoService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}