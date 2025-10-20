package com.concessionnaire.AutoCar.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.concessionnaire.AutoCar.modele.Voiture;
import com.concessionnaire.AutoCar.repository.VoitureRepository;

@Service
public class VoitureServiceImpl implements VoitureService {

    private final VoitureRepository voitureRepository;

    public VoitureServiceImpl(VoitureRepository voitureRepository) {
        this.voitureRepository = voitureRepository;
    }

    @Override
    public Voiture getVoitureById(Long id) {
        Optional<Voiture> exist = voitureRepository.findById(id);
        return exist.orElse(null);
    }

    @Override
    public Voiture createVoiture(Voiture voiture) {
        voitureRepository.save(voiture);
        return voiture;
    }

    @Override
    public Voiture updateVoiture(Long id, Voiture voiture) {
        Optional<Voiture> exist = voitureRepository.findById(id);
        if(exist.isPresent()) {
            return voitureRepository.save(voiture);
        } else {
            return null; // ou lancer une exception
        }
    }

    @Override
    public List<Voiture> getAllVoitures() {
        return voitureRepository.findAll();
    }

    @Override
    public String deleteVoiture(Long id) {
        Optional<Voiture> exist = voitureRepository.findById(id);
        if(exist.isPresent()) {
            voitureRepository.deleteById(id);
            return "Voiture avec l'id " + id + " a été effacée.";
        } else {
            return "Voiture avec l'id " + id + " n'existe pas.";
        }
    }
}
