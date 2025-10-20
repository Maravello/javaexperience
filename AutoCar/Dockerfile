# Utilise une image Java 17 avec Gradle
FROM gradle:8.3-jdk17-alpine AS build

WORKDIR /app

COPY . .

# Construire le JAR
RUN gradle build --no-daemon

# Étape finale avec une image légère
FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app

# Copier le JAR depuis l'étape de build
COPY --from=build /app/build/libs/AutoCar-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]
