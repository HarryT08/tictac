package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "proyecto_aula_estudiante", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class ProyectoAulaEstudiante {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_estudiante", nullable = false)
    private int idEstudiante;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_proyecto", nullable = false)
    private int idProyecto;
}
