package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "recurso", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class Recurso implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_recurso", nullable = false)
    private int idRecurso;
    @Basic
    @Column(name = "nombre", nullable = false, length = 50)
    private String nombre;
    @Basic
    @Column(name = "tipo", nullable = false, length = 50)
    private String tipo;
    @Basic
    @Column(name = "url", nullable = false)
    private String url;

    @OneToOne(mappedBy = "recurso")
    private ContenidoAudiovisual contenidoAudiovisual;
}
