package com.art.ufps.tictac.dto;

import com.art.ufps.tictac.entity.Docente;
import com.art.ufps.tictac.entity.LiderLinea;
import com.art.ufps.tictac.entity.Persona;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class DatosDocentes {

    List<Persona> listaPersonas;
    List<Docente> listaDocentes;
    List<LiderLinea> listaLideres;

}
