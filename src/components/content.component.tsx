import { useEffect, useState } from "react";
import { About } from "../pages/About.page";
import { TODO } from "../pages/TODO.page";
import { History } from "../pages/History.page";
import { Graphs } from "../pages/Graphs.page";

function getPage(pathname: string) {
    switch (pathname) {
        case "/":
            return <TODO />;
        case "/about":
            return <About />;
        case "/history":
            return <History />;
        case "/graphs":
            return <Graphs />;
        default:
            return <div>404 Not Found</div>;
    }
}

export function Content() {
    const [,setPath] = useState(window.location.pathname);

    useEffect(() => {
        const handlePopState = () => {
            setPath(window.location.pathname);
        };
        window.addEventListener("popstate", handlePopState);
        return () => window.removeEventListener("popstate", handlePopState);
    }, []);

    const Page = getPage(window.location.pathname);

    return (
        <div className="flex flex-col flex-1 p-4 rounded-md bg-gray-400 mr-4 mb-4">
            {Page}
        </div>
    );
}
