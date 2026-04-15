"use client";

import Image from "next/image";
import { Mail, Instagram, MessageCircle, ArrowRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="pt-20 md:pt-32 pb-12 bg-slate-950 text-white rounded-t-[40px] md:rounded-t-[80px] relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none"></div>
            <div className="container mx-auto px-8 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row justify-between gap-20 mb-20 items-start lg:items-center">
                    <div className="max-w-xl space-y-10">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <Image src="/images/icons/logo.svg" alt="R:new Logo" width={48} height={48} className="rounded-2xl shadow-lg" />
                                <span className="font-heading font-black tracking-tight text-2xl md:text-3xl italic px-1">R:new Design Studio</span>
                            </div>
                            <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-md">
                                이해되고 선택되는 디자인 <br />
                                데이터를 근거로 설계하는 하이엔드 상세페이지 스튜디오입니다.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            {[
                                { icon: <Instagram size={20} />, href: "#", name: "Instagram" },
                                { icon: <MessageCircle size={20} />, href: "https://pf.kakao.com/_xaxgJdX/chat", name: "KakaoTalk" },
                                { icon: <Mail size={20} />, href: "mailto:admin@rnewds.com", name: "Email" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all duration-500 group"
                                    aria-label={social.name}
                                >
                                    <div className="group-hover:scale-110 transition-transform">
                                        {social.icon}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-20">
                        <div className="space-y-8">
                            <h4 className="text-[10px] font-black tracking-[0.4em] uppercase text-blue-500">Navigation</h4>
                            <ul className="space-y-5">
                                {["About", "Portfolio", "Process", "Pricing"].map((item) => (
                                    <li key={item}>
                                        <a href={item === "Portfolio" ? "/portfolio" : `/#${item.toLowerCase()}`} className="text-sm md:text-base font-medium text-slate-400 hover:text-white transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-8">
                            <h4 className="text-[10px] font-black tracking-[0.4em] uppercase text-blue-500">Contact</h4>
                            <ul className="space-y-5">
                                <li>
                                    <a href="mailto:admin@rnewds.com" className="text-sm md:text-base font-medium text-slate-400 hover:text-white transition-colors">
                                        admin@rnewds.com
                                    </a>
                                </li>
                                <li className="text-sm md:text-base font-medium text-slate-400">
                                    Kakao: rnewstudio
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-slate-500 text-[11px] md:text-xs font-medium tracking-tight">
                        © 2026 R:new Design Studio. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-slate-500 text-[11px] md:text-xs font-medium hover:text-blue-500 transition-colors uppercase tracking-widest">Privacy Policy</a>
                        <a href="#" className="text-slate-500 text-[11px] md:text-xs font-medium hover:text-blue-500 transition-colors uppercase tracking-widest">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
