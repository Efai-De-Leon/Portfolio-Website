import { MousePosition } from "../mouse_position/MousePostion";
import { BlurEffectParams } from "./BlurEffectParams";
import { useEffect } from "react";
export function useCircleBlurEffect({ containerRef, innerRef }: BlurEffectParams) {
    const mouse = MousePosition;

    useEffect(() => {
        const container: HTMLDivElement | null = containerRef.current;
        const inner: HTMLDivElement | null = innerRef.current;

        if (!container || !inner) return;

        let counter: number = 0;
        const updateRate: number = 10;
        const isTimeToUpdate = function () {
            return counter++ % updateRate === 0;
        };

        const onMouseEnterHandler = function (event: MouseEvent) {
            mouse.setOrigin(container);
            update(event);
        };

        const onMouseLeaveHandler = function () {
            inner.style.transform = `rotateX(0deg) rotateY(0deg)`;
        };

        const onMouseMoveHandler = function (event: MouseEvent) {
            if (isTimeToUpdate()) {
                update(event);
                updateColor(event);
            }
        };

        const update = function (event: MouseEvent) {
            mouse.updatePosition(event);
            updateTransformStyle(
                (mouse.y / inner.offsetHeight / 2), /* Thie .toFixed is causing performance issues */
                (mouse.x / inner.offsetWidth / 2)
            );
        };

        const updateColor = function (event: MouseEvent) {
            const { x, y } = inner.getBoundingClientRect();
            inner.style.setProperty("--x", `${event.clientX - x}`);
            inner.style.setProperty("--y", `${event.clientY - y}`);
        }

        const updateTransformStyle = function (x: number, y: number) {
            const numX = -x * 50;
            const numY = -y * 100;

            const roundedX = (numX + (numX > 0 ? 0.5 : -0.5)) | 0;
            const roundedY = (numY + (numY > 0 ? 0.5 : -0.5)) | 0;

            const finalX = roundedX / 50;
            const finalY = roundedY / 100;
            inner.style.transform = `rotateX(${finalX}deg) rotateY(${finalY}deg)`;
        };

        container.addEventListener('mouseenter', onMouseEnterHandler);
        container.addEventListener('mouseleave', onMouseLeaveHandler);
        container.addEventListener('mousemove', onMouseMoveHandler);

        return () => {
            container.removeEventListener('mouseenter', onMouseEnterHandler);
            container.removeEventListener('mouseleave', onMouseLeaveHandler);
            container.removeEventListener('mousemove', onMouseMoveHandler);
        };
    }, []);
}