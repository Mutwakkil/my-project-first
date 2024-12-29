import { IoIosAddCircle } from "react-icons/io";
import {Link} from "react-router-dom";

const Add = () => {
  return (
    <>
      <div className='add'></div>
      <Link to='/add' className="link-add">
        <IoIosAddCircle role='button' className='addition' />
      </Link>
    </>
  )
}

export default Add