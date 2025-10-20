# Étape 1 : Build du projet avec Gradle
FROM gradle:7.6-jdk17-alpine AS build

WORKDIR /app
COPY . .

# Build sans exécuter les tests
RUN gradle build --no-daemon -x test

# Étape 2 : Image finale légère pour exécuter le JAR
FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app
COPY --from=build /app/build/libs/AutoCar-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
