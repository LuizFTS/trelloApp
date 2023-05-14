import styles from "./Header.module.css";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <div className={styles.header}>
      <span>
        <BsFillGrid3X3GapFill />
      </span>
      <span>
        <h1>ollerT</h1>
      </span>
      <ul>
        <li>
          <span>
            Workspaces
            <MdKeyboardArrowDown />
          </span>
        </li>
        <li>
          <span>
            Recent
            <MdKeyboardArrowDown />
          </span>
        </li>
        <li>
          <span>
            Starred
            <MdKeyboardArrowDown />
          </span>
        </li>
        <li>
          <span>
            Templates
            <MdKeyboardArrowDown />
          </span>
        </li>
      </ul>
      <button className="btn">Create</button>
    </div>
  );
};

export default Header;
