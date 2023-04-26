package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "usuario", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class Usuario implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_usuario")
    private int idUsuario;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "apellido")
    private String apellido;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "fecha_nacimiento")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaNacimiento;

    @Column(name = "ano_lectivo")
    private int anoLectivo;

    @OneToOne()
    @JoinColumn(name = "id_rol", nullable = false)
    private Rol rol;

    @OneToOne()
    @JoinColumn(name = "id_institucion", nullable = false)
    private Institucion institucion;
}
