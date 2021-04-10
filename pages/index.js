import Particles from 'react-particles-js';

export default function Home() {
  return (
    <>
        <Particles
            canvasClassName="particles"
            height="1000px"
            width="1000px"
            params={{
                particles: {
                    move: {
                        speed: 0.5
                    }
                }
            }} />

        <div className="flex flex-col h-screen my-auto items-center bg-cover justify-center align-items-cente text-white">
            <h1 className="text-5xl font-bold font-sans">Shad</h1>
            <p className="mt-2">discord bot developer</p>
            <div className="block mt-4">
                <a href="https://discord.com/users/298014369533657090" className="duration-75 p-2 hover:bg-opacity-25 font-lg mr-3 pl-12 pr-12 rounded bg-white bg-opacity-10 border-white border-2">Discord</a>
                <a href="https://twitter.com/TypicallyShadow" className="duration-75 p-2 hover:bg-opacity-25 font-lg pl-12 pr-12 rounded bg-white bg-opacity-10 border-white border-2">Twitter</a>
            </div>
        </div>
    </>
  )
}
