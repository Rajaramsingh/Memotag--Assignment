import { Moon, Sun } from "lucide-react"
import { Button } from "../components/ui/button"
import { useTheme } from "./ThemeProvider"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="relative w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <motion.div
          initial={false}
          animate={{
            rotate: theme === 'dark' ? 180 : 0,
            scale: theme === 'dark' ? 0.8 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {theme === 'dark' ? (
            <Moon className="h-5 w-5 text-gray-900 dark:text-gray-100" />
          ) : (
            <Sun className="h-6 w-6 text-gray-900 dark:text-gray-100" />
          )}
        </motion.div>
      </Button>
    </motion.div>
  )
} 