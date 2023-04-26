package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "curso", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class Curso implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_curso")
    private int idCurso;

    @Column(name = "grado")
    private int grado;

    @Column(name = "grupo")
    private int grupo;

    @Column(name = "jornada")
    private String jornada;

    @ManyToOne()
    @JoinColumn(name = "id_poblacion", nullable = false)
    private Poblacion poblacion;

}
