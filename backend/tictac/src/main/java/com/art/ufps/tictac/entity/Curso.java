package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "curso", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class Curso implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "grado", nullable = false)
    private int grado;
    @Basic
    @Column(name = "jornada", nullable = false, length = 2)
    private String jornada;
}
