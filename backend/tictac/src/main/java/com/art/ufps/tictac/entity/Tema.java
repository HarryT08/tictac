package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "tema", schema = "bd_tictac", catalog = "")
@Getter @Setter
public class Tema implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_tema", nullable = false)
    private int idTema;
    @Basic
    @Column(name = "nombre", nullable = false, length = 50)
    private String nombre;
    @Basic
    @Column(name = "id_linea", nullable = false)
    private int idLinea;
    @Basic
    @Column(name = "id_competencia", nullable = false)
    private int idCompetencia;
    //@OneToOne(cascade = CascadeType.ALL)
    //@JoinColumn(name = "id_tema")
    //private Herramienta herramienta;
}
