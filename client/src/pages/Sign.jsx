import { useState } from "react";
import { motion, useTransform} from "framer-motion";

// UI
import SignIn from "../components/Feature/SignIn";
import SignUp from "../components/Feature/SignUp";


function Sign() {

    // useState
    const [isSignUp, setIsSignUp] = useState(false);
    const [isSignIn, setIsSignIn] = useState(true);

    // toggle UI
    const toggleSignChange = () => {
        setIsSignUp(!isSignUp)
        setIsSignIn(!isSignIn)
    }

    return (
        <div className="h-[90vh] w-full grid grid-cols-2 items-center justify-center overflow-hidden"
        style={{backgroundImage: "linear-gradient(0deg,#D2D0A0 0%, #9EBC8A 33%, #73946B 66%, #537D5D 100%)"}}>

            {/* start go sign in*/}
            <motion.div className="absolute grid grid-cols-2 h-full w-full z-90 -right-1/2 transition-all duration-500"
            style={{translateX: isSignUp ? '50%' : 0}}
            >
                <div className="flex flex-col items-center p-10
                bg-[url('/imgs/kpop/yeji-itzy-girls-will-be-girls.jpg')] bg-cover-set"
                >
                    {/* start title */}
                    <div className="w-full mb-60">
                        <div className="border pl-2 flex justify-start text-7xl mb-3 sail-regular 
                        bg-clip-text text-transparent drop-shadow-[3px_3px_3px_rgba(0,0,0,0.8)] bg-cover-set"
                        style={{
                            backgroundImage: 'url("/imgs/kpop/aespa-winter-hot-mess.jpg")'
                        }}>
                            Sign In &
                        </div>
                        <div className="border pl-2 flex justify-end text-7xl mb-3 sail-regular 
                        bg-clip-text text-transparent drop-shadow-[3px_3px_3px_rgba(0,0,0,0.8)] bg-cover-set"
                        style={{
                            backgroundImage: 'url("/imgs/kpop/aespa-winter-hot-mess.jpg")'
                        }}>
                            Rediscover Value
                        </div>
                    </div>
                    {/* end title */}
                    
                    {/* start btn */}
                    <button className="w-40 h-20 border-2 border-gray-500 rounded-xl opacity-85 group text-2xl font-bold pacifico-regular
                    bg-gradient-to-r from-[#fef6e4] via-[#c584ba] to-[#6da0db] drop-shadow-[3px_3px_3px_rgba(0,0,0,0.8)]
                    hover:opacity-100 hover:border-pink-400 hover:scale-110 hover:text-pink-600 transition-all duration-250"
                    onClick={toggleSignChange}
                    >
                        Go Sign Up
                    </button>
                    {/* end btn */}

                </div>
            </motion.div>
            {/* end go sign in*/}

            {/* start go sign up*/}
            <motion.div className="absolute grid grid-cols-2 h-full w-full z-90 -left-1/2 transition-all duration-500"
            style={{translateX: isSignIn ? '-50%' : 0}}
            >
                <div className="col-start-2 flex flex-col items-center p-10
                bg-[url('/imgs/kpop/karina-aespa-dirty-work.jpg')] bg-cover-set"
                >
                    {/* start title */}
                    <div className="w-full mb-60">
                        <div className="border pl-2 flex justify-start text-7xl mb-3 sail-regular 
                        bg-clip-text text-transparent drop-shadow-[3px_3px_3px_rgba(0,0,0,0.8)] bg-cover-set"
                        style={{
                            backgroundImage: 'url("/imgs/kpop/aespa-winter-hot-mess.jpg")'
                        }}>
                            Sign Up &
                        </div>
                        <div className="border pl-2 flex justify-end text-7xl mb-3 sail-regular 
                        bg-clip-text text-transparent drop-shadow-[3px_3px_3px_rgba(0,0,0,0.8)] bg-contian-set"
                        style={{
                            backgroundImage: 'url("/imgs/kpop/aespa-winter-hot-mess.jpg")'
                        }}>
                            Discover Gems
                        </div>
                    </div>
                    {/* end title */}

                    {/* start btn */}
                    <button className="w-40 h-20 border-2 border-gray-500 rounded-xl opacity-85 group text-2xl font-bold pacifico-regular
                    bg-gradient-to-br from-[#fef6e4] via-[#599be2] to-[#e487ce] drop-shadow-[3px_3px_3px_rgba(0,0,0,0.8)]
                    hover:opacity-100 hover:border-sky-400 hover:scale-110 hover:text-sky-900 transition-all duration-250"
                    onClick={toggleSignChange}
                    >
                        Go Sign In
                    </button>
                    {/* end btn */}

                </div>
            </motion.div>
            {/* end go sign up*/}

            {/* start sign in */}
            <SignIn isShowed={isSignIn}/>
            {/* end sign in */}

            {/* start sign up */}
            <SignUp isShowed={isSignUp} toggleSignChange={toggleSignChange}/>
            {/* end sign up */}
        </div>
    )
}

export default Sign