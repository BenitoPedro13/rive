"use client";
import Image from "next/image";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";
import Rive from "@rive-app/react-canvas";

const RiveDemo = () => {
  const { rive, RiveComponent } = useRive({
    // Load a local riv `clean_the_car.riv` or upload your own!
    src: "/gatinho.riv",
    // Be sure to specify the correct state machine (or animation) name
    stateMachines: "State Machine 1",
    // This is optional.Provides additional layout control.
    layout: new Layout({
      fit: Fit.FitWidth, // Change to: rive.Fit.Contain, or Cover
      alignment: Alignment.Center,
    }),
    autoplay: true,
  });

  return <RiveComponent />;
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white w-full">
      <div className="absolute h-full w-full bg-black m-0 p-0">
        {/* <Simple /> */}
        <RiveDemo />
        {/* <UrlDemo /> */}
      </div>
    </main>
  );
}
