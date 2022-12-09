import React from "react";

function pokemonList({ pokemon }) {
	return (
		<div>
			{pokemon.map(p => (
				<div key={p}>{p}</div>
			))}
		</div>
	)
}

export default pokemonList;