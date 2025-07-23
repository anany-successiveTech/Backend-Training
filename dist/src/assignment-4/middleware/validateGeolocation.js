import requestIp from "request-ip";
import geoip from "geoip-lite";
const validateLocation = (req, res, next) => {
    try {
        const clientIp = requestIp.getClientIp(req) || "0.0.0.0"; // fallback IP, its a default ip as of my knowledge.
        console.log("Client IP:", clientIp);
        const geo = geoip.lookup(clientIp);
        console.log("Geo Info:", geo);
        if (!geo || geo.country !== "IN") {
            return res.status(403).json({ error: "Access denied. Location not allowed." });
        }
        next();
    }
    catch (error) {
        console.error("Error in location validation:", error);
        res.status(500).json({ error: "Internal Server Error during location validation." });
    }
};
export default validateLocation;
//# sourceMappingURL=validateGeolocation.js.map