import { getToken } from '#app/utils/blingApi';
import { json } from '@remix-run/node';

export async function loader({request, reponse}) {
//  const tt = getToken('e18ea67ec7002d3a93e6cc19f3d80139775916a0')

  const url = "https://www.bling.com.br/Api/v3/produtos?limite=2";
  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer b574c9b36a076b3b65114c6ee11eced5d9313b02',
  };

  try {
    const response = await fetch(url, { headers });


    if (response.ok) {
      const data = await response.json();
      return json(data); // Retorna os dados como JSON para o componente.
    } else {
      // Trata erros de resposta não bem-sucedidos.
      throw new Error(`Falha ao obter produtos: ${response.status}`);
    }
  } catch (error) {
    const message = (error instanceof Error) ? error.message : 'Ocorreu um erro desconhecido';
    return json({ error: message }, { status: 500 });
  }
}
