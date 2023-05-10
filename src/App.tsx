import { PlayIcon } from "@heroicons/react/24/solid";
import ShortsCardsList from "./components/Cards/ShortsCardsList";
import VideoCardsList from "./components/Cards/VideoCardsList";
import ChipsList from "./components/Chips/ChipsList";
import Divider from "./components/Divider";
import Header from "./components/Header";
import NavigationMenu from "./components/Navigation/NavigationMenu";
import { DividerSizes } from "./types/types";

function App() {
  return (
    <>
      <Header />
      <div className="w-full py-4 flex bg-main-bg">
        <NavigationMenu />
        <main className="w-full h-full px-6 overflow-x-hidden">
          <ChipsList />
          <div className="w-full px-10 py-8">
            <VideoCardsList />
          </div>
          <Divider size={DividerSizes.medium} />
          <div className="w-full px-10 py-8 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <PlayIcon aria-hidden="true" className="w-6 h-6 text-red-600" />
              <h2 className="text-main-text text-xl font-bold">Shorts</h2>
            </div>
            <ShortsCardsList />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
