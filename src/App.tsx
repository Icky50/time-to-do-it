import { Content } from "./components/content.component";
import { NewToDoElement } from "./components/new-to-do-element.component";
import { Sidebar } from "./components/sidebar.component";
import { ToDoListElement } from "./components/to-do-list-element.component";

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <h1 className="text-3xl text-center py-4">Time To Do It</h1>
            <main className="flex flex-row gap-4 flex-1 overflow-hidden">
                <Sidebar />
                <Content>
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <ToDoListElement />
                            <ToDoListElement selected />
                            <ToDoListElement />
                            <ToDoListElement />
                            <ToDoListElement />
                        </div>
                        <div>
                            <NewToDoElement />
                        </div>
                    </div>
                </Content>
            </main>
        </div>
    );
}

export default App;
