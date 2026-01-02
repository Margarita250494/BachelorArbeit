import {CircleArrowDown} from '../utils/icons'

function SolutionStep(props) {
  return (
    <div className="my-4">
      <h4 className="font-serif text-[18px] font-bold tracking-[0.7px] flex items-center gap-[6px]">
        <CircleArrowDown className="text-accent-pink" />
        {props.title}
      </h4>
      <p className="my-2 mx-6 text-gray-600 font-serif leading-[1.6rem] tracking-[0.7px]">{props.description}</p>
    </div>
  )
}

export default SolutionStep



