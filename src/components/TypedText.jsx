import React, {useEffect, useRef} from 'react'
import Typed from 'typed.js'

const TypedText = ({text, delay, onComplete}) => {
  const spanRef = useRef(null);
  useEffect(()=>{
    let typed = new Typed(spanRef.current, {
      strings: text ? [text] : [''],
      typeSpeed: 40,
      startDelay: delay ? delay : 0,
      showCursor: false,
      onComplete: onComplete ? () => onComplete() : () => {}
    });
    return ()=>{
      typed.destroy();
    }
  }, [text, delay, spanRef])

  return (
    <span ref={spanRef}/>
  )
}

export default TypedText
