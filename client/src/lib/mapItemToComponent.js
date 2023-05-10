import { FiLayers, FiCheckCircle } from 'react-icons/fi';
import { FaRegStar } from 'react-icons/fa';

export const mapItemToComponent = {
  tasks: <FiLayers />,
  important: <FaRegStar />,
  completed: <FiCheckCircle />,
  personal: '👩🏻',
  work: '💼',
  study: '📚',
  gathering: '👯',
};
