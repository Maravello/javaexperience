# Étape 1 : Build du projet avec Gradle
FROM gradle:7.6-jdk17-alpine AS build

# Répertoire de travail
WORKDIR /app

# Copie des fichiers du projet
COPY . .

# Build du projet en ignorant les tests
RUN gradle build --no-daemon -x test

# Étape 2 : Image finale légère pour exécuter le JAR
FROM eclipse-temurin:17-jdk-alpine

# Répertoire de travail
WORKDIR /app

# Copie du JAR généré depuis l'étape de build
COPY --from=build /app/build/libs/AutoCar-0.0.1-SNAPSHOT.jar app.jar

# Expose le port Spring Boot
EXPOSE 8080

# Commande pour lancer le backend
ENTRYPOINT ["java", "-jar", "app.jar"]
