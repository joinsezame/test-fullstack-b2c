# Test Technique Développeur Fullstack (B2C)

> ⚠️ Le contenu de ce test est strictement confidentiel, merci de ne pas le partager

## Contexte

Tu travailles sur un site internet qui permet de consulter des activité dans des hôtels de luxe.

Tu as 1h pour pousser le projet aussi loin que possible.

## Mission

Tu dois ajouter une fonctionnalité qui permet de réserver une activité :

0. [GitHub] clique sur "use this template" > "Create a new repository" > "Create Repository" et clone ce nouveau repo
1. lance le front et le back puis visite http://localhost:3000 pour te familiariser avec l'app existante
2. [backend] créer le type `Booking` dans la base de donnée. Ce type doit au moins contenir :
   - un identifiant unique
   - l'identifiant de l'activité réservée
   - les informations du client (nom, prénom, email)
   - la date de la réservation
   - toutes autres informations que tu jugeras importantes
3. [backend] ajouter une route d'API `POST /bookings` pour créer une réservation
4. [backend] ajouter une route d'API `GET /bookings/:bookingId` pour récupérer réservation par son ID
5. [frontend] implémenter le formulaire de réservation dans la page `/[activityId]`
6. [frontend] appeler la route d'API de création de réservation à la soumission de ce formulaire
7. [frontend] ajouter une page `booking/[bookingId]` qui permet de voir le détails de sa réservation
8. [frontend] rediriger sur page de succès après la réservation
9. [frontend] faire la meilleure UI/UX possible. Le but est de permettre à l'utilisateur de réserver le plus simplement tout en restant visuellement plaisant.

## Contraintes techniques

- Frontend : React avec TypeScript, Next.js et TailwindCSS. Certains composants ont déjà été fait mais libre à
  toi d'en importer d'autres. On aime beaucoup utiliser [shadcn/ui](https://ui.shadcn.com/)
- Backend : Node.js avec TypeScript (on a déjà mis en place [Hono](https://hono.dev), un équivalent de Express.js)
- Base de donnée : fichier JSON. Tout est déjà implémenté pour toi et la documentation est disponible dans l'interface `Database` dans `backend/src/database.ts`
- Tu peux utiliser tous les outils et sources d'informations que tu souhaites. Mets-toi en condition réelle de travail
