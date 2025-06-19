export function About() {
    return (
        <div className="flex flex-col justify-between h-full p-4 rounded-md bg-gray-400">
            <h1 className="text-2xl font-bold mb-4">About This Application</h1>
            <p className="mb-4">
                This application was created for the Summer of Making 2025
                event.
                <br />
                It is designed to help you manage your tasks efficiently and
                effectively, with a focus on simplicity and ease of use.
                <br />
                <br />
                The application features a user-friendly interface that allows
                you to add, edit, and delete tasks
                <br />
                The main feature is the ability to track the time spent on each
                task, helping you to stay focused and productive.
                <br />
                <br />
                If you need more information please feel free to visit this
                projects README file on GitHub.
                <br />
                <br />
                <strong>Note:</strong> This application does not collect or
                transmit any personal data to external servers.
                <br />
                All data is stored locally in your browser, ensuring your
                privacy and security
            </p>
            <div className="flex flex-row gap-4">
                <a href="https://github.com/Icky50/time-to-do-it" target="_blank">Github Repo</a>
                <a href="https://raw.githubusercontent.com/Icky50/time-to-do-it/refs/heads/main/README.md" target="_blank">Readme</a>
                <a href="https://summer.hackclub.com" target="_blank">Summer of Making</a>
            </div>
        </div>
    );
}
