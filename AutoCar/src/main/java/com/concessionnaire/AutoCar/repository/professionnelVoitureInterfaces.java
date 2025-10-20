package com.concessionnaire.AutoCar.repository;
import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.concessionnaire.AutoCar.modele.professionnelVoiture;


@Repository
public interface professionnelVoitureInterfaces extends CrudRepository <professionnelVoiture, Long > {

    
    Optional<professionnelVoiture> findById(Long id);

    List<professionnelVoiture> findAll();

    List<professionnelVoiture> findByVoitureIdAndId(Long idVoiture, Long idProfessionnel);

    professionnelVoiture findPictureById(Long id);

}
