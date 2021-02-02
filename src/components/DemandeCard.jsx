import checkMark from "../assets/checkMark.svg";

export default function DemandeCard(props) {
	return (
		<>
			<tr>
				<td class="px-6 py-4 whitespace-nowrap">
					<div class="flex items-center">
						<div class="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100">
							<svg
								class="h-full w-full text-gray-300"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
							</svg>
						</div>
						<div class="ml-4">
							<div class="text-sm font-medium text-gray-900">
								{props.firstname} {props.lastname}
							</div>
							<div class="text-sm text-gray-500">{props.email}</div>
						</div>
					</div>
				</td>
				<td class="px-6 py-4 whitespace-nowrap">
					<div class="text-sm text-gray-900">{props.compte}</div>
				</td>
				<td class="px-6 py-4 whitespace-nowrap">
					<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-green-800">
						En cours
					</span>
				</td>
				<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
					{props.telephone}
				</td>
				<td class="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
					{/* hna je pense ghadi ykoun un formulaire bach t9der t3yet 3la la methode li katvalider les clients */}
					<form action="" method="POST">
						<button
							type="submit"
							class="px-5 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 mr-5"
						>
							Valider
						</button>

						<button
							type="submit"
							class="px-5 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-purple-300 hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
						>
							Rejeter
						</button>
					</form>
				</td>
			</tr>
		</>
	);
}
