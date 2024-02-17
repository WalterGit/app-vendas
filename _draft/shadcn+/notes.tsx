import { Link, Outlet } from '@remix-run/react'
import { Button } from '#app/components/ui/button'

export default function Notes() {
	return (
		<div>
			<div className="flex justify-center gap-8">
				<Button>
					<Link to="/shadcn/notes" id="Novo">
						Index
					</Link>
				</Button>
				<Button>
					<Link to="new" id="Novo">
						Novo
					</Link>
				</Button>
				<Button>
					<Link to="1" id="Novo">
						Detalhe
					</Link>
				</Button>
				<Button>
					<Link to="1/edit" id="Novo">
						Editar
					</Link>
				</Button>
			</div>
			<Outlet />
		</div>
	)
}
