package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Time;
import java.util.Objects;

@Entity
@Table(name = "proceso", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class Proceso implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_proceso", nullable = false)
    private int idProceso;
    @Basic
    @Column(name = "id_momento", nullable = false)
    private int idMomento;
    @Basic
    @Column(name = "descripcion", nullable = false, length = 500)
    private String descripcion;
    @Basic
    @Column(name = "tiempo", nullable = false)
    private Time tiempo;
}
