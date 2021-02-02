export default function Card(props) {
	return (
		<div className="bg-gray-100 border-gray-300 border shadow-lg rounded-xl m-8 p-8 flex md:bg-orange">
			<div className="w-1/3 sm:block flex justify-center items-center">
				<img className="border-r border-blue-500 " src={props.logo} />
			</div>
			<div className="sm:w-2/3 ">
				<h3 className="text-orange text-xl font-mono p-7">{props.creancier}</h3>

				<a
					href="#"
					className="text-grey-dark text-sm leading-normal p-7 font-bold"
				>
					{props.creance}
				</a>
			</div>
		</div>
	);
}
