package com.art.ufps.tictac.dto;

import com.art.ufps.tictac.entity.Estudiante;
import com.art.ufps.tictac.entity.Matricula;
import com.art.ufps.tictac.entity.Persona;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class DatosEstudiantes {

    List<Persona> listaPersonas;
    List<Estudiante> listaEstudiantes;
    List<Matricula> listaMatriculas;
}
