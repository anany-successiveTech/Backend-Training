"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateLocation = void 0;
const request_ip_1 = __importDefault(require("request-ip"));
const geoip_lite_1 = __importDefault(require("geoip-lite"));
class ValidateLocation {
    constructor() {
        this.validateLocation = (req, res, next) => {
            try {
                const clientIp = request_ip_1.default.getClientIp(req) || "0.0.0.0";
                // console.log("Client IP:", clientIp);
                const geo = geoip_lite_1.default.lookup(clientIp);
                // console.log("Geo Info:", geo);
                if (!geo || geo.country !== "IN") {
                    return res
                        .status(403)
                        .json({ error: "Access denied. Location not allowed." });
                }
                next();
            }
            catch (error) {
                console.error("Error in location validation:", error);
                res
                    .status(500)
                    .json({ error: "Internal Server Error during location validation." });
            }
        };
    }
}
exports.ValidateLocation = ValidateLocation;
//# sourceMappingURL=validateGeolocation.js.map