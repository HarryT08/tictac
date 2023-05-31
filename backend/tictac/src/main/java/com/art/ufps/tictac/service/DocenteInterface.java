package com.art.ufps.tictac.service;

import com.art.ufps.tictac.entity.Docente;

import java.util.List;

public interface DocenteInterface {

    List<Docente> list();
    void save(Docente docente);
    void delete(String id);

    Docente getDocente(String id);
}
