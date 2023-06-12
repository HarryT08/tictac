package com.art.ufps.tictac.repository;

import com.art.ufps.tictac.dto.ClaveCompuesta;
import com.art.ufps.tictac.entity.LiderLinea;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LiderLineaRepository extends JpaRepository<LiderLinea, ClaveCompuesta> {

}

