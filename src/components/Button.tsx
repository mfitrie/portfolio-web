interface ButtonType{
    children: React.ReactNode,
    handleOnClick: () => void,
}

export default function Button({ children, handleOnClick }: ButtonType){
    return (
        <button
            onClick={ handleOnClick }
            className="rounded-lg px-4 py-2 flex gap-1 items-center text-white shadow-xl duration-500 ease-in-out hover:bg-green-700 hover:transition-all hover:gap-3" 
            title="About me!"
            style={{backgroundColor: '#3498db'}}
        >
            { children }
        </button>
    )
}