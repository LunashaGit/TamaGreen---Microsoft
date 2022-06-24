import { useState } from "react";
import Achievement from "./components/achievement";
import Avatar from "./components/avatar";
import Dashboard from "./components/dashboard";
import Navigation from "./components/navigation";
import Profil from "./components/profil";
import Questions from "./components/questions";
import Ranking from "./components/ranking";

const App = () => {
  const [page, setPage] = useState<string>("home");
  return (
    <div className="h-screen">
      <Navigation page={page} setPage={setPage} />
      <main className="h-[calc(100%-4rem)] pb-1 relative">
        {page === "home" && (
          <>
            <Dashboard />
            <section className="ml-6 px-6 h-full grid gap-4 grid-rows-6">
              <Questions />
              <Avatar />
            </section>
          </>
        )}
        {page === "profil" && <Profil />}
        {page === "achievement" && <Achievement />}
        {page === "ranking" && <Ranking />}
      </main>
    </div>
  );
};

export default App;
