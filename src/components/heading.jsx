const Heading = ({minor, major}) => {
  return (
    <h2 className="flex flex-col items-center bg-black">
      <span className="bg-neutral-800 px-2 py-1 text-sm rounded-full">{minor}</span>
      <span className="text-xl font-bold bg-gradient-to-r bg-clip-text from-amber-500 to-orange-600 text-transparent">{major}</span>
    </h2>
  )
}

export default Heading
