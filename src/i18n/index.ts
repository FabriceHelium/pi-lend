import { createI18n } from 'vue-i18n'

const messages = {
  fr: {
    nav: {
      home: 'Accueil',
      borrow: 'Emprunter',
      lend: 'Prêter',
      howItWorks: 'Comment ça marche',
      loginWithPi: 'Connexion avec Pi',
      register: 'Inscription'
    },
    footer: {
      about: 'Pi-Lend',
      aboutText: 'Plateforme de microcrédit décentralisée pour l\'écosystème Pi Network',
      products: 'Produits',
      loans: 'Prêts',
      borrowing: 'Emprunts',
      guarantees: 'Garanties',
      company: 'Entreprise',
      aboutUs: 'À propos',
      careers: 'Carrières',
      blog: 'Blog',
      support: 'Support',
      helpCenter: 'Centre d\'aide',
      contact: 'Contact',
      faq: 'FAQ',
      copyright: '© 2024 Pi-Lend. Tous droits réservés.'
    },
    calculator: {
      borrow: 'Emprunter',
      lend: 'Prêter',
      amount: 'Montant',
      duration: 'Durée',
      days: 'jours',
      interestRate: 'Taux d\'intérêt annuel',
      fixedRate: 'Taux fixé par l\'administrateur',
      variableRate: 'Taux basé sur le montant du prêt',
      summary: 'Résumé de l\'opération',
      totalInterest: 'Intérêts totaux',
      totalRepayment: 'Total à rembourser',
      totalReceived: 'Total à recevoir',
      reset: 'Réinitialiser',
      borrowButton: 'Emprunter maintenant',
      lendButton: 'Prêter maintenant'
    },
    lending: {
      title: 'Opportunités de Prêt',
      amount: 'Montant',
      duration: 'Durée',
      interestRate: 'Taux d\'intérêt',
      collateral: 'Garantie',
      status: 'Statut',
      lendButton: 'Prêter'
    },
    howItWorks: {
      title: 'Comment ça marche',
      subtitle: 'Un processus simple et transparent',
      steps: {
        connect: {
          title: 'Connectez-vous',
          description: 'Utilisez votre compte Pi Network pour accéder à la plateforme'
        },
        choose: {
          title: 'Choisissez',
          description: 'Sélectionnez entre emprunter ou prêter des Pi'
        },
        validate: {
          title: 'Validation',
          description: 'Les transactions sont validées via la blockchain Pi'
        }
      }
    },
    home: {
      hero: {
        title: 'Microcrédit accessible et sécurisé avec Pi',
        subtitle: 'Prêtez ou empruntez des tokens Pi avec des taux d\'intérêt compétitifs. Une solution transparente et automatisée par la blockchain.',
        startNow: 'Commencer maintenant',
        learnMore: 'En savoir plus'
      },
      stats: {
        noHiddenFees: 'Frais cachés',
        transparency: 'Transparence',
        availability: 'Disponibilité'
      },
      features: {
        title: 'Une Plateforme Innovante pour l\'Écosystème Pi',
        security: {
          title: 'Sécurité Maximale',
          description: 'Protection de vos actifs grâce à la technologie blockchain et aux contrats intelligents.'
        },
        speed: {
          title: 'Rapidité d\'Exécution',
          description: 'Obtention de fonds rapide avec une validation automatisée des prêts via la blockchain.'
        },
        rates: {
          title: 'Taux Compétitifs',
          description: 'Bénéficiez de taux d\'intérêt bas pour les emprunteurs et attractifs pour les prêteurs.'
        }
      },
      community: {
        title: 'Rejoignez la Révolution du Microcrédit',
        subtitle: 'Découvrez une nouvelle façon d\'emprunter et de prêter avec la communauté Pi Network',
        users: 'Utilisateurs',
        volume: 'Volume total',
        avgRate: 'Taux moyen',
        defaultRate: 'Taux de défaut'
      },
      calculator: {
        title: 'Calculez votre prêt Pi en quelques clics',
        subtitle: 'Obtenez une estimation de votre prêt avec des taux d\'intérêt transparents et compétitifs.'
      },
      opportunities: {
        title: 'Dernières Opportunités',
        loanOffer: 'Offre de prêt',
        lendNow: 'Prêter maintenant'
      }
    }
  },
  en: {
    nav: {
      home: 'Home',
      borrow: 'Borrow',
      lend: 'Lend',
      howItWorks: 'How it works',
      loginWithPi: 'Login with Pi',
      register: 'Register'
    },
    footer: {
      about: 'Pi-Lend',
      aboutText: 'Decentralized microcredit platform for the Pi Network ecosystem',
      products: 'Products',
      loans: 'Loans',
      borrowing: 'Borrowing',
      guarantees: 'Guarantees',
      company: 'Company',
      aboutUs: 'About Us',
      careers: 'Careers',
      blog: 'Blog',
      support: 'Support',
      helpCenter: 'Help Center',
      contact: 'Contact',
      faq: 'FAQ',
      copyright: '© 2024 Pi-Lend. All rights reserved.'
    },
    calculator: {
      borrow: 'Borrow',
      lend: 'Lend',
      amount: 'Amount',
      duration: 'Duration',
      days: 'days',
      interestRate: 'Annual interest rate',
      fixedRate: 'Fixed rate by admin',
      variableRate: 'Rate based on loan amount',
      summary: 'Operation summary',
      totalInterest: 'Total interest',
      totalRepayment: 'Total to repay',
      totalReceived: 'Total to receive',
      reset: 'Reset',
      borrowButton: 'Borrow now',
      lendButton: 'Lend now'
    },
    lending: {
      title: 'Lending Opportunities',
      amount: 'Amount',
      duration: 'Duration',
      interestRate: 'Interest Rate',
      collateral: 'Collateral',
      status: 'Status',
      lendButton: 'Lend'
    },
    howItWorks: {
      title: 'How it Works',
      subtitle: 'A simple and transparent process',
      steps: {
        connect: {
          title: 'Connect',
          description: 'Use your Pi Network account to access the platform'
        },
        choose: {
          title: 'Choose',
          description: 'Select between borrowing or lending Pi'
        },
        validate: {
          title: 'Validate',
          description: 'Transactions are validated through the Pi blockchain'
        }
      }
    },
    home: {
      hero: {
        title: 'Accessible and Secure Microcredit with Pi',
        subtitle: 'Lend or borrow Pi tokens with competitive interest rates. A transparent solution automated by blockchain.',
        startNow: 'Start now',
        learnMore: 'Learn more'
      },
      stats: {
        noHiddenFees: 'Hidden fees',
        transparency: 'Transparency',
        availability: 'Availability'
      },
      features: {
        title: 'An Innovative Platform for the Pi Ecosystem',
        security: {
          title: 'Maximum Security',
          description: 'Protect your assets through blockchain technology and smart contracts.'
        },
        speed: {
          title: 'Fast Execution',
          description: 'Quick access to funds with automated loan validation via blockchain.'
        },
        rates: {
          title: 'Competitive Rates',
          description: 'Enjoy low interest rates for borrowers and attractive returns for lenders.'
        }
      },
      community: {
        title: 'Join the Microcredit Revolution',
        subtitle: 'Discover a new way to borrow and lend with the Pi Network community',
        users: 'Users',
        volume: 'Total volume',
        avgRate: 'Average rate',
        defaultRate: 'Default rate'
      },
      calculator: {
        title: 'Calculate your Pi loan in a few clicks',
        subtitle: 'Get a loan estimate with transparent and competitive interest rates.'
      },
      opportunities: {
        title: 'Latest Opportunities',
        loanOffer: 'Loan offer',
        lendNow: 'Lend now'
      }
    }
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'en',
  messages
})