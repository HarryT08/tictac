package com.art.ufps.tictac.service;

import com.art.ufps.tictac.entity.Estudiante;

import java.util.List;

public interface EstudianteInterface {

    List<Estudiante> list();
    void save(Estudiante estudiante);
    void delete(String id);
    Estudiante getEstudiante(String id);
}
