package com.art.ufps.tictac.service.implement;

import com.art.ufps.tictac.repository.RolRepository;
import com.art.ufps.tictac.service.RolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RolServiceImp implements RolService {

    private final RolRepository rolRepository;

    @Autowired
    public RolServiceImp(RolRepository rolRepository) {
        this.rolRepository = rolRepository;
    }
}
