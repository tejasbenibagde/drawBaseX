// components/Counter.tsx
"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { increment, decrement } from "@/redux/features/counterSlice";

export default function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="p-4">
            <h1 className="text-xl">Counter: {count}</h1>
            <div className="mt-4 space-x-2">
                <button
                    onClick={() => dispatch(increment())}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Increment
                </button>
                <button
                    onClick={() => dispatch(decrement())}
                    className="px-4 py-2 bg-red-500 text-white rounded"
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}
