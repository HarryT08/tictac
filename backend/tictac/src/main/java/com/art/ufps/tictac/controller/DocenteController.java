package com.art.ufps.tictac.controller;

import com.art.ufps.tictac.dto.ExcelPersonDto;
import com.art.ufps.tictac.entity.Docente;
import com.art.ufps.tictac.entity.LiderLinea;
import com.art.ufps.tictac.entity.Persona;
import com.art.ufps.tictac.repository.LiderLineaRepository;
import com.art.ufps.tictac.service.implement.DocenteService;
import com.art.ufps.tictac.service.implement.PersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/docente")
@CrossOrigin()
public class DocenteController {

    private final DocenteService docenteService;

    private final PersonaService personaService;

    private final LiderLineaRepository liderLineaRepository;

    @Autowired
    public DocenteController(DocenteService docenteService, PersonaService personaService, LiderLineaRepository liderLineaRepository){
        this.docenteService = docenteService;
        this.personaService = personaService;
        this.liderLineaRepository = liderLineaRepository;
    }

    @GetMapping("/list")
    public ResponseEntity<List<ExcelPersonDto>> list(@RequestParam("idLinea") String idLinea, @RequestParam("esLider") String esLider){
        List<ExcelPersonDto> datos = new ArrayList<>();
        int intIdLinea = Integer.parseInt(idLinea);
        int intEsLider = Integer.parseInt(esLider);

        List<Persona> personas = personaService.getAllUsersByRol(intEsLider);
        List<LiderLinea> liderLineas = liderLineaRepository.findAll();

        for (Persona persona: personas) {
            ExcelPersonDto excelPersonDto = new ExcelPersonDto();
            excelPersonDto.setCedula(persona.getCedula());
            excelPersonDto.setNombre(persona.getNombre());
            excelPersonDto.setApellido(persona.getApellido());
            excelPersonDto.setCodigo(persona.getCodigo());

            LiderLinea liderLinea = liderLineas.stream()
                    .filter(p -> p.getIdDocente().equals(persona.getCedula()))
                    .findFirst()
                    .orElse(null);
            if (liderLinea != null) {
                excelPersonDto.setIdLinea(liderLinea.getIdLinea());
                excelPersonDto.setEsLider(liderLinea.getEsLider());
            }
            if (excelPersonDto.getIdLinea() == intIdLinea){
                datos.add(excelPersonDto);
            }
        }
        return new ResponseEntity<>(datos, HttpStatus.OK);
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
