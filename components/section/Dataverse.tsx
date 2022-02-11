import Button from '../elements/Button'


const Dataverse = () => {

    return (
        <div className="min-h-screen relative w-full py-10 px-20 flex flex-col space-y-10 items-center">

            <p className="text-7xl text-pink-600 w-full text-center">
                Data is the new oil!
            </p>
            <p className='text-center text-lg max-w-5xl pb-20'>
                Data is one of the most valuable goods of our time. The MGH DAO does its utmost efforts to democratize data while monetizing it and creating decentralized access to the rising data economy.
                The MGH DAO Valuation Algorithm provides four different revenue streams with burning programs for the MGH DAO Treasury making $MGH deflationary.
                Additionally, MGH DAO is utilizing the Valuation Algorithm to scoop undervalued Metaverse LANDs and Assets which are then aquired by the MGH DAO and developed by the <a href="https://twitter.com/mgh_metadev" target="_blank" className="text-pink-600">MGH DAO Metaverse Dev Group</a>.
            </p>

            <p className="text-5xl text-blue-500 w-full text-center">
                MGH DAO Metaverse Pricing Algorithm
            </p>

            <div className='grid grid-cols-2 gap-5 max-w-5xl w-full'>

                <a href='https://market.oceanprotocol.com/asset/did:op:8331D69bF312604542D5f5f41D859dA27568B7cd' target="_blank" className='relative h-40 flex group items-center rounded bg-grey-darkest border border-white/5 p-5 hover:scale-[1.02] transition duration-200 ease-linear'>
                    <p className='z-10 max-w-3/4 text-xl'>Datasets containing key stats about Metaverse LANDs on the OCEAN Marketplace</p>
                    <img src="/images/Logos/Cryptos/OCEAN.png" className='absolute top-0 right-0 h-full p-3 py-5 gray opacity-10 group-hover:opacity-20 transition duration-200 ease-linear' />
                </a>

                <a href='https://market.oceanprotocol.com/asset/did:op:8331D69bF312604542D5f5f41D859dA27568B7cd' target="_blank" className='relative h-40 flex group items-center rounded bg-grey-darkest border border-white/5 p-5 hover:scale-[1.02] transition duration-200 ease-linear'>
                    <p className='z-10 max-w-3/4 text-xl'>MGH Chainlink Node providing on-chain valuation data</p>
                    <img src="/images/Logos/Cryptos/LINK.png" className='absolute top-0 right-0 h-full p-3 py-5 grayscale opacity-20 group-hover:opacity-40 transition duration-200 ease-linear' />
                </a>

                <a href='https://app.metagamehub.io/valuation' target="_blank" className='relative h-40 flex group items-center rounded bg-grey-darkest border border-white/5 p-5 hover:scale-[1.02] transition duration-200 ease-linear'>
                    <p className='z-10  max-w-3/4 text-lg'>MGH dApp LAND Valuation Interface for The Sandbox and Decentraland<br /> <span className='italic text-gray-400'>(Axie Infinity cooming soon!)</span></p>
                    <img src="/images/Logos/Cryptos/MGH.png" className='absolute top-0 right-0 h-full p-3 py-5 grayscale opacity-20 group-hover:opacity-50 transition duration-200 ease-linear' />
                </a>

                <a href='https://docs.metagamehub.io' target="_blank" className='relative h-40 flex group items-center rounded bg-grey-darkest border border-white/5 p-5 hover:scale-[1.02] transition duration-200 ease-linear'>
                    <p className='z-10  max-w-3/4 text-lg'>Direct API Access and Integration for Assetmanager, DeFi Protocols, NFT Marketplaces, and many more</p>
                    <img src="/images/Logos/Cryptos/MGH.png" className='absolute top-0 right-0 h-full p-3 py-5 grayscale opacity-20 group-hover:opacity-50 transition duration-200 ease-linear' />
                </a>

            </div>

            <Button text="Algorithm KPIs" link="https://www.metagamehub.io/docs/mgh_valuation_algorithm.pdf" />

        </div>

    )
}

export default Dataverse
