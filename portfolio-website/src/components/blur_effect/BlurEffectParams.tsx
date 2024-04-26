import { RefObject } from "react";
import React from "react";

export type BlurEffectParams = {
    containerRef: RefObject<HTMLDivElement>;
    innerRef: RefObject<HTMLDivElement>;    
}