declare namespace NodeJS {
  interface ProcessEnv {
    readonly MONGODB_DB_URI_WITHOUT_CREDENTIALS: string;
    readonly MONGODB_DB_USERNAME: string;
    readonly MONGODB_DB_PASSWORD: string;
    readonly MONGODB_DB_DATABASE: string;
    // Add other environment variables here
  }
}
