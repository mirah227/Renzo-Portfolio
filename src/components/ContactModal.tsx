import React, { useState } from 'react';
import { X, Mail, Twitter, Radio, Check, Send, Sparkles } from 'lucide-react';
import { PROFILE_CONFIG } from '../data/profileConfig';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div
      id="contact-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="contact-modal-container"
        className="w-full max-w-lg rounded-2xl sm:rounded-3xl bg-[#0D0E14] border border-white/15 p-6 sm:p-8 shadow-2xl space-y-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-md bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#EAA039]/10 text-[#EAA039] text-[11px] font-mono font-bold">
            <Sparkles className="w-3 h-3" />
            <span>DIRECT INQUIRY</span>
          </div>
          <h3 className="text-2xl font-display font-bold text-white">
            Let's Work Together
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Reach out directly or send details about your Web3 / AI project goals.
          </p>
        </div>

        {/* Fast Channels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <a
            href={PROFILE_CONFIG.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-[#EAA039]/40 text-left transition-colors group"
          >
            <div className="flex items-center gap-2.5">
              <Twitter className="w-4 h-4 text-[#EAA039] shrink-0" />
              <div>
                <div className="text-[10px] font-mono text-slate-400">X / Twitter</div>
                <div className="text-xs font-semibold text-slate-200">{PROFILE_CONFIG.twitterHandle}</div>
              </div>
            </div>
            <span className="text-xs text-[#EAA039] group-hover:translate-x-0.5 transition-transform">↗</span>
          </a>

          <a
            href={PROFILE_CONFIG.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-[#EAA039]/40 text-left transition-colors group"
          >
            <div className="flex items-center gap-2.5">
              <Send className="w-4 h-4 text-[#EAA039] shrink-0" />
              <div>
                <div className="text-[10px] font-mono text-slate-400">Telegram</div>
                <div className="text-xs font-semibold text-slate-200">{PROFILE_CONFIG.telegramHandle}</div>
              </div>
            </div>
            <span className="text-xs text-[#EAA039] group-hover:translate-x-0.5 transition-transform">↗</span>
          </a>

          <a
            href={PROFILE_CONFIG.telegramChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-[#EAA039]/40 text-left transition-colors group"
          >
            <div className="flex items-center gap-2.5">
              <Radio className="w-4 h-4 text-[#EAA039] shrink-0" />
              <div>
                <div className="text-[10px] font-mono text-slate-400">Telegram Channel</div>
                <div className="text-xs font-semibold text-slate-200 truncate">{PROFILE_CONFIG.telegramChannelName}</div>
              </div>
            </div>
            <span className="text-xs text-[#EAA039] group-hover:translate-x-0.5 transition-transform">↗</span>
          </a>

          <a
            href={`mailto:${PROFILE_CONFIG.email}`}
            className="flex items-center justify-between p-3 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-[#EAA039]/40 text-left transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-2.5 overflow-hidden">
              <Mail className="w-4 h-4 text-[#EAA039] shrink-0" />
              <div className="truncate">
                <div className="text-[10px] font-mono text-slate-400">Email</div>
                <div className="text-xs font-semibold text-slate-200 truncate">
                  {PROFILE_CONFIG.email}
                </div>
              </div>
            </div>
            <span className="text-xs text-[#EAA039] group-hover:translate-x-0.5 transition-transform">↗</span>
          </a>
        </div>

        {/* Form */}
        {formSubmitted ? (
          <div className="py-8 text-center space-y-2 bg-[#EAA039]/10 rounded-xl border border-[#EAA039]/20">
            <div className="w-10 h-10 rounded-full bg-[#EAA039]/20 text-[#EAA039] flex items-center justify-center mx-auto">
              <Check className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-white text-base">Message Sent</h4>
            <p className="text-xs text-slate-300">
              Thank you for reaching out. Renzo will respond within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">
                Your Name / Team
              </label>
              <input
                required
                type="text"
                placeholder="e.g. Satoshi from ZeroX Labs"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2 rounded-lg bg-black/50 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#EAA039]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">
                Email / Telegram Handle
              </label>
              <input
                required
                type="text"
                placeholder="yourname@domain.com or @handle"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2 rounded-lg bg-black/50 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#EAA039]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">
                Project / Growth Objectives
              </label>
              <textarea
                required
                rows={3}
                placeholder="Briefly describe your launch stage, user acquisition goals, or community focus..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2 rounded-lg bg-black/50 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#EAA039]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-md font-semibold text-sm text-[#07080B] bg-[#EAA039] hover:bg-[#f3ad45] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <Send className="w-4 h-4" />
              <span>Submit Inquiry</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
