package com.art.ufps.tictac.repository;

import com.art.ufps.tictac.entity.Poblacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PoblacionRepository extends JpaRepository<Poblacion, Integer> {

    Optional<Poblacion> findByNombre(String nombre);
    boolean existsByNombre(String nombre);
}
