declare namespace NodeJS {
  export interface ProcessEnv {
    AUTH_SECRET: string;
    MONGODB_URI: string;
    MONGODB_USER: string;
    MONGODB_PASSWORD: string;
    MONGODB_DB_NAME: string;
  }
}
