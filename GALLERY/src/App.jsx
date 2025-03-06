import React from "react";
import Gallery from "./components/gallery";
import Podcasts from "./components/podcasts";
import Videos from "./components/videos";

export default function App() {
  return (
    <div>
      <Podcasts />
      <Videos />
      <Gallery />
    </div>
  );
}
