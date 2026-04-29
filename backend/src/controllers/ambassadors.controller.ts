import type { Request, Response } from "express";
import { ambassadorRegister } from "../validations/ambassador.validation";
import { createAmbassador, getAllAmbassadors } from "../models/ambassadors.model";

export const createNewAmbassador = async (req: Request, res: Response) => {
    try {
        const validation = ambassadorRegister.safeParse(req.body);

        if (!validation.success)
            return res.status(401).json({message: "Validation failed"});

        const newAmbassador = await createAmbassador(validation.data);

        return res.status(201).json(newAmbassador);
    } catch (error) {
        return res.status(500).json({message: "Failed to create ambassador"});
    }
}

export const getAmbassadors = async (req: Request, res: Response) => {
    try {
        const ambassadors = await getAllAmbassadors();

        if (!ambassadors)
            return res.status(404).json({message: "Ambassadors not found"});

        return res.status(200).json(ambassadors);
    } catch (error) {
        return res.status(500).json({message: "Failed to fetch ambassadors"});
    }
}