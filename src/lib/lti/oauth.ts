import crypto from 'crypto'

export class LTIOAuth {
  private consumerKey: string
  private consumerSecret: string

  constructor(consumerKey: string, consumerSecret: string) {
    this.consumerKey = consumerKey
    this.consumerSecret = consumerSecret
  }

  /**
   * Validate OAuth 1.0a signature for LTI launch request
   */
  validateSignature(
    method: string,
    url: string,
    parameters: Record<string, string>
  ): boolean {
    try {
      // Extract signature from parameters
      const signature = parameters.oauth_signature
      if (!signature) return false

      // Remove signature from parameters for base string calculation
      const { oauth_signature, ...baseParams } = parameters

      // Generate expected signature
      const expectedSignature = this.generateSignature(method, url, baseParams)
      
      // Compare signatures
      return signature === expectedSignature
    } catch (error) {
      console.error('OAuth signature validation error:', error)
      return false
    }
  }

  /**
   * Generate OAuth 1.0a signature
   */
  private generateSignature(
    method: string,
    url: string,
    parameters: Record<string, string>
  ): string {
    // Create signature base string
    const baseString = this.createSignatureBaseString(method, url, parameters)
    
    // Create signing key
    const signingKey = `${encodeURIComponent(this.consumerSecret)}&`
    
    // Generate signature using HMAC-SHA1
    const signature = crypto
      .createHmac('sha1', signingKey)
      .update(baseString)
      .digest('base64')
    
    return signature
  }

  /**
   * Create OAuth signature base string
   */
  private createSignatureBaseString(
    method: string,
    url: string,
    parameters: Record<string, string>
  ): string {
    // Normalize URL (remove query parameters and fragment)
    const normalizedUrl = url.split('?')[0].split('#')[0]
    
    // Sort and encode parameters
    const sortedParams = Object.keys(parameters)
      .sort()
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(parameters[key])}`)
      .join('&')
    
    // Create base string
    const baseString = [
      encodeURIComponent(method.toUpperCase()),
      encodeURIComponent(normalizedUrl),
      encodeURIComponent(sortedParams)
    ].join('&')
    
    return baseString
  }

  /**
   * Validate timestamp to prevent replay attacks
   */
  validateTimestamp(timestamp: string, windowSeconds: number = 300): boolean {
    const now = Math.floor(Date.now() / 1000)
    const requestTime = parseInt(timestamp, 10)
    
    // Check if timestamp is within acceptable window
    return Math.abs(now - requestTime) <= windowSeconds
  }

  /**
   * Generate OAuth nonce
   */
  static generateNonce(): string {
    return crypto.randomBytes(16).toString('hex')
  }

  /**
   * Generate OAuth timestamp
   */
  static generateTimestamp(): string {
    return Math.floor(Date.now() / 1000).toString()
  }
}

export default LTIOAuth
