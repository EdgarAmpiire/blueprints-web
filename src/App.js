import { useEffect, useState } from "react";
import { AppProvider } from "./providers/app";
import { AppRoutes } from "./routes";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <AppProvider>
      <>
        {loading ? (
          <div className="flex flex-row justify-center items-center h-[100vh]">
            {/* <img
              src={logoImage}
              alt="Loading"
              className="h-32 w-auto mx-auto animate__animated animate__flipInX animate-bounce"
            /> */}
           <h1 className="text-[#0055BA]"></h1>
            Blueprint Strategy
          </div>
        ) : (
          <div className="transition ease-in delay-150">
            <AppRoutes />
          </div>
        )}
      </>
    </AppProvider>
  );
}

export default App;
