import Description from './layout/Description'

function InformationCard({icon, title, description}) {
  return (
    <li
      className="h-auto border-2 border-gray-100 rounded-[12px]
    bg-white relative"
    >
      <div
        className="absolute -top-6 left-[44%] p-[10px] bg-blueSoft-100
      rounded-[30px] max-h-[45px] text-primary-800"
      >
        {icon}
      </div>
      <h4 className="mt-8 mb-10 font-sans text-[28px] font-bold tracking-[0.8px]">{title}</h4>
      <Description
        description={description}
        variant="info"
        className="!m-6 leading-[1.5rem]"
      />
    </li>
  )
}

export default InformationCard
