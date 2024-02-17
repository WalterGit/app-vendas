import { Link, Outlet } from '@remix-run/react'
import { Button } from '#app/components/ui/button'

export default function Notes() {
	return (
		<div className="">
			<div className="mt-8 flex justify-center gap-8">
				<Button asChild>
					<Link to="/shadcn/notes" id="Novo">
						Primer
					</Link>
				</Button>
				<Button asChild>
					<Link to="new" id="Novo">
						Verniz
					</Link>
				</Button>
				<Button asChild>
					<Link to="1" id="Novo">
						Tintas
					</Link>
				</Button>
				<Button asChild>
					<Link to="1/edit" id="Novo">
						Lixas
					</Link>
				</Button>
			</div>
			<Outlet />
		</div>
	)
}
