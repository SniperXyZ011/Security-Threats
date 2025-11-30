import React from 'react';

const Card = ({ title, children, className = "" }) => (
    <div className={`bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm ${className}`}>
        {title && <h3 className="text-xl font-semibold text-cyan-300 mb-3">{title}</h3>}
        <div className="text-slate-300 leading-relaxed">
            {children}
        </div>
    </div>
);

export default Card;
