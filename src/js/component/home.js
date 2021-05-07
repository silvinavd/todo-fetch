import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [tarea, setTarea] = useState("");
	const [lista, setLista] = useState([]);
	const [mouse, setMouse] = useState();

	const agregar = e => {
		e.preventDefault();
		setLista([...lista, tarea]);
		setTarea("");
	};

	const eliminar = i => {
		let nuevaLista = lista.filter((elem, index) => {
			if (index != i) {
				return elem;
			}
		});
		setLista(nuevaLista);
	};

	const mouseencima = i => {
		setMouse(i);
	};
	//funcion eliminar
	//usar filter
	//setLista nueva

	return (
		<div className="container">
			<h1>To do list</h1>

			<form
				className="form-inline justify-content-center bg-warning mt-3"
				onSubmit={agregar}>
				<div className="form-group mx-sm-3 p-2">
					<input
						type="text"
						className="form-control"
						id="tobedone"
						placeholder="What needs to be done?"
						onChange={e => setTarea(e.target.value)}
						value={tarea}
					/>
				</div>
				<button
					type="submit"
					className="form-control btn btn-success p-1 ml-5">
					Add
				</button>
			</form>

			<div>
				{lista.map((e, i) => {
					return (
						<div
							key={i}
							className="list-group list-group-flush"
							onMouseOver={() => {
								mouseencima(i);
							}}
							onClick={() => {
								eliminar(i);
							}}>
							{e}
							<i
								type="button"
								className={
									"fas fa-trash-alt float-right" +
									(mouse == i ? "" : " hide")
								}></i>
						</div>
					);
				})}
			</div>
		</div>
	);
}
