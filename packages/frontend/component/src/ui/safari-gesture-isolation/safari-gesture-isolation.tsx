import { useEffect, useRef } from 'react';

const getTouchXY = (event: TouchEvent | WheelEvent): [number, number] =>
  'changedTouches' in event
    ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY]
    : [0, 0];

export interface SafariGestureIsolationProps
  extends React.HTMLProps<HTMLDivElement> {
  allowBack?: boolean;
  allowForward?: boolean;
}

export const SafariGestureIsolation = ({
  children,
  allowBack = true,
  allowForward = true,
  ...props
}: SafariGestureIsolationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const element = containerRef.current;

      const screenWidth = window.innerWidth;
      let startXY: [number, number] = [0, 0];
      let isRight = false;
      let eventCount = 0;

      const touchStartHandler = (event: TouchEvent) => {
        const newStartXY = getTouchXY(event);
        if (newStartXY[0] < window.innerWidth / 2) {
          isRight = false;
          startXY = newStartXY;
          eventCount = 0;
        } else {
          isRight = true;
          startXY = [screenWidth - newStartXY[0], newStartXY[1]];
          eventCount = 0;
        }
      };
      const touchMoveHandler = (event: TouchEvent) => {
        eventCount++;
        if (eventCount === 1) {
          if (allowBack && !isRight) {
            return;
          }
          if (allowForward && isRight) {
            return;
          }
          const newTouchXY = getTouchXY(event);
          if (isRight) {
            newTouchXY[0] = screenWidth - newTouchXY[0];
          }

          const deltaX = newTouchXY[0] - startXY[0];
          const deltaYX =
            Math.abs(newTouchXY[1] - startXY[1]) - Math.abs(deltaX);
          const startX = startXY[0];
          if (
            (startX <= 30 && (deltaX >= 10 || deltaYX < 3)) ||
            (startX <= 20 && (deltaX >= 4 || deltaYX < 4)) ||
            (startX <= 10 && (deltaX >= 2 || deltaYX < 7)) ||
            (startX <= 5 && (deltaX >= 1 || deltaYX < 10))
          ) {
            event.preventDefault();
          }
        }
      };
      element.addEventListener('touchstart', touchStartHandler, {
        capture: true,
      });
      element.addEventListener('touchmove', touchMoveHandler, {
        capture: true,
      });

      return () => {
        element.removeEventListener('touchstart', touchStartHandler, {
          capture: true,
        });
        element.removeEventListener('touchmove', touchMoveHandler, {
          capture: true,
        });
      };
    }
    return;
  }, [allowBack, allowForward]);

  return (
    <div ref={containerRef} {...props}>
      {children}
    </div>
  );
};
