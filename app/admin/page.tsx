"use client";

import { useState, useEffect } from "react";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [menuJson, setMenuJson] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "saving" | "success" | "error">("loading");

  useEffect(() => {
    if (isAuthenticated) {
      fetch("/api/menu")
        .then(res => res.json())
        .then(data => {
          setMenuJson(JSON.stringify(data, null, 2));
          setStatus("idle");
        })
        .catch(err => {
          console.error(err);
          setStatus("error");
        });
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password) {
      setIsAuthenticated(true);
    }
  };

  const handleSave = async () => {
    setStatus("saving");
    try {
      const parsedMenu = JSON.parse(menuJson);
      
      const res = await fetch("/api/admin/menu", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, menu: parsedMenu }),
      });

      if (res.ok) {
        setStatus("success");
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        alert("Errore nel salvataggio. Password errata?");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      alert("Il formato JSON non è valido. Controlla le parentesi e le virgolette.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-panna-antico p-6">
        <form onSubmit={handleLogin} className="bg-white p-8 border-2 border-terra-siena/20 shadow-warm max-w-sm w-full flex flex-col gap-4">
          <h1 className="text-2xl font-bold uppercase tracking-widest text-lavagna mb-4 text-center">Area Riservata</h1>
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="p-3 border border-blu-notte/20 outline-none focus:border-rosso-melograno"
          />
          <button type="submit" className="btn-primary w-full">Accedi</button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-panna-antico p-6 pt-24 font-body">
      <div className="max-w-4xl mx-auto bg-white p-8 border-2 border-terra-siena/20 shadow-warm">
        <div className="flex justify-between items-center mb-6 border-b border-blu-notte/10 pb-4">
          <h1 className="text-3xl font-bold uppercase tracking-widest text-lavagna">Gestione Menu</h1>
          <button 
            onClick={handleSave} 
            disabled={status === "saving" || status === "loading"}
            className="btn-secondary"
          >
            {status === "saving" ? "Salvataggio..." : status === "success" ? "Salvato!" : "Salva Menu"}
          </button>
        </div>

        {status === "loading" ? (
          <p className="text-center py-12">Caricamento menu...</p>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="bg-rosso-melograno/10 p-4 border-l-4 border-rosso-melograno text-blu-notte/80 text-sm">
              <strong>Attenzione:</strong> Questo è un editor JSON avanzato. Assicurati di non rimuovere le parentesi graffe <code>{`{}`}</code> o le parentesi quadre <code>{`[]`}</code> e di mantenere le virgolette doppie attorno ai nomi.
            </div>
            <textarea
              value={menuJson}
              onChange={e => setMenuJson(e.target.value)}
              className="w-full h-[600px] p-4 font-mono text-sm bg-lavagna/5 border border-blu-notte/20 outline-none focus:border-terra-siena resize-none"
            />
          </div>
        )}
      </div>
    </div>
  );
}
