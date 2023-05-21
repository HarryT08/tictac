package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "rol", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class Rol {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_rol", nullable = false)
    private int idRol;
    @Basic
    @Column(name = "nombre", nullable = false, length = 50)
    private String nombre;
}
