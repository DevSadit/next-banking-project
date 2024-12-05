import Headerbox from "@/components/Headerbox";
import TotalBallanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedin = { firstname: "Shah" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <Headerbox
            type="greeting"
            title="Welcome"
            user={loggedin?.firstname || "Guest"}
            subtext="Access and manage your account and transaction efficiently"
          />

          <TotalBallanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1350.44}
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
