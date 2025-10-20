package com.concessionnaire.AutoCar.service;
import java.util.List;

import com.concessionnaire.AutoCar.modele.Voiture;

public interface VoitureService {
    Voiture createVoiture(Voiture voiture);
    Voiture updateVoiture(Long id, Voiture voiture);
    List<Voiture> getAllVoitures();
    String deleteVoiture(Long id);
    Voiture getVoitureById(Long id);
}
