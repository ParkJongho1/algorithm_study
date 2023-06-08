import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Link style={{color: "red",}} href="/List"><div>go ListPage</div></Link>
      <Link style={{color: "blue",}} href="/List"><div>go TestPage</div></Link>
    </div>
  )
}
