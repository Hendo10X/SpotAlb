import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
} from "@/components/ui/card"

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const buttonVariants = {
    hover: {
        scale: 1.05,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 20
        }
    }
};

export function CardWithForm({ name, imageUrl, releaseDate, spotifyUrl }) {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
        >
            <Card className="w-[250px]"> {/* Reduced width */}
                <CardContent className="space-y-2"> {/* Reduced spacing */}
                    {/* Album image */}
                    <img
                        src={imageUrl}
                        alt="Album Cover"
                        className="w-full h-32 object-cover rounded-lg mt-4" // Smaller image size
                    />
                    <div>
                        <h2 className="text-sm font-semibold tracking-tight mt-2">{name}</h2>
                        <p className="text-xs text-muted-foreground mt-2">Release Date: {releaseDate}</p>
                    </div>
                    <a href={spotifyUrl} target="_blank" rel="noopener noreferrer">
                        <motion.button
                            variants={buttonVariants}
                            whileHover="hover"
                            className="w-full text-sm mt-6 bg-white text-black hover:bg-lime-300"
                        >
                            Open on Spotify
                        </motion.button>
                    </a>
                </CardContent>
            </Card>
        </motion.div>
    );
}