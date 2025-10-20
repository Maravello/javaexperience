# Étape 1 : Builder le JAR avec Gradle
FROM gradle:7.6-jdk17-alpine AS build

# Répertoire de travail
WORKDIR /app

# Copie les fichiers du projet
COPY . .

# Build du projet sans daemon
RUN gradle build --no-daemon

# Étape 2 : Image finale légère pour exécuter le JAR
FROM eclipse-temurin:17-jdk-alpine

# Répertoire de travail
WORKDIR /app

# Copie du JAR depuis l'image build
COPY --from=build /app/build/libs/AutoCar-0.0.1-SNAPSHOT.jar app.jar

# Expose le port fourni par Render (via la variable PORT)
EXPOSE 8080

# Lancer Spring Boot
ENTRYPOINT ["java","-jar","app.jar"]
