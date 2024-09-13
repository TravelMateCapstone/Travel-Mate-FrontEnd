import AdminLayout from "../layouts/AdminLayout"
import DefaultLayout from "../layouts/DefaultLayout"
import NewFeedLayout from "../layouts/NewFeedLayout"
import ProfileLayout from "../layouts/ProfileLayout"
import Dashboard from "../pages/Dashboard"
import Destination from "../pages/Destination"
import EditProfile from "../pages/EditProfile"
import Event from "../pages/Event"
import Group from "../pages/Group"
import Profile from "../pages/Profile"
import Setting from "../pages/Setting"
import RoutePath from "./RoutePath"


const publishRoutes = [
    { path: RoutePath.DASHBOARD, component: Dashboard, layout: DefaultLayout },
    { path: RoutePath.SETTING, component: Setting, layout: DefaultLayout },
    { path: RoutePath.DESTINATION, component: Destination, layout: DefaultLayout },
]

const privateRoutes = [
    { path: RoutePath.GROUP, component: Group, layout: DefaultLayout },
    { path: RoutePath.EVENT, component: Event, layout: DefaultLayout },
    { path: RoutePath.PROFILE, component: Profile, layout: ProfileLayout },
    { path: RoutePath.EDITPROFILE, component: EditProfile, layout: ProfileLayout },
    
]

export { publishRoutes, privateRoutes }