import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import RootLayout from "./pages/Root";
import Spinner from "./components/ui/Spinner";

const ErrorPage = lazy(() => import("./pages/Error"));
const HomePage = lazy(() => import("./pages/Home"));
const TeamPage = lazy(() => import("./pages/Team"));
const InvoicesPage = lazy(() => import("./pages/Invoices"));
const ContactsPage = lazy(() => import("./pages/Contacts"));
const CalendarPage = lazy(() => import("./pages/Calendar"));
const FaqPage = lazy(() => import("./pages/Faq"));
const BarPage = lazy(() => import("./pages/Bar"));
const PiePage = lazy(() => import("./pages/Pie"));
const LinePage = lazy(() => import("./pages/Line"));
const GeographyPage = lazy(() => import("./pages/Geography"));
const NewUserPage = lazy(() => import("./pages/NewUser"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: (
        <Suspense fallback={<Spinner />}>
          <ErrorPage />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Spinner />}>
              <HomePage />
            </Suspense>
          ),
        },
        {
          path: "team",
          element: (
            <Suspense fallback={<Spinner />}>
              <TeamPage />
            </Suspense>
          ),
        },
        {
          path: "contacts",
          element: (
            <Suspense fallback={<Spinner />}>
              <ContactsPage />
            </Suspense>
          ),
        },
        {
          path: "invoices",
          element: (
            <Suspense fallback={<Spinner />}>
              <InvoicesPage />
            </Suspense>
          ),
        },
        {
          path: "newUser",
          element: (
            <Suspense fallback={<Spinner />}>
              <NewUserPage />
            </Suspense>
          ),
        },
        {
          path: "calendar",
          element: (
            <Suspense fallback={<Spinner />}>
              <CalendarPage />
            </Suspense>
          ),
        },
        {
          path: "faq",
          element: (
            <Suspense fallback={<Spinner />}>
              <FaqPage />
            </Suspense>
          ),
        },
        {
          path: "bar",
          element: (
            <Suspense fallback={<Spinner />}>
              <BarPage />
            </Suspense>
          ),
        },
        {
          path: "pie",
          element: (
            <Suspense fallback={<Spinner />}>
              <PiePage />
            </Suspense>
          ),
        },
        {
          path: "line",
          element: (
            <Suspense fallback={<Spinner />}>
              <LinePage />
            </Suspense>
          ),
        },
        {
          path: "geography",
          element: (
            <Suspense fallback={<Spinner />}>
              <GeographyPage />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
