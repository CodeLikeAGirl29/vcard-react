import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const Home = ({ children }) => {
  return (
    <div className="card-started prose prose-slate" id="home-card">
      {children}
      <SpeedInsights />
      <Analytics />
    </div>
  );
};
export default Home;
