package com.art.ufps.tictac.repository;

import com.art.ufps.tictac.entity.LineaTransversal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LineaTransversalRepository extends JpaRepository<LineaTransversal, Integer> {

}
