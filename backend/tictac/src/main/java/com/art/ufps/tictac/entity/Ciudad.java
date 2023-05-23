package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "ciuda", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class Ciudad implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_ciudad", nullable = false)
    private int idCiudad;
    @Basic
    @Column(name = "nombre", nullable = false, length = 50)
    private String nombre;
}
