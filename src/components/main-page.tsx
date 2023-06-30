
export default function MainPage(){
    return (
        <main className="h-screen grid grid-cols-2">
            <div className="h-full columns-6 px-10 bg-red-300 flex flex-col items-start justify-center gap-5">
                <h1 className="text-4xl font-bold">Hi There,</h1>
                <h1 className="text-4xl font-bold">Im Muhammad Fitrie</h1>
                <h2 className="text-lg font-semibold">I am Fullstack Developer</h2>
            </div>
            <div className="h-full columns-6 bg-green-300"></div>
        </main>
    )
}