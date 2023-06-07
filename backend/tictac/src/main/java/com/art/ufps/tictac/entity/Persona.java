package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;
import java.util.Objects;

@Entity
@Table(name = "persona", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class Persona implements Serializable {
    @Id
    @Column(name = "cedula", nullable = false, length = 50)
    private String cedula;
    @Basic
    @Column(name = "nombre", nullable = false, length = 200)
    private String nombre;
    @Basic
    @Column(name = "apellido", nullable = false, length = 200)
    private String apellido;
    @Basic
    @Column(name = "password", nullable = false, length = 200)
    private String password;
    @Basic
    @Column(name = "fecha_nacimiento", nullable = false)
    private Date fechaNacimiento;
    @Basic
    @Column(name = "codigo", nullable = false, length = 30)
    private String codigo;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "id_rol", referencedColumnName = "id_rol")
    private Rol rol;
    
    @Basic
    @Column(name = "id_institucion", nullable = false)
    private int idInstitucion;
    
    @Override
    public String toString(){
        return this.cedula.getClass().getSimpleName() + " " + this.cedula;
    }
}
