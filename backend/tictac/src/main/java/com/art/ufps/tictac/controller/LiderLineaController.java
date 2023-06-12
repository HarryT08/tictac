package com.art.ufps.tictac.controller;

import com.art.ufps.tictac.dto.ClaveCompuesta;
import com.art.ufps.tictac.entity.LiderLinea;
import com.art.ufps.tictac.service.implement.LiderLineaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/liderLinea")
public class LiderLineaController {

    private final LiderLineaService liderLineaService;

    @Autowired
    public LiderLineaController(LiderLineaService liderLineaService) {
        this.liderLineaService = liderLineaService;
    }

    @GetMapping("/list")
    public ResponseEntity<List<LiderLinea>> list(){
        List<LiderLinea> list = liderLineaService.list();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody LiderLinea liderLineaDto){
        if(liderLineaDto == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        liderLineaService.save(liderLineaDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/update/{id}/{linea}")
    public ResponseEntity<?> update(@PathVariable("id")String id, @PathVariable("linea") int linea, @RequestBody LiderLinea liderLineaDto){

        ClaveCompuesta claveCompuesta = new ClaveCompuesta();
        claveCompuesta.setIdDocente(id);
        claveCompuesta.setIdLinea(linea);
        LiderLinea liderLinea = liderLineaService.getById(claveCompuesta).get();
        liderLinea.setIdDocente(liderLineaDto.getIdDocente());
        liderLinea.setIdLinea(liderLineaDto.getIdLinea());
        liderLinea.setFechaInicio(liderLineaDto.getFechaInicio());
        liderLinea.setEsLider(liderLineaDto.getEsLider());

        liderLineaService.save(liderLinea);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}/{linea}")
    public ResponseEntity<?> delete(@PathVariable("id")String id, @PathVariable("linea") int linea){
        ClaveCompuesta claveCompuesta = new ClaveCompuesta();
        claveCompuesta.setIdDocente(id);
        claveCompuesta.setIdLinea(linea);
        liderLineaService.delete(claveCompuesta);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
