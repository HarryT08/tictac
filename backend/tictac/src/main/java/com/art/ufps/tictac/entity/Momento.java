package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "momento", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class Momento implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_momento")
    private int idMomento;

    @ManyToOne()
    @JoinColumn(name = "id_herramienta", nullable = false)
    private Herramienta herramienta;

    @Column(name = "descripcion")
    private String descripcion;
}
