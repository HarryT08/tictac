package com.art.ufps.tictac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "contenido_audiovisual", schema = "bd_tictac", catalog = "")
@Getter
@Setter
public class ContenidoAudiovisual implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_contenido")
    private int idContenido;

    @ManyToOne()
    @JoinColumn(name = "id_linea", nullable = false)
    private LineaTransversal linea;

    @ManyToOne()
    @JoinColumn(name = "id_poblacion")
    private Poblacion poblacion;

    @ManyToOne()
    @JoinColumn(name = "docente_autor", nullable = false)
    private Docente docenteAutor;

    @Column(name = "nombre_contenido")
    private String nombreContenido;

    @Column(name = "visibilidad")
    private byte visibilidad;

    @Column(name = "url_adjuntos")
    private int urlAdjuntos;
}
