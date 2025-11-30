import React from 'react';

const SectionTitle = ({ children, icon: Icon }) => (
  <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-2">
    {Icon && <Icon className="text-cyan-400 w-8 h-8" />}
    <h2 className="text-3xl font-bold text-white tracking-wide font-mono">{children}</h2>
  </div>
);

export default SectionTitle;
