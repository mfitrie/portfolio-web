
export default function Container({
    children,
}: {
    children: React.ReactNode
}){
    return (
        <div className="mx-auto px-4 md:container">{ children }</div>
    )
}