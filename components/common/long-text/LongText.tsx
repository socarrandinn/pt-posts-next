import { memo } from "react";
import { LongTextProps } from "./LongText.types";
import { cn } from "@/lib/utils";

const LongText = ({ lineClamp, text, className }: LongTextProps) => {
    return (
        <p
            className={cn(
                "overflow-hidden text-ellipsis w-full",
                className
            )}
            style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: lineClamp,
            }}
        >
            {text}
        </p>
    );
};

export default memo(LongText);
