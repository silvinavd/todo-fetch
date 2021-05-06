import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="container">
			<h1>To do list</h1>

			<form className="form-inline">
				<div className="form-group mx-sm-3 mb-2">
					<input
						type="password"
						className="form-control"
						id="inputPassword2"
						placeholder="What needs to be done?"
					/>
				</div>
				<button type="submit" className="btn btn-primary mb-2">
					Add
				</button>
			</form>
		</div>
	);
}
