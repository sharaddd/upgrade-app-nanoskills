"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, Play, Pause, RotateCcw, Share2, Linkedin, ExternalLink, Award, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function WatchPage() {
    const [isPlaying, setIsPlaying] = useState(true);
    const [progress, setProgress] = useState(0);
    const [isWatched, setIsWatched] = useState(false);
    const [view, setView] = useState('player'); // 'player', 'celebration'
    const [showModal, setShowModal] = useState(false);

    // Simulate video progress
    useEffect(() => {
        if (isPlaying && progress < 100) {
            const timer = setInterval(() => {
                setProgress((prev) => {
                    const next = prev + 0.5;
                    if (next >= 100) {
                        setIsWatched(true);
                        setIsPlaying(false);
                        return 100;
                    }
                    return next;
                });
            }, 50);
            return () => clearInterval(timer);
        }
    }, [isPlaying, progress]);

    const handleClaimBadge = () => {
        setView('celebration');
    };

    const handleShareLinkedIn = () => {
        setShowModal(true);
    };

    return (
        <main style={{ minHeight: '100vh', backgroundColor: '#fff', position: 'relative' }}>
            {/* Header */}
            <header style={{
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 100,
                backgroundColor: 'rgba(255,255,255,0.8)',
                backdropFilter: 'blur(10px)'
            }}>
                <Link href="/nano-skills">
                    <ChevronLeft size={28} color="#000" />
                </Link>
                <div style={{ marginLeft: '12px' }}>
                    <p style={{ fontSize: '12px', color: '#666', marginBottom: '-2px' }}>Now Playing</p>
                    <h1 style={{ fontSize: '15px', fontWeight: '700' }}>Master Claude Code in 25 Minutes</h1>
                </div>
            </header>

            <AnimatePresence mode="wait">
                {view === 'player' ? (
                    <motion.div
                        key="player"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ paddingTop: '60px' }}
                    >
                        {/* Video Section (Top 50%) */}
                        <div style={{
                            width: '100%',
                            aspectRatio: '16/9',
                            backgroundColor: '#000',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <img
                                src="/hero_claude_v2.png"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
                                alt="Video background"
                            />

                            {/* Player Interface Overlay */}
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: '16px',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
                            }}>
                                {/* Progress Bar */}
                                <div style={{
                                    width: '100%',
                                    height: '4px',
                                    backgroundColor: 'rgba(255,255,255,0.3)',
                                    borderRadius: '2px',
                                    marginBottom: '12px',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{
                                        width: `${progress}%`,
                                        height: '100%',
                                        backgroundColor: '#EE2C3C',
                                        transition: 'width 0.1s linear'
                                    }} />
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#fff' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                        <button onClick={() => setIsPlaying(!isPlaying)}>
                                            {isPlaying ? <Pause size={24} fill="white" /> : <Play size={24} fill="white" />}
                                        </button>
                                        <RotateCcw size={20} />
                                        <span style={{ fontSize: '12px', fontWeight: '500' }}>12:45 / 25:00</span>
                                    </div>
                                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)' }}>HD</div>
                                </div>
                            </div>
                        </div>

                        {/* Content Below Video */}
                        <div style={{ padding: '24px 20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                                <span style={{ padding: '4px 8px', backgroundColor: '#F0F7FF', color: '#0070F3', borderRadius: '4px', fontSize: '10px', fontWeight: '700' }}>AI & TECH</span>
                                <span style={{ fontSize: '12px', color: '#666' }}>24.5k Views</span>
                            </div>
                            <h2 style={{ fontSize: '20px', fontWeight: '800', lineHeight: '1.2', marginBottom: '12px' }}>
                                Master Claude Code: Build high-quality AI agents in 25 minutes
                            </h2>
                            <p style={{ fontSize: '14px', color: '#444', lineHeight: '1.6', marginBottom: '24px' }}>
                                Learn how to leverage Anthropic's latest framework to build autonomous coding agents. We cover environment setup, MCP server integration, and deploying your first Claude-powered agent.
                            </p>

                            <div style={{ height: '1px', backgroundColor: '#f0f0f0', width: '100%', marginBottom: '24px' }} />

                            {/* Badge Reward Section */}
                            <div style={{
                                padding: '20px',
                                border: '1px dashed #EE2C3C',
                                borderRadius: '16px',
                                backgroundColor: isWatched ? '#FFF5F6' : '#FAFAFA',
                                textAlign: 'center'
                            }}>
                                <div style={{
                                    width: '64px',
                                    height: '64px',
                                    backgroundColor: isWatched ? '#fff' : '#E0E0E0',
                                    borderRadius: '50%',
                                    margin: '0 auto 16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: isWatched ? '0 8px 20px rgba(0,0,0,0.1)' : 'none',
                                    overflow: 'hidden',
                                    padding: '12px'
                                }}>
                                    {isWatched ? (
                                        <img src="/new_skill_badge.png" style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="Badge" />
                                    ) : (
                                        <Award size={32} color="white" />
                                    )}
                                </div>
                                <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>
                                    {isWatched ? "Session Completed!" : "Completion Badge"}
                                </h3>
                                <p style={{ fontSize: '13px', color: '#666', marginBottom: '20px' }}>
                                    {isWatched ? "You've mastered this Nano Skill. Claim your digital badge now." : "Watch the full video to unlock your unique 'Claude Code Master' badge."}
                                </p>

                                <button
                                    onClick={handleClaimBadge}
                                    disabled={!isWatched}
                                    style={{
                                        width: '100%',
                                        padding: '14px',
                                        backgroundColor: isWatched ? '#EE2C3C' : '#CCC',
                                        color: '#fff',
                                        borderRadius: '12px',
                                        fontWeight: '700',
                                        fontSize: '15px',
                                        cursor: isWatched ? 'pointer' : 'not-allowed',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    Claim your badge
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="celebration"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            minHeight: '100vh',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '24px',
                            background: '#FFFFFF', // Changed to white
                            textAlign: 'center',
                            color: '#1A1A1A', // Changed to dark text
                            overflow: 'hidden',
                            position: 'relative'
                        }}
                    >
                        {/* Decorative Background Glows - Adjusted for Light Theme */}
                        <div style={{ position: 'absolute', top: '10%', left: '10%', width: '400px', height: '400px', backgroundColor: 'rgba(238, 44, 60, 0.05)', borderRadius: '50%', filter: 'blur(100px)', zIndex: 0 }} />
                        <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '400px', height: '400px', backgroundColor: 'rgba(0, 112, 243, 0.03)', borderRadius: '50%', filter: 'blur(100px)', zIndex: 0 }} />

                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            style={{ position: 'relative', zIndex: 1, maxWidth: '420px', width: '100%' }}
                        >
                            {/* Premium Brand Header */}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '40px' }}>
                                <div style={{ height: '1px', width: '28px', backgroundColor: '#EE2C3C', opacity: 0.8 }} />
                                <span style={{ fontSize: '11px', fontWeight: '900', letterSpacing: '4px', textTransform: 'uppercase', color: '#888' }}>UPGRAD NANO SKILLS</span>
                                <div style={{ height: '1px', width: '28px', backgroundColor: '#EE2C3C', opacity: 0.8 }} />
                            </div>

                            {/* Badge Frame - High End Aesthetic */}
                            <div style={{ position: 'relative', width: '280px', height: '280px', margin: '0 auto 48px' }}>
                                {/* Aura Ring */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                                    style={{
                                        position: 'absolute',
                                        inset: '-15px',
                                        border: '1px solid rgba(238, 44, 60, 0.08)',
                                        borderRadius: '50%',
                                        background: 'conic-gradient(from 0deg, transparent, rgba(238, 44, 60, 0.05), transparent)'
                                    }}
                                />

                                {/* Inner Case (Premium Light Frame) */}
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    background: '#FDFDFD',
                                    borderRadius: '56px',
                                    border: '1.5px solid #F2F2F5',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 30px 60px rgba(0,0,0,0.06)',
                                    padding: '24px'
                                }}>
                                    <motion.img
                                        initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
                                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                                        transition={{ type: "spring", damping: 15, stiffness: 100, delay: 0.5 }}
                                        src="/new_skill_badge.png"
                                        style={{ width: '180px', height: '180px', objectFit: 'contain' }}
                                    />

                                    <div style={{
                                        position: 'absolute',
                                        bottom: '-14px',
                                        backgroundColor: '#1A1A1A',
                                        color: '#fff',
                                        padding: '8px 24px',
                                        borderRadius: '40px',
                                        fontSize: '10px',
                                        fontWeight: '900',
                                        letterSpacing: '1.5px',
                                        boxShadow: '0 10px 20px rgba(0,0,0,0.12)',
                                        zIndex: 10
                                    }}>
                                        NANO CERTIFIED
                                    </div>
                                </div>
                            </div>

                            <h1 style={{ fontSize: '36px', fontWeight: '900', marginBottom: '12px', letterSpacing: '-1.2px', color: '#1A1A1A' }}>Pure Mastery</h1>
                            <p style={{ fontSize: '16px', color: '#666', marginBottom: '44px', lineHeight: '1.6', maxWidth: '320px', margin: '0 auto 44px' }}>
                                You've successfully internalized <span style={{ color: '#1A1A1A', fontWeight: '700' }}>Claude Code</span>. This proficiency is now locked into your <span style={{ color: '#EE2C3C', fontWeight: '800' }}>upGrad</span> profile.
                            </p>

                            {/* Refined Actions */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%', marginTop: '40px' }}>
                                <motion.button
                                    whileHover={{ scale: 1.02, backgroundColor: '#006699' }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleShareLinkedIn}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '12px',
                                        padding: '18px',
                                        backgroundColor: '#0077B5', // Official LinkedIn Blue
                                        color: '#fff',
                                        borderRadius: '20px',
                                        fontWeight: '800',
                                        fontSize: '15px',
                                        cursor: 'pointer',
                                        border: 'none',
                                        boxShadow: '0 8px 24px rgba(0, 119, 181, 0.25)'
                                    }}
                                >
                                    <Linkedin size={20} fill="#fff" />
                                    Showcase on LinkedIn
                                </motion.button>

                                <button
                                    style={{
                                        padding: '18px',
                                        backgroundColor: '#f8f8f8', // Added a light gray background
                                        color: '#1A1A1A',
                                        borderRadius: '20px',
                                        fontWeight: '700',
                                        fontSize: '14px',
                                        border: '1.5px solid #ececec',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    Download Badge
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Scholarship Modal Overlay */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0,0,0,0.85)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1000,
                            padding: '24px'
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            style={{
                                backgroundColor: '#fff',
                                borderRadius: '24px',
                                width: '100%',
                                maxWidth: '400px',
                                overflow: 'hidden',
                                position: 'relative'
                            }}
                        >
                            {/* Modal Header/Image */}
                            <div style={{
                                height: '160px',
                                backgroundColor: '#1A1A1A',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundImage: 'linear-gradient(45deg, #EE2C3C 0%, #1A1A1A 100%)',
                                    opacity: 0.8
                                }} />
                                <div style={{ position: 'relative', textAlign: 'center', color: '#fff' }}>
                                    <div style={{ backgroundColor: '#fff', color: '#EE2C3C', padding: '10px', borderRadius: '50%', width: '48px', height: '48px', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Award size={24} />
                                    </div>
                                    <p style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>Exclusive Offer</p>
                                </div>
                            </div>

                            <div style={{ padding: '32px 24px' }}>
                                <h2 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '12px', color: '#1A1A1A' }}>
                                    Ready for the next step?
                                </h2>
                                <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.6', marginBottom: '24px' }}>
                                    Since you've mastered this Nano Skill, you're eligible for a <span style={{ color: '#EE2C3C', fontWeight: '800' }}>₹5,000 Scholarship</span> for the upGrad AI Bootcamp.
                                </p>

                                <button
                                    style={{
                                        width: '100%',
                                        padding: '16px',
                                        backgroundColor: '#EE2C3C',
                                        color: '#fff',
                                        borderRadius: '12px',
                                        fontWeight: '700',
                                        fontSize: '16px',
                                        marginBottom: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '8px'
                                    }}
                                >
                                    Enroll Now
                                    <ExternalLink size={18} />
                                </button>
                                <button
                                    onClick={() => setShowModal(false)}
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        backgroundColor: 'transparent',
                                        color: '#666',
                                        fontSize: '14px',
                                        fontWeight: '600'
                                    }}
                                >
                                    Maybe Later
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
