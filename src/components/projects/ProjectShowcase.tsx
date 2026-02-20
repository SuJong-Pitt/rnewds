"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { Loader2, Sparkles } from "lucide-react";
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
        <section id="projects" className="py-20 md:py-32 px-6 bg-gradient-to-b from-transparent to-[#05001a]">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
                    <div className="text-left">
                        <span className="text-primary font-bold tracking-[0.3em] uppercase block mb-4 italic">Portfolio</span>
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white">최근 프로젝트.</h2>
                    </div>
                    <div className="text-gray-500 max-w-sm text-left md:text-right font-medium text-sm md:text-base md:translate-y-[-10px]">
                        압도적인 퀄리티로 완성된 <br />
                        R:new Design Studio의 결과물입니다.
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center py-40">
                        <Loader2 className="w-12 h-12 text-primary animate-spin" />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {projects.length > 0 ? (
                                projects.map((project, index) => (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        whileHover={{ y: -10 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        onClick={() => router.push(`/projects/${project.id}`)}
                                        className="relative group cursor-pointer"
                                    >
                                        <div className="aspect-[4/5] overflow-hidden rounded-[40px] glass-morphism border-white/5 relative shadow-2xl">
                                            <img
                                                src={project.image_url}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                            />
                                            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>

                                            <div className="absolute bottom-10 left-10 right-10">
                                                <span className="text-[10px] font-black text-primary tracking-[0.4em] uppercase mb-4 block">
                                                    Premium Project
                                                </span>
                                                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-primary transition-colors">
                                                    {project.title}
                                                </h3>
                                                <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed font-medium">
                                                    {project.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="col-span-full py-32 glass-morphism rounded-[50px] border-white/5 flex flex-col items-center justify-center text-center relative overflow-hidden group"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-30"></div>
                                    <div className="relative z-10">
                                        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-8 mx-auto animate-pulse">
                                            <Sparkles className="text-primary w-10 h-10" />
                                        </div>
                                        <h3 className="text-3xl font-black mb-4 text-white">Masterpiece in Progress</h3>
                                        <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
                                            현재 새로운 명작을 준비하고 있습니다. <br />
                                            압도적인 시각적 임팩트로 곧 찾아뵙겠습니다.
                                        </p>
                                    </div>
                                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-[100px] group-hover:bg-primary/20 transition-all duration-1000"></div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}
            </div>
        </section>
    );
}
