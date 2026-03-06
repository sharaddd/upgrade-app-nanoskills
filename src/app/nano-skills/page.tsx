"use client";

import React, { useState } from 'react';
import { ChevronLeft, Search, PlayCircle, Clock, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NanoSkillsPage() {
    const [isExpanded, setIsExpanded] = useState(false);
    const nanoVideos = [
        { title: "OpenClaw Tutorial & Setup", duration: "8m", rating: "4.9", category: "Tech", img: "/openclaw_thumb_v2.png" },
        { title: "Building MCP Servers for AI Agents", duration: "24m", rating: "4.8", category: "AI & Data", img: "/mcp_server.png" },
        { title: "ChatGPT for Productivity", duration: "12m", rating: "4.9", category: "AI & Data", img: "https://images.unsplash.com/photo-1675557009875-436f599393e1?w=500&auto=format&fit=crop" },
        { title: "Claude Desktop CLI Setup", duration: "15m", rating: "4.7", category: "Tech", img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&auto=format&fit=crop" },
        { title: "Effective Communication in Tech", duration: "18m", rating: "4.8", category: "Soft Skills", img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&auto=format&fit=crop" },
        { title: "Generative AI Fundamentals", duration: "30m", rating: "5.0", category: "AI & Data", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&auto=format&fit=crop" },
        { title: "Mastering React Hooks", duration: "25m", rating: "4.9", category: "Development", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop" },
        { title: "Data Analysis with Pandas", duration: "22m", rating: "4.7", category: "AI & Data", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop" },
        { title: "Public Speaking for Leaders", duration: "28m", rating: "4.8", category: "Soft Skills", img: "https://images.unsplash.com/photo-1475721027187-402ad2989a3b?w=500&auto=format&fit=crop" },
        { title: "Advanced SQL in 20 Minutes", duration: "20m", rating: "4.6", category: "Data Science", img: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500&auto=format&fit=crop" },
    ];

    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fff' }}>
            {/* Header */}
            <header style={{
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                position: 'sticky',
                top: 0,
                backgroundColor: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(10px)',
                zIndex: 100,
                borderBottom: '1px solid #f0f0f0',
                gap: '12px'
            }}>
                <Link href="/">
                    <button style={{ display: 'flex', alignItems: 'center' }}>
                        <ChevronLeft size={28} color="#333" />
                    </button>
                </Link>
                <h1 style={{ fontSize: '18px', fontWeight: '700', color: '#1A1A1A' }}>Nano Skills</h1>
            </header>

            {/* Hero Section */}
            <section>
                <div style={{
                    width: '100%',
                    height: '240px',
                    overflow: 'hidden',
                    position: 'relative',
                    cursor: 'pointer'
                }}>
                    <img
                        src="/hero_claude_v2.png"
                        alt="Claude Code Full Tutorial"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    {/* Play Button Overlay - Centered with Flexbox */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10,
                        pointerEvents: 'none'
                    }}>
                        <Link href="/nano-skills/watch" style={{ pointerEvents: 'auto' }}>
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0, y: 10 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.05 }}
                                style={{
                                    backgroundColor: 'rgba(238, 44, 60, 0.95)',
                                    padding: '12px 24px',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    boxShadow: '0 8px 32px rgba(238, 44, 60, 0.4)',
                                    backdropFilter: 'blur(8px)',
                                    cursor: 'pointer',
                                    border: '1px solid rgba(255,255,255,0.2)'
                                }}
                            >
                                <div style={{
                                    width: '32px',
                                    height: '32px',
                                    backgroundColor: 'white',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <svg viewBox="0 0 24 24" width="18" height="18" fill="#EE2C3C">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <span style={{
                                    color: 'white',
                                    fontSize: '16px',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>
                                    Start for free
                                </span>
                            </motion.div>
                        </Link>
                    </div>
                    {/* Duration Badge */}
                    <div style={{
                        position: 'absolute',
                        bottom: '12px',
                        right: '12px',
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        color: 'white',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: '600'
                    }}>
                        24:14
                    </div>
                </div>

                <div style={{ padding: '24px 20px' }}>
                    <h2 style={{ fontSize: '28px', lineHeight: '1.2', fontWeight: '800', marginBottom: '16px' }}>
                        Level up in <span style={{ color: '#EE2C3C' }}>30 minutes</span> or less
                    </h2>

                    <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6', marginBottom: '12px' }}>
                        The tech landscape is evolving faster than ever, but keeping up doesn't require hours of study. Dive into our library of concentrated, 20-30 minute video modules covering everything from generative AI to the latest industry frameworks.
                        {!isExpanded ? (
                            <span
                                onClick={() => setIsExpanded(true)}
                                style={{ color: '#1A1A1A', fontWeight: '600', marginLeft: '4px', borderBottom: '1px solid #1A1A1A', cursor: 'pointer' }}
                            >
                                Read More
                            </span>
                        ) : (
                            <>
                                {" "}We've distilled the most critical trends into zero-fluff, high-impact sessions so you can build essential nano-skills and future-proof your career, exactly when you need it.
                                <span
                                    onClick={() => setIsExpanded(false)}
                                    style={{ color: '#1A1A1A', fontWeight: '600', marginLeft: '4px', borderBottom: '1px solid #1A1A1A', cursor: 'pointer' }}
                                >
                                    Read Less
                                </span>
                            </>
                        )}
                    </p>

                    <button style={{
                        width: '100%',
                        backgroundColor: '#EE2C3C',
                        color: 'white',
                        padding: '16px',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: '700',
                        marginTop: '8px',
                        boxShadow: '0 4px 15px rgba(238, 44, 60, 0.2)'
                    }}>
                        Explore Courses
                    </button>
                </div>
            </section>

            {/* Divider */}
            <div style={{ height: '8px', backgroundColor: '#F5F5F5' }} />

            {/* Course List Section Title */}
            <section style={{ padding: '24px 20px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '8px' }}>
                    Discover more <span style={{ color: '#EE2C3C' }}>high-impact sessions</span>
                </h3>

                {/* Horizontal Scroll of Nano Videos */}
                <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '10px', scrollbarWidth: 'none' }}>
                    {nanoVideos.map((video, idx) => (
                        <div key={idx} style={{
                            minWidth: '220px',
                            borderRadius: '12px',
                            border: '1px solid #E0E0E0',
                            overflow: 'hidden'
                        }}>
                            <div style={{ height: '124px', backgroundColor: '#F0F0F0', position: 'relative' }}>
                                <img
                                    src={video.img}
                                    alt={video.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: '8px',
                                    right: '8px',
                                    backgroundColor: 'rgba(0,0,0,0.7)',
                                    color: 'white',
                                    padding: '2px 6px',
                                    borderRadius: '4px',
                                    fontSize: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                    zIndex: 2
                                }}>
                                    <Clock size={10} /> {video.duration}
                                </div>
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'rgba(0,0,0,0.1)',
                                    zIndex: 100,
                                    pointerEvents: 'none'
                                }}>
                                    <div style={{
                                        width: '42px',
                                        height: '42px',
                                        backgroundColor: '#EE2C3C',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
                                        zIndex: 101
                                    }}>
                                        <svg
                                            viewBox="0 0 24 24"
                                            width="22"
                                            height="22"
                                            fill="#FFFFFF"
                                            style={{ marginLeft: '2px' }}
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div style={{ padding: '12px' }}>
                                <p style={{ fontSize: '10px', color: '#EE2C3C', fontWeight: '700', marginBottom: '4px', textTransform: 'uppercase' }}>{video.category}</p>
                                <p style={{ fontSize: '14px', fontWeight: '700', color: '#1A1A1A', marginBottom: '8px' }}>{video.title}</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <Star size={12} fill="#FFD700" color="#FFD700" />
                                    <span style={{ fontSize: '12px', fontWeight: '600' }}>{video.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    );
}
