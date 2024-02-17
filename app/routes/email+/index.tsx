import { Button } from '#app/components/ui/button'
import { Link, Outlet } from '@remix-run/react'

export default function Index() {
	return (
		<div className="container  pb-8">
			<div className="flex gap-8">
				<Button>
					<Link to="/email/new" id="Novo">
						New
					</Link>
				</Button>
				<Button>Novo</Button>
				<Button>Detalhe</Button>
				<Button>Editar</Button>
			</div>
			<h1>Pagina Index</h1>

			<div className="flex flex-col gap-8">
				<Link to="/email/1" id="Detalhe">
					Detalhe
				</Link>
				<Link to="/email/1/edit" id="Editar">
					Editar
				</Link>
				<Outlet />
			</div>
		</div>
	)
}
