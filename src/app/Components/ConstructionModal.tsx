"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

interface ConstructionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConstructionModal: React.FC<ConstructionModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
          />

          {/* Modal Container - Centered */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-full max-w-lg relative"
            >
              {/* Animated Glow Border */}
              <div className="absolute -inset-1 rounded-2xl overflow-hidden">
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: `conic-gradient(from 0deg, 
                      transparent 0deg, 
                      transparent 270deg, 
                      #8b5cf6 290deg, 
                      #3b82f6 320deg, 
                      #8b5cf6 350deg, 
                      transparent 360deg)`,
                    animation: "spin 8s linear infinite",
                  }}
                />
                <div className="absolute inset-[2px] bg-[#1A1C1D] rounded-2xl" />
              </div>

              {/* Modal Content */}
              <div className="relative bg-[#1A1C1D] border border-white/10 rounded-2xl p-8 overflow-hidden">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
                >
                  <FiX size={24} />
                </button>

                {/* Content */}
                <div className="text-center flex flex-col items-center justify-center min-h-[300px]">
                  {/* Construction Icon */}
                  <div className="w-24 h-24 mx-auto mb-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 animate-pulse" />
                    <div className="absolute inset-2 bg-[#1A1C1D] rounded-full flex items-center justify-center">
                      <span className="text-5xl">🚧</span>
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    Coming Soon!
                  </h2>

                  <p className="text-gray-400 mb-10 text-lg max-w-md mx-auto">
                    We&apos;re putting the finishing touches on our dApp. Join
                    our waitlist to be the first to know when we launch!
                  </p>

                  {/* Gradient Border Button */}
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                    <button
                      onClick={() => window.open("/waitlist", "_blank")}
                      className="relative px-10 py-4 bg-[#1A1C1D] rounded-full text-white font-medium hover:bg-[#2A2C2D] transition-colors text-lg"
                    >
                      Join Waitlist
                    </button>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
              </div>

              {/* Additional Glow Effects */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl opacity-50 animate-pulse -z-10" />
            </motion.div>
          </div>

          {/* Custom CSS for animations */}
          <style jsx>{`
            @keyframes spin {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
          `}</style>
        </>
      )}
    </AnimatePresence>
  );
};

export default ConstructionModal;
