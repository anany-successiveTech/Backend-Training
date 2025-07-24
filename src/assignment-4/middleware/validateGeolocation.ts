import { Request, Response, NextFunction } from "express";
import requestIp from "request-ip";
import geoip from "geoip-lite";

export class ValidateLocation {
  validateLocation = (req: Request, res: Response, next: NextFunction) => {
    try {
      const clientIp = requestIp.getClientIp(req) || "0.0.0.0";
      // console.log("Client IP:", clientIp);

      const geo = geoip.lookup(clientIp);
      // console.log("Geo Info:", geo);

      if (!geo || geo.country !== "IN") {
        return res
          .status(403)
          .json({ error: "Access denied. Location not allowed." });
      }

      next();
    } catch (error) {
      console.error("Error in location validation:", error);
      res
        .status(500)
        .json({ error: "Internal Server Error during location validation." });
    }
  };
}
