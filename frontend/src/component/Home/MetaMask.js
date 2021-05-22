import React from 'react'
import getWeb3 from "../../getWeb3";

const MetaMask = () => {
    //const { balance, address, message, setAddress, setBalance } = useStoreApi();
	const web3 = getWeb3();

	// get user account on button click
	const getUserAccount = async () => {
		if (window.ethereum) {
			try {
				await window.ethereum.enable();
				web3.eth.getAccounts().then((accounts) => {
					//setAddress({ account: accounts[0] });
					//updateBalance(accounts[0]);
				});
			} catch (error) {
				console.error(error);
			}
		} else {
			alert("Metamask extensions not detected!");
		}
	};
    return (
        <div>
            <header className="App-header">
					{/* <img src={EthLogo} className="App-logo" alt="logo" /> */}
					<p>
						<code>Welcome in an decentralized application</code>
					</p>
					{/* {address ? (
						<>
							<p> Your account: {address}</p>
							<p> Balance: {balance} </p>
						</>
					) : null} */}
					<button
						onClick={() => getUserAccount()}
						variant="outlined"
						color="primary">
						Connect your wallet
					</button>
          </header>
        
        </div>
    )
}

export default MetaMask
