package com.art.ufps.tictac.entity;

import com.art.ufps.tictac.dto.ClaveCompuesta;
import com.art.ufps.tictac.dto.ClaveCompuestaIntegerInteger;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "recurso_contenido", schema = "bd_tictac", catalog = "")
@Getter
@Setter
@IdClass(ClaveCompuestaIntegerInteger.class)
public class RecursoContenido implements Serializable {
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_recurso", nullable = false)
    private int idRecurso;
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_contenido", nullable = false)
    private int idContenido;
}
