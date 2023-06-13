package com.art.ufps.tictac.repository;

import com.art.ufps.tictac.entity.ContenidoAudiovisual;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ContenidoAudiovisualRepository extends JpaRepository<ContenidoAudiovisual, Integer> {

    Optional<ContenidoAudiovisual> findByNombreContenido(String nombre);

}
