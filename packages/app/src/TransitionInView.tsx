import { Transition, TransitionClasses } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function TransitionInView({
  children,
  ...props
}: {
  children: React.ReactNode;
} & TransitionClasses) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (!isVisible && inView) setIsVisible(true);
  }, [isVisible, inView, ref]);

  if (!isVisible) {
    return (
      <div ref={ref} className="invisible">
        {children}
      </div>
    );
  }

  return (
    <Transition
      as="div"
      appear={true}
      show={isVisible}
      enter="duration-[1000ms]"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      {...props}
    >
      {children}
    </Transition>
  );
}
