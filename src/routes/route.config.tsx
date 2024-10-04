import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../App";
import LoginPage from "../pages/auth/login";
import Dashboard from "../pages/dashboard/user-dashboard";
import { HomePage } from "../pages/home/landing-page";
import AddCalendarPage from "../pages/dashboard/add-calendar";
import EmailForm from "../pages/dashboard/compose-email";
import AddContact from "../pages/dashboard/add-contact";
import AddMeeting from "../pages/dashboard/add-meeting";
import JobDetailsPage from "../pages/dashboard/job-details";
import EmailTemplatesPage from "../pages/dashboard/email-templates";
import RemindersPage from "../pages/dashboard/reminders";
import Navigation from "../pages/home/nav";
import Mails from "../pages/dashboard/mails/mails";
import Calendar from "../pages/dashboard/calendar/calendar";
import Interviews from "../pages/dashboard/interviews/interviews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navigation />
        <HomePage />
      </div>
    ),
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/add-job", element: <AddCalendarPage /> },
      { path: "/compose-email", element: <EmailForm /> },
      { path: "/add-contact", element: <AddContact /> },
      { path: "/add-meeting", element: <AddMeeting /> },
      { path: "/job-details/:id", element: <JobDetailsPage /> },
      { path: "/email-templates", element: <EmailTemplatesPage /> },
      { path: "/reminders", element: <RemindersPage /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/your-mails", element: <Mails /> },
      { path: "/calendar", element: <Calendar /> },
      { path: "/interviews", element: <Interviews /> },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
