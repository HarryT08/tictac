package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;
import java.util.Objects;

@Entity
@Table(name = "herramienta", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class Herramienta implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_herramienta", nullable = false)
    private int idHerramienta;
    @Basic
    @Column(name = "id_tema", nullable = false)
    private int idTema;
    @Basic
    @Column(name = "docente_autor", nullable = false, length = 50)
    private String docenteAutor;
    @Basic
    @Column(name = "nombre_herramienta", nullable = false, length = 50)
    private String nombreHerramienta;
    @Basic
    @Column(name = "objetivos", nullable = false, length = 500)
    private String objetivos;
    @Basic
    @Column(name = "visibilidad", nullable = false)
    private byte visibilidad;
    @Basic
    @Column(name = "comentarios", nullable = false, length = 500)
    private String comentarios;
    @Basic
    @Column(name = "estado", nullable = false, length = 2)
    private String estado;
    @Basic
    @Column(name = "recomendacion", nullable = false, length = 500)
    private String recomendacion;
    @Basic
    @Column(name = "fecha_aprobacion", nullable = false)
    private Date fechaAprobacion;
    @Basic
    @Column(name = "fecha_creacion", nullable = false)
    private Date fechaCreacion;
    //@OneToOne(mappedBy = "herramienta")
    //private Tema tema;
}
