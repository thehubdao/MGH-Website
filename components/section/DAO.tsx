import Button from "../elements/Button"

const DAO = () => {
    return (
        <div className="min-h-screen w-full py-10 px-10 flex items-center justify-between space-x-20">
            <h1 className="text-left max-w-min font-normal"><span className="text-pink-600 font-medium text-9xl">D</span>ecentralized <span className="text-pink-600 font-medium text-9xl">A</span>utonomous <span className="text-pink-600 font-medium text-9xl">O</span>rganisation</h1>
            <div className="flex flex-col items-center space-y-10">
                <p className="text-xl max-w-lg text-center">MGH is a Decentralized Autonomous Organization, which means that MGH is community-driven. Everybody can join and help the DAO achieve its goals. Members have the power to <a href="https://snapshot.org/#/metagamehub.eth" target="_blank" className="text-pink-600">vote</a> on operational decisions and to manage the <a href="/treasury" target="_blank" className="text-pink-600">DAO's Treasury</a>.</p>
                <Button text="Contribute" link="/contribute"/>
            </div>
        </div>
    )
}

export default DAO