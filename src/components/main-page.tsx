// import Image from "next/image";

export default function MainPage(){
    return (
        <main className="h-screen grid grid-cols-2">
            <div className="h-full px-10 flex flex-col items-start justify-center gap-5">
                <h1 className="text-5xl text-blue-950 font-bold">Hi There,</h1>
                <h1 className="text-4xl text-blue-950 font-bold">Im <span className="text-orange-500">Muhammad Fitrie</span> </h1>
                <h2 className="text-lg font-semibold">I am Fullstack Developer</h2>
                <button className="bg-green-500 rounded-lg px-4 py-2 text-white drop-shadow-md hover:bg-green-700 hover:transition-colors">Click me!</button>
            </div>
            <div className="h-full flex items-center justify-center">
                <div className="w-4/6">
                    {/* <Image 
                        src="https://picsum.photos/seed/picsum/300/300"
                        alt="avatar-image"
                        width="300"
                        height="300"
                    /> */}
                    <img
                        className="h-full w-full rounded-full drop-shadow-xl"
                        src="https://picsum.photos/seed/picsum/300/300"
                        alt="avatar-image"
                    />
                </div>
            </div>
        </main>
    )
}