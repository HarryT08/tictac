package com.art.ufps.tictac.controller;

import com.art.ufps.tictac.dto.FormContenido;
import com.art.ufps.tictac.entity.ContenidoAudiovisual;
import com.art.ufps.tictac.entity.Persona;
import com.art.ufps.tictac.entity.Recurso;
import com.art.ufps.tictac.entity.RecursoContenido;
import com.art.ufps.tictac.repository.RecursoContenidoRepository;
import com.art.ufps.tictac.repository.RecursoRepository;
import com.art.ufps.tictac.service.ContenidoAudiovisualInterface;
import com.art.ufps.tictac.service.PersonaInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/contenido")
@CrossOrigin()
public class ContenidoAudiovisualController {

    private final ContenidoAudiovisualInterface contenidoAudiovisualInterface;
    private final RecursoRepository recursoRepository;
    private final RecursoContenidoRepository recursoContenidoRepository;
    private final PersonaInterface personaInterface;


    @Autowired
    public ContenidoAudiovisualController(ContenidoAudiovisualInterface contenidoAudiovisualInterface, RecursoRepository recursoRepository, RecursoContenidoRepository recursoContenidoRepository, PersonaInterface personaInterface) {
        this.contenidoAudiovisualInterface = contenidoAudiovisualInterface;
        this.recursoRepository = recursoRepository;
        this.recursoContenidoRepository = recursoContenidoRepository;
        this.personaInterface = personaInterface;
    }

    @GetMapping("/list")
    public ResponseEntity<List<FormContenido>> list(){
        List<FormContenido> list = new ArrayList<>();

        List<RecursoContenido> buscador = recursoContenidoRepository.findAll();
        List<ContenidoAudiovisual> contenidos = contenidoAudiovisualInterface.list();
        List<Recurso> recursos = recursoRepository.findAll();

        for (RecursoContenido recursoContenido: buscador){
            FormContenido formContenido = new FormContenido();

            ContenidoAudiovisual contenidoAudiovisual = contenidos.stream()
                    .filter(p -> p.getIdContenido() == recursoContenido.getIdContenido())
                    .findFirst()
                    .orElse(null);
            Recurso recurso = recursos.stream()
                    .filter(p -> p.getIdRecurso() == recursoContenido.getIdRecurso())
                    .findFirst()
                    .orElse(null);

            if (contenidoAudiovisual != null && recurso != null){
                formContenido.setTitulo(contenidoAudiovisual.getNombreContenido());
                formContenido.setUrl(recurso.getUrl());
                formContenido.setVisibilidad(String.valueOf(contenidoAudiovisual.getVisibilidad()));
                formContenido.setTipo(recurso.getTipo());
                Persona persona = personaInterface.getUser(contenidoAudiovisual.getDocenteAutor());
                formContenido.setAutor(persona.getNombre() + " " + persona.getApellido());

                list.add(formContenido);
            }
        }

        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody FormContenido formContenido) {
        if (formContenido == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        ContenidoAudiovisual contenidoAudiovisual = new ContenidoAudiovisual();
        Recurso recurso = new Recurso();
        RecursoContenido recursoContenido = new RecursoContenido();

        contenidoAudiovisual.setNombreContenido(formContenido.getTitulo());
        contenidoAudiovisual.setVisibilidad(Byte.valueOf(formContenido.getVisibilidad()));
        contenidoAudiovisual.setDocenteAutor(formContenido.getAutor());
        //contenidoAudiovisualInterface.save(contenidoAudiovisual);

        recurso.setNombre(formContenido.getTitulo());
        recurso.setTipo(formContenido.getTipo());
        recurso.setUrl(formContenido.getUrl());
        //recursoRepository.save(recurso);

        contenidoAudiovisual.setRecurso(recurso);
        contenidoAudiovisualInterface.save(contenidoAudiovisual);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id")int id){
        contenidoAudiovisualInterface.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
