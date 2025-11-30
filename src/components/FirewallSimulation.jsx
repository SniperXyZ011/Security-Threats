import React, { useState } from 'react';
import { Shield, Globe, Server } from 'lucide-react';

const FirewallSimulation = () => {
    const [packetStatus, setPacketStatus] = useState("waiting"); // waiting, checking, allowed, blocked

    const checkPacket = () => {
        setPacketStatus("checking");
        setTimeout(() => {
            const allowed = Math.random() > 0.5;
            setPacketStatus(allowed ? "allowed" : "blocked");
            setTimeout(() => setPacketStatus("waiting"), 2000);
        }, 1000);
    };

    return (
        <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 my-8">
            <h3 className="text-center text-cyan-400 font-mono mb-6">-- FIREWALL SIMULATION --</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Internet */}
                <div className="text-center">
                    <Globe className="w-12 h-12 text-slate-500 mx-auto mb-2" />
                    <div className="text-sm font-mono text-slate-400">Internet (Untrusted)</div>
                </div>

                {/* Path 1 */}
                <div className="flex-1 h-1 bg-slate-700 relative overflow-hidden">
                    {packetStatus !== "waiting" && (
                        <div className={`absolute top-0 left-0 h-full w-4 bg-yellow-400 animate-slide-right`} />
                    )}
                </div>

                {/* Firewall */}
                <div className={`p-4 border-2 rounded-lg flex flex-col items-center w-32 transition-colors ${packetStatus === "checking" ? "border-yellow-500 bg-yellow-900/20" :
                        packetStatus === "blocked" ? "border-red-500 bg-red-900/20" :
                            packetStatus === "allowed" ? "border-green-500 bg-green-900/20" :
                                "border-cyan-500 bg-cyan-900/10"
                    }`}>
                    <Shield className={`w-8 h-8 mb-2 ${packetStatus === "checking" ? "text-yellow-400" :
                            packetStatus === "blocked" ? "text-red-500" :
                                packetStatus === "allowed" ? "text-green-500" :
                                    "text-cyan-400"
                        }`} />
                    <span className="text-xs font-bold text-white">FIREWALL</span>
                    <span className="text-[10px] text-slate-400 mt-1">
                        {packetStatus === "waiting" && "Idle"}
                        {packetStatus === "checking" && "Scanning..."}
                        {packetStatus === "blocked" && "DENIED"}
                        {packetStatus === "allowed" && "ALLOWED"}
                    </span>
                </div>

                {/* Path 2 */}
                <div className="flex-1 h-1 bg-slate-700 relative overflow-hidden">
                    {packetStatus === "allowed" && (
                        <div className={`absolute top-0 left-0 h-full w-full bg-green-500 animate-pulse`} />
                    )}
                </div>

                {/* Internal Network */}
                <div className="text-center">
                    <Server className="w-12 h-12 text-green-600 mx-auto mb-2" />
                    <div className="text-sm font-mono text-slate-400">Internal Network</div>
                </div>
            </div>

            <div className="mt-6 flex justify-center">
                <button
                    onClick={checkPacket}
                    disabled={packetStatus !== "waiting"}
                    className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded shadow-lg shadow-cyan-500/30 disabled:opacity-50 transition-all"
                >
                    Send Test Packet
                </button>
            </div>
        </div>
    );
};

export default FirewallSimulation;
