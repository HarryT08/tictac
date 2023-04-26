package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "docente", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class Docente implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @OneToOne()
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;

    @OneToOne()
    @JoinColumn(name = "id_linea", nullable = true)
    private LineaTransversal idLinea;

    @Column(name = "materia")
    private String materia;

    @Column(name = "puntos")
    private int puntos;
}
