import CameraPage from "../pages/CameraPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import { PAGES } from "./pages";

const routes: iRoute[] = [
    {
        name: PAGES.LOGIN,
        component: LoginPage,
        hideNavigationBar: true,
    },
    {
        name: PAGES.HOME,
        component: HomePage,
        hideNavigationBar: false,
        needSession: true,
    },
    {
        name: PAGES.CAMERA,
        component: CameraPage,
        needSession: true,
        hideNavigationBar: false,
    }
]

export default routes;