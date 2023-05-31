package com.art.ufps.tictac.repository;

import com.art.ufps.tictac.entity.Momento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MomentoRepository extends JpaRepository<Momento, Integer> {

}
