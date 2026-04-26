declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_BASE?: string;
      NEXT_PUBLIC_SITE_URL?: string;
      NEXT_PUBLIC_WP_UPLOAD_HOST?: string;
    }
  }
}
