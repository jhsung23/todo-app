import { FiLayers, FiCheckCircle, FiChevronsRight, FiPlus, FiTrash2 } from 'react-icons/fi';
import { FaRegStar, FaStar } from 'react-icons/fa';

export const mapItemToComponent = {
  tasks: <FiLayers />,
  important: <FaRegStar />,
  completed: <FiCheckCircle />,
  add: <FiPlus />,
  remove: <FiTrash2 />,
  modalClose: (props) => <FiChevronsRight {...props} />,
  starred: (props) => <FaStar style={{ color: '#1a85ff' }} {...props} />,
  notStarred: (props) => <FaRegStar style={{ color: '#bbbbbb' }} {...props} />,
};
