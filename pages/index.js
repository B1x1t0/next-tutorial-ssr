import Link from 'next/link'

const Index = () => (
    <div>
      <p>Hello Next.js</p>
      <div>
            <Link href="/about">
            <button>About Page</button>
            </Link>
        </div>
    </div>
  )
  
  export default Index