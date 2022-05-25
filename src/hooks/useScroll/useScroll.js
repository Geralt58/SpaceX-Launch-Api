import { useEffect, useState } from 'react'

const useScroll = (checkScrollYFn, onRechedCallback) => {
   const [isDistanceCrossed, setIsDistanceCrossed] = useState(false)

   useEffect(() => {
      if (isDistanceCrossed) onRechedCallback()
   }, [isDistanceCrossed, onRechedCallback])

   window.addEventListener('scroll', () => {
      const hasCrossed = checkScrollYFn(window.scrollY)
      if (hasCrossed && !isDistanceCrossed) setIsDistanceCrossed(true)
      if (!hasCrossed && isDistanceCrossed) setIsDistanceCrossed(false)
   })
}

export { useScroll }
