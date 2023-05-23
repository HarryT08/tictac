package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "actividad_plan", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class ActividadPlan implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_plan_trabajo", nullable = false)
    private int idPlanTrabajo;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_actividad_plan", nullable = false)
    private int idActividadPlan;
}
