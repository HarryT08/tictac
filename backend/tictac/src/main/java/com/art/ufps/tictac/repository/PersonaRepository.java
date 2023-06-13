package com.art.ufps.tictac.repository;

import com.art.ufps.tictac.entity.Persona;
import com.art.ufps.tictac.entity.Rol;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PersonaRepository extends JpaRepository<Persona, String> {

    public Optional<Persona> findByCedula(String cedula);

    List<Persona> findAllByRol(Rol rol);
}
