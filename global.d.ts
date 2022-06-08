namespace NodeJS {
  interface ProcessEnv {
    PORT: number
    MONGO_URI: string
    DB_HOST: string
    DB_USER: string
    DB_PASSWORD: string
    DB_NAME: string
    DB_PORT: number
    HOST: string
    SOCKET_PORT: number
    ERP_URI: string
    BUSINESS_INTEGRATION_ID: number
    USER_INTEGRATION_ID: number
    ERP_TOKEN: string
  }
}
