'use client'
import { motion, useAnimation } from 'framer-motion'
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

let handlePrevExternal: () => void
let handleNextExternal: () => void

interface CarouselProps {
  children: ReactNode
}

export function Carousel({ children }: CarouselProps) {
  const carousel = useRef<HTMLDivElement>(null)
  const itemRef = useRef<HTMLElement>(null)

  const [width, setWidth] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const [valueItemRef, setValueItemRef] = useState(0)

  const controls = useAnimation()

  const handlePrev = useCallback(() => {
    setCurrentX((prev) => Math.min(prev + valueItemRef, 0))
  }, [valueItemRef])

  const handleNext = useCallback(() => {
    setCurrentX((prev) => Math.max(prev - valueItemRef, -width))
  }, [valueItemRef, width])

  useEffect(() => {
    controls.start({ x: currentX, transition: { duration: 0.8 } })
  }, [currentX, controls])

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }

    if (itemRef.current) {
      setValueItemRef(itemRef.current.offsetWidth)
    }

    // Assign handlers to external variables
    handlePrevExternal = handlePrev
    handleNextExternal = handleNext
  }, [width, valueItemRef, handlePrev, handleNext])

  return (
    <motion.div
      ref={carousel}
      className="carousel overflow-hidden"
      whileTap={{ cursor: 'grabbing' }}
    >
      <motion.div
        className="inner flex gap-3"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        initial={{ x: 0 }}
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        {React.Children.map(children, (child) =>
          React.cloneElement(child as React.ReactElement, { ref: itemRef }),
        )}
      </motion.div>
    </motion.div>
  )
}

export { handlePrevExternal, handleNextExternal }
