const express = require('express')
const asyncHandler = require('express-async-handler')
const inventory = require('../models/inventory')

const createInventory = asyncHandler(async(req, res) => {
    const { itemName, quantity, operation } = req.body;

    let updatedQuantity;
    const existingInventory = await inventory.findOne({ itemName });

    if (existingInventory) {

        if (operation === 'restock') {
            updatedQuantity = existingInventory.quantity + quantity;
        } else if (operation === 'use') {
            updatedQuantity = existingInventory.quantity - quantity;
        }

        await inventory.updateOne({ itemName }, { quantity: updatedQuantity });

        const updatedInventory = await inventory.findOne({ itemName });

        res.status(200).json({
            data: updatedInventory,
            message: "Inventory updated!",
        });
    } else {
        const newInventory = new inventory({
            itemName,
            quantity,
        });

        await newInventory.save();
        res.status(200).json({
            data: newInventory,
            message: "New item added to the inventory!",
        });
    }
});


const getInventory = asyncHandler(async (req, res) => {
    const list = await inventory.find();
    const count = await inventory.countDocuments();

    if (list.length === 0) {
        return res.status(404).json({
            message: "No inventories found"
        });
    }

    res.status(200).json({
        data: list,
        count: count,
        message: "Inventories List retrieved!"
    });
});

module.exports = {createInventory, getInventory}