package com.art.ufps.tictac.controller;

import com.art.ufps.tictac.entity.Poblacion;
import com.art.ufps.tictac.service.PoblacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/poblacion")
@CrossOrigin
public class PoblacionController {

    private final PoblacionService poblacionService;

    @Autowired
    public PoblacionController(PoblacionService poblacionService) {
        this.poblacionService = poblacionService;
    }

    @GetMapping("/listar")
    public ResponseEntity<List<Poblacion>> listar(){
        List<Poblacion> list = poblacionService.list();
        return new ResponseEntity<List<Poblacion>>(list, HttpStatus.OK);
    }

    @PostMapping("/crear")
    public ResponseEntity<?> crear(@RequestBody Poblacion poblacion){
        if (StringUtils.isEmpty(poblacion.getNombre())){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        if (poblacionService.existByNombre(poblacion.getNombre())){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        Poblacion p = new Poblacion(poblacion.getNombre());
        //p.setNombre(poblacion.getNombre());
        poblacionService.save(p);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/actualizar/{id}")
    public ResponseEntity<?> actualizar(@PathVariable("id")int id, @RequestBody Poblacion poblacion){
        if (!poblacionService.existById(id)){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        if (StringUtils.isEmpty(poblacion.getNombre())){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        if (poblacionService.existByNombre(poblacion.getNombre()) && poblacionService.getByNombre(poblacion.getNombre()).get().getIdPoblacion() != id){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        Poblacion p = poblacionService.getById(id).get();
        p.setNombre(poblacion.getNombre());
        poblacionService.save(p);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminar(@PathVariable("id")int id){
        if (!poblacionService.existById(id)){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        poblacionService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
