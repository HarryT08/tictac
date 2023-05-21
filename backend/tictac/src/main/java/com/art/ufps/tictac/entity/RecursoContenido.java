package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "recurso_contenido", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class RecursoContenido {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_recurso", nullable = false)
    private int idRecurso;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_contenido", nullable = false)
    private int idContenido;
}
