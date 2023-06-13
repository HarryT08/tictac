package com.art.ufps.tictac.service;

import com.art.ufps.tictac.entity.ContenidoAudiovisual;

import java.util.List;
import java.util.Optional;

public interface ContenidoAudiovisualInterface {

    List<ContenidoAudiovisual> list();
    void save(ContenidoAudiovisual contenidoAudiovisual);
    void delete(int id);
    Optional<ContenidoAudiovisual> getById(int id);
    Optional<ContenidoAudiovisual> getByNombre(String nombre);
}
