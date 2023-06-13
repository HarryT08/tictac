package com.art.ufps.tictac.dto;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Getter
@Setter
@Embeddable
public class ClaveCompuestaIntegerInteger implements Serializable {
    private int idRecurso;
    private int idContenido;
}
