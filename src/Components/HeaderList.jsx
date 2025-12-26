import {headerLinksToSections} from '../utils/header.data'
import {Link} from 'react-router-dom'

export const HeaderList = ({isMobile = false, className}) => {
  const itemsToRender = isMobile
    ? headerLinksToSections
    : headerLinksToSections.filter(item => !item.mobileOnly);

  return (
    <ul className={className}>
      {itemsToRender.map((headerLink) => (
        headerLink.type === 'link' ? (
          <li key={headerLink.title}>
            <Link
              to={headerLink.link}
              onClick={headerLink.onClick}
              className={!isMobile ? "navbar-links" : undefined}
            >
              {headerLink.title}
            </Link>
          </li>
        ) : (
          <li key={headerLink.title}>
            <a
              href={headerLink.link}
              onClick={headerLink.onClick}
              className={!isMobile ? "navbar-links" : undefined}
            >
              {headerLink.title}
            </a>
          </li>
        )
      ))}
    </ul>
  )
};