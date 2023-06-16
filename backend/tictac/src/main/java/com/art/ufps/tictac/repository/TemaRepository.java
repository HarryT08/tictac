package com.art.ufps.tictac.repository;

import com.art.ufps.tictac.entity.Tema;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TemaRepository extends JpaRepository<Tema, Integer> {
}