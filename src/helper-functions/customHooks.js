import { useEffect, useRef } from 'react';

/**
 * A function that accepts a handler that is called when clicked outside the component.
 * 
 * @param {function} handler it's called on mouseDown outside the component
 * 
 * @return {Node} returns a node that should be attached to the component desired using useRef()
 */
const useClickOutside = (handler) => {
  const domNode = useRef();

  useEffect(() => {

    const maybeHandler = (e) => {
      if (!domNode.current.contains(e.target)) handler();
    };
    
    document.addEventListener('mousedown', maybeHandler);

    return () => document.removeEventListener('mousedown', maybeHandler);
  });

  return domNode;
};

export default useClickOutside;
