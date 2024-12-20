import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function InputWithButton({ onChange, onClick, onKeyDown }) {
    return (
        <div className="flex w-full max-w-sm items-center space-x-4">
            <Input
                type="email"
                placeholder="Search Artist"
                onKeyDown={onKeyDown}
                onChange={onChange}
            />
            <Button
                onClick={onClick} //
                className="bg-white text-black hover:bg-gray-100 border-gray-300"
                type="submit"
            >
                Search
            </Button>
        </div>
    );
}




