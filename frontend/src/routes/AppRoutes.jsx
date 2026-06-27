import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import LoginPage from '../pages/Login/LoginPage'
import SignupPage from '../pages/Signup/SignupPage'
import EmployeeDashboard from '../pages/employee/Dashboard'
import EmployeeAttendance from '../pages/employee/Attendance'
import EmployeeLeave from '../pages/employee/Leave'
import EmployeeProfile from '../pages/employee/Profile'
import ManagerDashboard from '../pages/manager/Dashboard'
import ManagerAttendance from '../pages/manager/Attendance'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/employee" element={<EmployeeDashboard />} />
      <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
      <Route path="/employee/attendance" element={<EmployeeAttendance />} />
      <Route path="/employee/leave" element={<EmployeeLeave />} />
      <Route path="/employee/profile" element={<EmployeeProfile />} />
      <Route path="/manager" element={<ManagerDashboard />} />
      <Route path="/manager/dashboard" element={<ManagerDashboard />} />
      <Route path="/manager/attendance" element={<ManagerAttendance />} />
    </Routes>
  )
}
