import { useState } from "react";
import useShop from "../hooks/useShop";

export default function Filters() {
	const { setPriceRange } = useShop();
	const [ranges, setRanges] = useState({
		currentMin: 0,
		currentMax: 100,
		initialMin: 0,
		initialMax: 100,
	});
	return (
		<aside className="h-fit w-full sticky top-8 left-0 border p-4 card bg-base-200 mt-4 border-black">
			<form
				className="card-body"
				onSubmit={(ev) => {
					ev.preventDefault();
					setPriceRange({
						min: ranges.currentMin,
						max: ranges.currentMax,
					});
				}}
			>
				<h3 className="text-xl">Price range</h3>
				<div className="flex gap-4">
					<fieldset className="fieldset">
						<legend className="fieldset-legend">Min</legend>
						<input
							type="number"
							className="input"
							placeholder="Type here"
							value={ranges.currentMin}
							onChange={(event) => {
								const value = Number(event.target.value);
								setRanges((p) => {
									if (
										value >= p.initialMin &&
										value < p.initialMax &&
										value < p.currentMax
									) {
										return { ...p, currentMin: value };
									}
									return p;
								});
							}}
						/>
					</fieldset>
					<fieldset className="fieldset">
						<legend className="fieldset-legend">Max</legend>
						<input
							type="number"
							className="input"
							placeholder="Type here"
							value={ranges.currentMax}
							onChange={(event) => {
								const value = Number(event.target.value);
								setRanges((p) => {
									if (
										value > p.initialMin &&
										value <= p.initialMax &&
										value > p.currentMin
									) {
										return { ...p, currentMax: value };
									}
									return p;
								});
							}}
						/>
					</fieldset>
				</div>
				<button type="submit" className="btn btn-primary">
					Save
				</button>
			</form>
		</aside>
	);
}
