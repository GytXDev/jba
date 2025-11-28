# JBA - Jennyfer Batolo Architecture

Site web portfolio pour **Jennyfer Batolo Architecture**, une agence d'architecture contemporaine au Gabon.

## 🏗️ À propos

JBA conçoit des espaces architecturaux modernes, intemporels, minimalistes et techniquement maîtrisés. Le site présente les projets, services et processus de l'agence avec un design contemporain et épuré.

## 🚀 Technologies utilisées

- **Next.js 15** - Framework React pour la production
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styles utilitaires
- **Framer Motion** - Animations fluides
- **Lucide React** - Icônes

## 📦 Installation

1. **Installer les dépendances**

   ```sh
   npm install
   ```

2. **Lancer le serveur de développement**

   ```sh
   npm run dev
   ```

   Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

3. **Construire pour la production**

   ```sh
   npm run build
   npm start
   ```

## 📁 Structure du projet

```
├── app/              # Pages et layouts Next.js
│   ├── layout.tsx    # Layout principal
│   ├── page.tsx      # Page d'accueil
│   └── globals.css   # Styles globaux
├── components/       # Composants React réutilisables
│   ├── hero.tsx      # Section héro
│   ├── features.tsx  # Services
│   ├── work.tsx      # Projets
│   ├── process.tsx   # Processus
│   ├── testimonials.tsx # Témoignages
│   ├── contact.tsx   # Contact
│   ├── navbar.tsx    # Navigation
│   ├── footer.tsx    # Pied de page
│   └── ...
├── public/           # Assets statiques (images, icônes)
│   ├── icons/        # Icônes de services
│   └── works/        # Images des projets
└── lib/              # Utilitaires
```

## ✨ Fonctionnalités

- ✨ Design contemporain et épuré
- 🎯 Navigation fluide avec scroll smooth
- 📱 Entièrement responsive (mobile-first)
- 🎭 Animations et transitions fluides
- 🌙 Thème sombre par défaut
- ⚡ Optimisation des performances (lazy loading)
- 🖼️ Optimisation des images avec Next.js Image

## 🔧 Configuration

Le projet est configuré pour être déployé sur **Vercel**. Voir `vercel.json` pour la configuration du déploiement.

### Variables d'environnement

Aucune variable d'environnement requise pour le moment.

## 📄 Licence

Propriétaire - Jennyfer Batolo Architecture

---

Développé par [GytX Agence](https://gytx.dev)
