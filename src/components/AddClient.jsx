import checkMark from "../assets/checkMark.svg";
import xSymbol from "../assets/xSymbol.svg";

export default function AddAgent() {
	return (
		<>
			<div className="min-h-screen bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
				<div className="mt-10 sm:mt-0 m-12 min-w-2xl">
					<div className="md:grid md:grid-cols-1 md:gap-6 form mx-auto">
						<div className="mt-5 md:mt-0 md:col-span-2 p-9 ">
							<h2 className="text-center text-4xl font-extrabold text-gray-900 mb-12">
								Ouverture d'un compte de paiement
							</h2>
							<form action="#" method="POST">
								<div className="shadow-2xl overflow-hidden sm:rounded-xl">
									<div className="px-4 py-5 bg-white sm:p-6">
										<div className="col-span-6 sm:col-span-3 mt-4">
											<label
												htmlFor="country"
												className="block text-sm font-medium text-gray-700"
											>
												Séléctionner un produit
											</label>
											<select
												id="identity"
												name="identity"
												autoComplete="identity"
												required
												className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-3"
											>
												<option>Compte 200</option>
												<option>Compte 5000</option>
												<option>Compte 20000</option>
											</select>
										</div>
										<div className="px-4 sm:px-0 mt-12 ">
											<h3 className="text-xl font-sans font-medium leading-6 text-gray-900">
												Informations client
											</h3>
										</div>

										<div className="hidden sm:block" aria-hidden="true">
											<div className="py-5">
												<div className="border-t border-blue-200"></div>
											</div>
										</div>

										<div className="mt-5 grid grid-cols-6 gap-6">
											<div className="col-span-6 sm:col-span-3">
												<label
													htmlFor="first_name"
													className="block text-sm font-medium text-gray-700"
												>
													Nom
												</label>
												<input
													type="text"
													name="nom"
													id="nom"
													autoComplete="nom"
													required
													className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-3"
												/>
											</div>
											<div className="col-span-6 sm:col-span-3">
												<label
													htmlFor="last_name"
													className="block text-sm font-medium text-gray-700"
												>
													Prénom
												</label>
												<input
													type="text"
													name="prenom"
													id="prenom"
													autoComplete="prenom"
													required
													className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-3"
												/>
											</div>
											<div className="col-span-6 sm:col-span-3 mt-4">
												<label
													htmlFor="telephone"
													className="block text-sm font-medium text-gray-700"
												>
													Téléphone
												</label>
												<input
													type="text"
													name="telephone"
													id="telephone"
													autoComplete="telephone"
													required
													className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-3"
												/>
											</div>
											<div className="col-span-6 sm:col-span-3 mt-4">
												<label
													htmlFor="email"
													className="block text-sm font-medium text-gray-700"
												>
													Email
												</label>
												<input
													type="email"
													name="email"
													id="email"
													autoComplete="email"
													required
													className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-3"
												/>
											</div>
										</div>

										<div className="my-12 text-right sm:px-0 flex justify-end">
											<button
												type="submit"
												className=" flex justify-end py-2 px-12 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 "
											>
												<img src={checkMark} className="w-3 my-auto mr-3" />
												Suivant
											</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
