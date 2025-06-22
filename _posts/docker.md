# Docker Scenarios

## 💡 Scenario 1: Dockerfile Optimization
**Question:** Comment minimiser la taille de l’image ?
**Réponse:** Utiliser une image Alpine, supprimer les fichiers temporaires, faire du multi-stage build.

## 💡 Scenario 2: Networking
**Question:** Comment connecter deux conteneurs entre eux ?
**Réponse:** Utiliser un `docker network create`, puis démarrer les conteneurs sur le même réseau.
