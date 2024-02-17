import { Link } from '@remix-run/react'

export default function New() {
	return (
		<div>
			<h1>Pagina New</h1>
			<Link to="/email/" id="new">
				Voltar
			</Link>
		</div>
	)
}
