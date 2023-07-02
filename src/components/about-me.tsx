import Button from "./Button";
import ArrowRight from "./icons/arrow-right";
import UserIcon from "./icons/user";

export default function AboutMe(){
    return (
        <div className="h-screen grid grid-rows-6">
            <div className="row-span-1 flex justify-center items-center bg-green-500">
                <h2 className="text-4xl font-bold flex gap-2">
                    <UserIcon size="40" hexColor="#000" /> 
                    About Me
                </h2>
            </div>
            <div className="row-span-5 grid grid-cols-2">
                <div className="flex justify-center items-center">
                    {/* <p>Column one</p> */}
                    <img
                        id="me-image"
                        className="h-3/6 w-2/6 rounded-lg drop-shadow-2xl cursor-pointer grayscale hover:grayscale-0"
                        src="https://picsum.photos/seed/picsum/300/300"
                        alt="avatar-image"
                    />
                </div>
                <div className="px-8 flex flex-col justify-center gap-4">
                    <div>
                        <p className="text-2xl font-bold">Im Fitrie</p>
                        <p className="text-lg font-semibold">Full Stack Developer</p>
                    </div>
                    <div className="text-justify">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ex quod accusantium! Excepturi similique repellat, neque aperiam dolorem porro temporibus, vel, quo perferendis unde consequatur minima nobis! Provident, aliquid suscipit!</p>
                    </div>
                    <div>
                        <span className="text-blue-700">Email: </span>
                        <span>mfitrie78@gmail.com</span>
                    </div>
                    <div>
                        <span className="text-blue-700">Place: </span>
                        <span>Klang, Malaysia - 41050</span>
                    </div>
                    <div className="mt-8">
                        <Button>
                            Resume 
                            <ArrowRight size="20" hexColor="#fff"/>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}