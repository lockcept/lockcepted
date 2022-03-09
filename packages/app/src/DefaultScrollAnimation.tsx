import React from "react";
import ScrollAnimation, { ScrollAnimationProps } from "react-animate-on-scroll";

export default function DefaultScrollAnimation({
  children,
  ...props
}: {
  children: React.ReactNode;
} & ScrollAnimationProps) {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOnce={true} {...props}>
      {children}
    </ScrollAnimation>
  );
}
