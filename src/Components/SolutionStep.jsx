import {CircleArrowDown} from '../utils/icons'

function SolutionStep(props) {
  return (
    <div className="about-text-step">
      <h4 className="about-text-sTitle">
        <CircleArrowDown className="fa-icon" />
        {props.title}
      </h4>
      <p className="about-text-description">{props.description}</p>
    </div>
  )
}

export default SolutionStep



