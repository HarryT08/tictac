package com.art.ufps.tictac.service;

import com.art.ufps.tictac.entity.Proceso;

import java.util.List;
import java.util.Optional;

public interface ProcesoInterface {

    List<Proceso> list();
    void save(Proceso proceso);
    void delete(int id);

    Optional<Proceso> getById(int id);
}
