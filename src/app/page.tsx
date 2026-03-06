"use client";

import React from 'react';
import { Search, Compass, BookOpen, Calendar, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const goals = [
    "Learn in 25 minutes",
    "Get a promotion",
    "Industry Certification",
    "Data Science Courses",
    "Free Course",
    "Study Abroad",
    "Prepare for your first job"
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fff' }}>
      {/* Header */}
      <header style={{
        padding: '12px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(10px)',
        zIndex: 100,
        borderBottom: '1px solid #f0f0f0'
      }}>
        <div style={{ color: '#EE2C3C', fontWeight: 'bold', fontSize: '24px', letterSpacing: '-0.5px' }}>
          upGrad
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button style={{
            padding: '6px 16px',
            borderRadius: '8px',
            border: '1px solid #333',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            Courses
          </button>

          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: '#E0E0E0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            S
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section style={{ padding: '16px' }}>
        <div style={{
          width: '100%',
          borderRadius: '16px',
          overflow: 'hidden',
          aspectRatio: '16/10',
          position: 'relative',
          backgroundColor: '#333'
        }}>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
            alt="Hero Banner"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
          />
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '24px',
            background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
          }}>
            <h2 style={{ color: 'white', fontSize: '20px', marginBottom: '4px' }}>Learn with peers.</h2>
            <p style={{ color: '#FF4D4D', fontWeight: 'bold', fontSize: '18px' }}>Join our Classroom Programs</p>
            <div style={{ color: 'white', fontSize: '14px', marginTop: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              Explore programs <span>→</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginTop: '12px' }}>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} style={{
              width: i === 5 ? '24px' : '6px',
              height: '6px',
              borderRadius: '3px',
              backgroundColor: i === 5 ? '#333' : '#E0E0E0'
            }} />
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '0 16px' }}>
        <h1 style={{
          color: '#EE2C3C',
          fontSize: '24px',
          textAlign: 'center',
          fontWeight: '700',
          marginBottom: '8px'
        }}>
          Master tomorrow's skills today.
        </h1>
        <p style={{ textAlign: 'center', color: '#333', fontWeight: '500', marginBottom: '20px' }}>
          Excel with India's top upskilling platform.
        </p>

        {/* Search Bar */}
        <div style={{
          position: 'relative',
          marginBottom: '24px'
        }}>
          <input
            type="text"
            placeholder="Tell us what you're looking to learn"
            style={{
              width: '100%',
              padding: '16px 20px',
              borderRadius: '12px',
              border: '1px solid #FFCDD2',
              fontSize: '14px',
              boxShadow: '0 4px 12px rgba(238, 44, 60, 0.05)'
            }}
          />
          <button style={{
            position: 'absolute',
            right: '8px',
            top: '8px',
            backgroundColor: '#EE2C3C',
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Search size={20} color="white" />
          </button>
        </div>

        {/* Goals Chips */}
        <div style={{ marginBottom: '24px' }}>
          <p style={{ fontSize: '14px', fontWeight: '700', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            Or select your goal <span style={{ fontSize: '12px' }}>🎯</span>
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {goals.map((goal) => (
              goal === "Learn in 25 minutes" ? (
                <Link href="/nano-skills" key={goal} style={{ textDecoration: 'none' }}>
                  <motion.button
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(238, 44, 60, 0)",
                        "0 4px 12px rgba(238, 44, 60, 0.2)",
                        "0 0 0px rgba(238, 44, 60, 0)"
                      ]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut"
                    }}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '8px',
                      border: '1px solid #FFCDD2',
                      fontSize: '13px',
                      whiteSpace: 'nowrap',
                      backgroundColor: 'white',
                      color: '#1A1A1A',
                      fontWeight: '600',
                      position: 'relative'
                    }}
                  >
                    {goal}
                    <div style={{
                      position: 'absolute',
                      top: '-4px',
                      right: '-4px',
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#EE2C3C',
                      borderRadius: '50%',
                      border: '2px solid white'
                    }} />
                  </motion.button>
                </Link>
              ) : (
                <button
                  key={goal}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: '1px solid #E0E0E0',
                    fontSize: '13px',
                    whiteSpace: 'nowrap',
                    backgroundColor: 'white',
                    color: '#1A1A1A',
                    fontWeight: '500'
                  }}
                >
                  {goal}
                </button>
              )
            ))}
          </div>
        </div>

        <p style={{ fontSize: '13px', color: '#666', textAlign: 'center', marginBottom: '40px' }}>
          Join the community of <span style={{ color: '#EE2C3C', fontWeight: 'bold' }}>11,160,074</span> learners.
        </p>
      </section>

      {/* Bottom Navigation */}
      <footer style={{
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: '430px',
        backgroundColor: 'white',
        borderTop: '1px solid #f0f0f0',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '12px 10px 24px 10px',
        zIndex: 100
      }}>
        {/* EXPLORE (ACTIVE) */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: '#000', minWidth: '70px' }}>
          <Compass size={24} strokeWidth={2.5} />
          <span style={{ fontSize: '11px', fontWeight: '700' }}>Explore</span>
        </div>

        {/* NANO SKILLS */}
        <Link href="/nano-skills" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: '#666', minWidth: '70px' }}>
            <div style={{ position: 'relative' }}>
              <Zap size={24} strokeWidth={2} />
              <div style={{
                position: 'absolute',
                top: -1,
                right: -1,
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                backgroundColor: '#EE2C3C'
              }} />
            </div>
            <span style={{ fontSize: '11px', fontWeight: '500' }}>Nano Skills</span>
          </div>
        </Link>

        {/* MY PROGRAMS */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: '#666', minWidth: '70px' }}>
          <BookOpen size={24} strokeWidth={2} />
          <span style={{ fontSize: '11px', fontWeight: '500' }}>My Programs</span>
        </div>

        {/* PLANNER */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: '#666', minWidth: '70px' }}>
          <Calendar size={24} strokeWidth={2} />
          <span style={{ fontSize: '11px', fontWeight: '500' }}>Planner</span>
        </div>
      </footer>
    </main>
  );
}
