package com.art.ufps.tictac.controller;

import com.art.ufps.tictac.entity.Proceso;
import com.art.ufps.tictac.service.implement.ProcesoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/proceso")
public class ProcesoController {

    private final ProcesoService procesoService;

    @Autowired
    public ProcesoController(ProcesoService procesoService){
        this.procesoService = procesoService;
    }

    @GetMapping("/list")
    public ResponseEntity<List<Proceso>> list(){
        List<Proceso> list = procesoService.list();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody Proceso procesoDto){
        procesoService.save(procesoDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id")int id, @RequestBody Proceso procesoDto){
        Proceso proceso = procesoService.getById(id).get();
        proceso.setDescripcion(procesoDto.getDescripcion());
        proceso.setTiempo(procesoDto.getTiempo());

        procesoService.save(proceso);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id")int id){
        procesoService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}