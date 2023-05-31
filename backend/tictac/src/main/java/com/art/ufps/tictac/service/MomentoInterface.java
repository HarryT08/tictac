package com.art.ufps.tictac.service;

import com.art.ufps.tictac.entity.Momento;

import java.util.List;
import java.util.Optional;

public interface MomentoInterface {

    List<Momento> list();
    void save(Momento momento);
    void delete(int id);

    Optional<Momento> getById(int id);


}
