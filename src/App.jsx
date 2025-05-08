import './App.css'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import '@solana/wallet-adapter-react-ui/styles.css';
import { Tokenlaunchpad } from './components/Tokenlaunchpad' 

function App() {

  return (
    <div>
      <ConnectionProvider endpoint='https://api.devnet.solana.com'>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
          <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: 20
              }}>
              <WalletMultiButton/>
              <WalletDisconnectButton/>
          </div>
          <Tokenlaunchpad/>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  )
}

export default App
