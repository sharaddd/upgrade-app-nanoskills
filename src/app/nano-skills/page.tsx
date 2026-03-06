"use client";

import React from 'react';
import { ChevronLeft, Search, PlayCircle, Clock, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NanoSkillsPage() {
    const nanoVideos = [
        { title: "ChatGPT for Productivity", duration: "12m", rating: "4.9", category: "AI & Data" },
        { title: "Effective Communication", duration: "18m", rating: "4.8", category: "Soft Skills" },
        { title: "Negotiation Mastery", duration: "22m", rating: "4.7", category: "Business" },
        { title: "Python in 15 Minutes", duration: "15m", rating: "4.9", category: "Tech" },
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
                <div style={{ width: '100%', height: '240px', overflow: 'hidden' }}>
                    <img
                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                        alt="Learning"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>

                <div style={{ padding: '24px 20px' }}>
                    <h2 style={{ fontSize: '28px', lineHeight: '1.2', fontWeight: '800', marginBottom: '16px' }}>
                        Bite-sized <span style={{ color: '#EE2C3C' }}>Nano Videos</span> for rapid learning
                    </h2>

                    <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6', marginBottom: '12px' }}>
                        Master high-impact skills in under 25 minutes. Our hand-picked Nano Videos are designed for busy professionals to stay ahead of the curve, one bite-size lesson at a time.
                        <span style={{ color: '#1A1A1A', fontWeight: '600', marginLeft: '4px', borderBottom: '1px solid #1A1A1A' }}>Read More</span>
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
                <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '4px' }}>
                    Discover more <span style={{ color: '#EE2C3C' }}>short-size videos</span> or courses
                </h3>
                <p style={{ fontSize: '13px', color: '#666', marginBottom: '20px' }}>Popular Programs (13)</p>

                {/* Horizontal Scroll of Nano Videos */}
                <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '10px', scrollbarWidth: 'none' }}>
                    {nanoVideos.map((video, idx) => (
                        <div key={idx} style={{
                            minWidth: '220px',
                            borderRadius: '12px',
                            border: '1px solid #E0E0E0',
                            overflow: 'hidden'
                        }}>
                            <div style={{ height: '120px', backgroundColor: '#F0F0F0', position: 'relative' }}>
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
                                    gap: '4px'
                                }}>
                                    <Clock size={10} /> {video.duration}
                                </div>
                                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <PlayCircle size={40} color="#EE2C3C" style={{ opacity: 0.8 }} />
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

            {/* Floating WhatsApp button (matching the screenshot bottom right) */}
            <div style={{
                position: 'fixed',
                bottom: '24px',
                right: '24px',
                width: '56px',
                height: '56px',
                backgroundColor: '#fff',
                borderRadius: '50%',
                boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 200,
                border: '1px solid #f0f0f0'
            }}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    style={{ width: '32px', height: '32px' }}
                />
            </div>
        </main>
    );
}
