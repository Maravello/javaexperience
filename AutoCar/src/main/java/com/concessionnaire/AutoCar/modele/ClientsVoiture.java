package com.concessionnaire.AutoCar.modele;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.NoArgsConstructor;
import lombok.Builder;
import lombok.Data;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;

@Data
@Builder
@Entity
@Table(name = "CLIENTS_VOITURE")
@NoArgsConstructor
@AllArgsConstructor 
public class ClientsVoiture {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;
    @Column(name = "NOM")
    private String nom;
    @Column(name = "PRENOM")
    private String prenom;
    private Boolean isAdmin;
    @Column(name = "ADRESSE")
    private String adresse;
    @Column(name = "TELEPHONE")
    private String telephone;
    @Column(name = "EMAIL")
    private String email;
    @Column(name = "PASSWORD")
    private String password;

    @ManyToOne
    @JoinColumn(name = "VOITURE_ID")
    private Voiture voitureVoulu;

    @Builder.Default
    @Column(name = "DATE_CREATION")
    private LocalDateTime  dateCreation = LocalDateTime.now();

    @Column(name = "DERNIERE_CONNEXION")
    private String derniereConnexion;

    public Long getId() {
        return this.id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getNom() {
        return this.nom;
    }
    public void setNom(String nom) {
        this.nom = nom;
    }
    public String getPrenom() {
        return this.prenom;
    }
    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }  
    public Boolean getIsAdmin() {
        return this.isAdmin;
    }
    public void setIsAdmin(Boolean isAdmin) {
        this.isAdmin = isAdmin;
    }
    public String getAdresse() {
        return this.adresse;
    }
    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }
    public String getTelephone() {
        return this.telephone;
    }
    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }
    public String getEmail() {
        return this.email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return this.password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public Voiture getVoiture_voulu() {
        return this.voitureVoulu;
    }
    public void setVoiture_voulu(Voiture voiture_voulu) {
        this.voitureVoulu = voiture_voulu;
    }
    public LocalDateTime  getDateCreation() {
        return this.dateCreation;
    }
    public  void  setDateCreation(LocalDateTime dateCreation) {
        this.dateCreation = dateCreation;
    }
    public String getDerniereConnexion() {
        return this.derniereConnexion;
    }
    public void setDerniereConnexion(String derniereConnexion) {
        this.derniereConnexion = derniereConnexion;
    }


}
