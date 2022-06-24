import { useState } from "react";
import Avatar from "./components/avatar";
import Dashboard from "./components/dashboard";
import Navigation from "./components/navigation";
import Questions from "./components/questions";

const App = () => {
  const [page, setPage] = useState<string>("home");
  return (
    <div className="h-screen">
      <Navigation page={page} setPage={setPage} />
      <main className="h-[calc(100%-4rem)] pb-1 relative">
        <Dashboard page={page} />
        {page === "home" && (
          <section className="ml-6 px-6 h-full grid gap-4 grid-rows-6">
            <Questions />
            <Avatar />
          </section>
        )}
      </main>
    </div>
  );
};

export default App;
