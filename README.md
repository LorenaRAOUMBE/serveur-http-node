# Serveur http

<p>Ce projet consiste a créer un serveur http simple en node.js ,capable de gérer différentes routes en fonction des requetes soumises et de renvoyer les reponses appropriées.

## Prérequis

- Node.js v23.9.0
- npm

## Installation

Le serveur est executé dans un environnement node.Il est imperatif d'avoir Node et NPM installer.

- créer un dossier au projet  
  mkdir serveur-http-node  
   cd serveur-http-node
- cloner le repertories avec la ligne de commande  
  git clone https://github.com/LorenaRAOUMBE/serveur-http-node.git

## Lancement du serveur

Une fois l'importation du module HTTP et l'appel de la méthode createServer() ont ete faits , pour demarrer le serveur ,executez dans le terminal la commande suivante :  
node server.js  
Le serveur sera accessible à l 'adresse :
http://localhost:3400.

## Utilisation

le serveur répond aux routes suivantes:

- http://localhost:3400/ : Renvoie un message de bienvenue

- http://localhost:3400/about :Renvoie une page de présentation.

- http://localhost:3400/contact :Renvoie une page de contact

- http://localhost:3400/autre: Renvoie a une page d'erreur 404

## Tests

Vous pouvez tester le serveur avec un navigateur web ou Postman.
