import { Content } from "./components/content.component";
import { Sidebar } from "./components/sidebar.component";

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <h1 className="text-3xl text-center py-4">Time To Do It</h1>
            <main className="flex flex-row gap-4 flex-1 overflow-hidden">
                <Sidebar />
                <Content />
            </main>
        </div>
    );
}

export default App;