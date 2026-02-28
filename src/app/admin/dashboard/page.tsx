"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Plus, X, Trash2, Loader2, LayoutDashboard, LogOut, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

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
            const fileExt = imageFile.name.split('.').pop();
            const fileName = `${Math.random()}.${fileExt}`;
            const filePath = `project-images/${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('portfolio')
                .upload(filePath, imageFile);

            if (uploadError) throw uploadError;

            const { data: { publicUrl } } = supabase.storage
                .from('portfolio')
                .getPublicUrl(filePath);

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
            <div className="min-h-screen bg-white flex items-center justify-center">
                <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50 p-6 md:p-12 text-slate-900 selection:bg-blue-100">
            <div className="container mx-auto max-w-7xl">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                            <LayoutDashboard size={24} />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">Admin Dashboard</h1>
                            <p className="text-slate-400 font-medium text-xs uppercase tracking-widest">
                                R:new Design Studio &copy; Management
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3 w-full md:w-auto">
                        <Button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-slate-900 text-white font-bold rounded-xl px-6 h-12 flex-1 md:flex-none border-none shadow-lg shadow-slate-900/10"
                        >
                            <Plus size={18} className="mr-2" /> New Project
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => supabase.auth.signOut().then(() => router.push("/admin/login"))}
                            className="rounded-xl px-6 h-12 border-slate-200 hover:bg-slate-50 flex-1 md:flex-none"
                        >
                            <LogOut size={18} className="mr-2" /> Logout
                        </Button>
                    </div>
                </header>

                {/* Project Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            layout
                            key={project.id}
                            className="bg-white rounded-[32px] overflow-hidden border border-slate-200 shadow-sm transition-all hover:shadow-xl hover:border-blue-100 group"
                        >
                            <div className="aspect-video relative overflow-hidden bg-slate-100">
                                <img src={project.image_url} alt={project.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <button
                                        onClick={() => deleteProject(project.id, project.image_url)}
                                        className="p-4 bg-white text-red-600 rounded-full hover:scale-110 transition-transform shadow-xl"
                                    >
                                        <Trash2 size={24} />
                                    </button>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold mb-3 tracking-tight">{project.title}</h3>
                                <p className="text-slate-500 text-sm font-medium line-clamp-2 mb-6 leading-relaxed">{project.description}</p>
                                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest pt-4 border-t border-slate-50">
                                    Added on: {new Date(project.created_at).toLocaleDateString("ko-KR")}
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {projects.length === 0 && (
                        <div className="col-span-full py-32 text-center bg-white rounded-[40px] border-2 border-dashed border-slate-200">
                            <div className="text-slate-300 mb-4 flex justify-center">
                                <Upload size={48} />
                            </div>
                            <p className="text-slate-400 font-bold italic">등록된 프로젝트가 없습니다. 첫 작품을 등록해보세요! 🎨</p>
                        </div>
                    )}
                </section>

                {/* Upload Modal */}
                <AnimatePresence>
                    {isModalOpen && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                className="bg-white max-w-lg w-full rounded-[40px] p-10 border border-slate-200 relative shadow-2xl"
                            >
                                <button onClick={() => setIsModalOpen(false)} className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors">
                                    <X size={28} />
                                </button>

                                <h2 className="text-3xl font-bold mb-10 tracking-tight">Project 등록</h2>

                                <form onSubmit={handleUploadAndSave} className="space-y-8">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 ml-1">Project Title</label>
                                        <input
                                            type="text"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            required
                                            className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-blue-500 transition-all outline-none font-medium"
                                            placeholder="프로젝트 제목을 입력하세요"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 ml-1">Description</label>
                                        <textarea
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            required
                                            rows={3}
                                            className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-blue-500 transition-all outline-none font-medium resize-none"
                                            placeholder="프로젝트에 대한 설명을 입력하세요"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 ml-1">Cover Image</label>
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
                                                className="flex flex-col items-center justify-center w-full aspect-video bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-all overflow-hidden"
                                            >
                                                {imageFile ? (
                                                    <div className="text-center p-4">
                                                        <CheckCircle2 size={32} className="text-blue-500 mx-auto mb-2" />
                                                        <p className="text-sm font-bold text-slate-900 truncate max-w-xs">{imageFile.name}</p>
                                                        <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold tracking-widest">Click to change</p>
                                                    </div>
                                                ) : (
                                                    <div className="flex flex-col items-center gap-3">
                                                        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-slate-300 shadow-sm border border-slate-100">
                                                            <Upload size={20} />
                                                        </div>
                                                        <p className="text-xs font-bold text-slate-400 tracking-tight">Upload Masterpiece Image</p>
                                                    </div>
                                                )}
                                            </label>
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={uploading}
                                        className="w-full py-8 text-xl font-bold btn-gradient border-none h-auto rounded-2xl shadow-lg shadow-blue-600/20 disabled:opacity-50"
                                    >
                                        {uploading ? "Saving Masterpiece..." : "프로젝트 등록하기"}
                                    </Button>
                                </form>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
}
