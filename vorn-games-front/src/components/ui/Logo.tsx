export function Logo() {
    return (
        <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="w-[40px] h-[40px]" />
            <div className="flex flex-col">
                <span className="text-[16px] text-secondary">vorn</span>
                <span className="text-[20px] text-primary">Games</span>
            </div>
        </div>
    )
}