import SearchBar from "@/components/Searchbar";
import Typewriter from "@/fancy/components/text/typewriter";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen w-full  justify-center">
      <div className="max-w-xl space-y-2">
        <div>
          <h1 className="text-base md:text-3xl font-bold"> <span>Cari </span>
            <Typewriter
              text={[
                "Masalahnya",
                "Solusinya",
              ]}
              speed={100}
              className="text-primary"
              waitTime={1500}
              deleteSpeed={40}
              cursorChar={"|"} />
          </h1>
          <p className="text-sm text-muted-foreground  md:text-base">Kurasi masalah-masalah IT RSUD Mamuju Tengah dan Solusinya.</p>
        </div>
        <SearchBar />
      </div>
    </div>
  );
}
