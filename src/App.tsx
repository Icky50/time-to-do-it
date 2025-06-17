import { Button } from "./components/button.component";
import { Content } from "./components/content.component";
import { Sidebar } from "./components/sidebar.component";

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <h1 className="text-3xl text-center py-4">Time To Do It</h1>
            <main className="flex flex-row gap-4 flex-1 overflow-hidden">
                <Sidebar />
                <Content>
                    <Button
                        callback={() => alert("Love")}
                        label="❤"
                        className="aspect-square mx-auto px-2 mb-4"
                    />
                </Content>
            </main>
        </div>
    );
}

export default App;
