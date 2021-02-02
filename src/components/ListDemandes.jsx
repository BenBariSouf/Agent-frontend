import DemandeCard from "./DemandeCard";
export default function ListDemandes() {
	return (
		<div className="min-h-screen bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
			<div className="mt-10 sm:mt-0 m-12 min-w-2xl">
				<div className="md:grid md:grid-cols-1 md:gap-6 form mx-auto">
					<div className="mt-5 md:mt-0 md:col-span-2 p-9 ">
						<h2 className="text-center text-4xl font-extrabold text-gray-900 mb-12">
							Liste des demandes ouvertes
						</h2>

						<div className="shadow-2xl overflow-hidden sm:rounded-xl">
							<div className="px-4 py-5 bg-white sm:p-6">
								<div className="px-4 sm:px-0 mt-5 ">
									<h3 className="text-lg font-bold  leading-6 text-gray-600">
										Demandes ouvertes: En cours de traitement
									</h3>
								</div>
								<div className="hidden sm:block" aria-hidden="true">
									<div className="py-5">
										<div className="border-t border-blue-200"></div>
									</div>
								</div>

								<div className="flex flex-col">
									<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
										<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
											<div className="shadow overflow-hidden border-b border-gray-300 sm:rounded-lg">
												<table className="min-w-full divide-y divide-gray-300">
													<thead className="bg-indigo-200">
														<tr>
															<th
																scope="col"
																className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
															>
																Client
															</th>
															<th
																scope="col"
																className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
															>
																Type de Compte
															</th>
															<th
																scope="col"
																className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
															>
																Status
															</th>
															<th
																scope="col"
																className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
															>
																Téléphone
															</th>
															<th scope="col" className="relative px-6 py-3">
																<span className="sr-only">Edit</span>
															</th>
														</tr>
													</thead>
													<tbody className="bg-white divide-y divide-gray-300">
														{/* hna yekfi tpassi les données dial client li bghiti t affichi comme des props lhad component 'DemandeCard' b7al had chkel: */}
														<DemandeCard
															firstname="prenom1"
															lastname="nom1"
															email="mail1@mail.com"
															compte="type_compte"
															telephone="0000000000"
														/>
														<DemandeCard
															firstname="prenom2"
															lastname="nom2"
															email="mail2@mail.com"
															compte="type_compte"
															telephone="0000000000"
														/>
														<DemandeCard
															firstname="prenom3"
															lastname="nom3"
															email="mail3@mail.com"
															compte="type_compte"
															telephone="0000000000"
														/>
														<DemandeCard
															firstname="prenom4"
															lastname="nom4"
															email="mail4@mail.com"
															compte="type_compte"
															telephone="0000000000"
														/>
														<DemandeCard
															firstname="prenom5"
															lastname="nom5"
															email="mail5@mail.com"
															compte="type_compte"
															telephone="0000000000"
														/>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>

								<div className="hidden sm:block" aria-hidden="true">
									<div className="py-5">
										<div className="border-t border-blue-200"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
