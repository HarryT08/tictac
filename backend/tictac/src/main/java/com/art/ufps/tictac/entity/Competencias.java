package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "competencias", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class Competencias implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_competencia")
    private int idCompetencia;
    @Column(name = "nombre")
    private String nombre;

    @ManyToOne
    private Herramienta herramienta;
}
