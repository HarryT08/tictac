package com.art.ufps.tictac.service.implement;

import com.art.ufps.tictac.dto.ClaveCompuesta;
import com.art.ufps.tictac.entity.LiderLinea;
import com.art.ufps.tictac.repository.LiderLineaRepository;
import com.art.ufps.tictac.service.LiderLineaInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LiderLineaService implements LiderLineaInterface {

    private final LiderLineaRepository liderLineaRepository;

    @Autowired
    public LiderLineaService(LiderLineaRepository liderLineaRepository) {
        this.liderLineaRepository = liderLineaRepository;
    }

    public List<LiderLinea> list(){
        return liderLineaRepository.findAll();
    }

    public void save(LiderLinea liderLinea){
        liderLineaRepository.save(liderLinea);
    }

    public void delete(ClaveCompuesta id){
        liderLineaRepository.deleteById(id);
    }

    public Optional<LiderLinea> getById(ClaveCompuesta id){
        return liderLineaRepository.findById(id);
    }

}
