package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "proyecto_aula", schema = "bd_tictac")
@Getter
@Setter
public class ProyectoAula implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_proyecto", nullable = false)
    private int idProyecto;

    @ManyToOne
    @JoinColumn(name = "id_linea", nullable = false)
    private LineaTransversal lineaTransversal;

    @ManyToOne()
    @JoinColumn(name = "id_curso", referencedColumnName= "id_curso", nullable = false)
    private com.art.ufps.tictac.entity.Curso Curso;

    @ManyToOne()
    @JoinColumn(name = "docente_lider", nullable = false)
    private Docente docenteLider;

    @Column(name = "fecha_inicio", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaInicio;

    @Column(name = "fecha_fin", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaFin;

    @Column(name = "observaciones", nullable = false, length = 200)
    private String observaciones;

    @Column(name = "lecciones_aprendidas", nullable = false, length = 500)
    private String leccionesAprendidas;
}
