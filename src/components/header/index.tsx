import { useWindowSize } from "../../hooks/useWindowSize";
import { DesktopHeader } from "../../ui/desktopHeader";
import { ResponsiveHeader } from "../../ui/reponsiveHeader";

export function Header() {
    
    const { width } = useWindowSize();
    
    return (
        <>
            {
                width > 1000 ? <DesktopHeader /> : <ResponsiveHeader />
            }
        </>
    );
}