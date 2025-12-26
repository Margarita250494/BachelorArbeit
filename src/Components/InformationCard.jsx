function InformationCard({icon, title, description}) {
  return (
    <li className="info-cards">
      <div className="info-card-icon">
        {icon}
      </div>
      <h4 className="info-card-title">{title}</h4>
      <p className="info-card-description">{description}</p>
    </li>
  )
}

export default InformationCard
