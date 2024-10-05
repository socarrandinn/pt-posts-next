import { memo } from "react";
import { LongTextProps } from "./LongText.types";
import { TypographyP } from "@/components/ui/typography";

const LongText = ({ lineClamp, text, maxCharacters }: LongTextProps) => {
    return (
        <TypographyP
            className={`overflow-hidden text-ellipsis ${maxCharacters ? `max-w-[${maxCharacters}ch]` : 'w-full'} line-clamp-${lineClamp}`}
        >
            {text}
        </TypographyP>
    );
};

export default memo(LongText);
