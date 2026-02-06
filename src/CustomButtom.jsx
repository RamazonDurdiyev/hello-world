export const CustomButtom = ({text}) => {
    const name = "Codevolution";

    const handleClick = () => {
        console.log(`Hey ${name}, you clicked ${text}`);
    }
    return <button onClick={handleClick}>{text}</button>
}