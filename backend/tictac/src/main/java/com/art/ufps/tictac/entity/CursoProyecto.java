package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "curso_proyecto", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class CursoProyecto implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "grado", nullable = false)
    private int grado;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_proyecto", nullable = false)
    private int idProyecto;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_actividad", nullable = false)
    private int idActividad;
}
