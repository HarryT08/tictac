package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Time;

@Entity
@Table(name = "proceso", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class Proceso implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_proceso")
    private int idProceso;

    @ManyToOne()
    @JoinColumn(name = "id_momento", nullable = false)
    private Momento momento;

    @Column(name = "recursos")
    private String recursos;

    @Column(name = "tiempo")
    private Time tiempo;
}
