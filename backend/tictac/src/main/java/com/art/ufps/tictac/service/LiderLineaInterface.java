package com.art.ufps.tictac.service;

import com.art.ufps.tictac.dto.ClaveCompuesta;
import com.art.ufps.tictac.entity.LiderLinea;

import java.util.List;
import java.util.Optional;

public interface LiderLineaInterface {

    List<LiderLinea> list();
    void save(LiderLinea liderLinea);
    void delete(ClaveCompuesta id);
    Optional<LiderLinea> getById(ClaveCompuesta id);

}
