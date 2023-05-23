package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "institucion", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class Institucion implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_institucion", nullable = false)
    private int idInstitucion;
    @Basic
    @Column(name = "nombre", nullable = false, length = 50)
    private String nombre;
    @Basic
    @Column(name = "id_ciudad", nullable = false)
    private int idCiudad;
    @Basic
    @Column(name = "numero_proyectos_sociales", nullable = false)
    private int numeroProyectosSociales;
    @Basic
    @Column(name = "numero_proyectos_sexualidad", nullable = false)
    private int numeroProyectosSexualidad;
    @Basic
    @Column(name = "numero_proyectos_ambiental", nullable = false)
    private int numeroProyectosAmbiental;
    @Basic
    @Column(name = "numero_proyectos_emprendimiento", nullable = false)
    private int numeroProyectosEmprendimiento;
    @Basic
    @Column(name = "numero_proyectos_tics", nullable = false)
    private int numeroProyectosTics;
    @Basic
    @Column(name = "numero_herramientas_sociales", nullable = false)
    private int numeroHerramientasSociales;
    @Basic
    @Column(name = "numero_herramientas_sexualidad", nullable = false)
    private int numeroHerramientasSexualidad;
    @Basic
    @Column(name = "numero_herramientas_emprendimiento", nullable = false)
    private int numeroHerramientasEmprendimiento;
    @Basic
    @Column(name = "numero_herramientas_ambiental", nullable = false)
    private int numeroHerramientasAmbiental;
    @Basic
    @Column(name = "numero_herramientas_tic", nullable = false)
    private int numeroHerramientasTic;
}
