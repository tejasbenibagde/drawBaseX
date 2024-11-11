'use client';

import { Button, ButtonProps } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { removeNode } from "@/redux/features/tableSlice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store";
import { ReactNode } from "react";

interface DeleteTableProps extends ButtonProps {
    children: ReactNode;
    id: string; // Add the `id` prop to identify the table to be removed
}

const DeleteTable = ({ children, id, ...props }: DeleteTableProps) => {
    const dispatch = useDispatch<AppDispatch>();

    // Handler to remove the node based on `id`
    const handleRemoveNode = () => {
        dispatch(removeNode(id));
    };

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button onClick={handleRemoveNode} {...props}>
                        {children}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    Delete Table
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default DeleteTable;
