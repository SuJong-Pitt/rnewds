"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Star, Sparkles, Zap, ShieldCheck, Heart } from "lucide-react";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import { IdentitySection } from "@/components/identity/IdentitySection";
import { TechStack, StrategySection, ContactSection } from "@/components/sections/Sections";

export default function Home() {
    return (
        <main className="relative w-full bg-white selection:bg-blue-100 selection:text-blue-900">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-4 md:px-6">
                <div className="container mx-auto max-w-6xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-xs mb-10 shadow-sm"
                    >
                        <Sparkles size={14} className="animate-pulse" />
                        프리미엄 상세페이지 디자인의 새로운 설계 방식
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-5xl sm:text-7xl md:text-[5.5rem] font-bold tracking-tight text-slate-900 mb-8 leading-[1.0] lg:leading-[0.95]"
                    >
                        당신의 제품을 위한 <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">압도적인 시각적 서사</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
                    >
                        단순한 장식을 넘어 구매 심리를 자극하는 정밀한 데이터 설계.<br className="hidden md:block" />
                        전환율을 극대화하는 R:new 만의 독보적인 비주얼 전략을 만나보세요.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button size="lg" className="rounded-2xl px-12 py-8 text-xl font-bold btn-gradient border-none h-auto group w-full sm:w-auto shadow-xl">
                            작업물 보기
                            <ArrowRight size={24} className="ml-3 transition-transform group-hover:translate-x-2" />
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-2xl px-12 py-8 text-xl font-bold border-slate-200 hover:bg-slate-50 h-auto w-full sm:w-auto">
                            상담 문의하기
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mt-24 md:mt-32 relative group"
                    >
                        {/* Mockup Preview */}
                        <div className="relative mx-auto max-w-5xl p-3 rounded-[32px] bg-gradient-to-b from-slate-200 to-transparent border border-slate-200 shadow-[0_50px_100px_rgba(0,0,0,0.08)] overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
                            <div className="aspect-[16/10] rounded-[24px] bg-white flex items-center justify-center overflow-hidden border border-slate-100 relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50/30"></div>
                                <div className="relative flex flex-col items-center gap-6">
                                    <div className="w-24 h-24 rounded-[32px] bg-slate-900 flex items-center justify-center text-white shadow-2xl transition-transform group-hover:rotate-12 duration-500">
                                        <span className="text-4xl font-black">R</span>
                                    </div>
                                    <div className="space-y-2 text-center">
                                        <div className="h-1.5 w-32 bg-slate-100 rounded-full mx-auto"></div>
                                        <div className="h-1.5 w-24 bg-slate-50 rounded-full mx-auto"></div>
                                    </div>
                                    <span className="text-xs uppercase tracking-[0.4em] font-black text-slate-300">Masterpiece Studio</span>
                                </div>
                            </div>
                        </div>

                        {/* Decoration items */}
                        <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-100/50 rounded-full blur-[100px] -z-10 animate-pulse" />
                        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-indigo-100/50 rounded-full blur-[100px] -z-10 animate-pulse delay-700" />
                    </motion.div>
                </div>
            </section>

            {/* Trusted Labels */}
            <section className="py-12 border-y border-slate-100 bg-slate-50/50">
                <div className="container mx-auto px-6">
                    <p className="text-center text-[10px] uppercase tracking-[0.3em] font-black text-slate-400 mb-8">Trusted by Premium Brands</p>
                    <div className="flex flex-wrap justify-center gap-12 md:gap-24 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        {['APPLE', 'SAMSUNG', 'LG', 'SONY', 'NIKE'].map((brand) => (
                            <span key={brand} className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter">{brand}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Sections */}
            <IdentitySection />
            <ProjectShowcase />
            <TechStack />

            {/* Strategy & Approach with highlight */}
            <div className="relative">
                <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-white to-slate-50 -z-10"></div>
                <StrategySection />
            </div>

            {/* FAQ Section */}
            <section className="py-24 md:py-40 bg-white">
                <div className="container mx-auto max-w-4xl px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-blue-600 text-xs font-bold tracking-[0.4em] uppercase mb-4">Common Questions</h2>
                        <h3 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">자주 묻는 질문.</h3>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: "제작 기간은 어느 정도 소요되나요?", a: "기본적인 한 페이지 기준 7-10일 정도 소요되며, 프로젝트의 난이도와 분량에 따라 조정될 수 있습니다." },
                            { q: "수정 횟수 제한이 있나요?", a: "기본적으로 3회의 무료 수정을 제공하며, 오타나 단순 색상 변경 등은 상시 지원해 드립니다." },
                            { q: "기획안이 없어도 제작이 가능한가요?", a: "네, 전문 기획자가 제품의 셀링 포인트를 분석하여 직접 기획부터 디자인까지 원스톱으로 진행해 드립니다." },
                            { q: "3D 모델링이나 촬영 서비스도 포함되나요?", a: "별도의 협의가 필요하지만, 3D 렌더링을 통한 고퀄리티 소스 제작은 저희의 주력 전문 분야 중 하나입니다." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:bg-white transition-all"
                            >
                                <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center justify-between">
                                    {item.q}
                                    <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">?</span>
                                </h4>
                                <p className="text-slate-500 font-medium leading-relaxed">{item.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <ContactSection />

            {/* Final Footer */}
            <footer className="py-20 bg-slate-950 text-white rounded-t-[60px]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 text-center md:text-left">
                        <div className="space-y-6">
                            <div className="flex items-center justify-center md:justify-start gap-2">
                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-[10px] font-black">R</div>
                                <span className="font-bold tracking-tight text-xl">R:new Design Studio</span>
                            </div>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                데이터로 설계하고 비주얼로 압도하는 <br />
                                프리미엄 상세페이지 전문 스튜디오입니다.
                            </p>
                        </div>
                        <div>
                            <h5 className="font-bold mb-6 text-slate-400 uppercase tracking-widest text-xs">Explore</h5>
                            <ul className="space-y-4 text-sm font-medium text-slate-500">
                                <li><a href="/about" className="hover:text-blue-500 transition-colors">About Us</a></li>
                                <li><a href="#projects" className="hover:text-blue-500 transition-colors">Portfolio</a></li>
                                <li><a href="#strategy" className="hover:text-blue-500 transition-colors">Our Strategy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-bold mb-6 text-slate-400 uppercase tracking-widest text-xs">Work</h5>
                            <ul className="space-y-4 text-sm font-medium text-slate-500">
                                <li><a href="#" className="hover:text-blue-500 transition-colors">Process</a></li>
                                <li><a href="#" className="hover:text-blue-500 transition-colors">Design System</a></li>
                                <li><a href="#" className="hover:text-blue-500 transition-colors">3D Visualization</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-bold mb-6 text-slate-400 uppercase tracking-widest text-xs">Support</h5>
                            <ul className="space-y-4 text-sm font-medium text-slate-500">
                                <li><a href="/admin/login" className="hover:text-blue-500 transition-colors">Admin Login</a></li>
                                <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-600 text-xs font-bold uppercase tracking-widest">
                        <p>&copy; 2024 R:new Design Studio. All rights reserved.</p>
                        <div className="flex gap-8">
                            <a href="#" className="hover:text-blue-500">Twitter</a>
                            <a href="#" className="hover:text-blue-500">Instagram</a>
                            <a href="#" className="hover:text-blue-500">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
