import { ChessboardComponent } from "@/components/chess/ChessboardComponent";

export default function Home() {
  return (
    <div className="flex align-middle justify-center w-full h-screen">
      <div className="w-[40%]">
        <ChessboardComponent />
      </div>
    </div>
  );
}
