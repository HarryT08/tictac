package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "plan_trabajo", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class PlanTrabajo implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_plan_trabajo", nullable = false)
    private int idPlanTrabajo;
    @Basic
    @Column(name = "fecha_fin", nullable = true)
    private Timestamp fechaFin;
    @Basic
    @Column(name = "fecha_inicio", nullable = true)
    private Timestamp fechaInicio;
    @Basic
    @Column(name = "lecciones_aprendidas", nullable = true, length = 255)
    private String leccionesAprendidas;
    @Basic
    @Column(name = "observaciones", nullable = true, length = 255)
    private String observaciones;
    @Basic
    @Column(name = "docente_lider", nullable = false, length = 50)
    private String docenteLider;
    @Basic
    @Column(name = "id_tema", nullable = false)
    private int idTema;
}
