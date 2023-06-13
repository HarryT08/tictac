package com.art.ufps.tictac.repository;

import com.art.ufps.tictac.dto.ClaveCompuestaIntegerInteger;
import com.art.ufps.tictac.entity.RecursoContenido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecursoContenidoRepository extends JpaRepository<RecursoContenido, ClaveCompuestaIntegerInteger> {

}
