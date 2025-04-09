# Test Technique Développeur Fullstack B2C

> ⚠️ Le contenu de ce test est strictement confidentiel, merci de ne pas le partager

## Contexte

Tu travailles sur un site internet qui permet de consulter des activité dans des hôtels de luxe.

## Mission

Tu dois ajouter une fonctionnalité qui permet de réserver une activité : 0. [GitHub] Fork puis clone ce repo

1. [backend] créer le type `Booking` dans la base de donnée. Ce type doit au moins contenir :
   - un identifiant unique
   - l'identifiant de l'activité réservée
   - les informations du client (nom, prénom, email)
   - la date de la réservation
   - toutes autres informations que tu jugeras importantes
2. [backend] ajouter une route d'API `POST /bookings` pour créer une réservation
3. [backend] ajouter une route d'API `GET /bookings/[bookingId]` pour récupérer réservation par son ID
4. [frontend] implémenter le formulaire de réservation dans la page `/[activityId]`
5. [frontend] appeler la route d'API de création de réservation à la soumission de ce formulaire
6. [frontend] ajouter une page `success/[bookingId]` qui permet de voir le détails de sa réservation
7. [frontend] rediriger sur page de succès après la réservation

## Contraintes techniques

- Frontend : React avec TypeScript, Next.js et TailwindCSS. Certains composants ont déjà été fait mais libre à
  toi d'en importer d'autres. On aime beaucoup utiliser [shadcn/ui](https://ui.shadcn.com/)
- Backend : Node.js avec TypeScript (on a déjà mis en place [Hono](https://hono.dev), un équivalent de Express.js)
- Base de donnée : fichier JSON, l'interface a déjà été implémentée
- Pas besoin d’authentification
- Tu peux utiliser tous les outils et sources d'informations que tu souhaites. Mets-toi en condition réelle de travail
