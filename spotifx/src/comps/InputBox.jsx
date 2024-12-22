import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function InputWithButton({ onChange, onClick, onKeyDown }) {
    return (
        <div className="flex w-full max-w-sm items-center space-x-4">
            <Input
                type="email"
                placeholder="Search Artist to find album"
                onKeyDown={onKeyDown}
                onChange={onChange}
                className="border border-gray-300 rounded-md focus:border-transparent w-full"
            />
            <Button variant="ghost"
                onClick={onClick} //
                className="bg-white text-black hover:bg-lime-300 border-gray-100"
                type="submit"
            >
                Search
            </Button>
        </div>
    );
}



