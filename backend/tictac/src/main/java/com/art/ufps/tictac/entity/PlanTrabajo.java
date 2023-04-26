package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "plan_trabajo", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class PlanTrabajo implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_plan_trabajo")
    private int idPlanTrabajo;

    @ManyToOne()
    @JoinColumn(name = "id_linea", nullable = false)
    private LineaTransversal linea;

    @ManyToOne()
    @JoinColumn(name = "docente_lider", nullable = false)
    private Docente docenteLider;

    @Column(name = "ano_lectivo")
    private int anoLectivo;

    @Column(name = "fecha_inicio")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaInicio;

    @Column(name = "fecha_fin")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaFin;

    @Column(name = "observaciones")
    private String observaciones;

    @Column(name = "lecciones_aprendidas")
    private String leccionesAprendidas;
}
