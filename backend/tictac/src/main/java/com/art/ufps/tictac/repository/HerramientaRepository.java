package com.art.ufps.tictac.repository;

import com.art.ufps.tictac.entity.Herramienta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface HerramientaRepository extends JpaRepository<Herramienta, Integer> {

    Optional<Herramienta> findByNombreHerramienta(String nombre);
    boolean existsByNombreHerramienta(String nombreHerramienta);

}
