package com.art.ufps.tictac.controller;

import com.art.ufps.tictac.entity.Herramienta;
import com.art.ufps.tictac.service.implement.HerramientaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/herramienta")
@CrossOrigin()
public class HerramientaController {

    private final HerramientaService herramientaService;

    @Autowired
    public HerramientaController(HerramientaService herramientaService){
        this.herramientaService = herramientaService;
    }

    @GetMapping("/list")
    public ResponseEntity<List<Herramienta>> list(){
        List<Herramienta> list = herramientaService.list();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @GetMapping("/getbyid/{id}")
    public ResponseEntity<Herramienta> getById(@PathVariable("id")int id){
        if (!herramientaService.existById(id)){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Herramienta herramienta = herramientaService.getById(id).get();
        return new ResponseEntity<>(herramienta, HttpStatus.OK);
    }

    @GetMapping("/getbyname/{nombre}")
    public ResponseEntity<Herramienta> getByNombre(@PathVariable("nombre")String nombre){
        if (!herramientaService.existByNombre(nombre)){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Herramienta herramienta = herramientaService.getByNombre(nombre).get();
        return new ResponseEntity<>(herramienta, HttpStatus.OK);

    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody Herramienta herramientaDto){
        if(herramientaDto == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        herramientaService.save(herramientaDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id")int id, @RequestBody Herramienta herramientaDto){
        if (!herramientaService.existById(id)){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        Herramienta herramienta = herramientaService.getById(id).get();
        herramienta.setIdTema(herramientaDto.getIdTema());
        herramienta.setDocenteAutor(herramientaDto.getDocenteAutor());
        herramienta.setNombreHerramienta(herramientaDto.getNombreHerramienta());
        herramienta.setObjetivos(herramientaDto.getObjetivos());
        herramienta.setVisibilidad(herramientaDto.getVisibilidad());
        herramienta.setComentarios(herramientaDto.getComentarios());
        herramienta.setEstado(herramientaDto.getEstado());
        herramienta.setRecomendacion(herramientaDto.getRecomendacion());
        herramienta.setFechaAprobacion(herramientaDto.getFechaAprobacion());
        herramienta.setFechaCreacion(herramientaDto.getFechaCreacion());

        herramientaService.save(herramienta);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id")int id){
        if (!herramientaService.existById(id)){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        herramientaService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
