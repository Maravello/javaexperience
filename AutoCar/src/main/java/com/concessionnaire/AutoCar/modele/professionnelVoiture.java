package com.concessionnaire.AutoCar.modele;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import jakarta.persistence.Table;
import lombok.NoArgsConstructor;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;



@Entity
@Table(name = "PROFESSIONNEL_VOITURE")
@NoArgsConstructor
public class professionnelVoiture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Nom")
    private String Nom;

    @Column(name = "PRENOM")
    private String Prenom;

    @Column(name = "ADRESSE")
    private String Adresse;

    @Column(name = "TELEPHONE")
    private String Telephone;

    @Column(name = "EMAIL")
    private String Email;

    @Column(name = "VOITURE_RATACHER")
    private long VoitureRatacher;
    
    @Column(name = "IMAGE")
    private String Image;

    @ManyToOne
    @JoinColumn(name = "VOITURE_ID", referencedColumnName = "id")
    private Voiture voiture;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
    this.id = id;
    }



    public String getNom() {
        return Nom;
    }

    public void setNom(String nom) {
        Nom = nom;
    }



    public String getPrenom() {
        return Prenom;
    }

    public void setPrenom(String prenom) {
        Prenom = prenom;
    }





    public String getAdresse() {
        return Adresse;
    }

    public void setAdresse(String adresse) {
        Adresse = adresse;
    }



    public String getTelephone() {
        return Telephone;
    }

    public void setTelephone(String telephone) {
        Telephone = telephone;
    }



    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }




    public long getVoitureRatacher() {
        return VoitureRatacher;
    }

    public void setVoitureRatacher(long voitureRatacher) {
        VoitureRatacher = voitureRatacher;
    }


    public Voiture getVoiture() {
        return voiture;
    }
    public void setVoiture(Voiture voiture) {
        this.voiture = voiture;
    }
    public String getImage() {
        return Image;
    }
    public void setImage(String image) {
        Image = image;
    }

}