import Headerbox from "@/components/Headerbox";
import RightSidebar from "@/components/RightSideBar";
import TotalBallanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Shah", lastName: "Ehesan" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <Headerbox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transaction efficiently"
          />

          <TotalBallanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={247007.44}
          />
        </header>
      </div>
      <RightSidebar
        user={loggedIn}
        banks={[{ currentBalance: 160.44 }, { currentBalance: 160.44 }]}
        transactions={[]}
      />
    </section>
  );
};

export default Home;
