package com.art.ufps.tictac.repository;

import com.art.ufps.tictac.dto.ClaveRecursoProceso;
import com.art.ufps.tictac.entity.RecursoProceso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecursoProcesoRepository extends JpaRepository<RecursoProceso, ClaveRecursoProceso> {

}
