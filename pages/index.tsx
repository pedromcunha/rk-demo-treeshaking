import { NextPage } from 'next'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'

const Index: NextPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        gap: 12,
        padding: 24,
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <ConnectButton />

      <h2>Modals</h2>
      <nav style={{ display: 'flex', gap: 15 }}>
        {/* <Link href="/modal/buy">
          <a>BuyModal</a>
        </Link> */}
      </nav>
    </div>
  )
}

export default Index
