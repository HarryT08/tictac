package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "docente", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class Docente implements Serializable {
    
    //Ese generatedValue no falla? El id es un string no un int
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_docente", nullable = false, length = 50)
    private String idDocente;
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
    @Basic
    @Column(name = "numero_herramientas_sociales", nullable = false)
    private int numeroHerramientasSociales;
    @Basic
    @Column(name = "numero_herramientas_sexualidad", nullable = false)
    private int numeroHerramientasSexualidad;
    @Basic
    @Column(name = "numero_herramientas_ambiental", nullable = false)
    private int numeroHerramientasAmbiental;
    @Basic
    @Column(name = "numero_herramientas_emprendimiento", nullable = false)
    private int numeroHerramientasEmprendimiento;
    @Basic
    @Column(name = "numero_herramientas_tic", nullable = false)
    private int numeroHerramientasTic;
    @Basic
    @Column(name = "numero_contenidos_sociales", nullable = false)
    private int numeroContenidosSociales;
    @Basic
    @Column(name = "numero_contenidos_sexualidad", nullable = false)
    private int numeroContenidosSexualidad;
    @Basic
    @Column(name = "numero_contenidos_emprendimiento", nullable = false)
    private int numeroContenidosEmprendimiento;
    @Basic
    @Column(name = "numero_contenidos_ambiental", nullable = false)
    private int numeroContenidosAmbiental;
    @Basic
    @Column(name = "numero_contenidos_tic", nullable = false)
    private int numeroContenidosTic;
}
