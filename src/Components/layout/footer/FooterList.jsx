import {Link} from 'react-router-dom'

const FooterList = ({id, title, infoArray}) => {
  return (
    <nav
      id={id}
    >
      <h4 className="my-4 font-serif text-[24px] font-bold tracking-[0.8px]">{title}</h4>
      <ul>
        {infoArray.map((item) => (
          item.type === 'link' ? (
            <li
              key={item.title}
              className="my-6 text-[16px] font-bold tracking-[0.8px]"
            >
              <Link
                to={item.link}
                className="text-gray-300 pb-[2px]
                border-b-2 border-dotted border-transparent duration-200
                hover:border-gray-300"
              >{item.title}</Link>
            </li>
          ) : (
            <li
              key={item.title}
              className="my-6 text-[16px] font-bold tracking-[0.8px]"
            >
              <a
                href={item.link}
                className="text-gray-300 pb-[2px]
                border-b-2 border-dotted border-transparent duration-200
                hover:border-gray-300"
              >{item.title}</a>
            </li>
          )
        ))}
      </ul>
    </nav>
  );
};

export default FooterList;