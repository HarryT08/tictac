package com.art.ufps.tictac.service;

import com.art.ufps.tictac.entity.Herramienta;

import java.util.List;
import java.util.Optional;
public interface HerramientaInterface {

    List<Herramienta> list();
    void save(Herramienta herramienta);
    void delete(int id);
    Optional<Herramienta> getById(int id);
    Optional<Herramienta> getByNombre(String nombre);
    boolean existById(int id);
    boolean existByNombre(String nombre);

}
