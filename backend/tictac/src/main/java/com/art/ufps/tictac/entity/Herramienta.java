package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "herramienta", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class Herramienta implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_herramienta")
    private int idHerramienta;

    @OneToMany(mappedBy = "herramienta")
    private List<Competencias> competencia;

    @ManyToOne()
    @JoinColumn(name = "id_linea", nullable = false)
    private LineaTransversal linea;

    @Column(name = "id_poblacion")
    private int idPoblacion;

    @ManyToOne()
    @JoinColumn(name = "docente_autor", nullable = false)
    private Docente docenteAutor;

    @Column(name = "nombre_herramienta")
    private String nombreHerramienta;
    @Column(name = "tema_herramienta")
    private String temaHerramienta;

    @Column(name = "objetivos")
    private String objetivos;

    @Column(name = "visibilidad")
    private String visibilidad;

    @Column(name = "estado")
    private String estado;

    @Column(name = "recomendacion")
    private String recomendacion;

    @Column(name = "comentarios")
    private String comentarios;
}
