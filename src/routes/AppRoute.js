import AdminLayout from "../layouts/AdminLayout"
import DefaultLayout from "../layouts/DefaultLayout"
import NewFeedLayout from "../layouts/NewFeedLayout"
import ProfileLayout from "../layouts/ProfileLayout"
import AdminDashboard from "../pages/Admin/AdminDashboard"
import Dashboard from "../pages/Dashboard"
import Destination from "../pages/Destination"
import EditMyHome from "../pages/EditMyHome"
import EditProfile from "../pages/EditProfile"
import Event from "../pages/Event"
import Group from "../pages/Group"
import Profile from "../pages/Profile"
import Setting from "../pages/Setting"
import RoutePath from "./RoutePath"
import AdminAccountList from "../pages/Admin/AdminAccountList"
import AdminReport from "../pages/Admin/AdminReport"
import AdminTransaction from "../pages/Admin/AdminTransactionList"
import AdminTripHistory from "../pages/Admin/AdminTripHistory"
import LocalWalletManagement from "../pages/Local/LocalWalletManagement"
import LocalLayout from "../layouts/LocalLayout"
import LocalTripHistory from "../pages/Local/LocalTripHistory"
import LocalCalendarManagement from "../pages/Local/LocalCalendarManagement"
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
    { path: RoutePath.EDITMYHOME, component: EditMyHome, layout: ProfileLayout },
    { path: RoutePath.ADMIN, component: AdminDashboard, layout: AdminLayout },
    { path: RoutePath.ADMIN_ACCOUNTLIST, component: AdminAccountList, layout: AdminLayout },
    { path: RoutePath.ADMIN_REPORT, component: AdminReport, layout: AdminLayout },
    { path: RoutePath.ADMIN_TRANSACTION, component: AdminTransaction, layout: AdminLayout },
    { path: RoutePath.ADMIN_TRIPHISTORY, component: AdminTripHistory, layout: AdminLayout },

    { path: RoutePath.LOCAL_WALLET_MANAGEMENT, component: LocalWalletManagement, layout: LocalLayout },
    { path: RoutePath.LOCAL_TRIP_HISTORY, component: LocalTripHistory, layout: LocalLayout },
    { path: RoutePath.LOCAL_CALENDAR_MANAGEMENT, component: LocalCalendarManagement, layout: LocalLayout },

]

export { publishRoutes, privateRoutes }