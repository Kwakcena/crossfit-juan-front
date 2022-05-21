type STAGE = 'development' | 'production';

const apiUrls: Record<STAGE, string> = {
  development: 'http://localhost:3000',
  production: 'https://3.38.210.236',
}

const getStage = () => {
  return process.env.NODE_ENV as STAGE;
}

const ENVIRONMENT = getStage();

export const API_URL = apiUrls[ENVIRONMENT];
