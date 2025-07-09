const Features = ({ features }) => {
  return (
    <div className="flex flex-wrap justify-between gap-y-10 px-5 sm:flex-nowrap">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center gap-2 basis-[46%]">
          <div className="text-5xl text-orange-500 shadow-xl">{feature.icon}</div>
          <p className="text-center leading-tight">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Features
