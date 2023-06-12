package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "estudiante", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class Estudiante implements Serializable {
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_estudiante", nullable = false, length = 50)
    private String idEstudiante;
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
    @Column(name = "numero_proyectos_tic", nullable = false)
    private int numeroProyectosTic;
}
