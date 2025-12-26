import { createContext, useContext, useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

const SnackbarContext = createContext(null);

export const useSnackbar = () => useContext(SnackbarContext);

export const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    type: "success",
  });

  const showSnackbar = useCallback((message, type = "success") => {
    setSnackbar({ open: true, message, type });

    setTimeout(() => {
      setSnackbar((prev) => ({ ...prev, open: false }));
    }, 3000);
  }, []);

  const closeSnackbar = () => setSnackbar((prev) => ({ ...prev, open: false }));

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}

      <AnimatePresence>
        {snackbar.open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`
              fixed bottom-5 right-5 z-[9999]
              min-w-[220px]
              px-4 py-3
              rounded-xl
              shadow-2xl
              font-semibold
              text-white
              flex items-center justify-between gap-3
              ${snackbar.type === "success" ? "bg-green-500" : "bg-red-500"}
            `}
          >
            <span>{snackbar.message}</span>

            <button
              onClick={closeSnackbar}
              className="p-1 rounded-lg hover:bg-white/15 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </SnackbarContext.Provider>
  );
};
