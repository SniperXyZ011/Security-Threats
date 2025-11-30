import React, { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';

const Layout = ({ children, activeTab, setActiveTab, navItems }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">

            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur border-b border-slate-800">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-2 text-cyan-400">
                            <Shield className="w-6 h-6" />
                            <span className="font-bold text-xl tracking-tighter">NetSec<span className="text-white">Edu</span></span>
                        </div>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex space-x-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === item.id
                                            ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                                            : "text-slate-400 hover:text-white hover:bg-slate-800"
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-400 hover:text-white">
                                {isMenuOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Nav */}
                {isMenuOpen && (
                    <div className="md:hidden bg-slate-900 border-b border-slate-800">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        setActiveTab(item.id);
                                        setIsMenuOpen(false);
                                    }}
                                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${activeTab === item.id
                                            ? "bg-slate-800 text-cyan-400"
                                            : "text-slate-400 hover:text-white hover:bg-slate-800"
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content Area */}
            <main className="max-w-6xl mx-auto px-4 py-8">
                {children}
            </main>

            {/* Footer */}
            <footer className="border-t border-slate-800 mt-12 py-8 bg-slate-900">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-slate-500 text-sm">
                        Based on Module: Network Security Objectives & Threats.
                    </p>
                    <p className="text-slate-600 text-xs mt-2">
                        Secure your data. Update your passwords. Trust no one.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
