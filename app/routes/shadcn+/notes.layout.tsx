import { Outlet } from '@remix-run/react'

export default function NotesLayout() {
	return (
		<div className="m-auto mt-20 flex w-screen items-center justify-center bg-blue-200 text-center">
			<h1 className="text-3xl font-bold">Pagina Notes Layout</h1>
			<Outlet />
		</div>
	)
}
