import Sidebar from "./Sidebar";
import FrameBody from "./FrameBody";
import { useSession } from "next-auth/react";


const Dashboard = () =>{ 

    return (
        <main>
            <Sidebar />
            <FrameBody/>
        </main>
    )
}

export default Dashboard;
