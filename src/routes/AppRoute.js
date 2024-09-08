import AdminLayout from "../layouts/AdminLayout"
import DefaultLayout from "../layouts/DefaultLayout"
import NewFeedLayout from "../layouts/NewFeedLayout"
import ProfileLayout from "../layouts/ProfileLayout"
import Dashboard from "../pages/Dashboard"
import Event from "../pages/Event"
import Group from "../pages/Group"
import Profile from "../pages/Profile"
import Setting from "../pages/Setting"
import RoutePath from "./RoutePath"


const publishRoutes = [
    { path: RoutePath.DASHBOARD, component: Dashboard, layout: NewFeedLayout },
    { path: RoutePath.SETTING, component: Setting, layout: DefaultLayout },
]

const privateRoutes = [
    { path: RoutePath.GROUP, component: Group, layout: DefaultLayout },
    { path: RoutePath.EVENT, component: Event, layout: DefaultLayout },
    { path: RoutePath.PROFILE, component: Profile, layout: ProfileLayout },
]

export { publishRoutes, privateRoutes }