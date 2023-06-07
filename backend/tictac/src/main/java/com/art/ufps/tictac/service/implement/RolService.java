package com.art.ufps.tictac.service.implement;

import com.art.ufps.tictac.repository.RolRepository;
import com.art.ufps.tictac.service.RolInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RolService implements RolInterface {

    private final RolRepository rolRepository;

    @Autowired
    public RolService(RolRepository rolRepository) {
        this.rolRepository = rolRepository;
    }
}
