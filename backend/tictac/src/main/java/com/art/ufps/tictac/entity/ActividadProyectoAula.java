package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "actividad_proyecto_aula", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class ActividadProyectoAula implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_actividad")
    private int idActividad;

    @ManyToOne()
    @JoinColumn(name = "id_proyecto", nullable = false)
    private ProyectoAula proyecto;

    @Column(name = "cumplimiento")
    private byte cumplimiento;
}
