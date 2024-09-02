import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/auth/login";
// import AddJob from "../pages/dashboard/add-job";
import JobDetailsPage from "../pages/dashboard/job-details";
import EmailTemplatesPage from "../pages/dashboard/email-templates";
import RemindersPage from "../pages/dashboard/reminders";
import Dashboard from "../pages/dashboard/dashboard";
import Navbar from "../layout/nav-bar";
import AddCalendarPage from "../pages/dashboard/add-calendar";
import EmailForm from "../pages/dashboard/compose-email";
import AddContact from "../pages/dashboard/add-contact";
import AddMeeting from "../pages/dashboard/add-meeting";
import HeroSection from "../pages/home";
// import { NylasSchedulerEditor, NylasScheduling } from "@nylas/react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <HeroSection />
      </div>
    ),
  },

  {
    path: "/login",
    element: (
      <div>
        <LoginPage />
      </div>
    ),
  },
  {
    path: "/add-job",
    element: (
      <div>
        <Navbar />
        <AddCalendarPage />
      </div>
    ),
  },
  {
    path: "/compose-email",
    element: (
      <div>
        <Navbar />
        <EmailForm />
      </div>
    ),
  },
  {
    path: "/add-contact",
    element: (
      <div>
        <Navbar />
        <AddContact />
      </div>
    ),
  },

  {
    path: "/add-meeting",
    element: (
      <div>
        <Navbar />
        <AddMeeting />
      </div>
    ),
  },

  //   {
  //     path: "/add-calendar",
  //     element: (
  //       <div>
  //         <Navbar />
  //         <AddJob />
  //       </div>
  //     ),
  //   },

  {
    path: "/job-details/:id",
    element: (
      <div>
        <Navbar />
        <JobDetailsPage />
      </div>
    ),
  },
  {
    path: "/email-templates",
    element: (
      <div>
        <Navbar />
        <EmailTemplatesPage />
      </div>
    ),
  },
  {
    path: "/reminders",
    element: (
      <div>
        <Navbar />
        <RemindersPage />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    ),
  },
]);
