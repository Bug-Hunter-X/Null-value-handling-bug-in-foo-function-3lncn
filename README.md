# JavaScript Null Value Handling Bug

This repository demonstrates a common bug in JavaScript related to handling null values. The `foo` function is intended to add two numbers, but it incorrectly handles null values, leading to unexpected behavior.

## Bug Description

The `foo` function is designed to add two numbers, `a` and `b`. However, if either `a` or `b` is null, it should return 0. The original implementation incorrectly returns 0 regardless of the other argument's value. 

## Solution

The solution addresses the problem by explicitly checking if both `a` and `b` are null.  If one or both are null, it returns 0; otherwise, it performs the addition.