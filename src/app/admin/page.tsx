import Menu from "../dashboard/components/Menu"
import CreateTestForm from "./components/CreateTestForm";


export default function Admin() {
    return (
        <>
            <Menu />
            <main className="w-full">
                <CreateTestForm />
            </main>

        </>
    );
}