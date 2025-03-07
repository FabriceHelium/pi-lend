import { ref } from 'vue'

interface PiUser {
  uid: string
  username: string
}

const isAuthenticated = ref(false)
const user = ref<PiUser | null>(null)

export function usePiNetwork() {
  const authenticate = async () => {
    try {
      if (typeof Pi === 'undefined') {
        throw new Error('SDK Pi Network non disponible')
      }

      const scopes = ['payments', 'username']
      const authResult = await Pi.authenticate(scopes, onIncompletePayment)
      
      if (authResult) {
        user.value = authResult.user
        isAuthenticated.value = true
        return authResult
      }
    } catch (error) {
      console.error('Erreur d\'authentification Pi:', error)
      throw error
    }
  }

  const onIncompletePayment = (payment: any) => {
    console.log('Paiement incomplet:', payment)
  }

  return {
    authenticate,
    isAuthenticated,
    user
  }
}