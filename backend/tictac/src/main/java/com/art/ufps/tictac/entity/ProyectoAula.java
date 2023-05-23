package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;
import java.util.Objects;

@Entity
@Table(name = "proyecto_aula", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class ProyectoAula implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_proyecto", nullable = false)
    private int idProyecto;
    @Basic
    @Column(name = "curso", nullable = false)
    private int curso;
    @Basic
    @Column(name = "id_tema", nullable = false)
    private int idTema;
    @Basic
    @Column(name = "docente_lider", nullable = false, length = 50)
    private String docenteLider;
    @Basic
    @Column(name = "fecha_inicio", nullable = false)
    private Date fechaInicio;
    @Basic
    @Column(name = "fecha_fin", nullable = false)
    private Date fechaFin;
    @Basic
    @Column(name = "lecciones_aprendidas", nullable = false, length = 500)
    private String leccionesAprendidas;
    @Basic
    @Column(name = "nombre", nullable = false, length = 50)
    private String nombre;
}
