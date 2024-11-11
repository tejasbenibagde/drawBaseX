import React from 'react'
import { Handle, Position } from 'reactflow'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { MoreHorizontal, Edit2, X, Key, Trash } from 'lucide-react'
import DeleteTable from './editor-menu/delete-table'

interface Field {
    name: string
    type: string
    isNullable: boolean
    isPrimaryKey: boolean
}

interface TableNodeProps {
    data: {
        id: any,
        label: string
        fields: Field[]
        onEditName: () => void
        onOpenMenu: () => void
        onRemoveField: (index: number) => void
    }
}

export default function TableNode({ data }: TableNodeProps) {

    return (
        <Card className="w-[280px] shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{data.label}</CardTitle>
                <div className="flex space-x-1">
                    <Button variant="ghost" size="icon" onClick={data.onEditName} className="h-6 w-6">
                        <Edit2 className="h-4 w-4" />
                        <span className="sr-only">Edit table name</span>
                    </Button>
                    <Button variant="ghost" size="icon" onClick={data.onOpenMenu} className="h-6 w-6">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open table menu</span>
                    </Button>
                    <DeleteTable size="icon" variant={"destructive"} id={`${data.id}`} className="h-6 w-6" ><Trash size={10} /></DeleteTable>

                </div>
            </CardHeader>
            <CardContent className="pb-2">
                {data.fields.map((field, index) => (
                    <div key={index} className="flex items-center justify-between py-1">
                        <div className="flex items-center space-x-2">
                            <span className="font-medium">{field.name}</span>
                            <span className="text-sm text-muted-foreground">{field.type}</span>
                            {field.isPrimaryKey && <Key className="h-3 w-3" />}
                            {!field.isNullable && <span className="text-sm font-bold">?</span>}
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => data.onRemoveField(index)}
                            className="h-6 w-6 text-muted-foreground hover:text-foreground"
                        >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Remove field</span>
                        </Button>
                    </div>
                ))}
            </CardContent>
            <Handle type="target" position={Position.Top} className="w-16 !bg-muted" />
            <Handle type="source" position={Position.Bottom} className="w-16 !bg-muted" />
        </Card>
    )
}