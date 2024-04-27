import './ProjectCardStyles.css'
import { Card, CardProps } from './Card'
import { CSSProperties, MouseEventHandler, useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

export const ProjectCard: Card = ({ title, description, image, link }: CardProps) => {

    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const colorX = useMotionValue(0);
    const colorY = useMotionValue(0);

    const tiltAmount = 0.2;
    const rotateX = useTransform(y, [-tiltAmount, 0, tiltAmount], [-tiltAmount, 0, tiltAmount])
    const rotateY = useTransform(x, [-tiltAmount, 0, tiltAmount], [tiltAmount, 0, -tiltAmount])

    const containerRef = useRef<HTMLDivElement>(null)
    const innerRef = useRef<HTMLDivElement>(null)


    const handleMouseMove: MouseEventHandler<HTMLDivElement> = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!innerRef.current) return

        const rect = innerRef.current?.getBoundingClientRect();
        const xVal = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
        const yVal = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
        x.set(xVal);
        y.set(yVal);

        colorX.set(event.clientX - rect.left);
        colorY.set(event.clientY - rect.top)
    }

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    }

    return (
        <a href={link} className="project-card-link">
            <motion.div
                ref={containerRef}
                className="container"
                whileHover="hover"
                style={{
                    rotateX,
                    rotateY,
                }}
            >
                <motion.article
                    ref={innerRef}
                    className="project-card small-card inner"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{ 
                        rotateX,
                        rotateY,
                        '--x': colorX,
                        '--y': colorY
                     } as CSSProperties}
                >
                    <div className="project-content">
                        <h3>{title}</h3>
                        <div className="project-overview">
                            <p> {description} </p>
                        </div>
                        <div className="project-info">
                            <a href={link}
                                className="btn">Github Repository</a>
                        </div>
                    </div>

                    <figure>
                        <img src={"./assets/" + image} alt="Not Found" />
                    </figure>
                </motion.article>
            </motion.div>
        </a>
    )
}
