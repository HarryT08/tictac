package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "momento", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class Momento implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_momento", nullable = false)
    private int idMomento;
    @Basic
    @Column(name = "id_herramienta", nullable = false)
    private int idHerramienta;
    @Basic
    @Column(name = "nombre", nullable = false, length = 20)
    private String nombre;
    @Basic
    @Column(name = "descripcion", nullable = false, length = 500)
    private String descripcion;
}
