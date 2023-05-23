package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "actividad_proyecto", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class ActividadProyecto implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_actividad", nullable = false)
    private int idActividad;
    @Basic
    @Column(name = "nombre", nullable = false, length = 50)
    private String nombre;
    @Basic
    @Column(name = "descripcion", nullable = false, length = 500)
    private String descripcion;
    @Basic
    @Column(name = "observaciones", nullable = false, length = 500)
    private String observaciones;
    @Basic
    @Column(name = "cumplimiento", nullable = false)
    private byte cumplimiento;
}
