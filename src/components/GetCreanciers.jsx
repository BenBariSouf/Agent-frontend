import checkMark from "../assets/checkMark.svg";
import MarocTelecom from "../assets/Maroc_telecom.png";
import Inwi from "../assets/Inwi-Logo.png";
import Redal from "../assets/redal-logo.png";
import Card from "./Card";

export default function AddAgent() {
	return (
		<div className="min-h-screen bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
			<div className="mt-10 sm:mt-0 m-12 min-w-2xl">
				<div className="md:grid md:grid-cols-1 md:gap-6 form mx-auto">
					<div className="mt-5 md:mt-0 md:col-span-2 p-9 ">
						<h2 className="text-center text-4xl font-extrabold text-gray-900 mb-12">
							Paiemant de Facture
						</h2>
					</div>

					<div className="shadow-2xl overflow-hidden sm:rounded-xl">
						<div className="px-4 py-5 bg-white sm:p-6">
							<div className="px-4 sm:px-0 mt-1 ">
								<h3 className="text-xl font-sans font-medium leading-6 text-gray-900">
									Liste des Créanciers
								</h3>
							</div>

							<div className="hidden sm:block" aria-hidden="true">
								<div className="py-5">
									<div className="border-t border-blue-200"></div>
								</div>
							</div>
							<div className="col-span-6 sm:col-span-3 mt-4">
								<select
									id="identity"
									name="identity"
									autoComplete="identity"
									required
									className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-3"
								>
									<option>Toutes les catégories</option>
									<option>Categorie 1</option>
									<option>Categorie 2</option>
								</select>
							</div>

							<div className=" mt-5 grid lg:grid-cols-2 sm:grid-cols-1 gap-6">
								<Card
									creancier="IAM RECHARGES"
									creance="Téléphonie et Internet SIM"
									logo={MarocTelecom}
								/>
								<Card creancier="INWI" creance="Recharge inwi" logo={Inwi} />
								<Card creancier="REDAL" creance="Factures REDAL" logo={Redal} />
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
				</div>
			</div>
		</div>
	);
}
