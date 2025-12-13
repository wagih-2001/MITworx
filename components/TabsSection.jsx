'use client';
import React, { useState } from 'react';

export default function TabsSection({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-5 px-5 max-w-7xl mx-auto">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-4 py-2 rounded font-medium text-sm ${
              i === activeTab
                ? 'bg-blue-900 text-white'
                : 'bg-blue-200 text-blue-900 hover:bg-blue-300'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Content + Header inside */}
      <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg flex flex-col gap-6">
        {/* Header above everything */}
        {tabs[activeTab].header && (
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-4">
            {tabs[activeTab].header}
          </h2>
        )}

        {/* Image + Text side by side */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Image Left */}
          {tabs[activeTab].image && (
            <img
              src={tabs[activeTab].image}
              alt={tabs[activeTab].title}
              className="w-full lg:w-1/3 rounded-2xl shadow-lg"
            />
          )}

          {/* Text Right */}
          <div className="flex-1 space-y-4">
            {Array.isArray(tabs[activeTab].content) ? (
              tabs[activeTab].content.map((item, idx) => (
                <div key={idx}>{item}</div>
              ))
            ) : (
              <div>{tabs[activeTab].content}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
