package com.art.ufps.tictac.dto;

import com.art.ufps.tictac.entity.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class RequestBodyWraper {
    private Herramienta herramienta;
    private Tema tema;
    private Momento momento1;
    private Momento momento2;
    private Momento momento3;
    private List<ProcesoJsonDto> listaprocesos;
    private Recurso recurso;
}
