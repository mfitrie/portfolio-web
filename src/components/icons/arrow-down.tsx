
interface TypeArrowDown{
    size: string
}

export default function ArrowDown({size}: TypeArrowDown){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 64 64"><path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2zm0 47L16 33.695h10.857V15h10.285v18.695H48L32 49z"/></svg>
    )
}