package com.art.ufps.tictac.service;

import com.art.ufps.tictac.entity.Poblacion;

import java.util.List;
import java.util.Optional;

public interface PoblacionService {

    Optional<Poblacion> getById(int id);
    Optional<Poblacion> getByNombre(String nombre);
    boolean existById(int id);
    boolean existByNombre(String nombre);
    List<Poblacion> list();
    void save(Poblacion poblacion);
    void delete(int id);
}
