import api from "@/lib/axios";

export const backup = async () => {
  try {
    const res = await api.get("/backup/download", {
      responseType: "blob",
      withCredentials: true,
    });

    const blob = new Blob([res.data]);
    const url = globalThis.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `backup-${new Date().toISOString().split("T")[0]}.sql`;

    document.body.appendChild(a);
    a.click();

    a.remove();
    globalThis.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Backup failed:", error);
  }
};