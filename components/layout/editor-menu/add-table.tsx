'use client';

import { Button, ButtonProps } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { addNode } from "@/redux/features/tableSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/redux/store";
import { ReactNode } from "react";

interface AddTableProps extends ButtonProps {
    children: ReactNode;
}

const AddTable = ({ children, ...props }: AddTableProps) => {
    const dispatch = useDispatch<AppDispatch>();

    // Access the nodes state using useSelector with RootState type
    const nodes = useSelector((state: RootState) => state.table.nodes);

    // Handler to add a new node
    const handleAddNode = () => {
        const newNode = {
            id: `${nodes.length + 1}`,
            type: 'tableNode' as const,
            data: {
                id: nodes.length + 1,
                label: `Table ${nodes.length + 1}`,
                fields: [
                    { name: 'id', type: 'int', isPrimaryKey: true },
                ],
            },
            position: { x: Math.random() * 250, y: Math.random() * 250 },
        };
        dispatch(addNode(newNode));
    };

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button onClick={handleAddNode} {...props}>
                        {children}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    Add table
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default AddTable;
