package com.art.ufps.tictac.repository;

import com.art.ufps.tictac.entity.Matricula;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MatriculaRepository extends JpaRepository<Matricula, String> {
}
