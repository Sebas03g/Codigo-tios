export default function PageButton({text}){
    return (
        <div
            className="w-64 h-40 bg-white rounded-xl shadow-md p-6 cursor-pointer hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
        >
            <h2 className="text-lg font-semibold text-gray-800">{text}</h2>
        </div>
    );
}