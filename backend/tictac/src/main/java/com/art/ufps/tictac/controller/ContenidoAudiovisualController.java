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

    @GetMapping("/list/{ruta}")
    public ResponseEntity<List<FormContenido>> list(@PathVariable("ruta")String ruta, @RequestParam("eje") String eje){
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

            String tipo;
            switch (eje) {
                case "1":
                    tipo = "Relaciones sociales y prácticas cívicas";
                    break;
                case "2":
                    tipo = "Sexualidad y construcción de ciudadanía";
                    break;
                case "3":
                    tipo = "Educación Ambiental";
                    break;
                case "4":
                    tipo = "Emprendimiento";
                    break;
                case "5":
                    tipo = "Tecnologías de Información y Comunicación";
                    break;
                default:
                    tipo = "1";
                    break;
            }

            if (contenidoAudiovisual != null && recurso != null && recurso.getTipo().equals(tipo)){
                formContenido.setTitulo(contenidoAudiovisual.getNombreContenido());
                formContenido.setUrl(recurso.getUrl());
                formContenido.setVisibilidad(String.valueOf(contenidoAudiovisual.getVisibilidad()));
                formContenido.setTipo(recurso.getTipo());
                Persona persona = personaInterface.getUser(contenidoAudiovisual.getDocenteAutor());
                formContenido.setAutor(persona.getNombre() + " " + persona.getApellido());
                if (ruta.equals("home") && contenidoAudiovisual.getVisibilidad() == 1){
                    list.add(formContenido);
                }
                else if (ruta.equals("institucion")){list.add(formContenido);}
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

        String tipo = formContenido.getTipo();
        String nombre;

        switch (tipo) {
            case "1":
                nombre = "Relaciones sociales y prácticas cívicas";
                break;
            case "2":
                nombre = "Sexualidad y construcción de ciudadanía";
                break;
            case "3":
                nombre = "Educación Ambiental";
                break;
            case "4":
                nombre = "Emprendimiento";
                break;
            case "5":
                nombre = "Tecnologías de Información y Comunicación";
                break;
            default:
                nombre = "No aplica";
                break;
        }

        recurso.setNombre(formContenido.getTitulo());
        recurso.setTipo(nombre);
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
