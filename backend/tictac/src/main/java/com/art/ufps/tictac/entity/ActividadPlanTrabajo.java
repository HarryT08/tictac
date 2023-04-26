package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "actividad_plan_trabajo", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class ActividadPlanTrabajo implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_actividad")
    private int idActividad;

    @ManyToOne()
    @JoinColumn(name = "id_plan_trabajo", nullable = false)
    private PlanTrabajo planTrabajo;

    @Column(name = "cumplimiento")
    private byte cumplimiento;
}
