"use client";

import { motion } from "framer-motion";

const skills = [
    { name: "Photoshop", level: "Master", desc: "상상하는 모든 비주얼을 현실로." },
    { name: "Illustrator", level: "Expert", desc: "데이터 기반의 정확한 벡터 설계." },
    { name: "3D Rendering", level: "Special", desc: "실물보다 더 실물 같은 재질감." },
    { name: "Premiere Pro", level: "Advanced", desc: "생동감 넘치는 무빙 상세페이지." },
    { name: "Tailwind CSS", level: "Expert", desc: "최신 트렌드의 인터랙티브 웹." },
    { name: "UI/UX Design", level: "Strategic", desc: "구매 동선을 고려한 논리적 배치." },
];

export function TechStack() {
    return (
        <section id="skills" className="py-32 px-6">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6">
                    <div>
                        <span className="text-secondary font-bold tracking-[0.3em] uppercase block mb-4">Professional Tools</span>
                        <h2 className="text-4xl md:text-7xl font-bold text-white">Software Stack.</h2>
                    </div>
                    <p className="text-gray-500 max-w-sm text-left md:text-right text-sm md:text-base">
                        프로젝트의 완성도를 결정짓는 <br />
                        감각적이고 전문적인 디자인 도구들
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ borderColor: "rgba(167, 139, 250, 0.5)" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-[30px] glass-morphism border-white/5 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all"></div>
                            <div className="text-sm font-mono text-primary mb-4">[ {skill.level} ]</div>
                            <h3 className="text-2xl font-bold mb-3 text-white">{skill.name}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {skill.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function ContactSection() {
    return (
        <section id="contact" className="py-32 px-6">
            <div className="container mx-auto max-w-4xl">
                <div className="glass-morphism rounded-[50px] p-12 md:p-20 text-center relative overflow-hidden border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 text-white leading-tight">당신의 제품에 <br /> 새로운 감각을.</h2>
                        <p className="text-gray-400 text-base md:text-lg mb-10 md:mb-12">
                            지금 바로 상담 가능합니다. 대표님의 비즈니스에 <br className="hidden md:block" />
                            압도적인 시각적 임팩트를 더해보세요.
                        </p>

                        <div className="flex flex-col md:flex-row gap-6 justify-center">
                            <a href="mailto:contact@rnew.design" className="px-12 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-all">
                                이메일 문의하기
                            </a>
                            <a href="#" className="px-12 py-5 glass-morphism border-white/20 font-bold rounded-full hover:bg-white/10 transition-all text-white">
                                오픈카톡 상담
                            </a>
                        </div>

                        <div className="mt-12 md:mt-20 flex flex-wrap justify-center gap-6 md:gap-10 text-gray-500 text-[10px] md:text-sm font-bold tracking-widest uppercase">
                            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                            <a href="#" className="hover:text-primary transition-colors">Blog</a>
                            <a href="#" className="hover:text-primary transition-colors">Youtube</a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
