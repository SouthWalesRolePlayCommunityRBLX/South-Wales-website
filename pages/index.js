import Particles from 'react-particles-js';

export default function Home() {
  return (
    <>
        <Particles
            canvasClassName="particles"
            params={{
                particles: {
                    move: {
                        speed: 3
                    },
                    size: {
                        value: 20,
                        random: true
                    }
                },
                interactivity: {
                    detectsOn: 'window',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'repulse'
                        },
                        onclick: {
                            enable: true,
                            mode: 'bubble'
                        }
                    },
                    modes: {
                        bubble: {
                            distance: 400,
                            size: 20,
                            duration: 2
                        },
                        repulse: {
                            distance: 150
                        }
                    }
                }
            }} />

        <div className="flex flex-col h-screen my-auto items-center bg-cover justify-center align-items-center text-white">
            <div className="bg-black bg-opacity-20 p-20 rounded align-items-center items-center text-center">
                <div className="block">
                    <h1 className="text-5xl inline font-bold font-sans">Shad</h1>
                    <span className="inline text-gray-300">#3200</span>
                </div>
                <div className="block mt-4">
                    <a href="https://discord.com/users/298014369533657090" className="duration-75 p-2 hover:bg-opacity-25 font-lg mr-3 pl-12 pr-12 rounded bg-white bg-opacity-10 border-white border-2">Portfolio</a>
                    <a href="https://twitterr.com/TypicallyShad" className="duration-75 p-2 hover:bg-opacity-25 font-lg mr-3 pl-12 pr-12 rounded bg-white bg-opacity-10 border-white border-2">Twitter</a>
                </div>
            </div>
        </div>
    </>
  )
}
