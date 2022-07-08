import { FiExternalLink } from "react-icons/fi";
import { MdAdsClick } from "react-icons/md";
import Button from "../elements/Button";

interface ToolCardProps {
    title: string;
    text: string;
    link?: string;
    button?: string;
    classes?: string;
    textClasses?: string;
}

const ToolCard = ({ title, text, link, button, classes, textClasses }: ToolCardProps) => {
    return (
        <a href={link} target="_blank" className={`${classes} flex flex-col relative text-center p-10 items-center justify-center rounded-xl bg-[#292929] hover:scale-[1.02] transition duration-200 ease-linear border-transparent border-opacity-5 max-w-sm`}>
            <p className='font-inter text-2xl text-[#F37BB8] w-full'>{title}</p>
            <p className={`${textClasses} font-normal text-md w-full pb-5 grow text-stone-400`}>{text}</p>
            {button && <Button text={button} link={link} />}
        </a>
    )
}

export default ToolCard
