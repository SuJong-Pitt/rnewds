"use client";

import { useEffect, useState, useRef } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Plus, X, Trash2, Edit2, Loader2 } from "lucide-react";

export default function AdminDashboard() {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState<any[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();

    // Form states
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        const checkUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                router.push("/admin/login");
            } else {
                setUser(session.user);
                setLoading(false);
                fetchProjects();
            }
        };
        checkUser();
    }, [router]);

    const fetchProjects = async () => {
        const { data, error } = await supabase
            .from("projects")
            .select("*")
            .order("created_at", { ascending: false });

        if (!error && data) {
            setProjects(data);
        }
    };

    const handleUploadAndSave = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!imageFile) return alert("이미지를 선택해주세요!");

        setUploading(true);

        try {
            // 1. Upload Image to Storage
            const fileExt = imageFile.name.split('.').pop();
            const fileName = `${Math.random()}.${fileExt}`;
            const filePath = `project-images/${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('portfolio') // 스크린샷에 나온 'portfolio' 버킷을 사용합니다.
                .upload(filePath, imageFile);

            if (uploadError) throw uploadError;

            // 2. Get Public URL
            const { data: { publicUrl } } = supabase.storage
                .from('portfolio')
                .getPublicUrl(filePath);

            // 3. Save to Database
            const { error: dbError } = await supabase
                .from("projects")
                .insert([
                    { title, description, image_url: publicUrl }
                ]);

            if (dbError) throw dbError;

            alert("프로젝트가 성공적으로 등록되었습니다! 😎");
            setIsModalOpen(false);
            setTitle("");
            setDescription("");
            setImageFile(null);
            fetchProjects();
        } catch (error: any) {
            alert(error.message);
        } finally {
            setUploading(false);
        }
    };

    const deleteProject = async (id: string, imageUrl: string) => {
        if (!confirm("정말 삭제하시겠습니까? 🐟")) return;

        try {
            // image_url에서 파일 경로 추출
            // URL 구조: .../storage/v1/object/public/portfolio/project-images/filename.jpg
            const pathParts = imageUrl.split('project-images/');
            if (pathParts.length > 1) {
                const fileName = pathParts[1];
                await supabase.storage.from('portfolio').remove([`project-images/${fileName}`]);
            }

            await supabase.from("projects").delete().eq("id", id);
            fetchProjects();
        } catch (error) {
            alert("삭제 중 오류가 발생했습니다.");
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <Loader2 className="w-10 h-10 text-primary animate-spin" />
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-background p-6 md:p-12">
            <div className="container mx-auto">
                <header className="flex justify-between items-end mb-16">
                    <div>
                        <h1 className="text-4xl font-black tracking-tighter mb-2">
                            Studio <span className="text-primary italic">Dashboard</span>
                        </h1>
                        <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">
                            Managing Masterpieces for R:new Design Studio
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-all text-xs uppercase"
                        >
                            <Plus size={16} /> New Project
                        </button>
                        <button
                            onClick={() => supabase.auth.signOut().then(() => router.push("/admin/login"))}
                            className="px-6 py-3 glass-morphism rounded-full border-white/10 hover:bg-white/5 transition-all text-xs font-bold uppercase"
                        >
                            Logout
                        </button>
                    </div>
                </header>

                {/* Project Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="glass-morphism rounded-[30px] overflow-hidden border-white/5 group">
                            <div className="aspect-video relative overflow-hidden">
                                <img src={project.image_url} alt={project.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button onClick={() => deleteProject(project.id, project.image_url)} className="p-2 bg-red-500/80 rounded-full hover:bg-red-500 transition-colors">
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm line-clamp-2 mb-4">{project.description}</p>
                                <div className="text-[10px] text-gray-500 font-mono uppercase tracking-tighter">
                                    Created at: {new Date(project.created_at).toLocaleDateString()}
                                </div>
                            </div>
                        </div>
                    ))}

                    {projects.length === 0 && (
                        <div className="col-span-full py-20 text-center glass-morphism rounded-[40px] border-dashed border-2 border-white/10">
                            <p className="text-gray-500 italic">등록된 프로젝트가 없습니다. 첫 작품을 등록해보세요! 🎨</p>
                        </div>
                    )}
                </section>

                {/* Upload Modal */}
                <AnimatePresence>
                    {isModalOpen && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="glass-morphism max-w-lg w-full rounded-[40px] p-10 border-white/10 relative"
                            >
                                <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-white">
                                    <X />
                                </button>

                                <h2 className="text-2xl font-black mb-8">Add New Project</h2>

                                <form onSubmit={handleUploadAndSave} className="space-y-6">
                                    <div>
                                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">Title</label>
                                        <input
                                            type="text"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            required
                                            className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-primary outline-none transition-all"
                                            placeholder="프로젝트 제목을 입력하세요"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">Description</label>
                                        <textarea
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            required
                                            rows={3}
                                            className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-primary outline-none transition-all resize-none"
                                            placeholder="프로젝트에 대한 설명을 입력하세요"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">Project Image</label>
                                        <div className="relative group">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                                                className="hidden"
                                                id="image-upload"
                                            />
                                            <label
                                                htmlFor="image-upload"
                                                className="flex flex-col items-center justify-center w-full aspect-video bg-white/5 border-2 border-dashed border-white/10 rounded-2xl cursor-pointer hover:bg-white/10 hover:border-primary transition-all overflow-hidden"
                                            >
                                                {imageFile ? (
                                                    <div className="text-center">
                                                        <p className="text-sm font-bold text-primary">{imageFile.name}</p>
                                                        <p className="text-[10px] text-gray-500 mt-1">Click to change</p>
                                                    </div>
                                                ) : (
                                                    <div className="flex flex-col items-center gap-2">
                                                        <Upload className="text-gray-500 group-hover:text-primary transition-colors" />
                                                        <p className="text-xs font-bold text-gray-500">Upload Project Image</p>
                                                    </div>
                                                )}
                                            </label>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={uploading}
                                        className="w-full py-5 bg-primary text-black font-black rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                                    >
                                        {uploading ? "Saving Project..." : "Create Project"}
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
}
