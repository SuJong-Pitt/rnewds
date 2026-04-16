"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Plus, X, Trash2, Loader2, LayoutDashboard, LogOut, CheckCircle2, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState<any[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();

    // Form states
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);

    const [editingProject, setEditingProject] = useState<any | null>(null);

    // Category states
    const [categories, setCategories] = useState<any[]>([]);
    const [categoryId, setCategoryId] = useState<string>("");
    const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
    const [newCategoryName, setNewCategoryName] = useState("");
    const [editingCategoryId, setEditingCategoryId] = useState<number | null>(null);
    const [editingCategoryName, setEditingCategoryName] = useState("");
    const [filterCategoryId, setFilterCategoryId] = useState<string>("all");

    useEffect(() => {
        setLoading(false);
        fetchProjects();
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const res = await fetch("/api/categories");
            if (!res.ok) {
                const text = await res.text();
                throw new Error(text.includes("Request Entity Too Large") ? "파일 크기가 너무 큽니다. (최대 50MB)" : `오류 발생: ${res.status}`);
            }
            const data = await res.json();
            if (Array.isArray(data)) {
                setCategories(data);
            }
        } catch (error: any) {
            console.error("Fetch categories error:", error);
            if (error.message.includes("is not valid JSON")) {
                console.error("The server returned a non-JSON response.");
            }
        }
    };

    const fetchProjects = async () => {
        try {
            const res = await fetch("/api/projects");
            if (!res.ok) {
                const text = await res.text();
                throw new Error(text.includes("Request Entity Too Large") ? "데이터가 너무 큽니다." : `오류 발생: ${res.status}`);
            }
            const data = await res.json();
            if (Array.isArray(data)) {
                setProjects(data);
            }
        } catch (error: any) {
            console.error("Fetch projects error:", error);
        }
    };

    const handleEditStart = (project: any) => {
        setEditingProject(project);
        setTitle(project.title);
        setDescription(project.description);
        setCategoryId(project.category_id?.toString() || "");
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setEditingProject(null);
        setTitle("");
        setDescription("");
        setCategoryId("");
        setImageFile(null);
    };

    const handleUploadAndSave = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // If creating new, image is required. If editing, it's optional.
        if (!editingProject && !imageFile) return alert("이미지를 선택해주세요!");

        setUploading(true);

        try {
            let publicUrl = editingProject?.image_url || "";

            // 1. Upload to R2 only if a new file is selected
            if (imageFile) {
                // If editing and we have a new image, delete the OLD image first to save space
                if (editingProject && editingProject.image_url) {
                    try {
                        const oldFilename = editingProject.image_url.split('/').pop();
                        if (oldFilename) {
                            await fetch(`/api/storage?filename=project-images/${oldFilename}`, {
                                method: "DELETE"
                            });
                        }
                    } catch (e) {
                        console.error("Failed to delete old image:", e);
                    }
                }

                const fileExt = imageFile.name.split('.').pop();
                const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
                
                const formData = new FormData();
                formData.append("file", imageFile);
                formData.append("filename", `project-images/${fileName}`);

                const uploadRes = await fetch("/api/storage", {
                    method: "POST",
                    body: formData
                });

                if (!uploadRes.ok) {
                    const errorText = await uploadRes.text();
                    if (uploadRes.status === 413 || errorText.includes("Request Entity Too Large")) {
                        throw new Error("이미지 파일 크기가 너무 큽니다. 50MB 이하의 이미지를 사용해주세요.");
                    }
                    try {
                        const errorData = JSON.parse(errorText);
                        throw new Error(errorData.error || "Upload failed");
                    } catch {
                        throw new Error(`업로드 실패 (상태 코드: ${uploadRes.status})`);
                    }
                }

                const uploadData = await uploadRes.json();
                publicUrl = uploadData.url;
            }

            // 2. Save via API
            const method = editingProject ? "PUT" : "POST";
            const bodyData = editingProject 
                ? { id: editingProject.id, title, description, image_url: publicUrl, category_id: categoryId ? parseInt(categoryId) : null }
                : { title, description, image_url: publicUrl, category_id: categoryId ? parseInt(categoryId) : null };

            const dbRes = await fetch("/api/projects", {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(bodyData)
            });
            const dbData = await dbRes.json();

            if (!dbRes.ok) throw new Error(dbData.error || "Database operation failed");

            alert(editingProject ? "프로젝트가 성공적으로 수정되었습니다! ✨" : "프로젝트가 성공적으로 등록되었습니다! 😎");
            handleModalClose();
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
            // 1. Delete from R2 via API
            const filename = imageUrl.split('/').pop();
            if (filename) {
                await fetch(`/api/storage?filename=project-images/${filename}`, {
                    method: "DELETE"
                });
            }

            // 2. Delete from D1 via API
            await fetch(`/api/projects?id=${id}`, {
                method: "DELETE"
            });

            fetchProjects();
        } catch (error) {
            alert("삭제 중 오류가 발생했습니다.");
        }
    };

    const handleAddCategory = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newCategoryName.trim()) return;

        try {
            const res = await fetch("/api/categories", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: newCategoryName })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error);

            setNewCategoryName("");
            fetchCategories();
        } catch (error: any) {
            alert(error.message);
        }
    };

    const handleUpdateCategory = async (id: number) => {
        if (!editingCategoryName.trim()) return;

        try {
            const res = await fetch("/api/categories", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id, name: editingCategoryName })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error);

            setEditingCategoryId(null);
            setEditingCategoryName("");
            fetchCategories();
            fetchProjects(); // Projects UI might need to reflect new category name
        } catch (error: any) {
            alert(error.message);
        }
    };

    const handleDeleteCategory = async (id: number) => {
        if (!confirm("카테고리를 삭제하시겠습니까?")) return;
        try {
            const res = await fetch(`/api/categories?id=${id}`, { method: "DELETE" });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error);
            fetchCategories();
        } catch (error: any) {
            alert(error.message);
        }
    };

    const filteredProjects = filterCategoryId === "all" 
        ? projects 
        : projects.filter(p => p.category_id?.toString() === filterCategoryId);

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
                                R:new Design Studio &copy; Management (Cloudflare D1/R2)
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-3 w-full md:w-auto">
                        <Button
                            variant="outline"
                            onClick={() => setIsCategoryModalOpen(true)}
                            className="rounded-xl px-6 h-12 border-slate-200 hover:bg-slate-50 flex-1 md:flex-none text-blue-600 font-bold"
                        >
                            카테고리 관리
                        </Button>
                        <Button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-slate-900 text-white font-bold rounded-xl px-6 h-12 flex-1 md:flex-none border-none shadow-lg shadow-slate-900/10"
                        >
                            <Plus size={18} className="mr-2" /> New Project
                        </Button>
                        <Button
                            variant="outline"
                            onClick={async () => {
                                await fetch("/api/auth/logout", { method: "POST" });
                                router.push("/admin/login");
                            }}
                            className="rounded-xl px-6 h-12 border-slate-200 hover:bg-slate-50 flex-1 md:flex-none"
                        >
                            <LogOut size={18} className="mr-2" /> Logout
                        </Button>
                    </div>
                </header>

                <div className="mb-8 flex justify-end">
                    <select
                        value={filterCategoryId}
                        onChange={(e) => setFilterCategoryId(e.target.value)}
                        className="px-6 py-3 bg-white border border-slate-200 rounded-xl focus:border-blue-500 transition-all outline-none font-bold text-sm text-slate-700 shadow-sm cursor-pointer w-full md:w-[240px]"
                    >
                        <option value="all">전체보기</option>
                        {categories.map((c) => (
                            <option key={c.id} value={c.id}>{c.name}</option>
                        ))}
                    </select>
                </div>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            key={project.id}
                            className="bg-white rounded-[32px] overflow-hidden border border-slate-200 shadow-sm transition-all hover:shadow-xl hover:border-blue-100 group"
                        >
                            <div className="aspect-video relative overflow-hidden bg-slate-100">
                                <img src={project.image_url} alt={project.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <button
                                        onClick={() => handleEditStart(project)}
                                        className="p-4 bg-white text-blue-600 rounded-full hover:scale-110 transition-transform shadow-xl"
                                    >
                                        <Pencil size={24} /> 
                                    </button>
                                    <button
                                        onClick={() => deleteProject(project.id, project.image_url)}
                                        className="p-4 bg-white text-red-600 rounded-full hover:scale-110 transition-transform shadow-xl"
                                    >
                                        <Trash2 size={24} />
                                    </button>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="mb-2">
                                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full uppercase tracking-widest">
                                        {project.category_name || "미분류"}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 tracking-tight">{project.title}</h3>
                                <p className="text-slate-500 text-sm font-medium line-clamp-2 mb-6 leading-relaxed">{project.description}</p>
                                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest pt-4 border-t border-slate-50 flex justify-between">
                                    <span>Added on: {new Date(project.created_at).toLocaleDateString("ko-KR")}</span>
                                    {project.id && <span className="text-blue-500/40">ID: {project.id}</span>}
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {filteredProjects.length === 0 && (
                        <div className="col-span-full py-32 text-center bg-white rounded-[40px] border-2 border-dashed border-slate-200">
                            <div className="text-slate-300 mb-4 flex justify-center">
                                <Upload size={48} />
                            </div>
                            <p className="text-slate-400 font-bold italic">등록된 프로젝트가 없습니다. 첫 작품을 등록해보세요! 🎨</p>
                        </div>
                    )}
                </section>

                <AnimatePresence>
                    {isModalOpen && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                className="bg-white max-w-lg w-full rounded-[40px] p-10 border border-slate-200 relative shadow-2xl"
                            >
                                <button onClick={handleModalClose} className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors">
                                    <X size={28} />
                                </button>

                                <h2 className="text-3xl font-bold mb-10 tracking-tight">
                                    {editingProject ? "Project 수정" : "Project 등록"}
                                </h2>

                                <form onSubmit={handleUploadAndSave} className="space-y-8">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 ml-1">Category</label>
                                        <select
                                            value={categoryId}
                                            onChange={(e) => setCategoryId(e.target.value)}
                                            required
                                            className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-blue-500 transition-all outline-none font-medium appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled>카테고리를 선택해주세요 (필수)</option>
                                            {categories.map(c => (
                                                <option key={c.id} value={c.id}>{c.name}</option>
                                            ))}
                                        </select>
                                    </div>
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
                                                {imageFile || editingProject ? (
                                                    <div className="text-center p-4">
                                                        {imageFile ? (
                                                            <>
                                                                <CheckCircle2 size={32} className="text-blue-500 mx-auto mb-2" />
                                                                <p className="text-sm font-bold text-slate-900 truncate max-w-xs">{imageFile.name}</p>
                                                            </>
                                                        ) : (
                                                            <div className="flex flex-col items-center">
                                                                <img src={editingProject.image_url} alt="Current" className="w-24 h-24 object-cover rounded-xl mb-2 opacity-60" />
                                                                <p className="text-xs font-bold text-slate-400">Current Image Held</p>
                                                            </div>
                                                        )}
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
                                        {uploading ? (editingProject ? "Updating..." : "Saving...") : (editingProject ? "수정 완료하기" : "프로젝트 등록하기")}
                                    </Button>
                                </form>
                            </motion.div>
                        </div>
                    )}

                    {isCategoryModalOpen && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                className="bg-white max-w-md w-full rounded-[40px] p-10 border border-slate-200 relative shadow-2xl"
                            >
                                <button onClick={() => setIsCategoryModalOpen(false)} className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors">
                                    <X size={28} />
                                </button>

                                <h2 className="text-3xl font-bold mb-10 tracking-tight">
                                    카테고리 관리
                                </h2>

                                <form onSubmit={handleAddCategory} className="flex gap-2 mb-8">
                                    <input
                                        type="text"
                                        value={newCategoryName}
                                        onChange={(e) => setNewCategoryName(e.target.value)}
                                        placeholder="새 카테고리 이름 입력"
                                        className="flex-1 px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:border-blue-500 transition-all outline-none font-medium"
                                        required
                                    />
                                    <Button type="submit" className="bg-blue-600 text-white rounded-xl px-4 py-3 h-auto shadow-md">
                                        추가
                                    </Button>
                                </form>

                                <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                                    {categories.length === 0 ? (
                                        <p className="text-slate-400 text-sm text-center py-4 font-medium">등록된 카테고리가 없습니다.</p>
                                    ) : (
                                        categories.map(c => (
                                            <div key={c.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                                                {editingCategoryId === c.id ? (
                                                    <div className="flex-1 flex gap-2 mr-2">
                                                        <input
                                                            type="text"
                                                            value={editingCategoryName}
                                                            onChange={(e) => setEditingCategoryName(e.target.value)}
                                                            className="flex-1 px-3 py-1 text-sm bg-white border border-slate-200 rounded-lg outline-none focus:border-blue-500"
                                                            autoFocus
                                                        />
                                                        <button onClick={() => handleUpdateCategory(c.id)} className="text-blue-600 font-bold text-sm hover:text-blue-700">저장</button>
                                                        <button onClick={() => setEditingCategoryId(null)} className="text-slate-400 font-bold text-sm hover:text-slate-600">취소</button>
                                                    </div>
                                                ) : (
                                                    <span className="font-bold text-slate-700">{c.name}</span>
                                                )}
                                                
                                                {editingCategoryId !== c.id && (
                                                    <div className="flex items-center gap-1">
                                                        <button 
                                                            onClick={() => {
                                                                setEditingCategoryId(c.id);
                                                                setEditingCategoryName(c.name);
                                                            }} 
                                                            className="text-slate-400 hover:text-blue-600 p-2 transition-colors"
                                                        >
                                                            <Pencil size={16} />
                                                        </button>
                                                        <button onClick={() => handleDeleteCategory(c.id)} className="text-red-400 hover:text-red-600 p-2 transition-colors">
                                                            <Trash2 size={18} />
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        ))
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
}
