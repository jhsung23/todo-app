import { FiLayers, FiCheckCircle, FiChevronsRight } from 'react-icons/fi';
import { FaRegStar, FaStar } from 'react-icons/fa';

export const mapItemToComponent = {
  tasks: <FiLayers />,
  important: <FaRegStar />,
  completed: <FiCheckCircle />,
  personal: '👩🏻',
  work: '💼',
  study: '📚',
  gathering: '👯',
  modalClose: (props) => <FiChevronsRight {...props} />,
  starred: (props) => <FaStar style={{ color: '#1a85ff' }} {...props} />,
  notStarred: (props) => <FaRegStar style={{ color: '#bbbbbb' }} {...props} />,
};
