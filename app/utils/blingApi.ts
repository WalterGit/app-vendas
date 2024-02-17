
import base64 from 'base-64'
import { client_id, client_secret,
  // redirect_uri 
} from './credentials';

const token_url = 'https://www.bling.com.br/Api/v3/oauth/token';

export async function getToken(code: string, refresh_token?: string) {
  const credentials = `${client_id}:${client_secret}`;
  const base64_credentials = base64.encode(credentials); 
  let data: any = {
    grant_type: refresh_token ? 'refresh_token' : 'authorization_code',
  };

  if (refresh_token) {
    data.refresh_token = refresh_token;
  } else {
    data.code = code;
  }

  const response = await fetch(token_url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${base64_credentials}`,
      'Accept': 'application/json',
    },
    body: new URLSearchParams(data).toString(),
  });

  if (!response.ok) {
    throw new Error(`Erro na solicitação: ${response.status}`);
  }

  return response.json();
}

export async function fetchApiData(access_token: string) {
  const api_url = 'https://www.bling.com.br/Api/v3/produtos';
  const response = await fetch(api_url, {
    headers: {
      'Authorization': `Bearer ${access_token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Erro na solicitação: ${response.status}`);
  }

  return response.json();
}
