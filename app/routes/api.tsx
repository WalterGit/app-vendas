import { useLoaderData } from '@remix-run/react'
import { fetchApiData, getToken } from '#app/utils/blingApi'

// import { LoaderFunction, useLoaderData } from 'remix';
// import { getToken, fetchApiData } from '~/utils/blingApi';

// // Este é um exemplo simplificado. Você precisará adaptar para usar o código de autorização e o token de refresh corretamente.
// export async function loader({ request }) => {
// 	const url = new URL(request.url)
// 	const code = url.searchParams.get('code') || '' // Adapte conforme necessário
// 	const tokenData = await getToken(code)
// 	const data = await fetchApiData(tokenData.access_token)
// 	return data
// }

// export default function ApiRoute() {
// 	const data = useLoaderData()
// 	return (
// 		<div>
// 			{/* Renderize seus dados da API aqui */}
// 			<pre>{JSON.stringify(data, null, 2)}</pre>
// 		</div>
// 	)
// }
