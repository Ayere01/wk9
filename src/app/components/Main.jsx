import Image from 'next/image'

const greetMe = 'Hello Everybody'

export default function Main() {
  return (
    <div className="grid grid-cols-5 mt-5">
        <div>

            <Image src='/hand.jpg' alt="colorful hands" width={500} height={800}/>

        </div>

        <div className="flex flex-col justify-center items-center text-3xl bg-slate-900 text-gray-400">
            <h2>Good morning, {greetMe}</h2>
            <h1>fundamentals of React JS</h1>
        </div>

        <div>
            <Image src='/rab.jpg' alt="rabbit" width={600} height={900}/>
        </div>
    </div>
  )
}
