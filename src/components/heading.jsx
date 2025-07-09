const Heading = ({ minor, major, sub }) => {
  return (
    <div className="flex flex-col items-center gap-10">
      <h2 className="flex flex-col items-center">
        <span className="bg-neutral-800 text-white px-2 py-1 text-sm rounded-full">{minor}</span>
        <span className="text-xl font-bold bg-gradient-to-r bg-clip-text from-amber-500 to-orange-600 text-transparent">{major}</span>
      </h2>
      <p className="text-center sm:w-1/2">{sub}</p>
    </div>
  )
}

export default Heading
