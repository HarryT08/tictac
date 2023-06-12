package com.art.ufps.tictac.excepciones;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MensajeDto {

    private String mensaje;
    private Boolean estado;

    public MensajeDto(String mensaje, Boolean estado){
        this.mensaje = mensaje;
        this.estado = estado;
    }
}
