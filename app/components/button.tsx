export default function Button({content, variant} : {content : string, variant : string}) {
    const style = variant === 'primary' ? 'bg-sky-300 text-sky-800 py-2 px-8 rounded-md font-bold' : 'bg-purple-300 text-purple-800 py-2 px-8 rounded-md font-bold'
    return (
        <button className={`border-blue-600 border-2 ${style} `}>
            {content}
        </button>
    )
}