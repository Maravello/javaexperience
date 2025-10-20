# Utilise une image Java 17 légère
FROM eclipse-temurin:17-jdk-alpine

# Répertoire de travail
WORKDIR /app

# Copie du JAR généré
COPY build/libs/AutoCar-0.0.1-SNAPSHOT.jar app.jar

# Expose le port Spring Boot
EXPOSE 8080

# Commande pour lancer le backend
ENTRYPOINT ["java","-jar","app.jar"]
