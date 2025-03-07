interface PiPayment {
  amount: number
  memo: string
  metadata: Record<string, unknown>
  status: string
  transaction_id: string
}

interface PiUser {
  uid: string
  username: string
}

interface PiAuthResult {
  user: PiUser
  accessToken: string
}

declare interface PiNetwork {
  authenticate(
    scopes: string[],
    onIncompletePayment: (payment: PiPayment) => void
  ): Promise<PiAuthResult>
}

declare const Pi: PiNetwork