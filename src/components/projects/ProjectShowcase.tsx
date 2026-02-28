"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { Loader2, Sparkles, ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

export function ProjectShowcase() {
    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchProjects = async () => {
            const { data, error } = await supabase
                .from("projects")
                .select("*")
                .order("created_at", { ascending: false });

            if (!error && data) {
                setProjects(data);
            }
            setLoading(false);
        };

        fetchProjects();
    }, []);

    return (
        <section id="projects" className="py-24 md:py-40 px-6 bg-white overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-bold text-[10px] md:text-xs uppercase tracking-widest mb-4"
                        >
                            <Sparkles size={14} />
                            Case Studies
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]"
                        >
                            최상의 결과물로 <br /> 가치를 증명합니다.
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 max-w-sm text-lg font-medium leading-relaxed"
                    >
                        단순한 포트폴리오를 넘어 비즈니스 성장을 견인한 <br className="hidden md:block" />
                        R:new Design Studio의 마스터피스입니다.
                    </motion.p>
                </div>

                {loading ? (
                    <div className="flex justify-center py-40">
                        <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <AnimatePresence>
                            {projects.length > 0 ? (
                                projects.map((project, index) => (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        onClick={() => router.push(`/projects/${project.id}`)}
                                        className="group cursor-pointer"
                                    >
                                        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-slate-100 border border-slate-200 transition-all duration-700 group-hover:border-blue-200 group-hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)]">
                                            <img
                                                src={project.image_url}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                                            <div className="absolute bottom-8 left-8 right-8">
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="text-[10px] font-black text-blue-400 tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 text-white">
                                                        Premium Project
                                                    </span>
                                                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:rotate-45">
                                                        <ArrowUpRight className="text-white" size={20} />
                                                    </div>
                                                </div>
                                                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                                                    {project.title}
                                                </h3>
                                                <p className="text-sm text-slate-300 line-clamp-2 leading-relaxed font-medium opacity-0 group-hover:opacity-100 transition-all delay-100">
                                                    {project.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="col-span-full py-32 rounded-[40px] border border-slate-100 bg-slate-50/50 flex flex-col items-center justify-center text-center relative overflow-hidden"
                                >
                                    <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-8 mx-auto">
                                        <Sparkles className="text-blue-500 w-10 h-10" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4 text-slate-900 tracking-tight">Masterpieces in Progress</h3>
                                    <p className="text-slate-500 max-w-md mx-auto leading-relaxed font-medium">
                                        현재 새로운 명작들을 준비하고 있습니다. <br />
                                        압도적인 시각적 임팩트로 곧 찾아뵙겠습니다.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}
            </div>
        </section>
    );
}
