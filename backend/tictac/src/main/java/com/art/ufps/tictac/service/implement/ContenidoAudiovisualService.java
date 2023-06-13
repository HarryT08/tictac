package com.art.ufps.tictac.service.implement;

import com.art.ufps.tictac.entity.ContenidoAudiovisual;
import com.art.ufps.tictac.repository.ContenidoAudiovisualRepository;
import com.art.ufps.tictac.service.ContenidoAudiovisualInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContenidoAudiovisualService implements ContenidoAudiovisualInterface {

    private final ContenidoAudiovisualRepository contenidoAudiovisualRepository;

    @Autowired
    public ContenidoAudiovisualService(ContenidoAudiovisualRepository contenidoAudiovisualRepository) {
        this.contenidoAudiovisualRepository = contenidoAudiovisualRepository;
    }

    public List<ContenidoAudiovisual> list(){
        return contenidoAudiovisualRepository.findAll();
    }

    public void save(ContenidoAudiovisual contenidoAudiovisual){
        contenidoAudiovisualRepository.save(contenidoAudiovisual);
    }

    public void delete(int id){
        contenidoAudiovisualRepository.deleteById(id);
    }

    public Optional<ContenidoAudiovisual> getById(int id){
        return contenidoAudiovisualRepository.findById(id);
    }

    public Optional<ContenidoAudiovisual> getByNombre(String nombre){
        return contenidoAudiovisualRepository.findByNombreContenido(nombre);
    }
}
