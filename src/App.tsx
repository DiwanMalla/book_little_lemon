import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouterLayout from "./Route/RouterLayout";
import Home from "./components/Home";
import { useReducer } from "react";

// Utility functions
const seedRandom = (seed: number) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return () => (s = (s * a) % m) / m;
};

const fetchAPI = (date: Date): string[] => {
  const result: string[] = [];
  const random = seedRandom(date.getDate());
  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(`${i}:00`);
    }
    if (random() > 0.5) {
      result.push(`${i}:30`);
    }
  }
  return result;
};

const submitAPI = (formData: any): boolean => {
  // Simulate API submission
  console.log("Submitting form data:", formData);
  return true;
};

interface State {
  availableTime: string[];
}

type Action = { type: "UPDATE_TIME" };

const updateTime = (state: State, action: Action): State => {
  switch (action.type) {
    case "UPDATE_TIME":
      return { availableTime: fetchAPI(new Date()) };
    default:
      return state;
  }
};

const App: React.FC = () => {
  const initialState: State = { availableTime: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTime, initialState);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterLayout />,
      children: [
        {
          path: "/",
          element: (
            <Home
              availableTime={state.availableTime}
              dispatch={dispatch}
              submitForm={(formData) => {
                if (submitAPI(formData)) {
                  // Navigation should be handled inside components using useNavigate
                }
              }}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
