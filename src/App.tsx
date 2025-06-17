import { Button } from "./components/button.component";
import { Content } from "./components/content.component";
import { Sidebar } from "./components/sidebar.component";

function App() {
    return (
        <>
            <h1 className="text-3xl my-4 text-center">Time To Do It</h1>
            <main className="flex flex-row gap-4">
                <Sidebar />
                <Content>
                    <Button
                        callback={() => alert("Love")}
                        label="❤"
                        className="aspect-square mx-auto px-2 mb-4"
                    />
                </Content>
            </main>
        </>
    );
}

export default App;
