import React, { useState } from 'react';
import Layout from './components/Layout';
import Overview from './modules/Overview';
import Threats from './modules/Threats';
import Malware from './modules/Malware';
import Defense from './modules/Defense';

const App = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "threats", label: "Threat Matrix" },
    { id: "malware", label: "Malware Vault" },
    { id: "defense", label: "Defense Systems" },
  ];

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab} navItems={navItems}>
      {activeTab === "overview" && <Overview onNavigate={setActiveTab} />}
      {activeTab === "threats" && <Threats />}
      {activeTab === "malware" && <Malware />}
      {activeTab === "defense" && <Defense />}
    </Layout>
  );
};

export default App;